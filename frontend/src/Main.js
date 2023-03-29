import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import macHeroScreenshotImageSrc from "images/hero-screenshot-2.png";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-200`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Quem somos?</Subheading>}
        heading={
          <>
            Estamos aqui para te <span tw="text-primary-200">acolher</span>!
          </>
        }
      />
      <FeatureWithSteps
        subheading={<Subheading>Como utilizar?</Subheading>}
        heading={
          <>
            É muito  <HighlightedText>fácil</HighlightedText>.
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Pricing
        subheading={<Subheading>Valores</Subheading>}
        heading={
          <>
            Flexíveis de acordo com sua <HighlightedText>necessidade</HighlightedText>.
          </>
        }
        description={"Os valores abaixo são fixos, o tempo poderá ser negociado com o profissional."}
        plans={[
          {
            name: "Sessão simples",
            price: "R$40,00",
            duration: "30 min",
            mainFeature: "Individual"
          },
          {
            name: "Sessão extendida ",
            price: "R$50,00",
            duration: "40 min",
            mainFeature: "Individual"
          },
          {
            name: "Sessão integral ",
            price: "R$60,00",
            duration: "60 min",
            mainFeature: "Individual"
          }
        ]}
      />

      <FAQ
        subheading={<Subheading>DÚVIDAS</Subheading>}
        heading={
          <>
            Você possui alguma <HighlightedText>Dúvida?</HighlightedText>
          </>
        }
        description=""
      />
      <Footer />
    </AnimationRevealPage>
  );
}
