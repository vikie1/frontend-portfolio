/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import { Link } from "react-router-dom";
// import collapse from "./cancel.svg";
// import up from "./up.svg";

export const NewsList = (props) => {
  const articles = props.articles;
  const collapsed = false;
  const cards = props.card;
  const cardBody = props.cardBody;
  const heading = props.header;

  const card = css`
    ${tw`m-2 md:(m-0) bg-gray-300 rounded overflow-hidden shadow-md relative border-b-4 border-transparent hover:(border-blue-600)`}
  `;

  const H2 = styled.h2`
    ${tw`
  block font-size[1.5em] margin-bottom[0.83em] margin-top[0.83em] mx-0 font-bold
  `}
  `;

  const removeWhiteSpace = (name) => {
    let x = name;
    return x.replace(/ /g, "-");
  };

  return (
    <div className="-view" tw="mt-12 overflow-x-hidden">
      {!articles && (
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
      {(articles.blog.length !== 0) && (
        <div tw="w-full border-t rounded-md box-shadow[0px -10px 10px -10px rgba(0, 0, 0, 0.8)]">
          <H2 tw="text-center">{heading}</H2>
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
            <div tw="mt-8 w-full mb-5" css={cardBody}>
              {articles.blog.map((article) => (
                <Link
                  to={`/article/${article.id}/${removeWhiteSpace(
                    article.name
                  )}`}
                  css={cards}
                >
                  <div tw="cursor-pointer" css={card} key={article.name}>
                    <div>
                      <img
                        tw="w-full h-56 md:(h-48 w-full) object-cover"
                        src={article.imgURL}
                        alt=""
                      />
                    </div>
                    <div tw="ml-2 mt-2">
                      <h2 tw="font-bold">{article.name}</h2>
                      <p tw="block text-gray-500 text-sm">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
