"use client"

import Image from "next/image";
import { HeaderItems } from "../constant/HeaderItems";
import Btn from "../app/common/Btn";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setData(HeaderItems)
    }, [])
    const openeventhandler = () => {
        setIsOpen(!isOpen)
    }

    const IsActiveHander = (id) => {
        const newItem = data?.map((item) =>
            item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
        )
        setData(newItem)
    }


    return (
        <div className=" flex flex-row w-full  justify-between pb-5  items-center pt-10 container mx-auto  ">
            <Image onClick={openeventhandler} className="flex xl:hidden mr-4 sm:mr-0 " src={"/icons/menu.svg"} height={50} width={50} />
            <Image className="xl:right-0 xl:relative xl:ml-10   absolute left-[50%]     " src="/icons/Logo Goftego 2 1 (1).png" height={56} width={56} />
            {isOpen ?
                // collapse mode
                <div className={`${isOpen ? 'translate-x-0' : '"-translate-x-full"'}transition-transform px-5 z-40  duration-300 ease-linear xl:hidden flex w-1/2 h-full fixed  top-0 z-20 right-0  flex-col justify-start  pt-5 items-start  bg-white `}>
                    <div className="flex flex-row  justify-between w-full items-center">
                        <h3 className="lg:text-3xl text-[14px]  sm:mr-20 ">فهرست گفتگو</h3>
                        <Image onClick={openeventhandler} className=" lgml-5" src={"/icons/add.svg"} width={40} height={40} />
                    </div>
                    {data.map((header, index) => (
                        <Link className={`${header.isActive ? "text-SecendryDark" : "text-black"}  flex w-full h-10 xl:h-20 justify-start border-b cursor-pointer   items-center mx-auto text-[12px] lg:text-base font-medium list-none `} onClick={() => IsActiveHander(header.id)} key={index} rel="stylesheet" href={header?.link}>
                            <p key={index}  >
                                {header.name}
                            </p>
                        </Link>
                    ))}
                </div>
                :
                // desktop mode
                <div className=" py-8 flex flex-row justify-start basis-full mr-10    items-center ">
                    {data.map((header, index) => (
                        <Link onClick={() => IsActiveHander(header.id)} key={index} rel="stylesheet" href={header?.link}>
                            <p className={`${header.isActive ? "text-SecendryDark" : "text-white"}  text-xl  hidden xl:flex 2xl:ml-16 ml-14 font-medium cursor-pointer hover:text-SecendryDark list-none `} >
                                {header.name}
                            </p>
                        </Link>
                    ))}
                </div>
            }
            <Link rel="stylesheet" href="/register" >
                <Btn cname="xl:mr-auto w-[110px] ml-4 h-[34px] xl:w-[160px] h-[50px] bg-primary font-medium text-base text-[10px]  text-white rounded-md py-2 px-2 xl:rounded-xl xl:px-8 xl:py-4 flex flex-row justify-center items-center ml-2 sm:ml-0 "
                    text="ورود / ثبت نام"
                />
            </Link>
        </div >
    );
}

export default Header;