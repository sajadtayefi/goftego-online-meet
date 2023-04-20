import AchievementsOfManaging from "@/components/AchievementsOfManaging";
import OnlineMeetingManagementSoftware from "@/components/OnlineMeetingManagementSoftware";
import ShortDescriptionAboutOnlineMeeting from "@/components/ShortDescriptionAboutOnlineMeeting";
import SoftwareDownloadManageOnlineMeetings from "@/components/SoftwareDownloadManageOnlineMeetings";
import VideoIntroduction from "@/components/VideoIntroduction";
import WhyGoftego from "@/components/WhyGoftego";

export default function Home() {
  return (
    <main className="">
      <div className=" ">
        <OnlineMeetingManagementSoftware />
        <AchievementsOfManaging />
        <ShortDescriptionAboutOnlineMeeting />
        <VideoIntroduction />
        <WhyGoftego />
        <SoftwareDownloadManageOnlineMeetings />
      </div>
    </main>
  )
}
