"use client"
import Image from "next/image";
import { HeaderItems } from "../constant/HeaderItems";
import Btn from "./common/Btn";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const eventhandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className=" flex flex-row w-full  justify-between pb-5  items-center pt-10 container mx-auto  ">
            <Image onClick={eventhandler} className="flex xl:hidden mr-4 sm:mr-0 " src={"/icons/menu.svg"} height={50} width={50} />
            <Image className="xl:right-0 xl:relative xl:ml-10   absolute left-[50%]     " src="/icons/Logo Goftego 2 1 (1).png" height={56} width={56} />
            {isOpen ?
                <div className={`${isOpen ? 'translate-x-0' : '"-translate-x-full"'}transition-transform px-5  duration-300 ease-linear xl:hidden flex w-1/2 h-full fixed  top-0 z-20 right-0  flex-col justify-start  pt-5 items-start  bg-white `}>
                    <div className="flex flex-row  justify-between w-full items-center">
                        <h3 className="lg:text-3xl text-[14px]  sm:mr-20 ">فهرست گفتگو</h3>
                        <Image onClick={eventhandler} className=" lgml-5" src={"/icons/add.svg"} width={40} height={40} />
                    </div>
                    {HeaderItems.map((header, index) => (
                        <li key={index} className={`${header.isActive ? " text-SecendryDark" : "text-black"} flex w-full h-10 xl:h-20 justify-start border-b  items-center mx-auto text-[12px] lg:text-base font-medium list-none `} >
                            {header.name}
                        </li>
                    ))}
                </div> :
                <div className=" py-8 flex flex-row justify-center items-center ">
                    {HeaderItems.map((header, index) => (
                        <li key={index} className={`${header.isActive ? "text-SecendryDark" : "text-white"} text-xl  hidden xl:flex 2xl:ml-20 ml-14 font-medium list-none `} >
                            {header.name}
                        </li>
                    ))}

                </div>
            }
            <Btn cname="xl:mr-auto w-[100px] ml-4 h-[34px] xl:w-[149px] h-[50px] bg-primary font-medium text-base text-[10px]  text-white rounded-md py-2 px-2 xl:rounded-xl xl:px-8 xl:py-4 flex flex-row justify-center items-center ml-2 sm:ml-0 "
                text="ورود/ثبت نام"
            />

        </div >
    );
}

export default Header;