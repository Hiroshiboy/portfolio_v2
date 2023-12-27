import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

const SkillCard = ({ icon: Icon, title, content }) => {
  return (
    <div className="card max-w-sm rounded overflow-hidden shadow-lg m-2 p-2 bg-gray-200">
      <IconContext.Provider value={{ size: "2em" }}>
        <div className="w-full">
          <Icon className="w-full" />
        </div>
      </IconContext.Provider>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default SkillCard;
