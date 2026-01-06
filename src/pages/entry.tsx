import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import albumImg from "/album.png";
import albumGlowImg from "/album-glow.png";

export const EntryPage = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-black w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-wrap flex-col md:flex-row fixed top-0 bg-black w-full items-center justify-center py-5 z-50 md:gap-4">
                <p className="font-title md:text-8xl text-5xl text-white">
                    THE TREES
                </p>
                <p className="font-title md:text-8xl text-5xl text-white">
                    SHOUT BACK
                </p>
            </div>

            <button
                className="relative hover:cursor-pointer mt-28.5"
                onClick={() => navigate("/home")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    className="md:w-[50vw] mx-auto w-[95%] border-2 border-white"
                    src={albumImg}
                />
                <motion.img
                    className="md:w-[50vw] hidden md:block w-[95%] border-2 border-white absolute top-0 left-0"
                    src={albumGlowImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </button>
        </div>
    );
};
