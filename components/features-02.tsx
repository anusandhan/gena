"use client";

import { useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/features-illustration-02.svg";
import FeaturesImage from "@/public/images/features-image.png";

export default function Features02() {
  const [category, setCategory] = useState<string>("1");

  return (
    <section className="relative">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width="1440"
          height="453"
          alt="Features 02 Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk text-slate-900">
              Multiple tools to help you craft your digital presence
            </h2>
          </div>
          {/* Box */}
          <div className="bg-slate-200 bg-opacity-60 rounded overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "1"
                          ? "text-white bg-purple-500"
                          : "text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-200"
                      }`}
                      onClick={() => setCategory("1")}
                    >
                      Descriptions
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "2"
                          ? "text-white bg-purple-500"
                          : "text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-200"
                      }`}
                      onClick={() => setCategory("2")}
                    >
                      Posts
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === "3"
                          ? "text-white bg-purple-500"
                          : "text-slate-700 bg-slate-100 hover:bg-slate-200 border-slate-200"
                      }`}
                      onClick={() => setCategory("3")}
                    >
                      Reels
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== "1" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2 text-slate-800">
                      Personalized Descriptions
                    </h3>
                    <div className="text-lg text-slate-500">
                      Enter your listing details, and our AI will write property
                      descriptions designed for better outcomes. You’re free to
                      tinker and ask the AI to tailor to your needs if you want
                      to!
                    </div>
                  </div>
                  <div className={`${category !== "2" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2 text-slate-800">
                      Social Media Posts Creator
                    </h3>
                    <div className="text-lg text-slate-500">
                      Our AI will also create visually appealing social media
                      posts and posters for your favorite platforms (like
                      Facebook, Instagram, and LinkedIn) so you can convert more
                      leads.
                    </div>
                  </div>
                  <div className={`${category !== "3" && "hidden"}`}>
                    <h3 className="h3 font-hkgrotesk mb-2 text-slate-800">
                      Reels Generator
                    </h3>
                    <div className="text-lg text-slate-500">
                      GenA also creates short-form videos (reels) that
                      highlights the best features about your property. Post
                      them on TikTok, Instagram, or any other social media.
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={FeaturesImage}
                className="md:max-w-none"
                width="480"
                height="414"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
