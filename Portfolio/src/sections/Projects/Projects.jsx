import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../Common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://rehanshaikh007.github.io/Resume_Build_with_Ai/"
          h3="Resume Builder with AI"
          p="Resume Build App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://code-pen-clone-eta.vercel.app/"
          h3="CodePen Clone"
          p="CodePen Editor App"
        />
        <ProjectCard
          src={hipsster}
          link="https://password-generator-murex-one-97.vercel.app/"
          h3="Password Generator"
          p="Random Password Generator App"
        />
        <ProjectCard
          src={fitLift}
          link="https://rehanshaikh007.github.io/youtubeUI/"
          h3="YouTube UI Clone"
          p="YouTube Landing Page"
        />
        
      </div>
    </section>
  );
}

export default Projects;