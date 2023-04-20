import BenefitGoftegoCard from "./common/BenefitGoftegoCard";

function WhyGoftego() {
    return (
        <div className="text-white container flex flex-col mx-auto justify-center items-center pb-80">
            <h2 className="text-white text-5xl font-semibold mb-10">
                چرا <span className="text-secondary">گفتگو ؟؟؟</span>
            </h2>
            <h4 className="text-3xl mb-4">
                . امکانات و ویژگی های ماست که باعث تمایز ما شده است .
            </h4>
            <p className="text-center w-[1390px]" >
                این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند، استفاده از این متن تستی می تواند سرعت پیشرفت پروژه را افزایش دهد، و طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید. این نوشته توسط سایت لورم ایپسوم فارسی نگاشته شده است.
            </p>
            <div className="flex flex-row mt-20 justify-evenly w-full">
                <BenefitGoftegoCard
                    picture={"/icons/Icon & Background.png"}
                    title="امنیت زیاد"
                    descrption="وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند."
                />
                <BenefitGoftegoCard
                    picture={"/icons/Icon & Background (1).png"}
                    title="سرعت بالا"
                    descrption="وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند."
                />
                <BenefitGoftegoCard
                    picture={"/icons/Icon & Background (2).png"}
                    title="هزینه کم"
                    descrption="وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند."
                />
            </div>
        </div>
    );
}

export default WhyGoftego;