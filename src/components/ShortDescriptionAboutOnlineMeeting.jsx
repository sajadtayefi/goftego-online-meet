import Image from "next/image";
import Btn from "../app/common/Btn";

function ShortDescriptionAboutOnlineMeeting() {
    return (
        <div className=" container relative w-full lg:pt-40  mx-auto flex lg:flex-row-reverse flex-col items-center lg:justify-around mb-20 lg:mb-64 ">
            <Image className=" hidden lg:flex absolute -left-[183px] -z-10 top-0 " src={'/picture/Light For About Us.png'} width={1000} height={1000} />
            <Image className="w-[500px] h-[400px]" src={'/picture/Image About US.svg'} width={350} height={350} />
            <div className="flex flex-col w-full lg:w-1/2 text-white justify-center p-4 lg:p-0 ">
                <h4 className="text-white text-4xl lg:text-5xl mb-4 leading-relaxed  ">
                    توضیحاتی کوتاه درباره
                    <br className="" />نرم افزار مدیریت جلسات آنلاین <br className=" hidden xl:flex" /><span className="text-secondary">گفتگو</span>
                </h4>
                <Image className="my-4" src={'/icons/Icon.png'} width={44} height={44} />
                <h4 className="text-SecendryDark text-2xl mb-4">
                    ظاهری نرم افزار
                </h4>
                <p className="text-sm mb-4 xl:w-[600px] leading-6 ">
                    خالد حسینی تو رمان باد بادک باز مینویسه : ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮﺩ : ” ﭘﺴﺮﻡ ﺩﺭ ﺯﻧﺪﮔﯽ ﻫﺮﮔﺰ ﺩﺯﺩﯼ ﻧﮑﻦ ” ﭘﺴﺮ ﻣﺘﻌﺠﺐ ﻭ ﻣﺒﻬﻮﺕ ﺑﻪ ﭘﺪﺭ ﻧﮕﺎﻩ ﮐﺮﺩ ﺑﺪﯾﻦ ﻣﻌﻨﺎ ﮐﻪ ﺍﻭ ﻫﺮﮔﺰ ﺩﺳﺖ ﮐﺞ ﻧﺪﺍﺷﺘﻪ ﭘﺪﺭ ﺑﻪ ﻧﮕﺎﻩ ﻣﺘﻌﺠﺐ ﻓﺮﺯﻧﺪ ﻟﺒﺨﻨﺪﯼ ﺯﺩ.
                </p>
                <Image className="mb-4" src={'/icons/Icon (1).png'} width={44} height={44} />
                <h4 className="text-SecendryDark text-2xl mb-4">
                    فنی و مهندسی نرم افزار
                </h4>
                <p className="xl:w-[620px] text-sm leading-6 mb-4">
                    ﺧﯿﺎﻧﺖ ﻧﮑﻦ ﮐﻪ ﺍﮔﺮ ﮐﺮﺩﯼ ﻋﺸﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﺸﻮﻧﺖ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﻣﺤﺒﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﻧﺎ ﺣﻖ ﻧﮕﻮ ﺍﮔﺮ ﮔﻔﺘﯽ ﺣﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺑﯽ ﺣﯿﺎﯾﯽ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﺷﺮﺍﻓﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍی... ﭘﺲ ﺩﺭ ﺯﻧﺪﮔﯽ ﻓﻘﻂ ﺩﺯﺩﯼ نکن !
                </p>
                <Btn
                    cname="bg-primary rounded-md py-4 px-8 xl:w-[200px] w-[150px] text-[14px] "
                    text="بیشتر بدانید"
                />
            </div>
        </div>
    );
}

export default ShortDescriptionAboutOnlineMeeting;