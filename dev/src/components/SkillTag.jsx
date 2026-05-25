const SkillTag = ({ name }) => (
  <li className="mr-2.5 mt-2">
    <div className="flex items-center rounded-full bg-orange-300/50 px-3 py-1 text-xs font-medium leading-5 text-skill">
      {name}
    </div>
  </li>
);

export default SkillTag;
