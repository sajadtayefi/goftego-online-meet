import { FirstBlogitems } from "@/constant/BlogItems";
import Image from "next/image";
import { Fragment } from "react";
import BlogCard from "./BlogCard";

function BlogBanner() {
    return (
        <div className="container mx-auto  text-white mt-5 px-10 pb-5 lg:pb-28">
            <div className=" bg-blog-bannr-phone mb-5 lg:bg-blog-bannr flex items-end  md:justify-start justify-center    bg-no-repeat bg-cover  bg-center h-60 sm:h-[600px] lg:h-[400px] xl:h-[600px] rounded-2xl">
                <div className=" md:mr-20 mb-5">
                    <h2 className=" text-[20px] sm:text-[36px] lg:text-[48px]   ">
                        وبلاگ
                    </h2>
                    <h4 className=" text-[12px] sm:text-[16px]  lg:text-[24px]">
                        هر آنچه نوشته می شود، قطعا رسالتی را در پیش دارد.
                    </h4>
                </div>
            </div>
            <div className="flex flex-row sm:mt-5  lg:mt-10 lg:overflow-hidden overflow-scroll  ">
                {FirstBlogitems.map((item) => (
                    <div className={`${item.id == 2 && "mx-5 "}  `} key={item.id}>
                        <BlogCard
                            cname={` lg:w-auto sm:w-[300px] w-[200px]  pb-4`}
                            imageCname="mb-3"
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    </div>
                ))}
            </div>
        </div >
    );
}

export default BlogBanner;