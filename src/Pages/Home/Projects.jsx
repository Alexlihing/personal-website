import "../../App.css"
export default function Projects() {

  const testimonials = [
    {
        title: "BoilerGuess",
        company: (
          <a href="https://github.com/Alexlihing/BoilerGuess" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        ),
        content:
          "BoilerGuess is a replica of the popular geography game, \"Geoguessr\", tailored for Purdue's campus. The Google Maps JavaScript API was used to simulate street-view displays of randomized locations. The frontend was built with React/React Queries, Typescript, HTML, and CSS. The backend was built on top of the Node.js and Express.js frameworks, along with Axios for HTTP requests and MongoDB as a database to ensure scalability for future enhancements.",
        date: "2024",
        image: "./img/boilerguess.png",
      },
    {
      title: "Functionary",
      company: (
        <a href="https://github.com/Alexlihing/functionary" target="_blank" rel="noopener noreferrer">
          Link
        </a>
      ),
      content:
        "Functionary is an interactive tool that allows developers to analyze and visualize complex codebases with ease using the Web. Once a directory is uploaded from a user's file system, Functionary breaks down the codebase into an Abstract Syntax Tree, mapping function calls and dependencies on a dynamic graph with animated arrows to illustrate call flows. Functionary features an AI-powered chatbot through the OpenAI API that answers queries about the codebase, offering clear explanations of how each function operates. Functionary also uses Pinecone to integrate a vector database, using a RAG embedding model to provide relevant answers to user queries. The tech stack used was React, Typescript, Node.js, Express.js, MongoDB, and Pinecone.",
      date: "2025",
      image: "./img/functionary-pic.png",
    },
    {
        title: "HackDocs",
        company: (
          <a href="https://github.com/Alexlihing/hackDocs" target="_blank" rel="noopener noreferrer">
            Link
          </a>
        ),
        content:
          "HackDocs is a centralized website that provides an accessible way for users to find answers to health-related questions, or get in touch with a medical professional. HackDocs uses FDA's Drug API to track necessary information on medicines, and OpenAI's API to provide tailored responses to user input.",
        date: "2025",
        image: "./img/hackdocs.png",
      },
  ];

  const headerStyle = {
    marginBottom: "0px", // Very small space after header
  };

  const companyStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    margin: "0px",
  };

  const dateStyle = {
    marginTop: "0", // No space above date
    padding: "0",
    marginBottom: "0px", // Minimal space before content
    fontSize: "0.9rem",
    color: "#555",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  return (
    <section className="testimonial--section" id="Projects">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Projects</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial--section--card">
            <img
              src={testimonial.image}
              alt={testimonial.title}
              style={imageStyle}
              className="testimonial--section--image"
            />
            <h3 style={headerStyle} className="testimonial--section--header">
              {testimonial.title}
            </h3>
            <p style={companyStyle} className="testimonial--section--company">
              {testimonial.company}
            </p>
            <h4 style={dateStyle} className="testimonial--section--date">
              {testimonial.date}
            </h4>
            <p className="text-md">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
