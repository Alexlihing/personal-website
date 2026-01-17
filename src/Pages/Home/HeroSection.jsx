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
                        Hi! I'm Alex, a Computer Science student at Purdue University. My interests lie primarily in Distributed Systems, Databases, and Machine Learning. I have a passion for creating software that will positively impact others. Currently, I'm researching Serverless Computing at the University of Pennsylvania, advised by Spyros Pavlatos and Vincent Liu. Here, you can find a little about me. If you'd like to chat, please feel free to reach out to me below!
                    </p>
                </div>
                <a 
    href="https://drive.google.com/file/d/1liJx27_zMX0FxkSdrukWomMvsUMcoVbl/view?usp=sharing" 
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
