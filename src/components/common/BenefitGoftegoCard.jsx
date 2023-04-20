import Image from "next/image";

function BenefitGoftegoCard({ title, descrption, picture }) {
    return (
        <div className="relative flex flex-col w-[380px] justify-center  text-right ">
            <Image className="absolute " src={'/picture/Background.png'} width={500} height={500} />
            <Image className="absolute -top-12 right-7 " src={picture} width={50} height={50} />
            <h3 className="text-2xl mt-10 mb-5 mx-5">
                {title}
            </h3>
            <p className="w-80 mx-5 text-sm">
                {descrption}
            </p>
        </div>
    );
}

export default BenefitGoftegoCard;