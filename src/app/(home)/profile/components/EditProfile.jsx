import Btn from "@/app/common/Btn";
import LabelInput from "@/app/common/LabelInput";
import { ProfileItems } from "@/constant/ProfileItems";
import Image from "next/image";
import { Fragment } from "react";

const EditProfile = ({ isActive }) => {
    return (
        <div className="  flex flex-col lg:pb-40 ">

            <div className=" lg:self-end flex flex-col px-5 lg:px-10   ">
                <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center flex-wrap ">
                    {ProfileItems.map((item, index) => (
                        <Fragment key={index}>
                            <LabelInput
                                cname={item.cname}
                                labelcname={item.labelcname}
                                text={item.text}
                                spanCname='text-[#FB0800]'
                                colorfulText={item.colorfulText}
                                inputCname={item.inputCname}
                                placeholder={item.placeholder}
                            />
                        </Fragment>
                    ))}
                    {isActive == 1 && <div className="lg:hidden flex flex-row justify-start self-end mt-10 items-center mb-14">
                        <Btn
                            cname={"w-20 bg-primary p-2 rounded-xl ml-2 "}
                            text={"ذخیره"} />
                        <Btn
                            cname={"w-20 border p-2  rounded-xl "}
                            text={"بازگشت"} />
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default EditProfile;