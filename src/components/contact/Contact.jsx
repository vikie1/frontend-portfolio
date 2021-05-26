/** @jsxImportSource @emotion/react */
import { useState } from "react";
import tw, { css } from "twin.macro";
import bgimg from "./background.jpg";

export const Contact = (props) => {
  const [color, setColor] = useState("yellow");
  const [isloading, setLoading] = useState(false);

  const handleSubmit = () => {
    setColor((prevColor) => "red");
  };

  const background = css`
    background-position: center;
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color: blue;
    background-blend-mode: color;
  `;
  const inputsParent = css`
    ${tw`flex w-full h-auto`}
  `;
  const labels = css`
    ${tw`align-self[flex-start] w-full p-5 text-white text-xl`}
  `;
  const regularInputs = css`
    ${tw`p-5 align-self[flex-end] `}
  `;

  const inputs = css`
    :focus {
      outline: none;
      resize: none;
      border: 1px solid;
      border-color: ${color};
    }
    ${tw`rounded bg-transparent bg-opacity-50 opacity-50 p-1.5 border border-gray-400
  `}
  `;
  const button = css `${tw `px-2 py-1 mx-5 rounded-md text-white bg-transparent border-2 border-green-600
  hover:(bg-green-600 transition ease-in-out duration-700)
  `}`

  return (
    <div
      className="main"
      tw="absolute md:(grid grid-cols-4 items-center top-0 left-0 h-screen w-screen)"
      css={background}
    >
      <div tw="col-start-2 col-end-4">
        <form>
          <div tw="" css={inputsParent}>
            <label htmlFor="name" tw="" css={labels}>
              Name:
            </label>
            <span tw="" css={regularInputs}>
              <input type="text" name="name"     css={inputs} required />
            </span>
          </div>

          <div css={inputsParent}>
            <label htmlFor="email" css={labels}>
              Email:
            </label>
            <span css={regularInputs}>
              <input type="email" name="email" css={inputs} required />
            </span>
          </div>

          <div css={inputsParent}>
            <label htmlFor="subject" css={labels}>
              Subject:
            </label>
            <span css={regularInputs}>
              <input type="text" name="subject" css={inputs} />
            </span>
          </div>

          <div css={inputsParent}>
            <label htmlFor="message" css={labels}>
              Message:
            </label>
            <span css={regularInputs}>
              <textarea
                name="message"
                cols="30"
                rows="5"
                css={inputs}
              ></textarea>
            </span>
          </div>
          <div css={inputsParent} tw="justify-end">
            {!isloading && <button onClick={handleSubmit} css={button}>Submit</button>}
            {isloading && <button disabled css={button}>Loading ...</button>}
          </div>
        </form>
      </div>
    </div>
  );
};
