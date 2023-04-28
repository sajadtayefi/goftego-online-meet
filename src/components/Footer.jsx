import { FooterItems } from "@/constant/FooterItems";
import Image from "next/image";
import Btn from "./common/Btn";

function Footer() {
    return (
        <div className="bg-footer bg-contain flex flex-col pt-28  text-white   ">
            <div className="container mx-auto flex flex-row  justify-center items-start pt-20 pb-16">
                <div className="flex flex-col w-[400px] justify-center items-start  ">
                    <h2 className="text-primary text-3xl mb-5">
                        گفتگو
                    </h2>
                    <p className="text-sm leading-7 tracking-wide mb-3  ">
                        خالد حسینی تو رمان باد بادک باز مینویسه : ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮﺩ : ” ﭘﺴﺮﻡ ﺩﺭ ﺯﻧﺪﮔﯽ ﻫﺮﮔﺰ ﺩﺯﺩﯼ ﻧﮑﻦ ” ﭘﺴﺮ ﻣﺘﻌﺠﺐ ﻭ ﻣﺒﻬﻮﺕ ﺑﻪ ﭘﺪﺭ ﻧﮕﺎﻩ ﮐﺮﺩ ﺑﺪﯾﻦ ﻣﻌﻨﺎ ﮐﻪ ﺍﻭ ﻫﺮﮔﺰ ﺩﺳﺖ ﮐﺞ ﻧﺪﺍﺷﺘﻪ ﭘﺪﺭ ﺑﻪ ﻧﮕﺎﻩ ﻣﺘﻌﺠﺐ ﻓﺮﺯﻧﺪ ﻟﺒﺨﻨﺪﯼ ﺯﺩ ﻭ ﺍﺩﺍﻣﻪ ﺩﺍﺩ : ﺩﺭ ﺯﻧﺪﮔﯽ ﺩﺭﻭﻍ ﻧﮕﻮ ﭼﺮﺍ ﮐﻪ ﺍﮔﺮ ﮔﻔﺘﯽ ﺻﺪﺍﻗﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﯿﺎﻧﺖ ﻧﮑﻦ ﮐﻪ ﺍﮔﺮ ﮐﺮﺩﯼ ﻋﺸﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﺸﻮﻧﺖ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﻣﺤﺒﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﻧﺎ ﺣﻖ ﻧﮕﻮ ﺍﮔﺮ ﮔﻔﺘﯽ ﺣﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺑﯽ ﺣﯿﺎﯾﯽ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﺷﺮﺍﻓﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍی... ﭘﺲ ﺩﺭ ﺯﻧﺪﮔﯽ ﻓﻘﻂ ﺩﺯﺩﯼ نکن !
                    </p>
                    <Image src={"/picture/QRcode.png"} height={100} width={100} />
                </div>
                <div className="w-[400px] flex flex-col items-center justify-center">
                    <h2 className="mb-2 text-2xl">
                        لینک سریع
                    </h2>
                    {FooterItems.map((titles, index) => (
                        <li className="list-none mt-5 text-sm" key={index}>
                            {titles.text}
                        </li>
                    ))}
                </div>
                <div className=" w-[400px] flex flex-col items-start justify-center text-right h-[]">
                    <h3 className="text-2xl mb-5">
                        خبرنامه
                    </h3>
                    <p className="text-sm tracking-wide">
                        ایمیل خود را وارد نمایید تا از خبرها و بروزرسانی های نرم افزار گفتگو با خبر شوید.
                    </p>
                    <div className="bg-[#404040] w-[400px] py-2 pl-1 pr-10 flex flex-row-reverse rounded-xl self-center mt-10">
                        <Btn

                            text="ارسال"
                            cname=" bg-primary rounded-xl py-3 px-10" />
                        <input dir="" placeholder="Example@gmail.com" className="bg-[#404040] placeholder-rtl  appearance-none flex items-center justify-center p-2 outline-none text-right " type="text" />
                    </div>
                    <div className="flex flex-row-reverse justify-between items-center w-full mt-32 ">
                        <Image src={"/picture/logonamad 1.png"} width={75} height={75} />
                        <Image src={"/picture/namadsabt 1.png"} width={75} height={75} />
                        <Image src={"/picture/enamad 1.png"} width={100} height={100} />
                    </div>

                </div>
            </div>
            <h5 className="mb-5 text-center">
                تمامی حقوق مادی و معنوی این وبسایت مربوط به شرکت ایده پردازان پدیده نویافت می باشد.
            </h5>
        </div>
    );
}

export default Footer;