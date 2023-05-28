import Btn from "@/app/common/Btn";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterVerified = ({ phone, exist }) => {
    const [otpcode, setOtpcode] = useState("")
    const onChangeOtpcodehandler = (e) => {
        setOtpcode(e.target.value)
    }
    const route = useRouter()
    const otpverfiedhandler = () => {
        axios.post(exist ? `https://pouyan.xyz/goftego/customer/api/login/with/otp` : `https://pouyan.xyz/goftego/customer/api/singup/with/otp`, { otp: String(otpcode), mobile: String(phone), })
            .then((res) => {
                Cookies.set("token", res.data.accessToken)
                Cookies.set("user", JSON.stringify(res.data.userData))
                console.log(res)
                route.push('/')
            })
    }


    return (
        <div className="w-full mt-10">
            <p className="pb-3 text-[14px]">
                کدتایید
            </p>
            <input value={otpcode} onChange={onChangeOtpcodehandler} className="bg-transparent border rounded-lg w-full p-3 lg:p-5 custom-number-input" type="number" />
            <Btn
                onClick={otpverfiedhandler}
                text={"ثبت نام"}
                cname="w-full bg-primary rounded-md p-3 lg:p-5 mt-10 mb-10 lg:mb-20 "
            />
        </div>
    );
}

export default RegisterVerified;