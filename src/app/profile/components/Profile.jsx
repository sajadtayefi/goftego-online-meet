"use client"
import ProfileButtons from "./ProfileButtons";
import EditProfile from "./EditProfile";
import { useEffect, useState } from "react";
import { ProfileButtonsItems } from "@/constant/ProfileItems";
import Btn from "@/app/common/Btn";
import Image from "next/image";
import ActiveAccounts from "./ActiveAccounts";
import SubscriptionHistory from "./SubscriptionHistory";


function Profile() {
    const [isActive, setIsactive] = useState([])


    return (
        <div className=" container mx-auto     text-white">
            <h2 className=" text-[32px] pb-5  border-b border-[#202020]">
                پروفایل من
            </h2>
            <div className=" flex flex-row mt-10 ">
                <ProfileButtons setIsActive={setIsactive} isActive={isActive} />
                <div className="flex flex-col w-full ">
                    <Image className=" w-full " src={"/picture/Rectangle 201.svg"} width={500} height={500} />
                    <div className="flex flex-col px-20">
                        <div className=" flex flex-row ">
                            <Image className=" -translate-y-12" src={"/picture/Ellipse 9.svg"} height={150} width={150} />
                            <div className="flex flex-row justify-between w-full ">
                                <div className="flex flex-col mt-5 mr-5">
                                    <h3 className="text-[16px]">
                                        محمد زمین کشت
                                    </h3>
                                    <h5 className=" text-[14px]">
                                        رئیس شرکت بنیان آدینه الکترو صنعت
                                    </h5>
                                </div>
                                {isActive == 1 && <div className="flex flex-row justify-center items-center mb-14">
                                    <Btn
                                        cname={"w-20 bg-primary p-2 rounded-xl ml-2 "}
                                        text={"ذخیره"} />
                                    <Btn
                                        cname={"w-20 border p-2  rounded-xl "}
                                        text={"بازگشت"} />
                                </div>}

                            </div>
                        </div>
                        {isActive == 1 && <EditProfile />}
                        {isActive == 2 && <ActiveAccounts />}
                        {isActive == 3 && <SubscriptionHistory />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;