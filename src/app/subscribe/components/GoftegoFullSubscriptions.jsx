import Btn from "@/app/common/Btn";
import CardGoftego from "@/app/common/CardGoftego";
import { BtnGoftegoSubscriptionsItems, CardGoftegoSubscriptionsItems } from "@/constant/GoftegoSubscriptionsItems";
import Image from "next/image";
import { Fragment } from "react";

function GoftegoFullSubscriptions() {
    return (
        <div className=" container flex flex-col text-white mx-auto px-10 ">
            <h3 className="xl:text-5xl font-semibold xl:mb-10 text mb-3 lg:text-4xl text-[24px] px-2 xl:px-0">
                اشتراک های <span className="text-secondary">گفتگو</span>
            </h3>
            <div className="flex flex-row relative items-start  justify-start xl:overflow-hidden scrollbar-thumb-red scroll scrollbar-track-gray-200 overflow-scroll xl:pb-20 pb-8 mb-5   ">
                {BtnGoftegoSubscriptionsItems.map((item, index) => {
                    return (
                        <div className="ml-5 whitespace-nowrap" key={index}>
                            <Btn
                                textCname={item.textCname}
                                text={item.text}
                                cname={item.cname}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="flex w-full lg:flex-row justify-between items-center pb-10 flex-col ">
                <div className="w-full mb-5 lg:mb-0" >
                    <h5>
                        بر اساس تعداد کاربر
                    </h5>
                    <Image className="w-full" src={"/icons/Line.svg"} height={28} width={580} />
                </div>
                <div className=" w-full lg:mr-16 ">
                    <h5>
                        بر اساس مدت زمان
                    </h5>
                    <Image className=" w-full" src={"/icons/Line (1).svg"} height={28} width={580} />
                </div>
            </div>
            <div className="flex justify-center pb-10 ">
                <Image src={"/icons/Updating.svg"} height={40} width={150} />
            </div>
            <div className=" flex flex-row flex-wrap w-full justify-center items-center ">
                {CardGoftegoSubscriptionsItems.map((item, index) => (
                    <div className="lg:w-[45%] xl:w-[23%] m-3" key={index}>
                        <CardGoftego
                            cname={"border-2 border-[#757575] rounded-xl p-2 flex flex-col justify-center items-center w-full "}
                            image={item.image}
                            btnbuy={item.btnBuy}
                            meetingTimeText={item.meetingTimeText}
                            perMonthText={item.perMonthText}
                            title={item.title}
                            users={item.users}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GoftegoFullSubscriptions;