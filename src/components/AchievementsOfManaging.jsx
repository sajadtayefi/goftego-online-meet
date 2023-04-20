import Image from "next/image";
import AchievementCard from "./common/AchievementCard";

function AchievementsOfManaging() {
    return (
        <div className="text-white relative  container mx-auto text-center w-8/12 mb-32">
                <Image className="absolute left-[340px] -z-10 -top-16" src={'/icons/Group 1.png'} width={100} height={100} />
            <h2 className="text-5xl font-bold  ">
                دستاوردهای مدیریت جلسات <span className="text-secondary">گفتگو</span>
            </h2>
            <p className=" text-sm py-10 tracking-wide  ">
                این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
            </p>
            <div className="flex  flex-row justify-between items-center">
                <AchievementCard
                    cname="bg-third"
                    number="+5000"
                    title="کاربر فعال"
                    description="وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند."
                />
                <AchievementCard
                    cname="bg-PrimaryDark mb-16 "
                    number="+26500"
                    title="نصب موفق"
                    description="خوشبخت و سرافراز باشند ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس!"
                />
                <AchievementCard
                    cname="bg-third"
                    number="+251"
                    title="ساعت جلسه آنلاین"
                    description="این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی."
                />
            </div>
        </div>
    );
}

export default AchievementsOfManaging;