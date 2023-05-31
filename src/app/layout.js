import Head from 'next/head';
import './globals.css';
import Link from 'next/link';


export const metadata = {
  title: 'Goftego',
  description: 'Online meeting management software Conversation',

};
const RootLayout = ({ children }) => {

  return (

    <html dir='rtl' lang="fa">
      <Head>
        <Link>
        </Link>
      </Head>
      <body className="bg-[#100F12] bg-my_bg_image font-dana">
        {children}
      </body>
    </html>
  );
}
export default RootLayout