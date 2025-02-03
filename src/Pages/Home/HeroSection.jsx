export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hi, I'm Alex.</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Overview</span> {" "}
                    </h1>
                    <p className="hero--section-description">
                        Leader. Problem Solver. Innovator. Computer Science student at Purdue University. Experienced in analyzing problems and delivering efficient and effective solutions. Proficient in Java, C++, Python, SQL, Linux, JavaScript, HTML, CSS, and Git. Seeking opportunities to apply my technical skills and continue expanding my skillset.   
                    </p>
                </div>
                <a 
    href="https://drive.google.com/file/d/1s0iwOWHXlaT554q_VOu7YPEmROKbxrev/view?usp=sharing" 
    className="btn btn-primary" 
    target="_blank" 
    rel="noopener noreferrer"
>
Download my Resume
</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpeg" alt="Hero Section" />
            </div>
        </section>
    );
}
