"use client"
import CardGoftego from "@/app/common/CardGoftego";
import MainSwiper from "@/app/common/MainSwiper";
import { CardGoftegoSubscriptionsItems } from "@/constant/GoftegoSubscriptionsItems";

function SpecialConversationSuggestions() {
    return (
        <div className="container flex flex-col text-white mx-auto mt-10 mb-20 ">
            <h3 className="xl:text-5xl font-semibold xl:mb-0 text mb-3 lg:text-4xl text-[24px] px-10">
                پیشنهادات ویژه  <span className="text-secondary">گفتگو</span>
            </h3>
            {<MainSwiper
                item={CardGoftegoSubscriptionsItems}
                renderItem={(i) => (
                    <CardGoftego
                        cname={"border-2 border-[#757575] rounded-xl p-2 flex flex-col justify-center items-center w-full "}
                        image={i.image}
                        btnbuy={i.btnBuy}
                        meetingTimeText={i.meetingTimeText}
                        perMonthText={i.perMonthText}
                        title={i.title}
                        users={i.users}
                    />
                )}
            />}
        </div>
    );
}

export default SpecialConversationSuggestions;