import Image from "next/image";

function RegisterBanner() {
    return (
        <div className=" text-white bg-sing-up relative bg-cover hidden  w-1/2 h-[100vh] lg:flex justify-center items-center">
            <div className="bg-slate-300 w-8/12 h-[80%]   opacity-20 rounded-xl absolute   ">
            </div>
            <div className=" absolute flex flex-col xl:[30%] w-[50%] items-start justify-end  ">
                <h2 className="flex flex-row-reverse justify-start 2xl:font-morabba tracking-wide mt-10 font-[1000] leading-relaxed items-start text-[40px] 2xl:text-[60px]">
                    <span>
                        <Image className=" inline -mr-12 xl:w-auto  w-[30%] " src={"/icons/arrow-left.svg"} height={100} width={150} />
                        <span className=" -mr-5 xl:-mr-10">سایت معرفی نرم افزار مدیریت جلسات آنلاین </span><span className="text-secondary mt-20">گفتگو</span>
                    </span>
                </h2>
                <p className="mt-40 text-[#999999]">
                    <span>
                        تهیه شده توسط
                    </span>
                    <br />
                    <span>
                        تیم طراحی و پیاده سازی ایده پردازان پدیده نویافت
                    </span>
                </p>
            </div>
        </div>
    );
}

export default RegisterBanner;