import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";



export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Design-Genie" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Design Genie</h3>
              <p>
              An AI-powered creative assistant that generates personalized event posters effortlessly with enhanced prompts, dynamic scenes, and catchy slogans using Stable Diffusion and NLP.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, Stable Diffusion, NLP, AI/ML</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Oral-Cancer-Risk-Analysis" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Oral Cancer Risk Analysis</h3>
              <p>
              Developed an oral cancer risk analysis system using Convolutional Neural Networks (CNNs) for lesion image analysis and Random Forest algorithms for evaluating clinical data, integrating both methods to provide a comprehensive risk assessment.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, CNN, Random Forest, Deep Learning</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
              </div>
            </header>
            <div className="body">
              <h3>IOT Based Smart Kitchen System</h3>
              <p>
              A Smart Kitchen System using MQ-2 Gas Sensor for early gas leak detection and an HX711 Load Cell for real-time LPG weight monitoring. Improves kitchen safety by detecting gas leaks instantly and helps users track LPG consumption effortlessly.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>IoT, Arduino, MQ-2 Sensor, HX711 Load Cell</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Skill-Bridge-360" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Skill Bridge 360</h3>
              <p>
              An AI-powered multimodal platform that bridges language and accessibility gaps in education through automated vernacular dubbing, intelligent summarization, and interactive learning tools.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python, AI/ML, NLP, Speech Processing</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Culinary_canvas" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Culinary Canvas</h3>
              <p>
              Developed the Culinary Canvas restaurant website using Java JSP Servlets to enable online ordering. Implemented features for users to add items to their cart, process online payments, enter delivery addresses, and arrange order deliveries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java Servlets, Apache Tomcat, HTML, CSS, MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/event_management_website" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Event Management Platform</h3>
              <p>
              A web development project that bridges the gap between event hosts and the audience. Built using PostgreSQL, PHP, JavaScript, HTML and CSS for seamless event coordination.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML, CSS, JavaScript, Bootstrap, PHP, PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Student_db_management" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Student Details Management</h3>
              <p>
              A project aimed at maintaining student details in a college database using basic CRUD (Create, Read, Update, Delete) operations. Built for the IT Essentials Laboratory using web technologies.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML, CSS, PHP, JavaScript, MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Insight_complete_with_backend" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Insights - Course Instruction Website</h3>
              <p>
              Developed a user-friendly website to teach traditional sciences and Vedic Maths to middle school students using the MERN stack under the guidance of Dr. Bama Srinivasan from the Department of IST.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB, Express.js, React.js, Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links center-image">
                <a href="https://github.com/Shanthapriya23/Shantha_priya_portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} style={{float: "right"}} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>My Personal Portfolio</h3>
              <p>
              My personalized and customized portfolio to display my interests, skills, projects and talents.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>TypeScript, React.js, Bootstrap, HTML, CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}