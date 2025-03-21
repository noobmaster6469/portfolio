import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./css/Loaders.css";

const Loader = ({ onAnimationComplete }) => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".text-individual", {
      duration: 1.2,
      y: 100,
      opacity: 0,
      delay: 0.2,
      stagger: 0.4,
    });

    gsap.to(".text-individual", {
      css: {
        WebkitTextStrokeColor: "#14e956",
        WebkitTextStrokeWidth: "0.2vw",
      },
      delay: 0.2,
      stagger: 0.4,
      duration: 1.2,
      ease: "sine.in",
    });

    tl.to(".text-individual", {
      color: "#14e956",
      duration: 1,
    });

    tl.to(".text-individual", {
      y: -100,
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });

    tl.to(".mathi", {
      duration: 1,
      scaleY: 0,
      ease: "power1.inOut",
      transformOrigin: "top",
    });

    tl.to(".mathi", {
      display: "none",
      onComplete: () => {
        onAnimationComplete();
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }, // Callback to notify when the animation is done
    });

    return () => {
      tl.kill();
    };
  });

  const name = "BIJESH";
  return (
    <div className="mathi min-h-[100dvh] min-w-[100vw] flex justify-center items-center fixed top-0 left-0 z-[9999]  bg-black text-white overflow-hidden scroll-m-0 px-10 py-20">
      {name.split("").map((char, index) => (
        <span key={index} className="text-individual text-transparent">
          {char}
        </span>
      ))}
    </div>
  );
};

export default Loader;
