/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Document, Page } from "react-pdf";
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import file from "./file.pdf";

export const Articles = (props) => {
  const { data: articles, isLoading, error } = useFetch("/api/blog");
  //const [currentArticle, setCurrent] = useState(articles.blog[articles.blog.length() - 1]);
  const [numPages, setPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoad = ({numPages}) => {
      setPages(prevNumPages => numPages);
  }

  return (
    <div className="-view">
        <main>
            <article>
                {/* <header>
                    {currentArticle && <h1>{currentArticle.name}</h1>}
                </header>
                <div>
                {currentArticle && <img src={process.env.PUBLIC_URL + currentArticle.imgUrl} alt="" />}
                </div> */}
                <div tw="flex justify-center">
                    <Document file={file} onLoadSuccess={onDocumentLoad}>
                        {Array.from(
                            new Array(numPages),
                            (el, index) => (
                                <Page key={`page_${index + 1}`} pageNumber={index + 1}/>
                            )
                        )}
                    </Document>
                    <p>page number {pageNumber} number of pages {numPages}</p>
                </div>
            </article>
        </main>
      {error && (
        <div>
          Oops!! an error occurred. <br /> Don't freght it's not you
        </div>
      )}
      {isLoading && <div>fetching data ...</div>}
      {articles && (
        <div>
          <div>
            {articles.blog.map((article) => (
              <div key={article.id}>
                <img
                  src={process.env.PUBLIC_URL + article.imgUrl}
                  alt=""
                  tw="w-full h-32 md:(h-48) object-cover"
                />
                <span>
                  <p>{article.topic}</p>
                </span>
                <div>
                  <h2>{article.name}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
