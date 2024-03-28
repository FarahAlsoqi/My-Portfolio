export default function About() {
    return(
        <div>
      <div id="hero" className="bg-whitish min-h-[93vh] flex items-center justify-center py-8 drop-shadow-md md:px-0 px-4 font-poppins dark:bg-greenish">
        <div className="flex flex-col justify-center items-center py-5">
          <h3 className="text-night md:font-bold font-semibold md:text-5xl text-3xl py-3 text-center dark:text-whitish">Hello!👋 This is Farah 🐡</h3>
          <h3 className="text-greenish md:font-semibold font-normal md:text-2xl text-xl py-3 text-center dark:text-beige">I'm a  Marine Biologist and Full-Stack Web Developer</h3>
          <br></br>
          <a href="https://example.com" className="bg-purple-300 hover:bg-purple-400 text-purple-800 hover:text-white font-semibold py-2 px-4 ">View My Resume</a>
        </div>
      </div>


      <div className="bg-whitish dark:bg-greenish min-h-screen flex items-center justify-center flex-col py-10 px-12" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="portfolio-section bg-whitish min-h-[93vh] flex items-center justify-center py-8 drop-shadow-md md:px-0 px-4 font-poppins dark:bg-greenish">
          <div className="flex flex-col justify-center items-center py-5">
          <h1 className="font-semibold text-night text-4xl text-center text-justify md:text-8xl">About Me</h1>
          <br/>
            <div className="px-6 md:text-2xl sm:text-xl text-lg my-1 md:font-normal font-normal text-night dark:text-whitish md:w-3/4 flex flex-col">
          <p className="pb-3 text-justify">
              I am a dedicated and passionate individual with a strong background
              in biological sciences and a keen interest in technology. I recently
              completed a rigorous six-month immersive coding bootcamp at Re:Coded,
              where I honed my skills in web development and design. Through this
              experience, I have developed a solid foundation in both technical and
              soft skills, allowing me to thrive in dynamic and collaborative environments.
            </p>
          </div>
        </div>
        </div>

      <div className="portfolio-section">
        <h2 className='font-semibold'>Education</h2>
        <ul>
          <li>
            University of Jordan
            <ul>
              <li>Bachelor of Science (BS) in Biological Sciences</li>
              <li>Degree: Excellent (3.91 GPA)</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="portfolio-section">
        <h2 className='font-semibold' >Coding Bootcamp Experience</h2>
        <ul>
          <li>Completed a comprehensive six-month immersive coding bootcamp at Re:Coded.</li>
          <li>Engaged in over 400 hours of curricula and project-based learning, covering a wide range of web development concepts and technologies.</li>
          <li>Co-created several responsive web applications from scratch, showcasing proficiency in front-end and back-end development.</li>
        </ul>
      </div>
      <div className="portfolio-section">
        <h2 className='font-semibold' >Projects</h2>
        <ul>
          <li>
            <strong>Project 1:</strong> [Project Name]<br />
            <em>Description:</em> [Brief description of the project, technologies used, and your role]
          </li>
          <li>
            <strong>Project 2:</strong> [Project Name]<br />
            <em>Description:</em> [Brief description of the project, technologies used, and your role]
          </li>
        </ul>
      </div>
      <div className="portfolio-section">
        <h2 className='font-semibold'>Skills</h2>
        <div className="skills-container">
          <div className="technical-skills">
            <h3>Technical Skills:</h3>
            <ul>
              <li>Proficient in HTML, CSS, JavaScript</li>
              <li>Experience with front-end frameworks/libraries (e.g., React, Vue.js)</li>
              <li>Familiarity with back-end technologies (e.g., Node.js, Express)</li>
              <li>Knowledge of database systems (e.g., MongoDB, MySQL)</li>
            </ul>
          </div>
          <div className="soft-skills">
            <h3>Soft Skills:</h3>
            <ul>
              <li>Effective communication</li>
              <li>Teamwork and collaboration</li>
              <li>Problem-solving</li>
              <li>Time management</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="portfolio-section">
        <h2 className='font-semibold' >Achievements</h2>
        <ul>
          <li>Graduated from the coding bootcamp with distinction.</li>
          <li>Developed and deployed successful web applications as part of collaborative projects.</li>
          <li>Recognized for outstanding academic performance during my undergraduate studies.</li>
        </ul>
      </div>

      <div className="portfolio-section">
        <h2 className='font-semibold'>Languages and Tools</h2>
        <br></br>
        <div className="languages-tools">
        <a className="block overflow-hidden transform hover:scale-125 transition duration-300" href="https://www.w3.org/html/">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" title="HTML5" className="Short-icon"  />
        </a>

        <a className="block  overflow-hidden transform hover:scale-125 transition duration-300" href="https://www.w3schools.com/css/">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" title="CSS3" className="Short-icon"  />
        </a>

        <a className="block overflow-hidden transform hover:scale-125 transition duration-300" href="https://developer.mozilla.org/en-US/docs/Web/JavaScrip">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="Short-icon"  />
        </a>

        <a className="block overflow-hidden transform hover:scale-125 transition duration-300" href="https://react.dev/">
          <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React.js" title="React.js" className="Short-icon" />
        </a>

        <a className="block overflow-hidden transform hover:scale-125 transition duration-300" href="https://code.visualstudio.com/">
          <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="Visual Studio Code" title="Visual Studio Code" className="Short-icon" />
        </a>

        <a className="block  overflow-hidden transform hover:scale-125 transition duration-300" href=" https://www.postman.com/">
          <img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg" alt="Git" title="Postman" className="Short-icon"  />
        </a>

        <a className="block overflow-hidden transform hover:scale-125 transition duration-300" href="https://www.docker.com/">
          <img src="https://miro.medium.com/v2/resize:fit:400/1*OARpkeBkn_Tw3vk8H769OQ.png" alt="Docker" title="Docker" className="Short-icon"  />
        </a>

        <a className="block  overflow-hidden  transform hover:scale-125 transition duration-300" href="https://github.com/FarahAlsoqi">
          <img src="https://foundations.projectpythia.org/_images/GitHub-logo.png" alt="Git" title="GitHub" className="Short-icon"  />
        </a>
       
        <a className="block  overflow-hidden  transform hover:scale-125 transition duration-300" href="https://www.mongodb.com/">
          <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="MongoDB" title="MongoDB" className="Short-icon"  />
        </a>

        <a className="block  overflow-hidden  transform hover:scale-125 transition duration-300" href="https://www.npmjs.com/">
          <img src="https://camo.githubusercontent.com/03a1992c246dcbdbaa772714e7c4d0fa4bb3b0de8a6a157405d17f8f8bd7cdf0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e706d2d4342333833373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e706d266c6f676f436f6c6f723d7768697465" alt="npm" title="npm" className="lang-icon"  />
        </a>

        <a className="block  overflow-hidden  transform hover:scale-125 transition duration-300" href="https://nextjs.org/">
          <img src="https://camo.githubusercontent.com/11561ed7d7e5735041de1effd78226dfc545474e6f468482f91223957fe7234e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6578742e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e657874646f746a73266c6f676f436f6c6f723d7768697465" alt="Next.js" title="Next.js" className="lang-icon"  />
        </a>

        <a className="block  overflow-hidden  transform hover:scale-125 transition duration-300" href="https://nodejs.org/en/">
          <img src="https://camo.githubusercontent.com/120214a991a1685530820af492a02ab650163dbfda4d34c236d3bc6ef086de14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465" alt="JQuery" title="JQuery" className="lang-icon"  />
        </a>
        </div>
        <br></br>

      </div>

      <div className="portfolio-section">
        <h2 className='font-semibold' >Contact Information</h2>
        <ul>
          <li>Email: [ Email Address]</li>
          <li>LinkedIn: [ LinkedIn Profile URL]</li>
          <li>GitHub: [ GitHub Profile URL]</li>
        </ul>
      </div>
    </div>
    <br></br>

        </div>
    )
}