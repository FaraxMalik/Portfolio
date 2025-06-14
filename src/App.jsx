import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="name">Faraz Iftikhar</h1>
          <p className="title">Software Engineer & Mobile Developer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          
          {/* About Section */}
          <section id="about" className="section">
            <h2 className="section-title">About</h2>
            <p className="about-text">
              Junior Software Engineering student at FAST NUCES with hands-on experience in mobile and web development. 
              Currently working as a Mobile Application Developer at Tuvens, building React Native applications with Bare Expo. 
              Passionate about creating scalable solutions and exploring new technologies.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
              <div className="experience-item">
                <h3 className="experience-title">Mobile Application Developer</h3>
                <p className="experience-company">Tuvens • April 2025 - Present</p>
                <p className="experience-description">
                  Building React Native app using Bare Expo for location-based event discovery. 
                  Implementing interactive maps, client-side filtering, and dynamic loading.
                </p>
              </div>
              <div className="experience-item">
                <h3 className="experience-title">Website Development</h3>
                <p className="experience-company">Freelance • September 2024 - Present</p>
                <p className="experience-description">
                  Designing and developing client websites using MERN stack, TypeScript, and WordPress 
                  with focus on customization and SEO optimization.
                </p>
              </div>
              <div className="experience-item">
                <h3 className="experience-title">LLM Trainee</h3>
                <p className="experience-company">Turing • August 2024 - January 2025</p>
                <p className="experience-description">
                  Designed adversarial prompts to assess model robustness and wrote ideal responses 
                  to improve model performance.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-category-title">Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Frameworks</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">React Native</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Tools & Marketing</h3>
                <div className="skill-tags">
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">WordPress</span>
                  <span className="skill-tag">Google Ads</span>
                  <span className="skill-tag">Jira</span>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              
              {/* Babu Technicians */}
              <div className="project-card">
                <div className="project-images">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Babu Technicians Dashboard" 
                    className="project-image main"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Babu Technicians Services" 
                    className="project-image secondary"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Babu Technicians</h3>
                  <p className="project-tech">Next.js • TypeScript • Custom Development</p>
                  <p className="project-description">
                    Professional service platform built with Next.js and TypeScript for Babu Technicians. 
                    Features modern UI/UX, service booking system, and optimized performance with SEO integration.
                  </p>
                  <div className="project-links">
                    <a href="https://www.babutechnicians.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Site
                    </a>
                  </div>
                </div>
              </div>

              {/* Niagara Falls */}
              <div className="project-card">
                <div className="project-images">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Niagara Falls App Home" 
                    className="project-image main"
                  />
                  <img 
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Niagara Falls App Features" 
                    className="project-image secondary"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Niagara Falls Django App</h3>
                  <p className="project-tech">Django • Python • Web Development</p>
                  <p className="project-description">
                    A comprehensive Django web application showcasing Niagara Falls tourism information. 
                    Features dynamic content management, user interactions, and responsive design.
                  </p>
                  <div className="project-links">
                    <a href="https://github.com/haseebahmed111/niagarafalls_django" className="project-link" target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Ads Campaigns */}
              <div className="project-card">
                <div className="project-images">
                  <img 
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Google Ads Dashboard" 
                    className="project-image main"
                  />
                  <img 
                    src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Google Ads Analytics" 
                    className="project-image secondary"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">Google Ads Campaign Management</h3>
                  <p className="project-tech">Google Ads • Digital Marketing • Analytics</p>
                  <p className="project-description">
                    Strategic Google Ads campaign management delivering measurable results for clients. 
                    Specialized in keyword research, ad optimization, conversion tracking, and ROI maximization.
                  </p>
                  <div className="project-links">
                    <a href="mailto:faraxmalikk@gmail.com" className="project-link">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Education Section */}
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-item">
              <h3 className="education-title">Bachelor of Science in Software Engineering</h3>
              <p className="education-institution">FAST NUCES, Lahore • Aug 2022 - Present (Junior Year)</p>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <h2 className="section-title">Let's Connect</h2>
            <div className="contact-links">
              <a href="mailto:faraxmalikk@gmail.com" className="contact-link">
                Email
              </a>
              <a href="https://www.linkedin.com/in/faraz-malik08/" className="contact-link" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://www.upwork.com/freelancers/~0133c3b9529b73feae" className="contact-link" target="_blank" rel="noopener noreferrer">
                Upwork
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Faraz Iftikhar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App;