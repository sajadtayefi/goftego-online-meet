import BlogBanner from "./components/BlogBanner";
import BlogSwiperScienceTechnology from "./components/BlogSwiperScienceTechnology";
import BlogOther from "./components/BlogsOther";


const Home = () => {
    return (
        <div className=" " >
            <BlogBanner />
            <BlogSwiperScienceTechnology />
            <BlogOther />
        </div>
    );
}

export default Home;