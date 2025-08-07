import React from "react";
import { techstack } from "@/app/assets/techstack";

const TechStack = () => {
  const frontend = techstack.find((tech) => tech.frontend)?.frontend || [];
  const backend = techstack.find((tech) => tech.backend)?.backend || [];
  const others = techstack.find((tech) => tech.others)?.others || [];

  const renderList = (items: string[]) =>
    items.map((item: string, i: number) => (
      <li
        key={i}
        className="bg-black/5 dark:bg-white/5 rounded-[5px] px-[10px] py-[5px]"
      >
        {item}
      </li>
    ));

  return (
    <div>
      {/* Frontend Development */}
      <div>
        <h4 className="text-3xl mt-5">Frontend Development</h4>
        <ul className="flex flex-wrap gap-2 mt-5 text-lg">
          {renderList(frontend)}
        </ul>
      </div>
      {/* Backend Development */}
      <div>
        <h4 className="text-3xl mt-5">Backend Development</h4>
        <ul className="flex flex-wrap gap-2 mt-5 text-lg">
          {renderList(backend)}
        </ul>
      </div>
      {/* Others */}
      <div>
        <h4 className="text-3xl mt-5">Tools & Technologies</h4>
        <ul className="flex flex-wrap gap-2 mt-5 text-lg">
          {renderList(others)}
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
