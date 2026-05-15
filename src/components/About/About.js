import React from 'react';
import { Container } from "./styles";
import Sp_photo from "../../assets/shantha_priya_photo.jpg.jpeg";
import graduationPhoto from "../../assets/graduation.jpg.jpeg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">

        {/* Tech Stack Section */}
        <div id="skills" className="section-anchor">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
            <h3>Tech Stack I've been using lately at work:</h3>
            <p className="tech-stack-inline">
              CAP Java &nbsp;•&nbsp; SAP UI5 &nbsp;•&nbsp; SAP Fiori &nbsp;•&nbsp; SAP HANA DB &nbsp;•&nbsp; SAP BTP (Business Technology Platform) &nbsp;•&nbsp; Cloud Foundry and Kyma
            </p>
          </ScrollAnimation>
        </div>

        {/* Work Experience Section - Timeline */}
        <div id="experience" className="section-anchor">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Work Experience</h3>
          </ScrollAnimation>

          <div className="timeline">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>SAP Labs India, Bangalore <span className="date">Aug 2025 - Present</span></h4>
                  <p className="role">Associate Application Engineer</p>
                  <ul>
                    <li>Worked on SAP ERP Public Cloud Tools and delivery – In Product Communication (IPC).</li>
                    <li>Developed and shipped multiple full-stack features (frontend and backend) for an enterprise communication platform, including automated API testing, production database migrations, and code refactoring to improve reliability.</li>
                    <li>Contributed to the integration with SAP SuccessFactors to extend the cross-product reach.</li>
                    <li>Built a prototype application using AI-powered tools (Cline, Claude, MCP Servers) and delivered knowledge-sharing session on integrating AI developer tools into active development workflows for the broader team.</li>
                    <li>Learning and working on AI agent development, agent-to-agent protocols, agent deployment on SAP BTP with Kyma, and integration with Joule UI.</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>SAP Labs India, Bangalore <span className="date">Jan 2025 - Jul 2025</span></h4>
                  <p className="role">SDE – Grad Intern (6 month – onsite internship on the last semester of Engineering)</p>
                  <ul>
                    <li>Engineered and deployed 3 production-grade internal applications for SAP LoB operations using CAP Java, SAP HANA, SAP UI5, and SAP Fiori.</li>
                    <li>Developed workflow-driven applications for employee recognition, team outing management, and birthday event planning with role-based access and approval flows.</li>
                    <li>Implemented business features including nomination validation, automated certificate generation using Python Pillow, participation management, transport preference handling, and dynamic event filtering.</li>
                    <li>Delivered applications adopted by 75+ employees and used operationally during the organization's Annual Day events and employee engagement initiatives.</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>SAP Labs India, Bangalore <span className="date">Jun 2024 - Aug 2024</span></h4>
                  <p className="role">Summer Intern (2 month - onsite internship in the pre-final year of Engineering)</p>
                  <ul>
                    <li>Worked on SAP Ariba Procurement – Contract Price renegotiation (CPR) for product sourcing.</li>
                    <li>Performed automation testing for a live CPR project using Qmate, a custom Webdriver-IO based testing framework.</li>
                    <li>Gained hands-on experience with SAP Business Technology Platform (BTP).</li>
                    <li>Developed the frontend of a survey application using SAP Fiori and UI5.</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Education Section - Timeline */}
        <div id="education" className="section-anchor">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
            <h3>Education</h3>
          </ScrollAnimation>

          <div className="timeline">
            <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>College Of Engineering Guindy, Anna University, Chennai <span className="date">Aug 2021 - Jun 2025</span></h4>
                  <p className="role">B.Tech. in Information Technology — CGPA: 8.52/10</p>
                  <ul>
                    <li>Relevant Coursework: Object Oriented Programming, Databases, Discrete Maths, Advanced Data Structures and Algorithms, Design and Analysis of Algorithms, Operating Systems, Computer Networks, Computer Architecture, Machine Learning, Artificial Intelligence, Graph Theory, Compiler Engineering, Cryptography, Information Retrieval.</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Alpha Wisdom Vidyashram – CBSE, Tiruchirappalli</h4>
                  <ul>
                    <li>Higher Secondary Certificate - 12th (2019 - 2021) — 97.8%</li>
                    <li>Secondary School Certificate - 10th (2017 - 2019) — 97.0%</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Certificates Section - Bullet Points */}
        <div id="certifications" className="section-anchor">
          <ScrollAnimation animateIn="fadeInLeft" delay={0.9 * 1000}>
            <h3>Certificates</h3>
            <div className="certificates-list">
              <ul>
                <li>
                  <strong>SAP Certified Generative AI Developer</strong> –{" "}
                  <a href="https://www.credly.com/badges/4ca40a71-705d-406a-a06d-16a946af9541" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </li>
                <li>
                  <strong>SAP Certified Cloud Native Developer Java</strong> –{" "}
                  <a href="https://www.credly.com/badges/e68c6c3a-b27c-4c53-87f5-63f098c235d7" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </li>
                <li>
                  <strong>AI Agents Fundamentals - Hugging Face</strong> –{" "}
                  <a href="https://huggingface.co/certificates" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </li>
                <li>
                  <strong>McKinsey Forward Program</strong> –{" "}
                  <a href="https://www.credly.com/badges/0452a167-5a2c-405d-96c0-aa914442840f/public_url" target="_blank" rel="noopener noreferrer">View Certificate</a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Sp_photo} alt="Shantha_priya" />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.40 * 1000}>
          <img src={graduationPhoto} alt="Graduation" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}