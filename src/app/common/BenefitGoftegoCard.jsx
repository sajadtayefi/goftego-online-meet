import Image from "next/image";

const BenefitGoftegoCard = ({ title, descrption, picture }) => {
    return (
        <div className="relative flex flex-col mb-16 lg:mb-0 lg:my-0 border-4 z-20 border-[#757575] xl:w-1/3 xl:justify-start lg:h-64 w-10/12 lg:mx-5 mx-4 lg:text-right p-5 ">
            <Image className="absolute  -top-[40px] lg:-top-6 xl:-top-8" src={picture} width={60} height={60} />
            <h3 className="text-[20px] xl:text-[24px] my-1 lg:mt-10 xl:mb-5 mx-5">
                {title}
            </h3>
            <p className="sm:w-[400px] xl:leading-7 lg:w-10/12 mx-5 xl:-[14px] text-[12px] tracking-wider text-[#EDEDED]">
                {descrption}
            </p>
            <div className="  bg-[#100F12] border-t-4  z-20 w-[80px] rounded-b-full h-14 absolute -bottom-5 border-[#757575]  -left-[32px]  rotate-45 ">
            </div>
        </div>
    );
}

export default BenefitGoftegoCard;