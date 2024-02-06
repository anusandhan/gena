import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid gap-8 py-8 md:py-12 border-t border-purple-900">
          {/* 1st block */}
          <div className="">
            <div className="mb-2">
              {/* Logo */}
              <Link className="inline-flex" href="/" aria-label="Cruip">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4448_18012)">
                    <path
                      d="M28.1837 5.60031L30.1222 3.66176L28.2831 1.8226L26.3445 3.76117C23.5858 1.41666 20.0234 0 16.1297 0C7.40617 0 0.314636 7.09982 0.314636 15.8151C0.314636 19.7088 1.73129 23.2711 4.07579 26.0299L2.13722 27.9684L3.97639 29.8076L5.91497 27.869C8.67368 30.2135 12.236 31.6302 16.1297 31.6302C24.8533 31.6302 31.9448 24.5304 31.9448 15.8151C31.9448 11.9214 30.5282 8.35906 28.1837 5.60031ZM2.96567 15.8151C2.96567 8.55789 8.87251 2.65105 16.1297 2.65105C19.2944 2.65105 22.194 3.76944 24.4639 5.63344L22.5916 7.50576C18.9796 11.1178 13.1307 11.1178 9.51872 7.50576L7.56356 9.46092C11.1756 13.0729 11.1756 18.9218 7.56356 22.5338L5.95637 24.141C4.09237 21.8711 2.97396 18.9632 2.97396 15.8068L2.96567 15.8151ZM16.1297 28.9792C12.965 28.9792 10.0655 27.8608 7.79552 25.9967L9.40274 24.3895C13.0148 20.7775 18.8636 20.7775 22.4756 24.3895L24.4308 22.4344C20.8187 18.8224 20.8187 12.9735 24.4308 9.36148L26.3031 7.48917C28.1671 9.75914 29.2855 12.667 29.2855 15.8234C29.2855 23.0806 23.3787 28.9874 16.1214 28.9874L16.1297 28.9792Z"
                      fill="url(#paint0_linear_4448_18012)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_4448_18012"
                      x1="2.03413e-05"
                      y1="16"
                      x2="32"
                      y2="16"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#AF6CC3" />
                      <stop offset="0.585" stop-color="#C595D4" />
                      <stop
                        offset="1"
                        stop-color="#AF6CC3"
                        stop-opacity="0.6"
                      />
                    </linearGradient>
                    <clipPath id="clip0_4448_18012">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
          {/* 2nd block */}
          <div className="max-w-lg">
            <h6 className="text-xs text-slate-200 font-semibold uppercase mb-3">
              Copyright © reAlpha
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <p className="text-slate-500">
                  The information provided on this page is sourced from external
                  sources and is intended for informational purposes only. We
                  are not affiliated or associated with any of the companies or
                  organizations mentioned on this page
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="flex justify-center items-center text-purple-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-purple-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Medium"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-purple-500 hover:text-slate-300 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Github"
              >
                <svg
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>
          {/* Links */}
          <div className="text-sm text-slate-600">
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="#0"
            >
              Terms
            </a>{" "}
            ·{" "}
            <a
              className="text-slate-500 hover:text-slate-300 transition duration-150 ease-in-out"
              href="#0"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
