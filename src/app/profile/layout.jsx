import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <div className="bg-[#100F12] bg-my_bg_image  font-dana">
      <Header />
      {children}
    </div>
  )
}