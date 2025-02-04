import Skill from './Skill.tsx';
import skills from "../data/skills.ts";
import projectData from '../data/projects.ts';
import Carousel from "./Carousel.tsx";

const SkillSection = () => {
  return (
    <div class="w-full flex flex-col items-center justify-center md:mt-0">
      <span class="text-white text-xl md:text-2xl mb-3 mt-4 md:mt-0 font-normal">
        Tecnologías y Herramientas
      </span>
      <div class="flex flex-wrap justify-around">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
      <span class="text-white text-xl md:text-2xl mb-3 mt-10 md:mt-3 font-normal">
        Mis Proyectos
      </span>
      <Carousel projectData={projectData} />
    </div>
  );
};

export default SkillSection;
