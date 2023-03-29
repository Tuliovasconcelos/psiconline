import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import FormCadPsicologo from "components/forms/FormCadPsicologo";
import Header from 'components/headers/light';
import ThreeColContactDetails from "components/cards/ThreeColContactDetails";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";

export default ({
  roundedHeaderButton
}) => {

  const cards = [
    {
      title: "Abrangência",
      description: "Você atingirá o máximo de clientes no mundo todo e preencherá seus horários vagos."
    },
    {
      title: "Flexibilidade",
      description: "Os pagamentos são combinados diretamente com os clientes, dando total liberdade a você!"
    },
    {
      title: "Segurança",
      description: "A plataforma é desenvolvida com tecnologia de ponta para garantir sua segurança e privacidade."
    },
  ];

  const steps = [
    {
      heading: "Busca",
      description: "A busca será feita pelo cliente de acordo com própria demanda."
    },
    {
      heading: "Agendamento",
      description: "O cliente entrará em contato via WhatsApp e agendará um horário."
    },
    {
      heading: "Cobrança",
      description: "A cobrança pode ser feita com antecedência e deve seguir o valor definido."
    },
    {
      heading: "Atendimento",
      description: "Escolha a plataforma de atendimento. Por fim, você poderá ser avaliado(a)."
    }
  ];

  return (
    <AnimationRevealPage>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <ThreeColContactDetails cards={cards} />
      <FeatureWithSteps
        heading={
          <>
            Como funciona?
          </>
        }
        steps={steps}
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <FormCadPsicologo />
      <Footer />
    </AnimationRevealPage>
  );
}
