import GoftegoFullSubscriptions from "./components/GoftegoFullSubscriptions";
import SpecialConversationSuggestions from "./components/SpecialConversationSuggestions";

function Home({ isRegisterRoute }) {
    return (
        <div isRegisterRoute={isRegisterRoute} className="text-white overflow-hidden">
            <SpecialConversationSuggestions />
            <GoftegoFullSubscriptions />
        </div>
    );
}

export default Home;

