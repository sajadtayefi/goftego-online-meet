import Btn from "@/app/common/Btn";
import Image from "next/image";

function RegisterForm() {
    return (
        <div className="text-white flex  w-full lg:w-1/2   flex-col items-start justify-start  px-5 xl:px-32 2xl:px-52">
            <Image className="lg:pt-24 w-16 xl:w-20  pb-5" src={"/icons/Logo Goftego 2 1.svg"} width={100} height={100} />
            <h2 className="flex flex-row justify-center pb-5 items-center">
                <span className="text-[20px] lg:text-[32px] ">
                    سلام
                </span>
                <Image className="mr-5" src={"/icons/Frame (1).svg"} width={30} height={30} />
            </h2>
            <p className=" pb-10 lg:pb-20 text-[12px]">
                برای ثبت نام و ورود به سایت معرفی گفتگو اطلاعات خود را وارد کنید.
            </p>
            <p className="pb-3 text-[14px]">
                شماره موبایل
            </p>
            <input className="bg-transparent border rounded-lg w-full p-3 lg:p-5 custom-number-input" type="number" />
            <Btn
                text={"ارسال کد تایید"}
                cname="w-full bg-primary rounded-md p-3 lg:p-5 mt-10 mb-10 lg:mb-20 "
            />
            <div class="border-t   w-full mb-10 lg:mb-20 flex justify-center items-center">
                <h5 class="w-32 bg-[#100F12] text-[#FDFDFD] text-[12px] flex justify-center items-center h-5  left-0 right-44 top-1/2 transform -translate-y-1/2">
                    یا ثبت نام از طریق
                </h5>
            </div>
            <Btn
                text={"ثبت نام از طریق گوگل"}
                icon={<Image className="ml-3" src={"/icons/Frame.svg"} width={30} height={30} />}
                cname="w-full bg-transparent border rounded-md mb-5 flex flex-row-reverse justify-center items-center p-3 lg:p-5"
            />
            <h3 className=" self-center text-primary text-[16px] cursor-pointer pb-10">
                قبلا ثبت نام کرده اید ...
            </h3>
        </div>
    );
}

export default RegisterForm;