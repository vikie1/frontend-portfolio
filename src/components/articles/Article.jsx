/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";
import { useDefaultCss } from "../../hooks/useDefaultCss";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import { NewsList } from "./NewsList";

export const Article = (props) => {
  const { id, name } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://web-production-2b5d.up.railway.app/api/blog/" + id);

  //fine tuned card layout tweaks to use in this component
  const cardBody = css`
    ${tw`w-full flex justify-center`}
  `;
  const cards = css`
    ${tw`w-full sm:(w-80)`}
  `;

  const header = "You will love this too";

  //use the defaultCss for blog content to edit with a word editor
  const defaultStyles = useDefaultCss();
  //specific blog body styles
  const blogStyle = css`
    h2,
    h3,
    h4,
    h5,
    strong,
    bold {
      ${tw`text-gray-700`}
    }
    img,
    video,
    iframe {
      ${tw`self-center place-self-center mx-auto`}
    }
  `;

  return (
    <>
      <div className="-view">
        <main>
          {isLoading && (
            <div tw="flex h-screen w-screen content-center items-center justify-center">
              <p tw="text-6xl text-green-400 text-center">
                Fetching the article , please wait a minute...
              </p>
            </div>
          )}

          {error && (
            <div tw="mt-20 mx-32">
              <p tw="text-3xl text-blue-700">
                Articles coming very soon, please be patient <br /> In the mean
                while visit my github repos{" "}
                <a
                  href="https://github.com/vikie1"
                  tw="bg-blue-500 text-white font-style[italic]"
                >
                  here
                </a>
              </p>
            </div>
          )}

          {blog && (
            <div tw="block md:(grid grid-cols-3) w-12/13 mb-10">
              <article tw="col-start-1 col-end-3">
                <div>
                  <h1 tw="mt-12 text-center px-10 md:(px-28 mt-auto) font-bold text-2xl uppercase underline">
                    {name.replace(/-/g, " ")}
                  </h1>
                </div>
                <div tw="w-full flex justify-center my-10">
                  <img
                    src={blog.currArticle[0].imgURL}
                    alt=""
                    srcset=""
                    tw="w-11/12 h-56 md:(max-h-56 w-5/12) object-cover"
                  />
                </div>
                <div>
                  <article
                    css={[blogStyle, defaultStyles]}
                    tw="px-10 md:(px-28)"
                    dangerouslySetInnerHTML={{
                      __html: blog.currArticle[0].fullArticle,
                    }}
                  ></article>
                </div>
                <div tw="flex justify-center mt-1">
                  <span tw="text-center text-blue-400 underline cursor-pointer">
                    <Link to="/about">Author: Victor Mwangi</Link>
                  </span>
                </div>
              </article>

              <div tw="md:(col-start-3 col-end-4 w-full)">
                <aside>
                  {blog && (
                    <NewsList
                      articles={blog}
                      cardBody={cardBody}
                      card={cards}
                      header={header}
                    />
                  )}
                </aside>
              </div>
              {console.log(defaultStyles)}
            </div>
          
          )}
        </main>
      </div>
    </>
  );
};
