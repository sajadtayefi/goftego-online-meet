import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <div className="bg-[#100F12] bg-my_bg_image overflow-hidden  font-dana">
      <Header />
      {children}
      <Footer />
    </div>
  )
}