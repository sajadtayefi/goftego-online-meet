import AchievementsOfManaging from "@/components/AchievementsOfManaging";
import CriticsAndSuggestions from "@/components/CriticsAndSuggestions";
import GoftegoSubscriptions from "@/components/GoftegoSubscriptions";
import OnlineMeetingManagementSoftware from "@/components/OnlineMeetingManagementSoftware";
import ShortDescriptionAboutOnlineMeeting from "@/components/ShortDescriptionAboutOnlineMeeting";
import SoftwareDownloadManageOnlineMeetings from "@/components/SoftwareDownloadManageOnlineMeetings";
import SupportOfChat from "@/components/SupportOfChat";
import VideoIntroduction from "@/components/VideoIntroduction";
import WhyGoftego from "@/components/WhyGoftego";
import Footer from '@/components/Footer'
import Header from '../components/Header'
export default function Home() {
  return (
    <main className="">
      <div className=" overflow-hidden">
        <Header />
        <OnlineMeetingManagementSoftware />
        <AchievementsOfManaging />
        <ShortDescriptionAboutOnlineMeeting />
        <VideoIntroduction />
        <WhyGoftego />
        <SoftwareDownloadManageOnlineMeetings />
        <CriticsAndSuggestions />
        <SupportOfChat />
        <GoftegoSubscriptions />
        <Footer />
      </div>
    </main>
  )
}