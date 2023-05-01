'use client';

import { BtnGoftegoSubscriptionsItems, CardGoftegoSubscriptionsItems } from "@/constant/GoftegoSubscriptionsItems";
import Btn from "./common/Btn";
import CardGoftego from "./common/CardGoftego";
import MainSwiper from "./common/MainSwiper";


function GoftegoSubscriptions() {
    return (
        <div className=" container flex flex-col text-white mx-auto ">
            <h3 className="xl:text-5xl font-semibold xl:mb-10 text mb-3 lg:text-4xl text-[24px] px-2">
                اشتراک های <span className="text-secondary">گفتگو</span>
            </h3>
            <div className="flex flex-row relative items-start justify-start xl:overflow-hidden scrollbar-thumb-red scroll scrollbar-track-gray-200 overflow-scroll pb-4   ">
                {BtnGoftegoSubscriptionsItems.map((item, index) => {
                    return (
                        <div className="ml-5 whitespace-nowrap" key={index}>
                            <Btn
                                textCname={item.textCname}
                                text={item.text}
                                cname={item.cname}
                            />
                        </div>
                    )
                })}
            </div>
            <MainSwiper
                item={CardGoftegoSubscriptionsItems}
                renderItem={(i) => (
                    <CardGoftego
                        image={i.image}
                        btnbuy={i.btnBuy}
                        meetingTimeText={i.meetingTimeText}
                        perMonthText={i.perMonthText}
                        title={i.title}
                        users={i.users}
                    />
                )}
            />
        </div>
    );
}

export default GoftegoSubscriptions;