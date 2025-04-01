import { useState } from "react";
import { motion } from "framer-motion";
import { div } from "motion/react-client";

const projects = [
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

export default function Second() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="w-full h-[auto] flex flex-col items-center justify-center gap-[2vh] bg-red-500 text-[#2c2c2c]">
      <h2 className="text-[6vw] leading-none tracking-tighter montserrat font-semibold">
        Projects
      </h2>
      <div className="flex flex-col px-[3vw] text-[#2c2c2c] w-[80%]">
        <h1 className="text-[2vw] uppercase font-semibold montserrat w-full">
          Ongoing:
        </h1>
        <div className="flex flex-col gap-[3vh]">
          <div className="w-full flex flex-row justify-between gap-[2vw] bg-blue-500 py-4 border-t border-b pr-3 tracking-tight">
            <div className="flex w-1/2 items-center justify-center gap-1">
              <p>1.</p>
              <div className="flex flex-col justify-between">
                <h4 className="text-xl font-medium">Pipeline Fitting Industry of KSA</h4>
                <div className="flex flex-row w-2/3 gap-2 leading-none flex-wrap">
                  <p>Instrumental Services</p>
                  <p>Instrumental Services</p>
                  <p>Instrumental Services</p>
                  <p>Instrumental Services</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-end">
              <p>View More</p> 
            </div>
          </div>
          <div className="w-full flex flex-row justify-between gap-[2vw]">
            <div className="flex w-1/2">
              <p>1.</p>
              <div className="flex flex-col justify-between">
                <h4>Pipeline Fitting Industry of KSA</h4>
                <div className="flex flex-row flex-wrap">
                  <p>Instrumental Services</p>
                  <p>Instrumental Services</p>
                  <p>Instrumental Services</p>
                  <p>Instrumental Services</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-1/2">
              <p>View More</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
