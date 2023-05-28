import AchievementsOfManaging from "@/components/AchievementsOfManaging";
import CriticsAndSuggestions from "@/components/CriticsAndSuggestions";
import GoftegoSubscriptions from "@/components/GoftegoSubscriptions";
import OnlineMeetingManagementSoftware from "@/components/OnlineMeetingManagementSoftware";
import ShortDescriptionAboutOnlineMeeting from "@/components/ShortDescriptionAboutOnlineMeeting";
import SoftwareDownloadManageOnlineMeetings from "@/components/SoftwareDownloadManageOnlineMeetings";
import SupportOfChat from "@/components/SupportOfChat";
import VideoIntroduction from "@/components/VideoIntroduction";
import WhyGoftego from "@/components/WhyGoftego";


const Home = () => {
  return (
    <main className="">
      <div className=" overflow-hidden">
        <OnlineMeetingManagementSoftware />
        <AchievementsOfManaging />
        <ShortDescriptionAboutOnlineMeeting />
        <VideoIntroduction />
        <WhyGoftego />
        <SoftwareDownloadManageOnlineMeetings />
        <CriticsAndSuggestions />
        <SupportOfChat />
        <GoftegoSubscriptions />
      </div>
    </main>
  )
}
export default Home