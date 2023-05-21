import Btn from "@/app/common/Btn";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

function RegisterVerified() {
    const [otpcode, setOtpcode] = useState("")
    const onChangeOtpcodehandler = (e) => {
        setOtpcode(e.target.value)
    }
    const otpverfiedhandler = () => {
        axios.post(`http://admin.iranyol.com/customer/api/signup/with/otp`, { otp: otpcode, mobile: phone })
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