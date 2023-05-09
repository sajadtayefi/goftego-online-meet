import Btn from "@/app/common/Btn";
import Image from "next/image";

function RegisterForm() {
    return (
        <div className="text-white flex  flex-col items-start justify-start w-1/2  px-52">
            <Image className="pt-24 pb-5" src={"/icons/Logo Goftego 2 1.svg"} width={100} height={100} />
            <h2 className="flex flex-row justify-center pb-5 items-center">
                <span className="text-[32px] ">
                    سلام
                </span>
                <Image className="mr-5" src={"/icons/Frame (1).svg"} width={30} height={30} />
            </h2>
            <p className="pb-20">
                برای ثبت نام و ورود به سایت معرفی گفتگو اطلاعات خود را وارد کنید.
            </p>
            <p className="pb-3">
                شماره موبایل
            </p>
            <input className="bg-transparent border rounded-lg w-full  p-5 custom-number-input" type="number" />
            <Btn
                text={"ارسال کد تایید"}
                cname="w-full bg-primary rounded-md p-5 mt-10 mb-20 "
            />
            <div className="border  bg-[#EDEDED] relative  w-full mb-20 ">

                <h5 className="w-32 bg-[#100F12] text-[#FDFDFD] text-[12px] flex justify-center items-center  h-5 absolute -top-3 left-0 right-[38%] bottom-0 ">
                    یا ثبت نام از طریق
                </h5>
            </div>
            <Btn
                text={"ثبت نام از طریق گوگل"}
                icon={<Image className="ml-3" src={"/icons/Frame.svg"} width={30} height={30} />}
                cname="w-full bg-transparent border rounded-md mb-5 flex flex-row-reverse justify-center items-center p-5"
            />
            <h3 className=" self-center text-primary text-[16px] cursor-pointer">
                قبلا ثبت نام کرده اید ...
            </h3>
        </div>
    );
}

export default RegisterForm;