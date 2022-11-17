import React from "react";
import PageSection from "./PageSection";
import heroVideo from "../assets/heroVideo.mp4";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"

import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Prodcuts = () => {
  const products = [
    {
      id: 1,
      img: <img className="img" src={img1} alt="Image" />,
      icon: <FaRocket size={50} className="text-white" />,
      title: "Vehicle Counter",
      subtitle:
        "Please click here to check the number of incoming/outging vehicles.",
    },
    {
      id: 2,
      img: <img className="img" src={img2} alt="Image" />,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "Parking Spot",
      subtitle:
        "Click here to view the vacant parking spots and to allocate it.",
    },
    {
      id: 3,
      img: <img className="img" src={img3} alt="Image" />,
      icon: <FaRobot size={50} className="text-white" />,
      title: "Number Plate",
      subtitle:
        "Click here to detect the vehicle registration number and store it.",
    },
    {
      id: 4,
      img: <img className="img" src={img4} alt="Image" />,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "Feature #4",
      subtitle:
        "Still under development TBA.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Dashboard"
      subtitle={`Please click on the hovering flashcards to get a detailed view of the camera. Contact the adminstrator for the further queries.`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, img, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-0 m-0">{img}</div>
            </div>
            <h1 className="text-3xl lg:text-5xl my-8 capitalize">{title}</h1>
            <p className="text-lg">{subtitle}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default Prodcuts;
