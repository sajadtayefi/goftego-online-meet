import Image from "next/image";

function BenefitGoftegoCard({ title, descrption, picture }) {
    return (
        <div className="relative flex flex-col mb-36 lg:my-0  xl:w-1/3 justify-center   lg:mx-5   lg:text-right p-5 ">
            <Image className="absolute xl:h-60 lg:h-64  lg:w-[1200px] h-60  " src={'/picture/Background.png'} width={500} height={500} />
            <Image className="absolute right-12 -top-[70px]  lg:-top-6 xl:-top-12  " src={picture} width={60} height={60} />
            <h3 className="text-2xl lg:mt-10 mb-5 mx-5">
                {title}
            </h3>
            <p className="w-[400px] lg:w-10/12 mx-5 text-base text-[#EDEDED]">
                {descrption}
            </p>
        </div>
    );
}

export default BenefitGoftegoCard;