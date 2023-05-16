import Image from "next/image";
import Link from "next/link";

function BlogCard({ cname, image, title, description, date, paraCname, imageCname, linkAddress }) {
    return (
        <div className={`${cname}    `}>
            <Link href="blogs/some">
                <Image className={`${imageCname} rounded-xl  `} src={image} width={500} height={500} />
            </Link>
            <div className={paraCname}>
                <h2 className="lg:text-[20px] text-[16px] mb-5">
                    {title}
                </h2>
                <p className="lg:text-[14px] text-[12px] lg:tracking-wider lg:leading-6 mb-5 text-justify">
                    {description}
                </p>
                <h5 className="lg:text-[14px] text-[12px] text-left mt-auto">
                    {date}
                </h5>
            </div>
        </div>
    );
}

export default BlogCard;