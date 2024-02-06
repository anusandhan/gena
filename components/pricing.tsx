"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/pricing-illustration.svg";

export default function Pricing() {
  // const [annual, setAnnual] = useState<boolean>(true);

  return (
    <section className="relative">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Pricing Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pb-20 grid place-content-center">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="h3 font-hkgrotesk mb-4 text-slate-900">
              Grow your Real Estate Marketing game using GenA.
            </h3>
            <p className="text-xl text-slate-500">
              Choose a plan that fits your needs!
            </p>
          </div>
          {/* Pricing tables */}
          <div>
            <div className="grid md:grid-cols-2 md:max-w-3xl">
              {/* Free price */}
              <div className="flex flex-col justify-center p-4 md:px-6 bg-purple-100 order-1 md:order-none md:text-center mt-6 md:mt-0">
                <div className="font-hkgrotesk text-lg font-bold text-purple-500 mb-0.5">
                  Free Plan
                </div>
                <div className="text-slate-800">
                  <span className="text-xl font-semibold">$</span>
                  <span className="text-2xl font-semibold">0</span>
                  <span className="text-sm text-slate-500 font-medium">
                    /mo
                  </span>
                </div>
              </div>
              {/* Pro price */}
              <div className="flex flex-col justify-center p-4 md:px-6 bg-purple-100 md:border-l border-slate-300 order-2 md:order-none md:text-center mt-6 md:mt-0">
                <div className="font-hkgrotesk text-lg font-bold text-purple-500 mb-0.5">
                  Pro Plan
                </div>
                <div className="text-slate-800">
                  <span className="text-xl font-semibold">$</span>
                  <span className="text-2xl font-semibold">49</span>
                  <span className="text-sm text-slate-500 font-medium">
                    /mo
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-300 bg-opacity-25 order-1 md:order-none">
                <span className="text-center text-xs font-normal text-slate-700">
                  Perfect for those just getting started
                </span>
              </div>
              <div className="flex flex-col justify-center px-4 md:px-6 py-2 bg-slate-300 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none">
                <span className="text-center text-xs font-normal text-slate-700">
                  Ideal for real estate professionals looking for growth
                </span>
              </div>

              {/* Listings */}

              <div className="flex justify-between p-4 md:px-6 bg-slate-100 order-1 md:order-none">
                <div className=" text-slate-800">Listings Generations</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  Max 3 per month
                </div>
              </div>
              <div className="flex justify-between p-4 md:px-6 bg-slate-100 md:border-l border-slate-300 order-2 md:order-none">
                <div className=" text-slate-800">Listings Generations</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  Unlimited
                </div>
              </div>

              {/* Social Post */}

              <div className="flex justify-between p-4 md:px-6 bg-slate-100 bg-opacity-70 order-1 md:order-none">
                <div className="text-slate-800">Social Media Posts</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  <svg
                    className="inline-flex fill-slate-500"
                    width="14"
                    height="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 0v2H0V0z" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between p-4 md:px-6 bg-slate-100 bg-opacity-70 md:border-l border-slate-300 order-2 md:order-none">
                <div className="text-slate-800">Social Media Posts</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  <svg
                    className="inline-flex fill-emerald-400"
                    width="12"
                    height="9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                      fill="#34D399"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </div>
              {/* Reels*/}

              <div className="flex justify-between p-4 md:px-6 bg-slate-100 order-1 md:order-none">
                <div className="text-slate-800">Reels</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  <svg
                    className="inline-flex fill-slate-500"
                    width="14"
                    height="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 0v2H0V0z" fillRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between p-4 md:px-6 bg-slate-100 md:border-l border-slate-300 order-2 md:order-none">
                <div className="text-slate-800">Reels</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  <svg
                    className="inline-flex fill-emerald-400"
                    width="12"
                    height="9"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z"
                      fill="#34D399"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </div>

              {/* Support */}

              <div className="flex justify-between p-4 md:px-6 bg-slate-100 order-1 md:order-none">
                <div className="text-slate-800">Support</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  Standard
                </div>
              </div>
              <div className="flex justify-between p-4 md:px-6 bg-slate-100 md:border-l border-slate-300 order-2 md:order-none">
                <div className="text-slate-800">Support</div>
                <div className="text-sm font-medium text-slate-800 text-center">
                  Priority
                </div>
              </div>

              {/* CTA row */}

              <div className="flex flex-col justify-center p-4 bg-slate-300 bg-opacity-25 order-1 md:order-none">
                <a
                  className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group whitespace-nowrap"
                  href="#0"
                >
                  Choose Plan{" "}
                  <span className="hidden lg:block tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
              <div className="flex flex-col justify-center p-4 bg-slate-300 bg-opacity-25 md:border-l border-slate-300 order-2 md:order-none">
                <a
                  className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group whitespace-nowrap"
                  href="#0"
                >
                  Choose Plan{" "}
                  <span className="hidden lg:block tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
