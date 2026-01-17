import "../../App.css";

export default function Testimonial() {
  const testimonials = [
      {
      title: "Software Engineering Intern",
      company: "Databricks",
      content:
        "Incoming Summer 2026 Summer Internship",
      date: "Summer 2026",
      image: "./img/databricks-logo2.png",
    },
    {
      title: "Software Development Engineer Intern",
      company: "Amazon Web Services",
      content:
        "During  my internship at Amazon Web Services, I worked under Redshift Vacuum, a cleanup feature for Amazon's cloud data warehouse service. My primary project involved developing new code generation logic for certain SQL operations to reduce fragmentation. I also worked on the internal calculations for fragmentation and sort benefit, directly providing these metrics to customers to show how Vacuum helped improve the overall state of their database.",
      date: "May 2025 - Aug 2025",
      image: "./img/aws-logo.jpg",
    },
    {
      title: "Research Assistant",
      company: "Univesity of Pennsylvania",
      content: "Currently, I am researching serverless computing at the University of Pennsylvania, advised by PhD Student Spyros Pavlatos and Professor Vincent Liu. My current work focuses on designing and implementing a serverless etcd prototype using DynaomDB streams, ultimately reducing operational overhead in distributed storage systems. We recently submitted a paper to a conference for publication.",      
      date: "Aug 2025 - Present",
      image: "./img/upenn_logo-3.png",
    },
    {
      title: "Consultant",
      company: "Purdue Solutions Consulting",
      content:
        "On campus, I am a consultant for Purdue Solutions Consulting. This semester, I'm working with a cybersecurity startup, focusing on Search Engine Optimization and Generative Engine Optimization. Last spring, I worked with CMF Panama, a financial instutition in Panama, developing a point of sale prototype, as well as providing technical recommendations to enhance customer outreach.",
      date: "Jan 2025 - Present",
      image: "./img/ps-logo.png",
    },
    {
      title: "Program Director",
      company: "Machine Learning @ Purdue",
      content:
        "Founder and director of the Machine Learning @ Purdue Accelerator Program, with the primary focus to bridge the gap between students who are seeking to develop foundational Machine Learning skills, and the lack of opportunities available. Developed teaching content plan and recruited post-graduate students to mentor 80+ students with a hands-on project.",
      date: "Oct 2024 - Present",
      image: "./img/mlp-logo.png",
    },
    {
      title: "Team Manager and Analyst",
      company: "Misfits Gaming Group",
      content:
        "Improved team rank from #40 to #6 globally during my two year tenure. Responsible for all day-to-day operations, including scheduling practices, accommodating for any players' needs, and resolving conflicts that arose. Assisted team's development through recording games and extracting data to determine the team's strengths and weaknesses, adjusting our practice plan accordingly. Reported to Senior VP of Operations through weekly meetings to update on team's progress and suggest strategic improvements.",
      date: "Oct 2021 - Oct 2023",
      image: "./img/msf-logo.webp",
    },
  ];

  const headerStyle = {
    marginBottom: "0px",
  };

  const companyStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    margin: "4px 0",
  };

  const dateStyle = {
    marginTop: "0",
    marginBottom: "4px",
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
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box" style={{ width: "100%", textAlign: "center" }}>
        <div className="portfolio--container">
          <h2 id="experience-title" className="sections--heading">
            Experience
          </h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {testimonials.map((testimonial, index) => {
          const customImageStyle =
            testimonial.image === "./img/ps-logo.png"
              ? { ...imageStyle, height: "315px", width: "200px", display: "block", margin: "0 auto" }
              : imageStyle;

          return (
            <div key={index} className="testimonial--section--card">
              <img
                src={testimonial.image}
                alt={testimonial.title}
                style={customImageStyle}
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
          );
        })}
      </div>
    </section>
  );
}
