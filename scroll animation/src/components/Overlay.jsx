import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{ opacity: props.opacity }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-[#ffffffaf] shadow-md rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityThirdSection, setOpacityThirdSection] = useState(1);
  const [opacityFourthSection, setOpacityFourthSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 4));
    setOpacitySecondSection(scroll.curve(1 / 4, 1 / 4));
    setOpacityThirdSection(scroll.range(2 / 4, 1 / 4));
    setOpacityFourthSection(scroll.range(3 / 4, 1 / 4));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section right opacity={opacityFirstSection}>
          <h1 className="text-2xl">1975 PORSCHE 911 TURBO</h1>
        </Section>
        <Section opacity={opacitySecondSection}>
          <h1 className="text-2xl">Performance</h1>
          <p>
            Porsche 911 Turbo was known for its exceptional performance. It was
            powered by a 3.0-liter, turbocharged flat-six engine that produced
            260 horsepower. This allowed the car to accelerate from 0 to 60 mph
            in around 5.5 seconds, which was impressive for its time.
          </p>
        </Section>
        <Section right opacity={opacityThirdSection}>
          <h1 className="text-2xl">Turbocharged Engine</h1>
          <p>
            The turbocharged engine was a major selling point. Turbocharging
            technology was relatively new in the 1970s, and the 911 Turbo was
            one of the first production cars to feature it. The turbocharger
            significantly increased the engine's power output, providing a
            thrilling driving experience.
          </p>
        </Section>
        <Section opacity={opacityFourthSection}>
          <h1 className="text-2xl"> Iconic Design</h1>
          <p>
            The 911 Turbo featured the iconic 911 design but with wider fenders
            and distinctive rear spoiler, often referred to as the "whale tail."
            This design not only enhanced the car's aerodynamics but also gave
            it a unique and aggressive appearance that stood out on the road.
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
