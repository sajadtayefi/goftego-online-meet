import Banner from "./components/BlogBanner";
import BlogSwiperScienceTechnology from "./components/BlogSwiperScienceTechnology";
import BlogOther from "./components/BlogsOther";

function Home() {
    return (
        <div className=" " >
            <Banner />
            <BlogSwiperScienceTechnology />
            <BlogOther />
        </div>
    );
}

export default Home;