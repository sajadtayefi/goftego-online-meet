import GoftegoFullSubscriptions from "./components/GoftegoFullSubscriptions";
import SpecialConversationSuggestions from "./components/SpecialConversationSuggestions";

function Home() {
    return (
        <div className="text-white">
            <SpecialConversationSuggestions />
            <GoftegoFullSubscriptions />
        </div>
    );
}

export default Home;