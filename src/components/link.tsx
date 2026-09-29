import { LuExternalLink } from "react-icons/lu";
import { motion } from "motion/react";
import type { ComponentType } from "react";

type IconComponent = ComponentType<{ className?: string }>;

export const Link = ({
    title,
    link,
    icon: Icon,
}: {
    title: string;
    link: string;
    icon: IconComponent;
}) => {
    return (
        <>
            <motion.button
                className="flex font-title rounded-xl p-2 text-left border border-black hover:border-black hover:bg-bg/50 hover:backdrop-blur-sm hover:shadow-lg hover:cursor-pointer transition-all duration-300 bg-bg w-100"
                whileHover={{
                    scale: 1.05,
                }}
                transition={{
                    duration: 0.05,
                    ease: "easeOut",
                }}
                onClick={() => window.open(link)}
            >
                <div className="grid grid-cols-3 w-full h-full items-center">
                    <div className="flex">
                        <Icon className="h-12 w-12" />
                    </div>

                    <div className="flex justify-center">
                        <p className="font-thin text-2xl md:text-text text-overlay2">
                            {title}
                        </p>
                    </div>

                    <div className="flex justify-end">
                        <LuExternalLink className="w-8 h-8" />
                    </div>
                </div>
            </motion.button>
        </>
    );
};
