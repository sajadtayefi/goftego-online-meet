import Image from "next/image";

function CommentCard({ name, title, description, avatar, logo }) {
    return (
        <div className="bg-[#202020] flex flex-col  p-5 rounded-xl   h-[300px]">
            <div className="flex flex-row justify-start items-start w-full rounded-xl  ">
                <Image className=" ml-5" src={avatar} height={40} width={40} />
                <div className="flex flex-col justify-start items-start">
                    <h5>{name}</h5>
                    <p className="text-[#999999]">{title}</p>
                </div>
                <Image className="mr-auto" src={logo} height={40} width={40} />
            </div>
            <div className="bg-[#404040] mt-auto rounded-xl h-[150px] text-right p-5  ">
                <p className="text-xs leading-6 tracking-wide ">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default CommentCard;