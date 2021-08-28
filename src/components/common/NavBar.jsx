/** @jsxImportSource @emotion/react */
import tw, {css} from "twin.macro";
import { Link } from "react-router-dom";

export const NavBar = () => {

  const padding = css `@media (max-width: 768px){
    ${tw `p-1 bg-gray-900 bg-opacity-25 mix-blend-hard-light backdrop-filter backdrop-blur-lg`}
  }`

  return (
    <div tw="flex md:(flex flex-grow-0 w-max py-12 transition ease-out duration-500)">
      <nav tw="rounded fixed bg-transparent z-index[5]">
        <ul tw="bg-gray-300 bg-opacity-25 backdrop-filter backdrop-blur-sm md:(bg-transparent mx-2 flex-col static w-max) fixed bottom-0 w-screen flex align-baseline justify-evenly">
          <li tw="mt-5 pb-5 md:(pt-5 mt-auto) z-index[5]">
            <Link to="/home" tw="">
              <span
                className="icons"
                css={padding}
                tw="border-blue-700 border-2 rounded md:(bg-blue-700 border-none hover:(bg-purple-400 border-blue-700 border-2) rounded-full)"
              >
                Home
              </span>
            </Link>
          </li>

          <li tw="mt-5 pb-5 md:(mt-auto)">
            <Link to="/articles">
              <span
                className="icons"
                css={padding}
                tw="border-2 border-gray-400 rounded md:(bg-gray-700 border-none hover:(bg-purple-400 border-2 border-gray-400) rounded-full)"
              >
                Blogs
              </span>
            </Link>
          </li>

          <li tw="mt-5 pb-5 md:(mt-auto)">
            <Link to="/projects">
              <span
                className="icons"
                css={padding}
                tw="rounded border-green-600 border-2 md:(bg-green-600 border-none hover:(bg-purple-400 border-green-600 border-2) rounded-full)"
              >
                Projects
              </span>
            </Link>
          </li>

          <li tw="mt-5 pb-5 md:(mt-auto)">
            <Link to="/about">
              <span
                className="icons"
                css={padding}
                tw="border-2 border-indigo-800 rounded md:(bg-indigo-800 border-none hover:(bg-purple-400 border-2 border-indigo-800) rounded-full)"
              >
                About
              </span>
            </Link>
          </li>

          <li tw="mt-5 pb-5 md:(mt-auto)">
            <Link to="/contacts">
              <span
                className="icons"
                css={padding}
                tw="border-2 border-pink-700 rounded md:(bg-pink-700 border-none hover:(bg-purple-400 border-2 border-pink-700) rounded-full)"
              >
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
