import CardGoftego from "@/app/common/CardGoftego";

function ActiveAccounts() {
    return (
        <div className="flex flex-row px-20 pb-20   ">
            <CardGoftego
                cname={"border-2 border-[#757575] rounded-xl p-2 flex flex-col justify-center items-center w-full mx-5"}
                image={"/picture/Rectangle 18 (1).png"}
                title={"200 هزار تومان"}
                users={"10 کاربر همزمان"}
                perMonthText={"اشتراک به صورت 1 ماهه می باشد"}
                meetingTimeText={"زمان برگزاری جلسه نامحدود"}
                btnbuy={"لغو اشتراک موجود"}
            />
            <CardGoftego
                cname={"border-2 border-[#757575] rounded-xl p-2 flex flex-col justify-center items-center w-full mx-5"}
                image={"/picture/Rectangle 18 (1).png"}
                title={"200 هزار تومان"}
                users={"10 کاربر همزمان"}
                perMonthText={"اشتراک به صورت 1 ماهه می باشد"}
                meetingTimeText={"زمان برگزاری جلسه نامحدود"}
                btnbuy={"لغو اشتراک موجود"}
            />
        </div>
    );
}

export default ActiveAccounts;