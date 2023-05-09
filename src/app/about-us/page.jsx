import Image from "next/image";
import AboutUs from "./components/About";
import AchievementsOfManaging from "./components/AchievementsOfManaging";
import WhyGoftego from "./components/WhyGoftego";
import VideoIntroduction from "./components/VideoIntroduction";

function Home() {
    return (
        <div>
            <AboutUs />
            <AchievementsOfManaging />
            <VideoIntroduction />
            <WhyGoftego />
        </div>
    );
}

export default Home;