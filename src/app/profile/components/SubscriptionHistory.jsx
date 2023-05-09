import { ProfileSubscriptionHistory } from "@/constant/ProfileItems";

function SubscriptionHistory() {
    return (
        <div className="flex flex-col justify-center items-center rounded-tr-2xl  pb-20">
            {ProfileSubscriptionHistory.map((item) => (
                <div className={"flex flex-row"}>
                    <li className={` ${item.id == 1 ? "bg-[#404040] rounded-tr-xl" : ""} border list-none w-20 p-2 flex justify-center items-center  `}>
                        {item.number}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040]" : ""} border w-60 flex justify-center items-center p-2 list-none`}>
                        {item.title}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040]" : ""} border w-52 flex justify-center items-center p-2 list-none`}>
                        {item.start}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040]" : ""} border w-52 flex justify-center items-center p-2 list-none`}>
                        {item.end}
                    </li>
                    <li className={` ${item.id == 1 ? "bg-[#404040] rounded-tl-xl" : ""} border w-52 flex justify-center items-center p-2 list-none`}>
                        {item.payDate}
                    </li>
                </div>
            ))}
        </div>
    );
}

export default SubscriptionHistory;