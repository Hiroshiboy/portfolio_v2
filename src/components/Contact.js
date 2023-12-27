import React from "react";
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative m-0">
      <div className="container px-5 py-32 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <div className="relative flex flex-wrap py-6 rounded shadow-md w-full">
            <div className="w-full sm:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-1">
                CONTACT
              </h2>
              <a
                href="https://ca.linkedin.com/in/neil-sano-7480591b9?trk=profile-badge"
                className="inline-flex items-center mt-1 p-1"
              >
                <FaLinkedin className="w-9 h-9 pt-1" />
              </a>
              <a
                href="https://github.com/Hiroshiboy"
                className="inline-flex items-center mt-1 p-1"
              >
                <FaGithubSquare className="w-9 h-9 pt-1" />
              </a>
              <a
                href="mailto:neil.hiroshi.sano@gmail.com"
                className="inline-flex items-center mt-1 p-1"
              >
                <FaEnvelopeSquare className="w-9 h-9 pt-1" />
              </a>
            </div>
            <div className="w-full sm:w-1/2 px-6 mt-4 lg:mt-1">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-1 p-1">
                PHONE
              </h2>
              <p className="leading-relaxed text-white mt-1 pl-1">
                647-985-2725
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
