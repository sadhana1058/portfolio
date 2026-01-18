import Terminal from "./Terminal";

export const About = () => {
  return (
    <>
     <Terminal 
  objectName="education"
  data={{
    degree: "MASTERS DEGREE",
    major: "Computer Science (AI/ML Track)",
    university: "University at Buffalo, SUNY",
    period: "2024-2026",
    status: "In Progress"
  }}
  fileName="education.jsx"
/>

<Terminal 
  objectName="hobbies"
  data={{
    coding: "Building AI Applications",
    sports: "Basketball & Running",
    music: "Guitar & Piano",
    reading: "Sci-Fi & Tech Books"
  }}
  fileName="hobbies.jsx"
  typingSpeed={60}
/>

    <section className="about" id="about">
       
     
    </section>
    </>
  );
};
