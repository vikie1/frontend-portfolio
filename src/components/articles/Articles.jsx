/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { NewsList } from "./NewsList";

export const Articles = (props) => {
  const { data: articles, isLoading, error } = useFetch("/api/blog");

  return (
    <div className="-view"  tw="absolute top-0 left-0 min-h-screen w-full bg-white">
      {error && (
        <div tw="self-center place-self-center">
          <p tw="text-6xl text-red-600">Oops!! an error occurred. <br /> Don't freght it's not you</p>
        </div>
      )}
      {isLoading && <div><p tw="text-6xl text-green-400">Fetching articles ...</p></div>}
      {articles && <NewsList articles={articles} />}
      {!articles && !error && !isLoading && <div><p tw="text-6xl text-blue-700">Articles coming very soon, please be patient</p></div>}
    </div>
  );
};
