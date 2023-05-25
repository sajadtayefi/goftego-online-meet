import Footer from "@/components/Footer";
import Header from "@/components/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-[#100F12] bg-my_bg_image overflow-hidden  font-dana">
      {children}
    </div>
  )
}
export default RootLayout