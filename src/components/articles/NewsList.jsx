/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useState } from "react";
import collapse from "./cancel.svg";
import up from "./up.svg";

export const NewsList = (props) => {
  const articles = props.articles;
  const [currArticle, setCurrArticle] = useState(
    articles.blog[articles.blog.length - 1]
  );
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  console.log(currArticle);
  const currentArticle = (props) => {
    const index = props;
    console.log(index);
    setCurrArticle((prevArticle) => articles.blog[index]);
  };

  return (
    <div className="-view">
      <main>
        <article>
          <h1>{currArticle.name}</h1>
          <div>
            <p>{currArticle.fullArticle}</p>
          </div>
        </article>
      </main>

      <section tw="w-screen">
        {!isCollapsed && (
          <div>
            <img src={collapse} alt="" tw="h-7 w-6 cursor-pointer" onClick={(e) => {
                setCollapsed(prevCollapsed => true);
                setIsCollapsed(prevCollapsed => true);
            }}/>
          </div>
        )}
        {isCollapsed && (
          <div>
            <img src={up} alt="" tw="h-7 w-6" onClick={(e) => {
                setCollapsed(prevCollapsed => false);
                setIsCollapsed(prevIsCollapsed => false);
            }} />
          </div>
        )}
      </section>

      {!collapsed && <div>
        {articles.blog.map((article, index) => (
          <div tw="cursor-pointer" key={article.name} onClick={(e) => {
            console.log(index);
            currentArticle(index);
          }}>
            <div>
              <img src={process.env.PUBLIC_URL + article.imgURL} alt="" />
              <span>
                <p>{article.topic}</p>
              </span>
            </div>
            <div>
              <h2>{article.name}</h2>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
};
