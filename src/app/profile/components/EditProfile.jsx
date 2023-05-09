import Btn from "@/app/common/Btn";
import LabelInput from "@/app/common/LabelInput";
import { ProfileItems } from "@/constant/ProfileItems";
import Image from "next/image";
import { Fragment } from "react";

function EditProfile() {
    return (
        <div className="  flex flex-col pb-40 ">
          
            <div className=" self-end flex flex-col px-10   ">
                <div className="flex justify-between flex-wrap ">
                    {ProfileItems.map((item, index) => (
                        <Fragment key={index}>
                            <LabelInput
                                cname={item.cname}
                                labelcname={item.labelcname}
                                text={item.text}
                                spanCname={item.spanCname}
                                colorfulText={item.colorfulText}
                                inputCname={item.inputCname}
                                placeholder={item.placeholder}
                            />
                        </Fragment>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default EditProfile;