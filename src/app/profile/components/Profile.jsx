"use client"
import ProfileButtons from "./ProfileButtons";
import EditProfile from "./EditProfile";
import { useEffect, useState } from "react";
import { ProfileButtonsItems } from "@/constant/ProfileItems";
import Btn from "@/app/common/Btn";
import Image from "next/image";
import ActiveAccounts from "./ActiveAccounts";
import SubscriptionHistory from "./SubscriptionHistory";


const Profile = () => {
    const [isActive, setIsactive] = useState([1])


    return (
        <div className=" container mx-auto px-5 lg:px-10    text-white">
            <h2 className=" text-[32px] pb-5  border-b border-[#202020]">
                پروفایل من
            </h2>
            <div className=" flex flex-col lg:flex-row mt-10 ">
                <ProfileButtons setIsActive={setIsactive} isActive={isActive} />
                <div className="flex flex-col w-full ">
                    <Image className=" w-full " src={"/picture/Rectangle 201.svg"} width={500} height={500} />
                    <div className="flex flex-col xl:px-20">
                        <div className=" flex flex-row ">
                            <Image className=" -translate-y-5 lg:-translate-y-12 lg:w-40 w-20" src={"/picture/Ellipse 9.svg"} height={150} width={150} />
                            <div className="flex flex-row justify-between w-full ">
                                <div className="flex flex-col mt-5 mr-5">
                                    <h3 className="lg:text-[16px] text-[14px] ">
                                        محمد زمین کشت
                                    </h3>
                                    <h5 className=" lg:text-[14px] text-[12px]">
                                        رئیس شرکت بنیان آدینه الکترو صنعت
                                    </h5>
                                </div>
                                {isActive == 1 && <div className="hidden lg:flex flex-row justify-center items-center mb-14">
                                    <Btn
                                        cname={"w-20 bg-primary p-2 rounded-xl ml-2 "}
                                        text={"ذخیره"} />
                                    <Btn
                                        cname={"w-20 border p-2  rounded-xl "}
                                        text={"بازگشت"} />
                                </div>}

                            </div>
                        </div>
                        {isActive == 1 && <EditProfile isActive={isActive} />}
                        {isActive == 2 && <ActiveAccounts />}
                        {isActive == 3 && <SubscriptionHistory />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;