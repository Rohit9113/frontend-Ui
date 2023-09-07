import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className=" bg-gray-100 max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <p className="text-black-500">Ahead App</p>
            <h1 className="text-3xl lg:text-4xl mb-6 xl:text-5xl font-medium text-black-600 leading-normal">
              Master your life by mastring emotions.
            </h1>
            

            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/banner.jpg"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      <div className="relative w-full flex">
        <div className="w-1/2 bg-white-500 p-8">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            EQ Beats IQ
          </h1>
        </div>

        <div className="w-1/2 bg-white-500 p-8">
          <p className="text-lg text-black-500">
            People with high emotional Intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
        </div>

        <div className="w-1/2 bg-white-500 p-8">
          <p className="text-lg text-black-500">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>

        <div
          className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
