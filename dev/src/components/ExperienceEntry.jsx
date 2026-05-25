import SkillTag from './SkillTag';

const ExperienceEntry = ({ id, href, orgName, roles, description, skills = [] }) => (
  <div id={id} className="mb-3">
    <h3 className="text-company">
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>{orgName}</a>
    </h3>
    {roles.map((role, i) => <p key={i} className="text-role">{role}</p>)}
    {description && <p className="text-description">{description}</p>}
    {skills.length > 0 && (
      <ul className="mt-2 flex flex-wrap">
        {skills.map(skill => <SkillTag key={skill} name={skill} />)}
      </ul>
    )}
  </div>
);

export default ExperienceEntry;
