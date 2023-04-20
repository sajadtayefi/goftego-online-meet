function AchievementCard({ number, title, description, cname }) {
    return (
        <div className={`${cname} w-[384px] rounded-3xl py-10 px-5  `}>
            <h2 className="text-5xl font-extrabold py-2  " dir="ltr">
                {number}
            </h2>
            <h3 className="text-3xl font-medium">
                {title}
            </h3>
            <p className="h-[60px] text-center text-sm ">
                {description}
            </p>
        </div>
    );
}

export default AchievementCard;