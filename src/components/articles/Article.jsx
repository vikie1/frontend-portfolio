/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Link } from "react-router-dom";

export const Article = (props) => {
  const { id, name } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("https://pbvictor.herokuapp.com/api/blog/" + id);
  return (
    <>
      <div className="-view">
        <main>
          <div>
            <h1 tw="text-center text-4xl md:(text-6xl) uppercase underline">
              {name.replace(/-/g," ")}
            </h1>
          </div>
          {isLoading && (
            <div tw="flex h-screen w-screen content-center items-center justify-center">
              <p tw="text-6xl text-green-400 text-center">
                Fetching the article ...
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
            <article>
              <div tw="w-full flex justify-center my-10">
                <img
                  src={blog[0].imgURL}
                  alt=""
                  srcset=""
                  tw="w-11/12 h-56 md:(max-h-56 w-5/12) object-cover"
                />
              </div>
              <div>
                <p tw="mx-10 md:(mx-28)">{blog[0].fullArticle}</p>
              </div>
              <div tw="flex w-screen justify-center">
                <span tw="text-center">
                  <Link to="/about">Author: Victor Mwangi</Link>
                </span>
              </div>
            </article>
          )}
        </main>
      </div>
    </>
  );
};
