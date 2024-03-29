/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { ProjectsData } from "./ProjectsData";

export const ProjectList = (props) => {
  const {
    data: projectList,
    isLoading,
    error,
  } = useFetch("https://web-production-2b5d.up.railway.app/api/projects");

  return (
    <div tw="absolute top-0 left-0 min-h-screen w-full bg-white">
      <main tw="flex flex-col w-full mb-12">
        <header tw="mt-16 md:(mt-12) place-self-center font-extrabold text-gray-800 text-5xl uppercase border-b">
          my projects
        </header>
        <div tw="w-full place-self-center">
          {isLoading && <div tw="text-center">fetching data ...</div>}
          {error && (
            <div tw="mt-20 mx-32">
              <p tw="text-3xl text-blue-700">
                Projects coming very soon, please be patient <br /> In the mean
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
        </div>

        {projectList && <ProjectsData projectList={projectList} />}
      </main>
    </div>
  );
};
