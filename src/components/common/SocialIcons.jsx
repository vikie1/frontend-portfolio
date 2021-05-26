/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Link } from "react-router-dom";
import mail from "./gmail.svg";
import twitter from "./tl.svg";

export const SocialIcons = () => {
  const mailto = "mailto:mwangivictor52@gmail.com";

  return (
    <div tw="absolute top-0 right-0 flex items-end z-index[5]">
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
  );
};
