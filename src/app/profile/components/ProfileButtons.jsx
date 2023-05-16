import Btn from "@/app/common/Btn";
import { ProfileButtonsItems } from "@/constant/ProfileItems";
import { Fragment, useEffect } from "react";

function ProfileButtons({ setIsActive, isActive }) {
    useEffect
    return (
        <div className="flex flex-row lg:w-auto   w-full lg:mb-0 mb-5  lg:flex-col xl:ml-40 justify-start items-center md:overflow-visible  overflow-scroll   ">
            {ProfileButtonsItems.map((items) => (
                <div className={`${items.divCname} lg:mb-2 mb-6 ml-4 `} key={items.id} >
                    <Btn
                        onClick={() => setIsActive(items.id)}
                        cname={`${items.id == isActive ? "text-secondary bg-zinc-100 " : ""} w-[150px] text-[12px] lg:w-[200px] flex lg:justify-start justify-center items-center py-3  lg:pr-5 bg-transparent transition-all delay-75 hover:text-secondary hover:bg-zinc-100  border text-[#FDFDFD] lg:pl-10 rounded-xl`}
                        text={items.text}
                        active={items.active}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProfileButtons;