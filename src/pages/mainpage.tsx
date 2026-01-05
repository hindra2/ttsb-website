import { Link } from "@/components/link";

export const MainPage = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/trees.jpg')] bg-cover flex flex-col bg-fixed overflow-x-hidden scrollbar-thin">
      {/* title */}
      <div className="flex fixed top-0 bg-black w-full items-center justify-center py-5 z-50">
        <p className="flex font-title text-8xl text-white">
          THE TREES SHOUT BACK
        </p>
      </div>

      {/* links */}
      <div className="flex flex-col space-y-5 gap-2 min-h-screen flex-1 w-screen items-center justify-center">
        <Link
          title="Spotify"
          link="https://open.spotify.com/artist/7b03yztvuP9MJd6y1Yik8f"
          icon_path="/logos/spotify.png"
        />

        <Link
          title="Bandcamp"
          link="https://thetreesshoutback.bandcamp.com/album/environmental-storytelling"
          icon_path="/logos/bandcamp.png"
        />

        <Link
          title="Instagram"
          link="https://www.instagram.com/thetreesshoutback?igsh=Njdlam1kc2UwZ3Vp"
          icon_path="/logos/instagram.png"
        />

        <Link
          title="TikTok"
          link="https://www.tiktok.com/@thetreesshoutback?_r=1&_t=ZT-92oBzyOoHRG"
          icon_path="/logos/tiktok.png"
        />

        <Link
          title="YouTube"
          link="https://www.youtube.com/@thetreesshoutback"
          icon_path="/logos/youtube.png"
        />
      </div>

      {/* footer */}
      <div className="flex justify-center">
        <img src={"happytree.png"} className="h-48"></img>
      </div>
    </div>
  );
};
