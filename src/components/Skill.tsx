interface SkillProps {
    icon:string;
    name:string;
}

const Skill = ({ icon, name }:SkillProps) => {
    return (
      <div class="flex w-auto items-center bg-[#8996a8] hover:bg-white m-1 md:m-2 px-2 py-1 rounded-full text-white drop-shadow-2xl hover:text-[#505862]">
        <img class="w-5 md:w-7" src={icon} alt={name} />
        <span class="text-xs md:text-sm">{name}</span>
      </div>
    );
  };
  
export default Skill;
  