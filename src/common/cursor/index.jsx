import React, {
  useEffect,
  useRef,
  useContext,
  useState
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CursorContext } from "../../assets/context/cursorContext";
import { motion } from "framer-motion";

function Cursor() {
  const cursorRef = useRef(null);
  const { cursorVariant } = useContext(CursorContext);
  const [cursorVisible, setCursorVisible] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const cursorSize = {
    default: 20,
    hover: 100,
    click: 5,
    invisible: 0,
    big: 100,
  };

  const cursorStyles = {
    default: "bg-[#FF6A39]",
    hover: "bg-[#fff]",
    click: "bg-[#FF6A39]",
    invisible: "bg-[#FF6A39]",
    big: "bg-[#FF6A39]",
  };

  const moveCursor = (e) => {
    setCoordinates({ x: e.clientX, y: e.clientY });
  };

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      translateX: coordinates.x,
      translateY: coordinates.y,
    });
    gsap.to(cursor, {
      duration: 0.3,
      x: coordinates.x,
      y: coordinates.y,
      duration: 0.2,
      ease: "power1",
    });
  }, [coordinates]);

  useEffect(() => {
    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [moveCursor]);

  return (
    <motion.div
      ref={cursorRef}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center ${
        cursorStyles[cursorVariant.cursorVariant]
      }`}
      animate={{
        width: cursorSize[cursorVariant.cursorVariant] + "px",
        height: cursorSize[cursorVariant.cursorVariant] + "px",
        opacity: cursorVisible ? 1 : 0,
      }}
      transition={{
        width: { duration: 0.3, ease: "easeOut" },
        height: { duration: 0.3, ease: "easeOut" },
        opacity: { duration: 0.3, ease: "easeOut" },
      }}
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform, width, height",
      }}
    >
      {cursorVariant.text && (
        <p className="text-sm font-monsterrat text-black">
          {cursorVariant.textWords}
        </p>
      )}
    </motion.div>
  );
}

export default Cursor;
