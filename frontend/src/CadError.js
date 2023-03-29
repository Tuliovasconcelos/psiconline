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
  headginText = 'Ops... Não foi possível efetuar o cadastro!',
  descriptionText = 'Por favor, tente novamente mais tarde.'
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
