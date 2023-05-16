import { BlogOtherItems } from "@/constant/BlogItems";
import BlogCard from "./BlogCard";

function BlogOther() {
    return (
        <div className="flex flex-row text-white flex-wrap container  mx-auto justify-center items-center px-10 ">
            <BlogCard
                cname="flex flex-col lg:flex-row justify-center items-center lg:justify-between pb-2 lg:pb-4 xl:pb-10"
                imageCname="w-full h-full"
                paraCname=" flex flex-col lg:mt-0 mt-5 lg:mr-10 w-full lg:w-1/2"
                image={"/picture/Rectangle 206 (7).svg"}
                title={'عنوان بلاگ شماره 1'}
                description={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."}
                date={"1401/08/24"}
            />
            <div className="flex flex-row flex-wrap justify-between ">
                {BlogOtherItems.map((item) => (
                    <div className={` xl:w-[31%] lg:w-[48%]   `} key={item.id}>
                        <BlogCard
                            cname={`  flex flex-col justify-center items-center pb-2 lg:pb-4 xl:mb-10 `}
                            imageCname="mb-3"
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogOther;