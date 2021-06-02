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
  bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg //colour related styling
  p-2 rounded //display related styling
  `}
  `;

  const list = css`
    ${tw`list-inside list-disc`}
  `;

  return (
    <div className="" tw="absolute top-0 left-0 h-screen w-screen">
      <div className="background">
        <AboutBG />
      </div>

      <main
        tw="flex flex-col px-28 h-screen w-screen justify-around"
        css={texts}
      >
        <header tw="text-center">
          <h1 tw="uppercase underline text-4xl font-mono">
            The Professional Me
          </h1>
        </header>

        <section tw="place-self-center text-center" css={cards}>
          <h2 tw="uppercase underline font-extrabold">Education</h2>
          <div tw="flex items-center">
            <img src={grad} alt="" css={images} />
            <span>B.Tech in Computer and Electronic Systems</span>
          </div>
          <div>
            <span>Mount Kenya University</span>
          </div>
        </section>

        <section tw="place-self-center" css={cards}>
          <div>
            <span>
              <h2 tw="uppercase underline font-extrabold">
                Proficient Development Technologies
              </h2>
            </span>

          </div>

          <ul css={list}>
            <div>
              <span>
                <li>HTML/CSS and Javascript</li>
              </span>
            </div>
            <div>
              <span>
                <li>Pure React js Framework</li>
              </span>
            </div>
            <div>
              <span>
                <li>Java Programing language</li>
              </span>
            </div>
            <div>
              <span>
                <li>
                  Backend programing in Spring Boot,Spring Security,Spring JPA
                  ...
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
                <li>
                  Git, CLI and deployment of webapps and/or APIs
                </li>
              </span>
            </div>
            <div>
              <span>
                <li>*nix/nix-like(mostly linux) systems and Ms-Windows(comfortable with CLI)</li>
              </span>
            </div>
            <div>
              <span>
                <li>
                  Tailwind css (Twin.macro and emotion when working with React)
                </li>
              </span>
            </div>
            <div>
              <span>
                <li>Tomcat and NginX</li>
              </span>
            </div>
          </ul>
        </section>

        <div
          tw="absolute right-0 rounded-3xl mx-4 w-min transform rotate-0 bg-black border-2"
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
