/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";

export const AboutBG = (props) => {


    const boxes = css `
    border-radius: 23% 30% 32% 27% / 37% 31% 62% 46%;
    filter: blur(50px);
    mix-blend-mode: exclusion;
    height: 140%;
    width: 140%;
    left: -10%;
    top: -15%;
    ${tw `absolute`}`

    return (
       <div className="" tw="fixed z-index[-2] top-0 left-0 h-screen w-screen grid grid-cols-2 grid-rows-2 overflow-hidden">
           <div tw="col-start-1 col-end-2 row-start-1 row-end-2 bg-red-600" css={boxes}></div>
           <div tw="col-start-2 col-end-3 row-start-1 row-end-2 bg-blue-700" css={boxes}></div>
           <div tw="col-start-1 col-end-2 row-start-2 row-end-3 bg-purple-700" css={boxes}></div>
           <div tw="col-start-2 col-end-3 row-start-2 row-end-3 bg-pink-600" css={boxes}></div>
       </div>
    );
}