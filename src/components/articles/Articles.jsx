/** @jsxImportSource @emotion/react */
import tw, { css, styled } from "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { NewsList } from "./NewsList";
import { Link } from "react-router-dom";

export const Articles = (props) => {
  const {
    data: articles,
    isLoading,
    error,
  } = useFetch("https://pbvictor.herokuapp.com/api/blog");
  // const {
  //   data: articles,
  //   isLoading,
  //   error,
  // } = useFetch("http://localhost:8080/api/blog");

  //fine tuned card layout tweaks to use in this component
  const cards = css`
    ${tw`w-full sm:(w-80 m-5) inline-block`}
  `;
  const cardBody = css`
    ${tw`md:(mx-28)`}
  `;
  const header = "Here are the blogs";

  //specific blog body styles to match default  h2, H3, li, p, and Strong
  const H2 = styled.h2`
    ${tw`
  block font-size[1.5em] margin-bottom[0.83em] margin-top[0.83em] mx-0 font-bold
  `}
  `;
  const H3 = styled.h3`
    ${tw`block font-size[1.17em] margin-bottom[1em] margin-top[1em] mx-0 font-bold`}
  `;
  const P = styled.p`
    ${tw`margin[1.12em 0]`}
  `;
  const Strong = styled.strong`
    ${tw`font-weight[bolder] text-gray-800`}
  `;
  const link = css `${tw`text-blue-400 underline cursor-pointer italic`}`;

  return (
    <div
      className="-view"
      tw="absolute top-0 left-0 min-h-screen w-full bg-white"
    >
      <div tw="md:(grid grid-cols-4 w-full)">
        <div tw="md:(col-start-2 col-end-4)">
          <main tw="mt-12">
            <article>
              <h1 tw="text-center px-10 md:(px-0 mt-auto) text-4xl uppercase underline">
                Get articles on various programing and tech topics
              </h1>
            </article>
          </main>
          <section>
            <div tw="mx-10 mb-5 md:(mx-auto)">
              <H2>Welcome to the blog section of my website.</H2>

              <H3>General remarks</H3>
              <P>
                I am passionate about Java and Javascript programming languages,
                therefore expect most of my content to revolve around these
                programming languages. However, I have more areas of expertise{" "}
                <Link to="/about" css={link}>Check them here</Link>.
              </P>
              <P>
                Also as you might have noticed I have tried to venture into
                different fields such as backend, frontend web and android
                development. You might wonder, why? Why not just focus on one
                area?
              </P>
              <P>
                Well i don't know whether this is proffessionally healthy but i
                just like refering to myself as a developer and a problem
                solver. I therefore try to select the best tools and
                technologies to provide a solution to a problem. This makes me
                fluid to evolving in the tech world and open to learning new
                technologies.
              </P>

              <H3>So about JavaScript ...</H3>
              <P>
                <Strong>
                  I only use JavaScript for frontend programming, and java for
                  everything else
                </Strong>.
                <br />
                You should therefore expect only frontend blogs about js. I have
                not yet ventured into node js and express or any other form of
                javascript Backend programming.
              </P>

              <H3>Backend and API programming</H3>
              <P>
                <Strong>
                  I use the spring boot Framework for backend development
                </Strong>. 
                Expect spring boot, spring, jpa, hibernate and other spring
                framework tools. <br />
                <Strong>
                  I use REST to create APIs and I do this in java
                </Strong>. 
                Most of my content, both writen and project based will use a
                REST endpoint.
              </P>

              <H3>Android apps development</H3>
              <P>
                <Strong>I use Java for android development</Strong>. 
                Expect content about android app development with java.
              </P>
            </div>
          </section>
        </div>
      </div>

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
        <div tw="mt-20 mx-32">
          <p tw="text-3xl text-blue-700">Fetching articles ...</p>
        </div>
      )}
      <div tw="flex w-full mb-10 md:(mb-auto)">
        <aside>
          {articles && (
            <NewsList
              articles={articles}
              card={cards}
              cardBody={cardBody}
              header={header}
            />
          )}
        </aside>
      </div>
    </div>
  );
};
