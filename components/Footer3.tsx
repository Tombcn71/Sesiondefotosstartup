import React from "react";
import Link from "next/link";
import Image from "next/image";

function footer3() {
  return (
    <div>
      <footer className="bg-sky-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <Link href="/">
              <h2 className=" font-medium  text-2xl items-center   flex">
                <Image src="/seslogo.png" width={30} height={30} alt="Logo" />{" "}
                <span className="mt-1 ml-1 ">
                  {" "}
                  <Image
                    src="/textlogo.png"
                    width={130}
                    height={50}
                    alt="Logo text"
                  />
                </span>{" "}
              </h2>
            </Link>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Onze missie is om AI-portretfotografie voor iedereen toegankelijk te
            maken. Door AI te gebruiken, kunnen we de kosten van traditionele
            portretsessies drastisch verlagen en tegelijkertijd hoogwaardige
            resultaten bieden.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <Link href="/#Prijs">Prijs</Link>
            <Link href="/#Faq">Faq</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>{" "}
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <Link
              href="https://www.instagram.com/fotosessie.ai/"
              className="group"
              aria-label="Instagram"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50">
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </Link>

            <Link
              href="https://www.linkedin.com/company/fotosessie-ai/?viewAsMember=true"
              className="group"
              aria-label="Linkedin"
              target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32px"
                height="20px">
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
              </svg>
            </Link>
            <Link
              href="https://www.facebook.com/people/Fotosessieai/61559314530123/"
              className="group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50">
                <path d="M 11.300781 2 C 6.1645496 2 2 6.1645496 2 11.300781 L 2 38.800781 C 2 43.937013 6.1645496 48.099609 11.300781 48.099609 L 38.800781 48.099609 C 43.937013 48.099609 48.099609 43.937013 48.099609 38.800781 L 48.099609 11.289062 L 48.099609 11.277344 C 47.988214 6.1531405 43.848929 2 38.800781 2 L 11.300781 2 z M 11.300781 4 L 38.800781 4 C 42.752633 4 46.011005 7.2464683 46.099609 11.322266 L 46.099609 38.800781 C 46.099609 42.864549 42.864549 46.099609 38.800781 46.099609 L 33 46.099609 L 33 29 L 37.847656 29 L 39.179688 21 L 33 21 L 33 19 C 33 18.45 33.05476 18.405705 33.251953 18.279297 C 33.44915 18.152889 34.029365 18 35 18 L 39 18 L 39 11.271484 L 38.306641 11.048828 C 38.306641 11.048828 35.129885 10 32 10 C 29.096296 10 26.957792 10.953443 25.679688 12.632812 C 24.401582 14.312183 24 16.536525 24 19 L 24 21 L 21 21 L 21 29 L 24 29 L 24 46.099609 L 11.300781 46.099609 C 7.2370133 46.099609 4 42.864549 4 38.800781 L 4 11.300781 C 4 7.2370133 7.2370133 4 11.300781 4 z M 32 12 C 34.168683 12 36.174546 12.537635 37 12.773438 L 37 16 L 35 16 C 33.870635 16 32.949678 16.09711 32.171875 16.595703 C 31.394072 17.094295 31 18.05 31 19 L 31 23 L 36.820312 23 L 36.152344 27 L 31 27 L 31 46.099609 L 26 46.099609 L 26 27 L 23 27 L 23 23 L 26 23 L 26 19 C 26 16.763475 26.399589 14.98938 27.271484 13.84375 C 28.14338 12.69812 29.503704 12 32 12 z"></path>
              </svg>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default footer3;
