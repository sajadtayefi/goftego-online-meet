import Image from "next/image";
import Btn from "./Btn";

function CardGoftego({ image, title, users, perMonthText, meetingTimeText, btnbuy, cname }) {
    return (
        <div className={cname}>
            <Image src={image} width={400} height={250} />
            <h3 className="mt-8 text-2xl font-semibold">
                {title}
            </h3>
            <h5 className="mt-5 text-xs">
                {users}
            </h5>
            <p className="border-2 rounded-xl border-secondary py-2 text-sm px-4 text-secondary mt-14">
                {perMonthText}
            </p>
            <h2 className="mt-14">
                {meetingTimeText}
            </h2>
            <Btn
                cname={"bg-primary rounded-b-xl py-2 w-full mt-2 "}
                text={btnbuy}
            />
        </div>
    );
}

export default CardGoftego;