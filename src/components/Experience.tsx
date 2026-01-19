// import Terminal from "./Terminal";
import StackedTerminals from "./StackedTerminals";

export const Experience = () => {
    const terminals = [
        {
          id: "ub-education",
          title: "University at Buffalo",
          logo: "/logos/ub.png", // optional
          objectName: "education",
          data: {
            degree: "Master of Science",
            major: "Computer Science & Engineering (AI/ML Track)",
            university: "University at Buffalo, SUNY",
            period: "Aug 2024 – Dec 2025",
            coursework:
              "Algorithms, Data Models & Query Languages, Machine Learning, Deep Learning",
          },
          fileName: "education.jsx",
        },
      
        {
          id: "spear-education",
          title: "Spear Education LLC",
          logo: "/logos/spear.png", // optional
          objectName: "job",
          data: {
            company: "Spear Education LLC",
            role: "Full Stack Software Engineer Intern",
            duration: "May 2025 – Aug 2025",
            location: "Scottsdale, AZ",
            technologies:
              "AWS Lambda, GraphQL, React, TypeScript, DynamoDB, LaunchDarkly, Vitest",
            description:
              "Built and scaled a CE credit management system for dental professionals. Architected GraphQL resolvers on AWS Lambda handling 10K+ daily API calls with sub-200ms P95 latency. Developed modular React dashboards with Material UI and achieved 90%+ test coverage using Vitest.",
          },
          fileName: "spear-education.jsx",
        },
      
        {
          id: "ltimindtree",
          title: "LTIMindtree",
          logo: "/logos/ltimindtree.png", // optional
          objectName: "job",
          data: {
            company: "LTIMindtree Ltd",
            role: "Software Engineer",
            duration: "Jul 2022 – Jul 2024",
            location: "Bangalore, India",
            technologies: "Python, FastAPI, React, Microservices",
            description:
              "Owned and scaled a FastAPI-based analytics microservice supporting internal dashboards with peak loads of 2K req/min and 200ms P95 latency. Built multiple React dashboards, participated in production on-call rotations, conducted RCA, and led onboarding and knowledge-transfer sessions for new interns.",
          },
          fileName: "ltimindtree.jsx",
        },
      
        {
          id: "mindtree-intern",
          title: "Mindtree",
          logo: "/logos/mindtree.png", // optional
          objectName: "internship",
          data: {
            company: "Mindtree Ltd",
            role: "Software Engineer Intern",
            duration: "Feb 2022 – May 2022",
            location: "Bangalore, India",
            technologies: "Java, Spring Boot, SQL, Git",
            description:
              "Developed REST APIs using Spring Boot for a leave-management system, improving approval efficiency by 40%. Authored extensive technical documentation and resolved 50+ Git merge conflicts during high-velocity sprints.",
          },
          fileName: "mindtree.jsx",
        },
      
        {
          id: "ruas-education",
          title: "MS Ramaiah University",
          logo: "/logos/ruas.png", // optional
          objectName: "education",
          data: {
            degree: "Bachelor of Technology",
            major: "Computer Science & Engineering",
            university: "M.S. Ramaiah University of Applied Sciences",
            period: "Aug 2018 – May 2022",
            coursework:
              "Data Structures, Data Science, DBMS, Cloud Computing, Operating Systems",
          },
          fileName: "ruas.jsx",
        },
      ];
      


  return (
    <>
    <section className="experience" id="experience">
    <h2 id='experience-header'>Experience</h2>
  
      <StackedTerminals terminals={terminals} />

    
    </section>

    </>
  );
};
