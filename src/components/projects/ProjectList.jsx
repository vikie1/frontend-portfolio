/** @jsxImportSource @emotion/react */
import "twin.macro";
import { useFetch } from "../../hooks/useFetch";
import { ProjectsData } from "./ProjectsData";

export const ProjectList = (props) => {
  const { data: projectList, isLoading, error } = useFetch("/api/projects");

  return (
    <div tw="absolute top-0 left-0 min-h-screen w-full bg-gray-200">
      <main tw="flex flex-col w-full">
        <header tw="place-self-center font-extrabold text-gray-100 text-5xl uppercase border-b">
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

        {projectList && <ProjectsData projectList={projectList} />}
      </main>
    </div>
  );
};
