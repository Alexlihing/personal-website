export default function MySkills() {
    const skills = [
        { name: "Java", logo: "./img/java-logo1.png" },
        { name: "C++", logo: "./img/c++.png" },
        { name: "Python", logo: "./img/Python-Symbol.png" },
        { name: "SQL", logo: "./img/sql-logo.png"},
        { name: "R", logo: "./img/r_logo.png" },
        { name: "Linux", logo: "./img/Linux-logo.png" },
        { name: "HTML", logo: "./img/html_logo.png" },
        { name: "CSS", logo: "./img/css_logo.png" },
        { name: "JavaScript", logo: "./img/JavaScript-logo.png" },
        { name: "React", logo: "./img/react-logo.png"},
        { name: "Firebase", logo: "./img/firebase-logo.png" },
        { name: "IntelliJ Idea", logo: "./img/intellij-logo.jpg"},
    ];

    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">Languages & Tools</h2>
            </div>
            <div className="skills--section--container">
                {skills.map((skill, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={skill.logo} alt={`${skill.name} Logo`} />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
