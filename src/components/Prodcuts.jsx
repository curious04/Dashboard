import React from "react";
import PageSection from "./PageSection";
import heroVideo from "../assets/heroVideo.mp4";

import { FaRocket, FaSatellite, FaRobot, FaMicrochip } from "react-icons/fa";

const Prodcuts = () => {
  const products = [
    {
      id: 1,
      icon: <FaRocket size={50} className="text-white" />,
      title: "rocket manufacturing",
      subtitle:
        "t hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 2,
      video: <video
      src={heroVideo}
      autoPlay
      loop
      muted
      // className="object-cover h-full w-full absolute -z-10"
    />,
      icon: <FaMicrochip size={50} className="text-white" />,
      title: "advanced electronics",
      subtitle:
        "ut hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 3,
      icon: <FaRobot size={50} className="text-white" />,
      title: "robotics",
      subtitle:
        "ng, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
    {
      id: 4,
      icon: <FaSatellite size={50} className="text-white" />,
      title: "payload to orbit",
      subtitle:
        "Fact from wing smiling, but hear lamplight entrance tempest a name i, sitting gave name each the quoth my door his implore. I i nothing.",
    },
  ];

  return (
    <PageSection
      name="products"
      title="Dashboard"
      subtitle={`Plainly lamplight whether evermore thereat tell, we or scarce bird spoken he whether on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite..`}
    >
      <div className="grid lg:grid-cols-2 gap-12 text-black">
        {products.map(({ id, video, icon, title, subtitle }) => (
          <div
            key={id}
            className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-black rounded-full p-5 m-4">{video}</div>
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