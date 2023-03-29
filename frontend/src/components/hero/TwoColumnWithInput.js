import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line

import Header from "../headers/light.js";
import DesignIllustration from "../../images/design-illustration-2.svg";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-8.svg";




const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;


const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

export default ({
  roundedHeaderButton,
  primaryButtonText = "Quero começar!",
  primaryButtonUrl = "https://timerse.com",
  buttonRounded = true, }) => {
  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Fácil, seguro e <span tw="text-primary-200">acessível</span>!
            </Heading>
            <Paragraph>
              O atendimento psicológico online permite que você cuide do seu bem-estar sem sair de casa !
            </Paragraph>
            <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-2xl" src={DesignIllustration} alt="Design Illustration" />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob2 />
      </Container>
    </>
  );
};
