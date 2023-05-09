import Btn from "@/app/common/Btn";
import { ProfileButtonsItems } from "@/constant/ProfileItems";
import { Fragment, useEffect } from "react";

function ProfileButtons({ setIsActive, isActive }) {
    useEffect
    return (
        <div className="flex flex-col ml-40 justify-start items-center   ">
            {ProfileButtonsItems.map((items) => (
                <div className={items.divCname} key={items.id} >
                    <Btn
                        onClick={() => setIsActive(items.id)}
                        cname={`${items.id == isActive ? "text-secondary bg-zinc-100 " : ""}w-[200px] flex py-3 pr-5 bg-transparent transition-all delay-75 hover:text-secondary hover:bg-zinc-100  border text-[#FDFDFD] pl-10 rounded-xl`}
                        text={items.text}
                        active={items.active}
                    />
                </div>
            ))}
        </div>
    );
}

export default ProfileButtons;