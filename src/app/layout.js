import './globals.css';


export const metadata = {
  title: 'Goftego',
  description: 'Online meeting management software Conversation',
};


const RootLayout = ({ children }) => {

  return (
    <html dir='rtl' lang="fa">
      <body className="bg-[#100F12] bg-my_bg_image font-dana">
        {children}
      </body>
    </html>
  );
}
export default RootLayout