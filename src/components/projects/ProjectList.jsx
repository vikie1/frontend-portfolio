/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { ProjectsData } from "./ProjectsData";

export const ProjectList = (props) => {
  const [down, setDown] = useState(true);
  const {
    data: projectList,
    isLoading,
    error,
  } = useFetch("https://pbvictor.herokuapp.com/api/projects");

  return (
    <div tw="absolute top-0 left-0 min-h-screen w-full bg-white">
      <main tw="flex flex-col w-full">
        <header tw="mt-16 md:(mt-auto) place-self-center font-extrabold text-gray-800 text-5xl uppercase border-b">
          my projects
        </header>

        <div tw="w-full place-self-center">
          {isLoading && <div>fetching data ...</div>}
          {error && (
            <div>
              Oops!! an error occurred. <br /> Don't freght it's not you
            </div>
          )}
        </div>

        {projectList && (
          <div>
            {setDown((prevDown) => false)}
            <ProjectsData projectList={projectList} />
          </div>
        )}
        {down && (
          <div>
            <p tw="text-6xl text-blue-700">
              Projects coming very soon, please be patient <br /> In the mean
              while visit my github repos{" "}
              <a href="https://github.com/vikie1">here</a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
