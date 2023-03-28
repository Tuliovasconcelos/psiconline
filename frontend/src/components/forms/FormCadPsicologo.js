import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimarySelect } from "components/misc/Select";
import EmailIllustrationSrc from "images/email-illustration.svg";
import api from "services/api";


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

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

export default ({
  subheading = "Junte-se a nós!",
  heading = <>Venha compor a <span tw="text-primary-200">equipe</span><wbr />!</>,
  description = "Preencha o formulário abaixo e aguarde a aprovação do seu cadastro.",
  submitButtonText = "Enviar",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  const [especialidades, setEspecialidades] = useState([]);
  const [abordagens, setAbordagens] = useState([]);

  const [selectedAbordagem, setSelectedAbordagem] = useState(0);
  const [selectedEspecialidade, setSelectedEspecialidade] = useState(0);
  const [isHandle, setIsHandle] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [crp, setCrp] = useState('');

  useEffect(() => {
    if (isHandle) {
      Abordagens();
      Especialidades();
      setIsHandle(false);
    }
  }, isHandle);

  async function Abordagens() {

    await api.get('/Abordagem')
      .then(function (response) {

        setAbordagens(response.data);

      })
      .catch(function (error) {

        console.log(error);
      })

  }

  async function Especialidades() {

    await api.get('/Especialidade')
      .then(function (response) {
        setEspecialidades(response.data);

      })
      .catch(function (error) {
        console.log(error);
      })

  }

  async function sendForm() {

    await api.post('/Especialidade', {
      "name": name,
      "email": email,
      "telefone": telefone,
      "crp": crp
    })
      .then(function (response) {
        setEspecialidades(response.data);

      })
      .catch(function (error) {
        console.log(error);
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
            <Form action={formAction} method={formMethod}>
              <Input
                value={name}
                type="text"
                name="name"
                placeholder="Nome Completo*"
                onChange={e => setName(e.target.value)}
              />
              <Input
                value={email}
                type="email"
                name="email"
                placeholder="E-mail*"
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                value={telefone}
                type="text"
                name="telefone"
                placeholder="Telefone*"
                onChange={e => setTelefone(e.target.value)}
              />
              <Input
                value={crp}
                type="text"
                name="crp"
                placeholder="CRP*"
                onChange={e => setCrp(e.target.value)}
              />
              <PrimarySelect
                value={selectedAbordagem}
                onChange={abordagem => setSelectedAbordagem(abordagem.target.value)}
              >
                {abordagens.map((abordagemMap) =>
                  <option
                    key={abordagemMap.id}
                    value={abordagemMap.id}>
                    {abordagemMap.descricao}
                  </option>)
                }
              </PrimarySelect>
              <PrimarySelect
                value={selectedEspecialidade}
                onChange={especialidade => setSelectedEspecialidade(especialidade.target.value)
                } >
                {especialidades.map((especialidadeMap) =>
                  <option
                    key={especialidadeMap.id}
                    value={especialidadeMap.id}>
                    {especialidadeMap.descricao}
                  </option>)
                }
              </PrimarySelect>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
