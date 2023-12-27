import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, My Name is Neil Sano.
            <br className="hidden lg:inline-block" /> I am an aspiring Data Analyst.
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            I am a recent graduate and have enjoyed building projects that analyze data using Python, SQL and then turning the data into dashboards in Tableau.
            <br/>
            Currently, I am in the process of learning how to create ETL pipelines.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              How to Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
                My Current Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
