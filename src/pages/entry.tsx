import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const EntryPage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-black w-full min-h-screen flex items-center justify-center">
      <div className="flex fixed top-0 bg-black w-full items-center justify-center py-5 z-50">
        <p className="flex font-title text-8xl text-white">
          THE TREES SHOUT BACK
        </p>
      </div>

      <button
        className="relative hover:cursor-pointer mt-28.5"
        onClick={() => navigate("/home")}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img className="w-200 border-2 border-white" src="/album.png" />
        <motion.img
          className="w-200 border-2 border-white absolute top-0 left-0"
          src="/album-glow.png"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
    </div>
  );
};
