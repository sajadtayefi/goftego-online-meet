import Image from "next/image";
import { HeaderItems } from "../constant/HeaderItems";
import Btn from "./common/Btn";

function Header() {
    return (
        <div className="flex flex-row w-full  justify-center pb-20  items-center pt-10 container mx-auto ">
            <Image src="/icons/Logo Goftego 2 1 (1).png" height={56} width={56} />
            {HeaderItems.map((header) => {
                return (
                    <li className={`${header.active ? "text-SecendryDark" : "text-white"} font-medium list-none mx-10`} key={header.id}>
                        {header.name}
                    </li>
                )
            })}
            <Btn cname="mr-auto w-[149px] h-[50px] bg-primary font-medium text-white rounded-xl px-8 py-3 flex flex-row justify-center items-center "
                text="ورود/ثبت نام"
            />

        </div>
    );
}

export default Header;