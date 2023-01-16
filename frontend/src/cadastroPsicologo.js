import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import FormCadPsicologo from "components/forms/FormCadPsicologo";
import Header from 'components/headers/light'

export default ({
  roundedHeaderButton
}) => {
  return (
    <AnimationRevealPage>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <FormCadPsicologo />
      <Footer />
    </AnimationRevealPage>
  );
}
