/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";
import { AboutBG } from "../common/AboutBG";
import grad from "./graduation.svg";

export const About = (props) => {
  const images = css`
    ${tw`h-10 w-10`}
  `;

  const texts = css`
    ${tw`text-gray-200`}
  `;

  const neonText = css`
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, ${tw`color[#fff]`};
  `;

  const cards = css`
    ${tw`
    bg-gray-100 mb-5 md:(mb-auto mx-auto bg-white  bg-opacity-10 backdrop-filter backdrop-blur-lg) bg-opacity-10 backdrop-filter backdrop-blur-lg //colour related styling
  p-2 rounded //display related styling
  `}
  `;

  const list = css`
    ${tw`list-inside list-disc`}
  `;

  return (
    <div
      className=""
      tw="absolute top-0 left-0 height[max-content] min-h-full md:(h-screen overflow-hidden) overflow-x-hidden w-screen scroll-behavior[smooth]"
    >
      <div className="background">
        <AboutBG />
      </div>

      <main
        tw="relative h-full w-full flex flex-col justify-around my-16 md:(my-auto mt-16 flex-col px-28 w-12/13)"
        css={texts}
      >
        <header tw="text-center">
          <h1 tw="uppercase underline text-4xl font-mono">
            The Professional Me
          </h1>
        </header>

        <section tw="place-self-center text-center mt-2 mx-1" css={cards}>
          <h2 tw="uppercase underline font-extrabold">Education</h2>
          <div tw="flex items-center">
            <img src={grad} alt="" css={images} />
            <span>B.Tech in Computer and Electronic Systems</span>
          </div>
          <div>
            <span>Mount Kenya University</span>
          </div>
        </section>

        <section tw="place-self-center text-center mx-1">
        <div css={cards}><a href="/Victor_Mwangi_Wairimu_Resume_24-03-2022.pdf" tw="border-2 border-indigo-800 rounded" download>Resume</a></div>
        </section>

        <section tw="place-self-center mt-2 mx-2 md:(mx-auto)" css={cards}>
          <div>
            <span>
              <h2 tw="uppercase underline font-extrabold">
                Proficient Development Technologies
              </h2>
            </span>
          </div>

          <ul css={list}>
            {/* <div>
              <span>
                <li>HTML/CSS and Javascript</li>
              </span>
            </div> */}
            {/* <div>
              <span>
                <li>Modern React js Framework (no class components)</li>
              </span>
            </div> */}
            <div>
              <span>
                <li>Java Programing language</li>
              </span>
            </div>
            <div>
              <span>
                <li>
                  Backend programing in the Spring Framework including Spring Boot, Spring Security,Spring JPA and Hibernate
                </li>
              </span>
            </div>
            <div>
              <span>
                <li>
                  HTML/CSS and Javascript(with React, Tailwind Frameworks and Bootstrap)
                </li>
              </span>
            </div>
            <div>
              <span>
                <li>
                  Android apps development with Java.
                </li>
              </span>
            </div>
          </ul>

          <h3 tw="pt-2 uppercase underline font-bold">Worth Mentioning</h3>

          <ul css={list}>
            <div>
              <span>
                <li>
                  JSP/JSTL-with EL, Servlets(I might be tempted to modernise
                  your site if i find this).
                </li>
              </span>
            </div>
            <div>
              <span>
                <li>SQL databases (worked with mysql and postgresql)</li>
              </span>
            </div>
            <div>
              <span>
                <li>Git, CLI and deployment of webapps and/or APIs</li>
              </span>
            </div>
            <div>
              <span>
                <li>
                  *nix/nix-like(mostly linux) systems and Ms-Windows(comfortable
                  with CLI)
                </li>
              </span>
            </div>
            <div>
              <span>
                <li>Apache Tomcat</li>
              </span>
            </div>
          </ul>
        </section>

        <div
          tw="absolute hidden -bottom-16 md:(block right-0 bottom-auto w-min bg-black) rounded-3xl mx-4 transform rotate-0 border-2"
          css={neonText}
        >
          <p tw="p-5 text-2xl font-sans font-thin">
            *Currently Open For Freelance or remote developer positions
          </p>
        </div>
      </main>
    </div>
  );
};
