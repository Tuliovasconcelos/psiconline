import React, { useState } from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import Header from 'components/headers/light';
import ThreeColContactDetails from "components/cards/ThreeColContactDetails";
import check from "images/check-illustration.svg";

const Image = tw.img`h-24 mx-auto`;

export default ({
  roundedHeaderButton,
  headginText = 'Cadastro solicitado!',
  descriptionText = 'Após ser aprovado você receberá todas as instruções necessária no e-mail para ter acesso ao seu perfil.'
}) => {

  return (
    <AnimationRevealPage>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Image src={check} />
      <ThreeColContactDetails heading={headginText} description={descriptionText} />
      <Footer />
    </AnimationRevealPage>
  );
}
