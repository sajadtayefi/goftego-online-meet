"use client"
import Btn from "@/app/common/Btn";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import RegisterSingUp from "./RegisterSignUp";
import Link from "next/link";
import RegisterVerified from "./RegisterVerified";

const RegisterForm = () => {
    const [exist, setExist] = useState(false)
    const [status, setStatus] = useState(0)
    const [phone, setPhone] = useState("")
    // useEffect(() => {
    //     axios.get(`https://pouyan.xyz/goftego/blog/api/categories`)
    //         .then((res) => {
    //             console.log(res, "this is my get res")
    //         })
    // }, [])

    const phonehandler = () => {
        axios.post(`https://pouyan.xyz/goftego/userverification/api/send`, { type: "mobile", mobile: phone })
            .then((res) => {
                if (res.status == 200) {
                    setStatus(1)
                    setExist(res.data.exists)
                    console.log(res)
                }
                else {

                }
            })
    }
    const onChangePhonehandler = (e) => {
        setPhone(e.target.value)
    }
    const editnumberHandler = () => {
        setStatus(0)
    }



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
            <input readOnly={status == 1 && true} value={phone} onChange={onChangePhonehandler} className="bg-transparent border text-xl rounded-lg w-full p-3 lg:p-5 custom-number-input" type="number" />
            {status == 0 && <RegisterSingUp phonehandler={phonehandler} phone={phone} />}
            {status == 1 && <p onClick={editnumberHandler} className=" mt-5 cursor-pointer text-primary"> تغییر شماره موبایل </p>}
            {status == 1 && <RegisterVerified exist={exist} phone={phone} />}

        </div>
    );
}

export default RegisterForm;