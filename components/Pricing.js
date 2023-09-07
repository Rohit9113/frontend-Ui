import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = ({ data }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const listItemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <p className="text-black-500">Buit out of fraction</p>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Meets the ahead app
            </motion.h3>

            <div
              className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
              id="feature"
            >
              <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                  <motion.div
                    className="h-full w-full p-4"
                    variants={scrollAnimation}
                  >
                    <Image
                      src="/assets/banner3.svg"
                      alt="VPN Illustrasi"
                      layout="responsive"
                      quality={100}
                      height={414}
                      width={508}
                    />
                  </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>
                  <motion.div
                    className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
                    variants={scrollAnimation}
                  >

                    <p className="my-2 text-black-500">
                      A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.
                    </p>
                    <p className="my-2 text-black-500">
                      Think of it as a pocket cheerleader towards a better, more fulfilling.
                    </p>

                  </motion.div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <p className="text-black-500">Buit out of fraction</p>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >

              Self improvement. Ugh.{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <ol>
                <motion.li
                  initial="hidden"
                  animate="visible"
                  variants={Pricing.listItemAnimation}
                  className="py-4"
                >
                  <b>It's not as easy as 1-2-3.</b>
                  <p className="text-black-500">The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p>
                </motion.li>
                <motion.li
                  initial="hidden"
                  animate="visible"
                  variants={Pricing.listItemAnimation}
                  className="py-4"
                >
                  <b>Old habits are hard to break</b>
                  <p className="text-black-500">And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p>
                </motion.li>
                <motion.li
                  initial="hidden"
                  animate="visible"
                  variants={Pricing.listItemAnimation}
                  className="py-4"
                >
                  <b>You and your motivation don't have a long-term relationship.</b>
                  <p className="text-black-500">Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.</p>
                </motion.li>
              </ol>
            </motion.div>

          </ScrollAnimationWrapper>
          
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Every wonderfull what other things of you{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Let your friends, family and co-workers(anonymously) rate your social skills.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
