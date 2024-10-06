
import './Home.css';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../images/IMAGES'

const socialIcons={
  linkedIn: "linkedin-icon.svg",
  github:"github-icon.svg",
  email:"email-icon.svg",
  medium:"medium-icon.svg",
  twitter:"twitter-icon.svg"
}




const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <div className="bg">
          <div></div>
          <div></div>
        </div>
        <section className="profile-section">
          <img src={IMAGES.image1} alt="Profile Picture" className="profile-pic" />
        </section>
        <div className="header-text" aria-hidden="true">
          <p>Hi, my name is</p>
          <span className="glow-filter" data-text="Illuminated Glow Text.">Mandy Pan.</span>
          <p>I am a full-stack software engineer,</p>
          <p>with experience in Quantitative Finance and Fintech.</p>
        </div>
        <section className="buttons">
          <button onClick={() => navigate('/experience')}>Experience</button>
          <button onClick={() => navigate('/projects')}>Projects</button>
        </section>
        <section className="social-links">
          <a href="https://www.linkedin.com/in/mandycpan/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
            <img src={socialIcons.linkedIn} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/Mandeepan" target="_blank" aria-label="GitHub" rel="noreferrer">
            <img src={socialIcons.github} alt="GitHub" className="social-icon" />
          </a>
          <a href="https://x.com/MandyPoonCM" target="_blank" aria-label="Twitter" rel="noreferrer">
            <img src={socialIcons.twitter} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://medium.com/@mandyphc" target="_blank" aria-label="Medium" rel="noreferrer">
            <img src={socialIcons.medium} alt="Medium" className="social-icon" />
          </a>
          <a onClick={() => navigate('/emailform')} aria-label="Email">
            <img src={socialIcons.email} alt="Email" className="social-icon" />
          </a>
        </section>
      </main> 
    </div>
  );
};

export default Home;