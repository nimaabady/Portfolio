import { useState } from 'react'
import mockup1 from './assets/image.png'
import mockup2 from './assets/image2.png'
import mockup3 from './assets/image3.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <nav id='navbar'>
          <div className="nav-content">
            <a href='#personal'>Personal</a>
            <a href='#credentials'>Credentials</a>
            <a href='#academic-work-experience'>Academic Work Experience</a>
            <a href='#summary'>Professional Summary</a>
          </div>
        </nav>

        <div id="root">
          <section id="personal" className="section">
            <h1>Nima Abady</h1>
            <p>Location: Toronto, ON</p>
            <hr />

            <div className="resume-content">
              <h3>Education</h3>
              <p><strong>George Brown College</strong>, Toronto, ON</p>
              <p>Computer Programming and Analysis | Sept 2023 - April 2026</p>

              <h3>Technical Skills</h3>
              <p><strong>Languages:</strong> HTML, TypeScript, Golang, JavaScript, Dart, C#, Java, Python</p>
              <p><strong>Databases:</strong> PostgreSQL, Oracle, MongoDB, Firebase, Mongoose</p>
              <p><strong>Frameworks:</strong> Angular, React, Flutter, Node.js, Spring Boot, Sockets, SwiftUI</p>
              <p><strong>Tools:</strong> Git, RabbitMQ (MOM), gRPC, REST, GraphQL, Mac OS, Linux, Windows</p>

              <h3>Work Experience</h3>
              <div className="card">
                <p><strong>CIBC: Mobile Developer</strong> | April 2024 - Dec 2024</p>
                <p>Modernized core mobile banking interfaces by migrating legacy components to SwiftUI, enhancing UI performance and design consistency.</p>
              </div>
              <div className="card">
                <p><strong>CIBC: Backend Developer</strong> | Dec 2024 - Aug 2025</p>
                <p>Managed high-scale system modules and performed security audits on existing dependencies to ensure optimal performance and architectural integrity.</p>
              </div>

              <h3>Projects</h3>
              <div className="card">
                <p><strong>Safeline:</strong> Android app with security best practices for encrypted data transmission. (Spring Boot, Sockets, PostgreSQL, Android Studio)</p>
              </div>
              <div className="card">
                <p><strong>Employee Management System:</strong> Full-stack system overseeing company operations. (Node.js, React, MongoDB, Mongoose)</p>
              </div>
              <div className="card">
                <p><strong>Goal & Event Tracking System:</strong> Spring Boot backend for storing and suggesting wellness resources. (Spring Boot, JPARepository)</p>
              </div>

              <h3>Career Philosophy</h3>
              <p>
                I love solving complex problems, thats one of the main reasons I got into computer programming. I strive to work in an enviorment that allows me to learn and 
                <br />
                grow as a software engineer while continuing to do what i love. I look forward to working on projects which challenge me and create opportunities for me to 
                <br />
                learn new technologies and programming languages. In school we focused on building simple application with different technologies, but I am excited to get 
                <br />
                more indepth with these technologies and learn which situiations they are best suited for.
              </p>
            </div>
          </section>

          <section id="credentials" className="section">
            <div className="credentials">
            <h2>Credentials</h2>
            <ul>
              <li>Ontario college advanced diploma in Computer Programming and Analysis</li>
            </ul>
            </div>
          </section>

          <section id="academic-work-experience" className="section">
            <div className="academic-work-experience">
              <h2>Academic Work Experience</h2>
                <div className="card">
                  <p><strong>Employee Management System:</strong> Full-stack system overseeing company operations. (Node.js, React, MongoDB, Mongoose)</p>
                </div>
                <div className="card">
                  <p><strong>Goal & Event Tracking System:</strong> Spring Boot backend for storing and suggesting wellness resources. (Spring Boot, JPARepository)</p>
                </div> 
                <div className="card">
                  <p><strong>Go game:</strong> Developed a fully functioning go game in java with a bot using the min max algorithm.</p>
                </div>
                <div className="card">
                  <p><strong>Chat Application:</strong> Developed a chat application in node.js using Express.js and Socket.io.</p>
                </div>
                <div className="card">
                  <p><strong>Weather Application:</strong> Developed a weather application in node.js that tells you the weather in any city aswell as other information.</p>
                </div>

                <br />
                <br />
                <div className="capstone">
                <h3>Capstone Project</h3>
                  <ul>
                    <h4>Project Summary</h4>
                      <p style={{ paddingLeft: '32px' }}>
                        The Safe Line Messaging App is a secure and versatile communication platform that brings together private one-on-one chats, 
                        <br />
                        group conversations, community servers, and voice/video calls all safeguarded with end-to-end encryption powered by the Signal Protocol.
                      </p>
                    <h4>Project Vision</h4>
                      <p style={{ paddingLeft: '32px' }}>
                        The vision for the Safe Line Messaging App is to create a secure and user-friendly communication platform that prioritizes privacy and security.
                        <br />
                        By leveraging the Signal Protocol for end-to-end encryption, the app aims to provide users with a safe and private space for their conversations,
                      </p>
                    <h4>Project/Buisness Requirements</h4>
                      <p style={{ paddingLeft: '32px' }}>
                        Project requirements include implementing end-to-end encryption using the Signal Protocol, developing a user-friendly interface for seamless communication,
                        <br />
                        Calling and messaging features which are completely isolated on the users device.
                      </p>
                    <h4>Example Mockups</h4>
                      <p style={{ paddingLeft: '32px' }}>
                        <img src={mockup1} alt="Mockup 1" style={{ maxWidth: '100%', height: 'auto' }} />
                        <img src={mockup2} alt="Mockup 2" style={{ maxWidth: '100%', height: 'auto' }} />
                        <img src={mockup3} alt="Mockup 3" style={{ maxWidth: '100%', height: 'auto' }} />

                      </p>
                    <h4>System Implementation</h4>
                      <p style={{ paddingLeft: '32px' }}>
                        The system implementation of the Safeline app is still in progress. The tech stack used however is as follows:
                        <br />
                        <ul>
                          <li>Frontend: Android Studio with Java and XML</li>
                          <li>Backend: Spring Boot with Java</li>
                          <li>Database: PostgreSQL</li>
                          <li>Real-time Communication: Sockets</li>
                          <li>Encryption: Signal Protocol</li>
                        </ul>
                      </p>
                  </ul>
                </div>
            </div>
          </section>

          <section id="summary" className="section">
            <h2>Professional Summary</h2>
            <p>
              <div className="card">
                <p><strong>CIBC: Mobile Developer</strong> | April 2024 - Dec 2024</p>
                <p>Modernized core mobile banking interfaces by migrating legacy components to SwiftUI, enhancing UI performance and design consistency.</p>
              </div>
              <div className="card">
                <p><strong>CIBC: Backend Developer</strong> | Dec 2024 - Aug 2025</p>
                <p>Managed high-scale system modules and performed security audits on existing dependencies to ensure optimal performance and architectural integrity.</p>
              </div>
            </p>
          </section>
          <div style={{ height: '50vh' }}></div>
        </div>
      </>
  )
}

export default App