import { Link } from "@/components/link";
import bgImage from "/trees.jpg";
import { motion } from "motion/react";

import {
    FaSoundcloud,
    FaSpotify,
    FaBandcamp,
    FaInstagram,
    FaTiktok,
} from "react-icons/fa";

export const MainPage = () => {
    return (
        <div
            className="w-full min-h-screen bg-cover flex flex-col bg-fixed overflow-x-hidden scrollbar-thin"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* title */}
            <div className="flex flex-wrap flex-col md:flex-row fixed top-0 bg-black w-full items-center justify-center py-5 z-50 md:gap-4">
                <p className="font-title md:text-8xl text-5xl text-white">
                    THE TREES
                </p>
                <p className="font-title md:text-8xl text-5xl text-white">
                    SHOUT BACK
                </p>
            </div>

            {/* links */}
            <div className="flex flex-col space-y-5 gap-2 min-h-screen flex-1 w-screen items-center justify-center">
                <Link
                    title="Spotify"
                    link="https://open.spotify.com/artist/7b03yztvuP9MJd6y1Yik8f"
                    icon={FaSpotify}
                />

                <Link
                    title="Bandcamp"
                    link="https://thetreesshoutback.bandcamp.com/album/environmental-storytelling"
                    icon={FaBandcamp}
                />

                <Link
                    title="Instagram"
                    link="https://www.instagram.com/thetreesshoutback?igsh=Njdlam1kc2UwZ3Vp"
                    icon={FaInstagram}
                />

                <Link
                    title="TikTok"
                    link="https://www.tiktok.com/@thetreesshoutback?_r=1&_t=ZT-92oBzyOoHRG"
                    icon={FaTiktok}
                />

                <Link
                    title="Soundcloud"
                    link="https://soundcloud.com/the-trees-shout-back/"
                    icon={FaSoundcloud}
                />

                <div className="flex flex-col items-center justify-center font-title">
                    <p>Want updates on future projects?</p>
                    <p>
                        Join our{" "}
                        <motion.a
                            href="https://forms.gle/HBmCxDQM9ozyUM1Q8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-md bg-bg px-2 py-0.5 text-black hover:bg-bg/50 border"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.05, ease: "easeOut" }}
                        >
                            mailing list!
                        </motion.a>
                    </p>
                </div>
            </div>

            {/* footer */}
            <div className="flex justify-center">
                <img src={"happytree.png"} className="h-48"></img>
            </div>
        </div>
    );
};
