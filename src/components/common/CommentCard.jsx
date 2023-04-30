import Image from "next/image";

function CommentCard({ name, title, description, avatar, logo }) {
    return (
        <div className="bg-[#202020] flex flex-col xl:p-5  p-2 rounded-xl  lg:h-[300px] ">
            <div className="flex flex-row justify-start items-start w-full rounded-xl  ">
                <Image className="" src={avatar} height={40} width={40} />
                <div className="flex flex-col justify-start lg:mr-5 items-start">
                    <h5 className="text-xs xl:text-base">{name}</h5>
                    <p className="text-[#999999] text-xs xl:text-base text-start">{title}</p>
                </div>
                <Image className="mr-auto" src={logo} height={40} width={40} />
            </div>
            <div className="bg-[#404040] mt-auto rounded-xl  xl:h-[150px] text-right p-5  ">
                <p className="text-xs sm:leading-6 leading-4 sm:tracking-wide text-[10px] ">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CommentCard;