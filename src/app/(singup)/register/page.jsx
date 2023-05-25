import RegisterBanner from "./components/RegisterBanner";
import RegisterForm from "./components/RegisterForm";

const Home = () => {
    return (
        <div className="flex flex-row  " >
            <RegisterBanner />
            <RegisterForm />
        </div>
    );
}

export default Home;