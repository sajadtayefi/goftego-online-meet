import Banner from "./components/Baner";
import RegisterForm from "./components/RegisterForm";

function Home() {
    return (
        <div className="flex flex-row  " >
            <Banner />
            <RegisterForm />
        </div>
    );
}

export default Home;