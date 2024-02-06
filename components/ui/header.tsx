import Link from "next/link";

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block" href="/" aria-label="Cruip">
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
                    <stop offset="1" stop-color="#AF6CC3" stop-opacity="0.6" />
                  </linearGradient>
                  <clipPath id="clip0_4448_18012">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {/* <li>
                  <Link className="font-medium text-slate-500 hover:text-slate-300 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/signin">Sign in</Link>
                </li> */}
                <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group"
                    href="/signup"
                  >
                    Get Started{" "}
                    <span className="tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
