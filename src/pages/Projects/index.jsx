import React, { useState } from "react";
import First from "./component/First";
import ProjectPopup from "./component/ProjectPopup";
import ProjectList from "./component/ProjectList";
import "./style.css";

const Ongoing = [
  {
    id: 1,
    title: "Pipeline Fitting Industry of KSA",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description:
      "A leading industry in KSA specializing in pipeline fitting solutions.",
    image: "https://via.placeholder.com/400", // Replace with actual image
  },
  {
    id: 2,
    title: "Al Rashid Trading & Contracting Co. (Jubail)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description:
      "Providing top-tier trading and contracting services in Jubail.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    title: "Honeywell Building Technologies (Riyadh)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description: "Innovating smart building solutions in Riyadh.",
    image: "https://via.placeholder.com/400",
  },
];
const Completed = [
  {
    id: 1,
    title: "Pipeline Fitting Industry of KSA",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description:
      "A leading industry in KSA specializing in pipeline fitting solutions.",
    image: "https://via.placeholder.com/400", // Replace with actual image
  },
  {
    id: 2,
    title: "Al Rashid Trading & Contracting Co. (Jubail)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description:
      "Providing top-tier trading and contracting services in Jubail.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    title: "Honeywell Building Technologies (Riyadh)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description: "Innovating smart building solutions in Riyadh.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 4,
    title: "Honeywell Building Technologies (Riyadh)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description: "Innovating smart building solutions in Riyadh.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 5,
    title: "Honeywell Building Technologies (Riyadh)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description: "Innovating smart building solutions in Riyadh.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 6,
    title: "Honeywell Building Technologies (Riyadh)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description: "Innovating smart building solutions in Riyadh.",
    image: "https://via.placeholder.com/400",
  },
  {
    id: 7,
    title: "Honeywell Building Technologies (Riyadh)",
    services: [
      "Instrumental Services",
      "Mechanical Services",
      "Instrumental Services",
      "Mechanical Services",
    ],
    description: "Innovating smart building solutions in Riyadh.",
    image: "https://via.placeholder.com/400",
  },
];

function index({ loading }) {
  const [expanded, setExpanded] = useState(false);
  const [projects, setProjects] = useState(Ongoing); // Default to Ongoing
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <First loading={loading} />
      <h3 className="text-[5vw] text-[#2c2c2c] mx-auto text-center montserrat font-semibold">Projects</h3>
      <ProjectList
        title="Ongoing"
        projects={Ongoing}
        setExpanded={setExpanded}
        setProjects={setProjects}
        setActiveIndex={setActiveIndex}
      />
      <ProjectList
        title="Completed"
        projects={Completed}
        setExpanded={setExpanded}
        setProjects={setProjects}
        setActiveIndex={setActiveIndex}
      />
      <ProjectPopup
        expanded={expanded}
        setExpanded={setExpanded}
        projects={projects}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="bg-[#d9d9d9] mx-auto mt-[0vh] mb-[4vh] text-[#000] w-[195px] h-[45px] border border-[#f2f2f2] rounded-3xl flex flex-center justify-center gap-5 items-center monsterrat">
        <p className="text-[16px] font-medium">Our Services</p>
        <img src="arrowlft.png" alt="Arrow left" />
      </div>
    </>
  );
}

export default index;
