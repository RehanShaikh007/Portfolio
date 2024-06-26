import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../Common/ThemeContext'

function Hero() {
  const {theme, toggleTheme} = useTheme();
  
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
   const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
    <>
      <section id="hero" className={styles.container}>
         <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile Picture" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
         </div>

         <div className={styles.info}>
            <h1>Rehan 
                <br />
                Shaikh
            </h1>
            <h2>Front End Developer</h2>
            <span>
                <a href="https://x.com/RehanSh95368063">
                <img src={twitterIcon} alt="twitter icon" />
                </a>
                <a href="https://github.com/RehanShaikh007" >
                <img src={githubIcon} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/rehan-shaikh-900571276/">
                <img src={linkedinIcon} alt= "linkedin icon" />
                </a>
            </span>
            <p>Passionate about Developing Modern Tech Web Apps for Commerical Businesses and Excel the Knowledge.</p>
            <a href={CV} download>
                <button className='hover' >Resume  </button>
            </a>
         </div>
      </section>
    </>
  )
}

export default Hero
