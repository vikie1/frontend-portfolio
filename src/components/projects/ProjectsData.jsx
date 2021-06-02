/** @jsxImportSource @emotion/react */
import tw, { css } from "twin.macro";
import { Link } from "react-router-dom";

export const ProjectsData = (props) => {
  const projectList = props.projectList;

  const card = css`
    ${tw`bg-gray-300 rounded overflow-hidden shadow-md relative hover:(shadow-xl)`}
  `;
  const badge = css`
    ${tw`bg-gray-400 text-gray-800 text-xs font-bold uppercase rounded-full p-2 absolute top-0 ml-2 mt-2`}
  `;


  return (
    <div tw="grid md:(grid-cols-3 gap-5 px-32) mt-8 w-full">
      {projectList.projects.map((project) => (
        <div key={project.id} tw="inline" css={card}>
          <Link to={`/project/${project.id}`}>
            <div>
              <img
                src={process.env.PUBLIC_URL + project.imgUrl}
                alt=""
                tw="w-full h-32 md:(h-48) object-cover"
              />
              <span css={badge}>
                <p>{project.name}</p>
              </span>
            </div>
            <div tw="m-2">
              <h2 tw="font-bold">{project.title}</h2>
              <p tw="block text-gray-500 text-sm">{project.description}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
