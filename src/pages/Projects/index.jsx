import React, { useState } from "react";
import First from "./component/First";
import Second from "./component/Second";
import Third from "./component/Third";
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

function index() {
  const [expanded, setExpanded] = useState(false);
const [projects, setProjects] = useState(Ongoing); // Default to Ongoing
const [activeIndex, setActiveIndex] = useState(0);

return (
  <>
    <First />
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
  </>
);

}

export default index;
