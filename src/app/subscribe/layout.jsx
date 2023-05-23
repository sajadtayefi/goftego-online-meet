import Footer from "@/components/Footer";
import Header from "@/components/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="bg-[#100F12] bg-my_bg_image  font-dana">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
export default RootLayout