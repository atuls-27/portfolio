import "./About.css";
import me from "../../img/me-bg.jpg";
import {BsGithub} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import cv from "../../files/cv.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Hi there , I am a MERN stack developer having proficiency in Reactjs and many other frontend libraries and <br></br>dependencies used to create an attractive 
          and fully responsive designed webpage. With the help of MongoDB<br></br>, ExpressJs and NodeJs i can build a backend server and connect it with frontend so 
          that i can be a <br></br>full stack web developer.
        </p>
        <div className="connect" >
            <a href="https://github.com/atuls-27"> <BsGithub  size={35}/> </a>
            <a href="https://www.linkedin.com/in/atul-singh-baghel-013490238"><AiFillLinkedin size={35} /> </a>
            <a href={cv} download="cv-pdf" target="_blank" rel="noreferrer" className="cv"> Download CV</a>
        </div>
       
      </div>
    </div>
  );
};

export default About;
