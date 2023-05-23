"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { BlogSwiperitems } from "@/constant/BlogItems";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import Btn from '@/app/common/Btn';
import Image from 'next/image';
import BlogMainSwiper from './BlogMainSwiper';


const BlogSinglePageSwiper = () => {
    return (
        <div className="">
            <BlogMainSwiper
                text={"مقالات مرتبط"}
                data={BlogSwiperitems}
                renderItem={(item) => (
                    <BlogCard
                        imageCname="mb-3"
                        cname=""
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                    />
                )}
            />
        </div>
    );
}

export default BlogSinglePageSwiper;