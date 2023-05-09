import Image from "next/image";

function Banner() {
    return (
            <div className=" text-white bg-sing-up relative bg-cover w-[50%] h-[100vh] flex justify-center items-center">
               
                <div className="lg:bg-slate-300 xl:w-6/12 2xl:w-8/12 h-[80%] z-30 opacity-20 rounded-xl absolute   ">
                </div>
                <div className=" absolute flex flex-col w-[40%] items-start justify-end">
                    <h2 className="flex flex-row-reverse justify-start font-morabba tracking-wide mt-10 font-[1000] leading-relaxed items-start text-[60px]">
                        <span>
                            <Image className=" inline -mr-12 " src={"/icons/arrow-left.svg"} height={100} width={150} />
                            <span className="-mr-10">سایت معرفی نرم افزار مدیریت جلسات آنلاین </span><span className="text-secondary mt-20">گفتگو</span>
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

export default Banner;