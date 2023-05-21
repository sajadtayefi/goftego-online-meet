import Btn from "@/app/common/Btn";
import Image from "next/image";

function RegisterSingUp({ phone, phonehandler }) {
    return (
        <div className="w-full">
            <Btn
                onClick={phonehandler}
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

export default RegisterSingUp;