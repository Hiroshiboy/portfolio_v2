// SkillCardList.js
import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../data';

const SkillCardList = () => {
  return (
    <div className="container mx-auto skill-card-list flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          title={skill.title}
          content={skill.description}
          icon={skill.icon}
        />
      ))}
    </div>
  );
};

export default SkillCardList;
