"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";
import TabItem from "./utils/TabItem";
import HandShake from "@/public/svg/HandShake";
import Puzzle from "@/public/svg/Puzzle";
import People from "@/public/svg/People";
import Compass from "@/public/svg/compass";

export default function Features() {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 from-yellow-500 to-orange-500 bg-clip-text text-transparent bg-gradient-to-b">
              About Us
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to HireFire Tech Solutions – Where Innovation Meets
              Success!
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Powerful suite of tools</h3>
                <p className="text-xl text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa.
                </p>
              </div> */}
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div className="justify-between">
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Our Mission
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 p-1">
                    <Compass />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Who We Are
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 p-1">
                    <People />
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      What We Do
                    </div>
                    <div className="text-gray-600">
                      Take collaboration to the next level with security and
                      administrative features built for teams.
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 p-1">
                    <Puzzle />
                  </div>
                </a>
                {/* Tab 4 */}
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 justify-between ${
                    tab !== 4
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Why Choose Us
                    </div>
                    <div className="text-gray-600">description</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3 p-1">
                    <HandShake />
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div
                  className="relative flex flex-col text-center lg:text-right mt-5"
                  data-aos="zoom-y-out"
                  ref={tabs}
                >
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <p className="text-start font-bold text-gray-500 text-lg">
                        At HireFire Tech Solutions, we are on a mission to
                        redefine the possibilities of technology and drive
                        success for businesses through forward-thinking
                        solutions. Our commitment to excellence, innovation, and
                        client success sets us apart as a trusted partner in the
                        ever-evolving landscape of technology.
                      </p>
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <p className="text-start font-bold text-gray-500 text-lg">
                        We are a dynamic team of experts passionate about
                        harnessing the power of technology to transform
                        businesses. Our journey began with a shared vision to
                        create innovative tech solutions that empower
                        organizations to thrive in the digital age. With a blend
                        of creativity, expertise, and strategic thinking, we
                        have positioned ourselves as industry leaders dedicated
                        to shaping the future of technology.
                      </p>
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <p className="text-start font-bold text-gray-500 text-lg">
                        Innovative Software Development Our team of skilled
                        developers is at the forefront of innovation, crafting
                        cutting-edge software tailored to meet your unique
                        business needs. From intuitive user interfaces to robust
                        backend systems, we turn your ideas into reality.
                        Strategic IT Consulting Navigating the complex landscape
                        of technology can be daunting. That's where our
                        strategic IT consulting comes in. We provide insights,
                        guidance, and solutions to align your technology
                        strategy with your business objectives, ensuring a
                        roadmap to success. Unparalleled Services Excellence is
                        not just a goal; it's our standard. Our commitment to
                        delivering unparalleled services is reflected in every
                        project we undertake. From project initiation to ongoing
                        support, we prioritize quality, reliability, and client
                        satisfaction.
                      </p>
                    </div>
                  </Transition>
                  {/* Item 4 */}
                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <p className="text-start font-bold text-gray-500 text-lg">
                        Innovative Software Development Our team of skilled
                        developers is at the forefront of innovation, crafting
                        cutting-edge software tailored to meet your unique
                        business needs. From intuitive user interfaces to robust
                        backend systems, we turn your ideas into reality.
                        Strategic IT Consulting Navigating the complex landscape
                        of technology can be daunting. That's where our
                        strategic IT consulting comes in. We provide insights,
                        guidance, and solutions to align your technology
                        strategy with your business objectives, ensuring a
                        roadmap to success. Unparalleled Services Excellence is
                        not just a goal; it's our standard. Our commitment to
                        delivering unparalleled services is reflected in every
                        project we undertake. From project initiation to ongoing
                        support, we prioritize quality, reliability, and client
                        satisfaction.
                      </p>
                    </div>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
