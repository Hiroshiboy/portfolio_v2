import React from "react";
import { BookOpenIcon } from "@heroicons/react/solid";
export default function Skills() {
  
  return (
    <section id="Skills">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BookOpenIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills
          </h1>
          
        </div>
      </div>
    </section>
  );
}