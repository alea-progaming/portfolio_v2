import React from "react";
import { project } from "@/app/assets/projects";

const Projects = () => {
  return (
    <div>
      {project.map((proj, index) => (
        <div
          key={index}
          className="w-fit bg-black/2 dark:bg-white/2 p-5 rounded-[10px] mt-5 text-left"
        >
          {/* Project Info */}
          <div className="flex mt-5">
            {/* <Image
              src={proj.img}
              alt={proj.title}
              className="w-[100px] h-[100px] object-cover rounded-[10px]"
            /> */}
            <p className="w-[100px] h-[100px] text-[14px] text-center leading-[100px] bg-black/30 rounded-[10px]">
              Comming Soon
            </p>
            <div className="md:flex flex-col ml-5">
              <h3 className="text-3xl">{proj.title}</h3>
            </div>
          </div>
          <ul className="flex flex-wrap gap-2 mt-5">
            {proj.tech_stack.map((tech, i) => (
              <li
                key={i}
                className="bg-black/5 dark:bg-white/5 rounded-[5px] px-[10px] py-[5px]"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="mt-5">{proj.desc}</p>
          {/* Status */}
          <div
            className="rounded-full outline-1 px-2.5 w-fit mt-5 place-self-end"
            style={{
              backgroundColor: `${proj.status.color}30`,
              outlineColor: `${proj.status.color}`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block align-middle mr-2"
              style={{ backgroundColor: `${proj.status.color}` }}
            ></span>
            <span
              className="align-middle"
              style={{ color: `${proj.status.color}` }}
            >
              {proj.status.stats}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
