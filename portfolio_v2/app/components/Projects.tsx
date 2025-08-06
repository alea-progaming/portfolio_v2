import React from "react";
import Image from "next/image";
import { project } from "@/app/assets/projects";

import proj_sample from "@/app/assets/Project_Sample.png";

const Projects = () => {
  return (
    <div className="">
      {project.map((proj, index) => (
        <div
          key={index}
          className="w-fit bg-black/2 dark:bg-white/2 p-5 rounded-[10px] mt-5 text-left"
        >
          {/* Project Info */}
          <div className="md:flex flex-nowrap mt-5">
            <Image
              src={proj.img}
              alt={proj.title}
              className="w-[100px] h-[100px] object-cover rounded-[10px]"
            />
            <div className="md:flex flex-col ml-5">
              <h3 className="text-2xl">{proj.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2 mt-2.5">
              {proj.tech_stack.map((tech, i) => (
                <li
                  key={i}
                  className="bg-black/5 dark:bg-white/5 rounded-[5px] px-[10px] py-[5px]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-5">{proj.desc}</p>
          {/* Status */}
          <div
            className={`bg-[${proj.status.color}]/30 rounded-full outline-1 px-2.5 outline-[${proj.status.color}] w-fit mt-5 place-self-end`}
          >
            <span
              className={`w-2 h-2 rounded-full inline-block align-middle mr-2 bg-[${proj.status.color}]`}
            ></span>
            <span className={`align-middle text-[${proj.status.color}]`}>
              {proj.status.stats}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
