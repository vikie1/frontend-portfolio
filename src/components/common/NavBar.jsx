/** @jsxImportSource @emotion/react */
import "twin.macro";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div tw="flex flex-grow-0 w-full py-12 transition ease-out duration-500">
      <nav tw=" rounded bg-white bg-opacity-0 z-index[5] bg-clip-padding">
        <ul tw="mx-2">
          <li tw="pb-5 pt-5 z-index[5]">
            <Link to="/home" tw="">
              <span
                className="icons"
                tw="bg-blue-700 hover:(bg-purple-400 border-blue-700 border-2) backdrop-filter backdrop-blur-lg"
              >
                Home
              </span>
            </Link>
          </li>

          <li tw="pb-5">
            <Link to="/articles">
              <span
                className="icons"
                tw="bg-gray-700 hover:bg-purple-400 hover:border-2 hover:border-gray-400"
              >
                Articles
              </span>
            </Link>
          </li>

          <li tw="pb-5">
            <Link to="/projects">
              <span
                className="icons"
                tw="bg-green-600 hover:bg-purple-400 border-green-600 hover:border-2"
              >
                Projects
              </span>
            </Link>
          </li>

          <li tw="pb-5">
            <Link to="/about">
              <span
                className="icons"
                tw="bg-indigo-800 hover:bg-purple-400 hover:border-2 border-indigo-800"
              >
                About
              </span>
            </Link>
          </li>

          <li tw="pb-5">
            <Link to="/contacts">
              <span
                className="icons"
                tw="bg-pink-700 hover:bg-purple-400 hover:border-2 border-pink-700"
              >
                Contacts
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
