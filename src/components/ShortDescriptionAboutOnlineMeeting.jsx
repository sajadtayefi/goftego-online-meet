import Image from "next/image";
import Btn from "./common/Btn";

function ShortDescriptionAboutOnlineMeeting() {
    return (
        <div className=" container relative w-full pt-40  mx-auto flex flex-row-reverse justify-around mb-64 ">
            <Image className="absolute -left-[183px] -z-10 top-0 " src={'/picture/Light For About Us.png'} width={1000} height={1000} />
            <Image className="w-[500px] h-[500px]" src={'/picture/Image About US.png'} width={350} height={350} />
            <div className="flex flex-col w-1/2 text-white">
                <h4 className="text-white text-5xl mb-4 ">
                    توضیحاتی کوتاه درباره
                </h4>
                <h4 className="text-5xl mb-4 ">

                    نرم افزار مدیریت جلسات آنلاین
                </h4>
                <h4 className="text-secondary text-5xl mb-4">
                    گفتگو
                </h4>
                <Image className="my-4" src={'/icons/Icon.png'} width={44} height={44} />
                <h4 className="text-SecendryDark text-2xl mb-4">
                    ظاهری نرم افزار
                </h4>
                <p className="text-sm mb-4 w-[600px] leading-6 ">
                    خالد حسینی تو رمان باد بادک باز مینویسه : ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮﺩ : ” ﭘﺴﺮﻡ ﺩﺭ ﺯﻧﺪﮔﯽ ﻫﺮﮔﺰ ﺩﺯﺩﯼ ﻧﮑﻦ ” ﭘﺴﺮ ﻣﺘﻌﺠﺐ ﻭ ﻣﺒﻬﻮﺕ ﺑﻪ ﭘﺪﺭ ﻧﮕﺎﻩ ﮐﺮﺩ ﺑﺪﯾﻦ ﻣﻌﻨﺎ ﮐﻪ ﺍﻭ ﻫﺮﮔﺰ ﺩﺳﺖ ﮐﺞ ﻧﺪﺍﺷﺘﻪ ﭘﺪﺭ ﺑﻪ ﻧﮕﺎﻩ ﻣﺘﻌﺠﺐ ﻓﺮﺯﻧﺪ ﻟﺒﺨﻨﺪﯼ ﺯﺩ.
                </p>
                <Image className="mb-4" src={'/icons/Icon (1).png'} width={44} height={44} />
                <h4 className="text-SecendryDark text-2xl mb-4">
                    فنی و مهندسی نرم افزار
                </h4>
                <p className="w-[620px] text-sm leading-6 mb-4">
                    ﺧﯿﺎﻧﺖ ﻧﮑﻦ ﮐﻪ ﺍﮔﺮ ﮐﺮﺩﯼ ﻋﺸﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﺸﻮﻧﺖ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﻣﺤﺒﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﻧﺎ ﺣﻖ ﻧﮕﻮ ﺍﮔﺮ ﮔﻔﺘﯽ ﺣﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺑﯽ ﺣﯿﺎﯾﯽ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﺷﺮﺍﻓﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍی... ﭘﺲ ﺩﺭ ﺯﻧﺪﮔﯽ ﻓﻘﻂ ﺩﺯﺩﯼ نکن !
                </p>
                <Btn
                    cname="bg-primary rounded-md py-4 px-8 w-[200px]"
                    text="بیشتر بدانید"
                />
            </div>
        </div>
    );
}

export default ShortDescriptionAboutOnlineMeeting;