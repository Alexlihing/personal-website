export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Please feel free to reach out to me for any questions. I'm always open to chatting more about any possible opportunities! Test
                </p>
            </div>
            <div className="contact--email--container">
                <a
                    href="mailto:alexli9132@gmail.com"
                    className="btn btn-primary contact--email--btn"
                >
                    Email Me Here!
                </a>
            </div>
        </section>
    );
}
