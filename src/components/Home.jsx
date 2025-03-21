import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/Home.css";
import mainImage from "../assets/main1.svg";

const Home = () => {
  useGSAP(() => {
    gsap.from(".left", {
      duration: 1.5,
      x: -100,
      opacity: 0,
      delay: 6,
      stagger: 0.4,
      ease: "back.inOut",
    });
    gsap.from(".right", {
      duration: 1.5,
      x: 100,
      opacity: 0,
      delay: 6,
      stagger: 0.4,
      ease: "back.inOut",
    });
  });

  return (
    <div className="bg flex justify-center gap-1 items-center inside w-[100%] text-white px-4">
      <div className="left w-1/2 flex flex-col  ">
        <div className="top w-[fit-content] pr-3 pl-1 py-1 rounded-md text-[#14e959] flex items-center justify-center font-extrabold">
          <span className="emoji text-[#500082] flex items-center ">✌🏻</span>
          Hi There! I'm Bijesh
        </div>

        <div className="intro capitalize">
          A <span>Fullstack Developer</span> and a <span>Web Designer</span>. I
          build <span>Websites</span> for businesses to <span>grow</span>.
        </div>
      </div>

      <div className="right flex items-center justify-center ">
        <img
          src={mainImage}
          alt="Illustration of Bijesh Neupane"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Home;
