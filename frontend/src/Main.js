import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import FAQ from "components/faqs/SingleCol.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
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
      <MainFeature
        subheading={<Subheading>Psicólogos</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
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
        plans={[
          {
            name: "Sessão simples",
            price: "R$50,00",
            duration: "30 min",
            mainFeature: "Individual"
          },
          {
            name: "Sessão extendida ",
            price: "R$70,00",
            duration: "40 min",
            mainFeature: "Individual"
          },
          {
            name: "Sessão integral ",
            price: "R$90,00",
            duration: "60 min",
            mainFeature: "Individual"
          }
        ]}
      />
      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}
      <FAQ
        subheading={<Subheading>DÚVIDAS</Subheading>}
        heading={
          <>
            Você possui alguma <HighlightedText>Dúvida?</HighlightedText>
          </>
        }
        description=""
        faqs={[
          {
            question: "Are all the templates easily customizaDesigned & Developed by Professionals.ble ?",
            answer:
              "Yes, they all are. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "How long do you usually support an standalone template for ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "What kind of payment methods do you accept ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Is there a subscribption service to get the latest templates ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Are the templates compatible with the React ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          },
          {
            question: "Do you really support Internet Explorer 11 ?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
}
