export default function MySkills() {
    const skills = [
        { name: "Java", logo: "./img/java-logo1.png" },
        { name: "C++", logo: "./img/c++.png" },
        { name: "Python", logo: "./img/Python-Symbol.png" },
        { name: "SQL", logo: "./img/sql-logo.png"},
        { name: "R", logo: "./img/r_logo.png" },
        { name: "JavaScript", logo: "./img/javascript-logo.jpg" },
        { name: "HTML", logo: "./img/html-logo.png" },
        { name: "CSS", logo: "./img/css-logo.png" },
        { name: "Linux", logo: "./img/Linux-logo.png" },
        { name: "React", logo: "./img/react-logo.png"},
        { name: "Node.js", logo: "./img/nodejs-logo.png"},
        { name: "jQuery", logo: "./img/jquery-logo.webp"},
        { name: "Firebase", logo: "./img/firebase-logo.png" },
        { name: "MongoDB", logo: "./img/mongodb-logo.webp"},
        { name: "PostgreSQL", logo: "./img/postgresql-logo.webp"},
        { name: "MySQL", logo: "./img/mysql-logo.png"},
    ];

    return (
        <section className="skills--section" id="mySkills">
          <div className="portfolio--container">
            <p className="section--title">My Skills</p>
            <h2 className="skills--section--heading">Languages &amp; Tools</h2>
          </div>
    
          {/* Wrap each logo in a “skill-shape” container */}
          <div className="skills--shape--container">
            {skills.map((skill, i) => (
              <div key={i} className="skill-shape">
                <img id="skill-img" src={skill.logo} alt={skill.name} className={skill.name === "Linux" ? "linux-logo" : ""}/>
              </div>
            ))}
          </div>
        </section>
      );
    }