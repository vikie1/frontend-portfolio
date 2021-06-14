/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Link } from "react-router-dom";
import mail from "./gmail.svg";
import twitter from "./tl.svg";

export const SocialIcons = () => {
  const mailto = "mailto:mwangivictor52@gmail.com";

  return (
    <div tw="absolute z-index[5]">
      <div tw="fixed top-0 right-0 flex items-end">
        <span tw="place-self-center">
          <p tw="text-gray-200 underline">Victor Mwangi</p>
        </span>
        <span tw="place-self-center pl-2 hidden sm:(block)">
          <p tw="text-gray-200 underline">mwangivictor52@gmail.com</p>
        </span>
        <div tw="m-3">
          <Link
            to="#"
            onClick={(e) => {
              window.location = mailto;
              e.preventDefault();
            }}
          >
            <img src={mail} alt="mail" tw="w-10" />
          </Link>
        </div>
        <div tw="m-3">
          <a href="https://twitter.com/vikiemwangi">
            <img src={twitter} alt="twitter" tw="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
};
