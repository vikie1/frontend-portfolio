/** @jsxImportSource @emotion/react */
import React from "react";
import tw, { css } from "twin.macro";
import connected from "./connected.jpg";
import modern from "./update.jpg";
import ui from "./coding.jpg";
import cloud from "./cloudsec.jpg";
import { Background } from "../common/Background";
import LineTo from "react-lineto";

export const Home = () => {

  const layout = css`
    ${tw`
    mt-16 flex flex-col
  md:(mt-auto absolute grid grid-cols-3 grid-rows-3 gap-1) //layout of my content body
  `}
  `;
  const cards = css`
  @media (max-width: 768px){
    animation-duration: 1s;
    animation-delay: 0s;
    animation-name: slidein;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;

    @keyframes slidein{
      from{
        ${tw `bg-transparent opacity-0`}
      }
      to{
        ${tw `bg-auto`}
      }
    }
  }
    ${tw`
    bg-gray-50 m-2 md:(m-auto bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg) bg-opacity-20 backdrop-filter backdrop-blur-lg //colour related styling
    p-2 rounded //display related styling
    `}
  `;
  const center = css`
    ${tw`
    p-5 rounded-md
  `}
  `;

  return (
    <div tw="">
      <Background />
      <div
        tw="md:(h-screen) w-screen top-0 left-0 z-index[1] scroll-behavior[smooth]"
        css={layout}
      >
        {/* <div tw="absolute z-index[-2] h-screen w-8/12 mx-56 border-radius[100%] border border-white"></div> */}
        <div
          className="mid"
          tw="md:(col-start-2 col-end-3 self-center row-start-2 row-end-3)"
        >
          <header
            tw="md:(bg-purple-300 bg-opacity-20 blur-3xl mx-auto) bg-purple-300 bg-opacity-20 blur-3xl text-center mx-1"
            css={center}
          >
            <h1 tw="uppercase text-3xl text-white font-bold text-opacity-100">
              I help you put your <br /> product on the internet
            </h1>
          </header>
        </div>

        {/* <main tw=""> */}
        <div tw="md:(flex flex-col justify-end items-end col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full)">
          <div tw="md:(grid grid-cols-2)">
            <div
              className="first"
              tw="flex flex-col items-center md:(col-start-2 col-end-3)"
              css={cards}
            >
              <img src={ui} alt="" tw="rounded-full h-20 w-20 self-center" />
              <span tw="text-white text-lg text-center">
                Build attractive user interfaces
              </span>
            </div>
          </div>
        </div>

        <div tw="md:(flex flex-col justify-end items-start col-start-3 col-end-4 row-start-1 row-end-2 w-max mt-10)">
          <div className="second" tw="flex flex-col items-center" css={cards}>
            <img src={connected} alt="" tw="rounded-full h-20 w-20" />
            <span tw="text-white font-bold">
              Build secure, fast Restful APIs <br /> for your mobile apps,
              webapps ...
            </span>
          </div>
        </div>

        <div tw="md:(flex flex-col justify-start items-end col-start-1 col-end-2 row-start-3 row-end-4 w-full)">
          <div tw="md:(grid grid-cols-2)">
            <div
              className="third"
              tw="flex flex-col items-center md:(col-start-2 col-end-3 px-2)"
              css={cards}
            >
              <img
                src={modern}
                alt=""
                tw="rounded-full h-20 w-28 self-center"
              />
              <span tw="text-white text-lg">Modernise your website</span>
            </div>
          </div>
        </div>

        <div tw="mb-16 md:(mb-auto flex flex-col justify-start items-start col-start-3 col-end-4 row-start-3 row-end-4 w-max)">
          <div className="forth" tw="flex flex-col items-center" css={cards}>
            <img src={cloud} alt="" tw="rounded-full h-20 w-28" />
            <span tw="text-white font-bold">
              Deploy your applications in <br /> a cross-platform secure
              environment
            </span>
          </div>
        </div>
        {/* </main> */}

        <div>
          <LineTo
            tw="hidden md:(block)"
            from="first"
            to="mid"
            borderColor="white"
            fromAnchor="bottom right"
            toAnchor="top left"
            delay="0"
          />
          <LineTo
            tw="hidden md:(block)"
            from="second"
            to="mid"
            borderColor="white"
            fromAnchor="bottom left"
            toAnchor="top right"
            delay="0"
          />
          <LineTo
            tw="hidden md:(block)"
            from="third"
            to="mid"
            borderColor="white"
            fromAnchor="top right"
            toAnchor="bottom left"
            delay="0"
          />
          <LineTo
            from="forth"
            to="mid"
            borderColor="white"
            fromAnchor="top left"
            toAnchor="bottom right"
            delay="0"
            tw="hidden md:(block)"
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
};
