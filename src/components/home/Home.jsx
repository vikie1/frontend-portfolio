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
  absolute grid grid-cols-3 grid-rows-3 gap-1 //layout of my content body
  `}
  `;
  const cards = css`
    ${tw`
    bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg //colour related styling
    p-2 rounded //display related styling
    `}
  `;
  const center = css `
  ${tw`
    p-5 rounded-md
  `}`

  return (
    <div tw="">
      <Background />
      <div tw="h-screen w-screen top-0 left-0 z-index[1]" css={layout}>
        {/* <div tw="absolute z-index[-2] h-screen w-8/12 mx-56 border-radius[100%] border border-white"></div> */}
        <div className="mid" tw="md:(col-start-2 col-end-3 self-center row-start-2 row-end-3)">
          <header tw="bg-purple-300 bg-opacity-20 blur-3xl" css={center}>
            <h1 tw="uppercase text-3xl text-white font-bold text-opacity-100">
              I help you put your <br /> product on the internet
            </h1>
          </header>
        </div>

        {/* <main tw=""> */}
        <div tw="md:(flex flex-col justify-end items-end col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full)">
          <div tw="md:(grid grid-cols-2)">
            <div className="first" tw="md:(flex flex-col col-start-2 col-end-3)" css={cards}>
              <img src={ui} alt="" tw="rounded-full h-20 w-20 self-center" />
              <span tw="text-white text-lg ">
                Build attractive user interfaces
              </span>
            </div>
          </div>
        </div>

        <div tw="md:(flex flex-col justify-end items-start col-start-3 col-end-4 row-start-1 row-end-2 w-max)">
          <div className="second" tw="md:(flex flex-col items-center)" css={cards}>
            <img src={connected} alt="" tw="rounded-full h-20 w-20" />
            <span tw="text-white font-bold">
              Build secure, fast Restful APIs <br /> for your mobile apps,
              webapps ...
            </span>
          </div>
        </div>

        <div tw="md:(flex flex-col justify-start items-end col-start-1 col-end-2 row-start-3 row-end-4 w-full)">
          <div tw="md:(grid grid-cols-2)">
            <div className="third" tw="md:(flex flex-col col-start-2 col-end-3 px-2)" css={cards}>
              <img src={modern} alt="" tw="rounded-full h-20 w-28 self-center" />
              <span tw="text-white text-lg">Modernise your website</span>
            </div>
          </div>
        </div>

        <div tw="md:(flex flex-col justify-start items-start col-start-3 col-end-4 row-start-3 row-end-4 w-max)">
          <div className="forth" tw="md:(flex flex-col items-center)" css={cards}>
            <img src={cloud} alt="" tw="rounded-full h-20 w-28" />
            <span tw="text-white font-bold">
              Deploy your applications in <br /> a cross-platform secure
              environment
            </span>
          </div>
        </div>
        {/* </main> */}

        <LineTo from="first" to="mid" borderColor="white" fromAnchor="bottom right" toAnchor="top left" delay="0"/>
        <LineTo from="second" to="mid" borderColor="white" fromAnchor="bottom left" toAnchor="top right" delay="0"/>
        <LineTo from="third" to="mid" borderColor="white" fromAnchor="top right" toAnchor="bottom left" delay="0"/>
        <LineTo from="forth" to="mid" borderColor="white" fromAnchor="top left" toAnchor="bottom right" delay="0"/>
        {/*  */}
      </div>
    </div>
  );
};
