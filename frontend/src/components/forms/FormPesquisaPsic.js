import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import api from "services/api";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";


const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold text-primary-500 w-full py-4 rounded-lg hover:bg-primary-900 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;


const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

export default ({
  formMethod = "get",
  textOnLeft = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Pesquisar",
  buttonRounded = false
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
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
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Form onSubmit={sendForm} method={formMethod}>
              <Input
                value={name}
                type="text"
                name="name"
                required={true}
                placeholder="Nome do(a) psicólogo(a)"
                onChange={e => setName(e.target.value)}
              />
              <Input
                value={email}
                type="email"
                name="email"
                required={true}
                placeholder="Especialidade"
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                value={telefone}
                type="text"
                name="telefone"
                required={true}
                placeholder="Abordagem"
                onChange={e => setTelefone(e.target.value)}
              />
              <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
              </PrimaryButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <DecoratorBlob />
    </Container>
  );
};
