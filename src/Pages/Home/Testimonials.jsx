import "../../App.css"
export default function Testimonial() {

  const testimonials = [
    {
      title: "MealsMatter",
      company: (
        <a href="https://github.com/Alexlihing/meals-matter" target="_blank" rel="noopener noreferrer">
          Project
        </a>
      ),
      content:
        "MealsMatter is a platform dedicated to reducing food waste in local communities. By utilizing the Geolocation and Google Maps APIs, it connects food distributors, such as food courts, restaurants, and grocery stores, with local homeless shelters and less-fortunate individuals who could make use of food that would otherwise be thrown out.",
      date: "Oct 2024",
      image: "./img/realLogo.webp",
    },
    {
      title: "Program Director",
      company: "Machine Learning @ Purdue",
      content:
        "Founder and director of the Machine Learning @ Purdue Accelerator Program, with the primary focus to bridge the gap between students who are seeking to develop foundational Machine Learning skills, and the lack of opportunities available to them at Purdue. Responsible for developing teaching layout plan and content and recruiting professors and post-graduate students to mentor students with a hands-on project.",
      date: "Oct 2024 - Present",
      image: "./img/mlp-logo.png",
    },
    {
      title: "Undergraduate Data Science Researcher",
      company: "Purdue University - The Data Mine",
      content:
        "Responsible for analyzing data sets in R, SQL, and Python to extract information and enhance data-driven decision making. Next year, I will be partnering with a corporate company (TBD) to develop data-analysis tools.",
      date: "Aug 2024 - Present",
      image: "./img/purdue-logo.png",
    },
    {
      title: "Consultant",
      company: "Consult Your Community",
      content:
        "Partnered with Fruition Technologies, LLC, to develop a strategic plan for entering the Robotics market. Performed market research and completed a thorough financial analysis to determine pricing strategy and product composition. Developed a 6-month plan for implementation, including social media initiatives and events to facilitate brand growth.",
      date: "Aug 2024 - Present",
      image: "./img/cyc-logo.png",
    },
    {
      title: "Team Manager and Analyst",
      company: "Misfits Gaming Group",
      content:
        "Improved team rank from #40 to #6 globally during my two year tenure. Responsible for all day-to-day operations, including scheduling practices, accommodating for any players' needs, and resolving conflicts that arose. Assisted team's development through recording games and extracting data to determine the team's strengths and weaknesses, adjusting our practice plan accordingly. Reported to Senior VP of Operations through weekly meetings to update on team's progress and suggest strategic improvements.",
      date: "Oct 2021 - Oct 2023",
      image: "./img/msf-logo.webp",
    },
    {
      title: "Personal Finance Challenge National Finalist",
      company: "National Personal Finance Challenge - Sponsored by Voya",
      content:
        "California State Champion and National Finalist in the Personal Finance Challenge. Demonstrated ability to grasp and communicate topics at a professional level through presenting full financial plans of fictitious case studies to panels of professional judges from Bank of America and Voya.",
      date: "May 2024",
      image: "./img/voya-logo.png",
    },
  ];

  const headerStyle = {
    marginBottom: "0px", // Very small space after header
  };

  const companyStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
    margin: "4px 0",
  };

  const dateStyle = {
    marginTop: "0", // No space above date
    marginBottom: "4px", // Minimal space before content
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
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Experience</h2>
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
