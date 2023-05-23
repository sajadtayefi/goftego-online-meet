import './globals.css';
import { GlobalContextProvider } from './context/store';


export const metadata = {
  title: 'Goftego',
  description: 'Online meeting management software Conversation',
};

const RootLayout = ({ children }) => {

  return (
    <html dir='rtl' lang="fa">
      <body className="bg-[#100F12] bg-my_bg_image font-dana">
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
export default RootLayout