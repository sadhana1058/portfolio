import Terminal from "./Terminal";

export const Education = () => {
  return (
    <>
<section className="education" id="education">
    <h2 id = 'education-header'>Education</h2>
     <Terminal 
  objectName="education- post graduate degree"
  data={{
    degree: "MASTERS DEGREE",
    major: "Computer Science (AI/ML Track)",
    university: "University at Buffalo, SUNY",
    period: "2024-2026",
    status: "Graduated"
  }}
  fileName="education.jsx"
/>
<Terminal 
  objectName="education- undergraduate degree"
  data={{
    degree: "BACHELORS DEGREE",
    major: "Computer Science",
    university: "Ramaiah University of Applied Sciences",
    period: "2018-2022",
    status: "Graduated"
  }}
  fileName="education.jsx"
/>     
    </section>
    </>
  );
};
