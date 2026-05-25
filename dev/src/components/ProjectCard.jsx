import SkillTag from './SkillTag';

const ProjectCard = ({ id, href, title, imgSrc, imgAlt, description, skills }) => (
  <section id={id} className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
    <div className="mb-3">
      <h3 className="text-company">
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#29e0d5' }}>
          {title} <i className="bi bi-arrow-up-right-square ps-0 ms-1" />
        </a>
      </h3>
      <img
        className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-lg block mx-auto border-2 border-white mt-2 mb-2"
        src={imgSrc}
        alt={imgAlt}
      />
      <p className="text-description">{description}</p>
      <ul className="mt-2 flex flex-wrap justify-center">
        {skills.map(skill => <SkillTag key={skill} name={skill} />)}
      </ul>
    </div>
  </section>
);

export default ProjectCard;
