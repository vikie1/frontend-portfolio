/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";
import { useState } from "react";
// import collapse from "./cancel.svg";
// import up from "./up.svg";

export const NewsList = (props) => {
  const articles = props.articles;
  const [currArticle, setCurrArticle] = useState(
    articles.blog[articles.blog.length - 1]
  );
  //const [isCollapsed, setIsCollapsed] = useState(false);
  // const [collapsed, setCollapsed] = useState(false);
  const collapsed = false;

  console.log(currArticle);
  const currentArticle = (props) => {
    const index = props;
    console.log(index);
    setCurrArticle((prevArticle) => articles.blog[index]);
  };
  const card = css`
    ${tw`m-2 md:(m-0) bg-gray-300 rounded overflow-hidden shadow-md relative hover:(border-b-4 border-blue-600)`}
  `;
  const badge = css`
    ${tw`bg-gray-400 text-gray-800 text-xs font-bold uppercase rounded-full p-2 absolute top-0 ml-2 mt-2`}
  `;
  return (
    <div className="-view" tw="mt-12 overflow-x-hidden">
      {currArticle && (
        <main>
          <article>
            <h1 tw="text-center text-4xl md:(text-6xl) uppercase underline">
              {currArticle.name}
            </h1>
            <div tw="w-full flex justify-center my-10">
              <img src={currArticle.imgURL} alt="" srcset="" tw="w-11/12 h-56 md:(max-h-56 w-5/12) object-cover"/>
            </div>
            <div>
              <p tw="mx-10 md:(mx-28)">{currArticle.fullArticle}</p>
            </div>
          </article>
        </main>
      )}
      {!currArticle && (
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
      <div tw="w-screen border-t rounded-md box-shadow[0px -10px 10px -10px rgba(0, 0, 0, 0.8)]">
        {/* <section tw="flex justify-center">
          {!isCollapsed && (
            <div tw="bg-blue-50 rounded-full p-2 shadow-sm">
              <img
                src={collapse}
                alt=""
                tw="h-6 w-6 cursor-pointer"
                onClick={(e) => {
                  setCollapsed((prevCollapsed) => true);
                  setIsCollapsed((prevCollapsed) => true);
                }}
              />
            </div>
          )}
          {isCollapsed && (
            <div tw="bg-blue-50 rounded-full p-2 shadow-sm">
              <img
                src={up}
                alt=""
                tw="h-6 w-6 cursor-pointer"
                onClick={(e) => {
                  setCollapsed((prevCollapsed) => false);
                  setIsCollapsed((prevIsCollapsed) => false);
                }}
              />
            </div>
          )}
        </section> */}

        {!collapsed && (
          <div tw="grid md:(grid-cols-3 gap-5 px-32) mt-8 w-full">
            {articles.blog.map((article, index) => (
              <div
                tw="cursor-pointer inline"
                css={card}
                key={article.name}
                onClick={(e) => {
                  console.log(index);
                  currentArticle(index);
                }}
              >
                <div>
                  <img
                    tw="w-full h-56 md:(h-48 w-full) object-cover"
                    src={article.imgURL}
                    alt=""
                  />
                  <span css={badge}>
                    <p>{article.topic}</p>
                  </span>
                </div>
                <div tw="m-2">
                  <h2 tw="font-bold">{article.name}</h2>
                  <p tw="block text-gray-500 text-sm">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
