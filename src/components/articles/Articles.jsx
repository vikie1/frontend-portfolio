/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { NewsList } from "./NewsList";

export const Articles = (props) => {
  const [down, setDown] = useState(true);
  const { data: articles, isLoading, error } = useFetch("https://pbvictor.herokuapp.com/api/blog");

  return (
    <div
      className="-view"
      tw="absolute top-0 left-0 min-h-screen w-full bg-white"
    >
      {error && (
        <div tw="self-center place-self-center">
          <p tw="text-6xl text-red-600">
            Oops!! an error occurred. <br /> Don't freght it's not you
          </p>
        </div>
      )}
      {isLoading && (
        <div>
          <p tw="text-6xl text-green-400">Fetching articles ...</p>
        </div>
      )}
      {articles && (<div>
        {setDown(prevDown => false)}
      <NewsList articles={articles} />
      </div>)}
      {down && (
        <div>
          <p tw="text-6xl text-blue-700">
            Articles coming very soon, please be patient <br /> In the mean
            while visit my github repos <a href="https://github.com/vikie1">here</a>
          </p>
        </div>
      )}
    </div>
  );
};
