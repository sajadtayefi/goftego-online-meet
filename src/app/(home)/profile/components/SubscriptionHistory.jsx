import { ProfileSubscriptionHistory } from "@/constant/ProfileItems";

const SubscriptionHistory = () => {
    return (
        <div className="flex flex-col justify-center items-start md:items-center  md:overflow-hidden overflow-scroll    pb-20">
            {ProfileSubscriptionHistory.map((item) => (
                <div className={"flex flex-row"}>
                    <li className={` ${item.id == 1 ? "bg-[#404040] rounded-tr-xl" : ""} border list-none w-10 2xl:w-20 p-2 flex justify-center items-center  `}>
                        {item.number}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040]" : ""} border w-48 2xl:w-60 flex justify-center items-center p-2 list-none`}>
                        {item.title}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040]" : ""} border w-40 2xl:w-52 flex justify-center items-center p-2 list-none`}>
                        {item.start}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040]" : ""} border w-40 2xl:w-52 flex justify-center items-center p-2 list-none`}>
                        {item.end}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040] rounded-tl-xl" : ""} w-40 border 2xl:w-52 flex justify-center items-center p-2 list-none`}>
                        {item.payDate}
                    </li>
                </div>
            ))}
        </div>
    );
}

export default SubscriptionHistory;