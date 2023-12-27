import React from "react";
import { HiBookOpen } from "react-icons/hi2";
import SkillCardList from "./SkillCardList.js";
export default function Skills() {
  
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <HiBookOpen className="mx-auto inline-block h-10 w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills
          </h1>
          <SkillCardList />
        </div>
      </div>
    </section>
  );
}