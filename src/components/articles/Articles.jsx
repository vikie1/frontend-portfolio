/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { NewsList } from "./NewsList";

export const Articles = (props) => {
  const {
    data: articles,
    isLoading,
    error,
  } = useFetch("https://pbvictor.herokuapp.com/api/blog");

  return (
    <div
      className="-view"
      tw="absolute top-0 left-0 min-h-screen w-full bg-white"
    >
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
      {isLoading && (
        <div tw="flex h-screen w-screen content-center items-center justify-center">
          <p tw="text-6xl text-green-400 text-center">Fetching articles ...</p>
        </div>
      )}
      {articles && <NewsList articles={articles} />}
    </div>
  );
};
