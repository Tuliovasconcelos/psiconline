import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import api from "services/api";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold text-primary-500 w-full py-4 rounded-lg hover:bg-primary-900 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

export default ({
  subheading = "Junte-se a nós!",
  heading = <>Venha compor a <span tw="text-primary-200">equipe</span><wbr />!</>,
  description = "Preencha o formulário abaixo e aguarde a aprovação do seu cadastro.",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
  submitButtonText = "Solicitar"
}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [crp, setCrp] = useState('');

  const [cadSuccess, setcadSuccess] = useState(false);
  const [errorCad, setErrorCad] = useState(false);


  useEffect(() => {
    if (cadSuccess) {
      window.location.href = '/cadSuccess'
    }

    if (errorCad) {
      window.location.href = '/cadError'
    }
  }, [cadSuccess, errorCad]);


  async function sendForm() {


    console.log([name, email, telefone, crp])

    await api.post('/Psicologo/cadastrar', {
      "nome": name,
      "email": email,
      "contato": telefone.replace(/[^0-9]+/g, ''),
      "senha": crp,
      "crp": crp
    })
      .then(function () {
        setcadSuccess(true);

      })
      .catch(function (error) {
        setErrorCad(true);
      })

  }

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={sendForm} method={formMethod}>
              <Input
                value={name}
                type="text"
                name="name"
                required={true}
                placeholder="Nome Completo*"
                onChange={e => setName(e.target.value)}
              />
              <Input
                value={email}
                type="email"
                name="email"
                required={true}
                placeholder="E-mail*"
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                value={telefone}
                type="text"
                name="telefone"
                required={true}
                placeholder="Telefone*"
                onChange={e => setTelefone(e.target.value)}
              />
              <Input
                value={crp}
                type="text"
                name="crp"
                required={true}
                placeholder="CRP*"
                onChange={e => setCrp(e.target.value)}
              />
              <SubmitButton type="submit">
                <span className="text">{submitButtonText}</span>
              </SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <DecoratorBlob />
    </Container>
  );
};
