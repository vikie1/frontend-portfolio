/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";

export const Background = (props) => {
  
  const spanWhole = css`
    ${tw`
        absolute h-screen w-screen top-0 left-0 z-index[-1] overflow-x-hidden //background positioning
        grid sm:(grid-cols-4 grid-rows-4) //background layout
        from-pink-500 via-blue-700 to-purple-700 bg-gradient-to-br //background colouring
    `}
  `;

  // const bubbles = css`
  //       ${tw`
  //           h-28 w-28 border-radius[100%] place-self-center //sizing the bubble
  //           bg-gradient-to-r from-pink-600 to-black shadow-lg
  //       `}
  // `;
  // const reflection = css `
  //   ${tw`
  //   mt-12 //position
  //   bg-white h-4 w-1.5 border-radius[100%]
  //   opacity-80 p-0.5 drop-shadow-2xl //obtaining a reflection-like object
  //   `}
  // `;

  return (
    <div className="" css={spanWhole}>
      {/* <div tw="col-start-2 col-end-3 row-start-2 row-end-3" css={bubbles}>
        <div tw="" css={}></div>
      </div> */}
    </div>
  );
};
