/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { NewsList } from "./NewsList";

export const Articles = (props) => {
  const { data: articles, isLoading, error } = useFetch("/api/blog");

  return (
    <div className="-view">
      {error && (
        <div>
          Oops!! an error occurred. <br /> Don't freght it's not you
        </div>
      )}
      {isLoading && <div>Loading ...</div>}
      {articles && <NewsList articles={articles} />}
    </div>
  );
};
