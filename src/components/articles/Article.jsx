/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
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
  } = useFetch("https://pbvictor.herokuapp.com/api/blog/" + id);
  // const {
  //   data: blog,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8080/api/blog/" + id);

  //fine tuned card layout tweaks to use in this component
  const cardBody = css`
    ${tw`w-full flex justify-center`}
  `;
  const cards = css`
    ${tw`w-full sm:(w-80)`}
  `;
  const header = "You will love this too";

  //specific blog body styles to match default  h2, h3, li, p, and strong
  const blogStyle = css `h2{
    ${tw`block font-size[1.5em] margin-bottom[0.83em] margin-top[0.83em] mx-0 font-bold`}
  }
  h3{
    ${tw `block font-size[1.17em] margin-bottom[1em] margin-top[1em] mx-0 font-bold`}
  }
  li{
    ${tw`list-item list-disc`}
  }
  p{
    ${tw`margin[1.12em 0]`}
  }
  strong{
    ${tw`font-weight[bolder]`}
  }
  a{
    ${tw`text-blue-700 underline cursor-pointer italic`}
  }
  aside{
    ${tw`w-full flex justify-center my-10`}
  }
  img{
    ${tw`w-11/12 h-56 md:(max-h-56 w-5/12) object-cover place-self-center`}
  }`;
  // const H2 = styled.h2`
  //   ${tw`
  // block font-size[1.5em] margin-bottom[0.83em] margin-top[0.83em] mx-0 font-bold
  // `}
  // `;
  // const H3 = styled.h3 `
  //   ${tw`block font-size[1.17em] margin-bottom[1em] margin-top[1em] mx-0 font-bold`}
  // `;
  // const Li = styled.li `${tw`list-item list-disc`}`;
  // const P = styled.p `${tw`margin[1.12em 0]`}`
  // const Strong = styled.strong `${tw`font-weight[bolder]`}`
  // const link = css `${tw`text-blue-400 underline cursor-pointer italic`}`;

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
                  <h1 tw="mt-12 text-center px-10 md:(px-28 mt-auto) text-4xl uppercase underline">
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
                  <article css={blogStyle} tw="px-10 md:(px-28)" dangerouslySetInnerHTML={{ __html: blog.currArticle[0].fullArticle }}></article>
                </div>
                <div tw="flex w-screen justify-center">
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
            </div>
          )}
        </main>
      </div>
    </>
  );
};
