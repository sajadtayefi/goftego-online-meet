"use client"
import { BlogSwiperitems } from "@/constant/BlogItems";
import BlogCard from "./BlogCard";
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import BlogMainSwiper from './BlogMainSwiper';
import { useEffect } from 'react';
import axios from 'axios';


const BlogSinglePageSwiper = () => {
    useEffect(() => {
        axios.get(`https://pouyan.xyz/goftego/blog/api/blogs`)
            .then((res) => {
                console.log(res)
            })
    }, [])
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