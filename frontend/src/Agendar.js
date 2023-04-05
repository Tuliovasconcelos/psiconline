import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Header from 'components/headers/light';
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/login-illustration.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/calendar.svg";
import { Container as ContainerBase } from "components/misc/Layouts";


import TwoColumnWithFeaturesAndTestimonial from "components/hero/TwoColumnWithFeaturesAndTestimonial";
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-primary-200 text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const SimpleTextGray = tw.p`mt-8 text-sm text-gray-600 text-center`;
const MediumTextGray = tw.p`mt-8 text-sm text-gray-600 text-center font-bold`;
const SimpleTextPrimary = tw.p`mt-8 text-sm text-primary-500 text-center`;
const MediumTextPrimary = tw.p`mt-8 text-sm text-primary-500 text-center font-bold`;

const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-primary-200 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-900 text-green-600 w-full py-4 rounded-lg  hover:text-primary-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

export default ({
  roundedHeaderButton,
  illustrationImageSrc = illustration,
  headingText = "Túlio Vasconcelos Silva",
  SubmitButtonIcon = LoginIcon,
  submitButtonText = "Agendar",
  verPerfil = "/cadastroPsicologo",
  abordagens = "Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste",
  especialidades = "Teste,Teste,Teste,Teste,Teste,Teste,Teste",
  publico = "Teste,Teste,Teste,Teste,Teste,Teste,Teste,Teste",
  crp = "06/179705",
  sobre = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."

}) => {

  return (
    <AnimationRevealPage>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <TwoColumnWithFeaturesAndTestimonial />
      <Content>
        <MainContainer>
          <MainContent>
            <Heading>{headingText}</Heading>
            <MediumTextGray>Abordagens: {abordagens}   </MediumTextGray>
            <MediumTextGray>Especialista em: {especialidades}  </MediumTextGray>
            <MediumTextGray>Público: {publico}  </MediumTextGray>
            <MediumTextGray>Sobre: {sobre}  </MediumTextGray>
            <SimpleTextGray>CRP: {crp}</SimpleTextGray>
            <SubmitButton type="submit">
              <SubmitButtonIcon className="icon" />
              <span className="text">{submitButtonText}</span>
            </SubmitButton>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>

      </Content>
      <Footer />
    </AnimationRevealPage>
  );
}
