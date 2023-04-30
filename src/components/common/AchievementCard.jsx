function AchievementCard({ number, title, description, cname }) {
    return (
        <div className={`${cname ? "bg-third mb-5 lg:mb-0 " : "bg-PrimaryDark mb-5 xl:mb-10 lg:mb-28"} w-full    lg:w-1/3 rounded-3xl flex flex-col justify-center items-center py-10 px-5 mx-4  `}>
            <br className="hidden  bg-secondary  mb-10 xl:mb-10" />
            <h2 className="xl:text-6xl text-5xl  font-extrabold  py-2  " dir="ltr">
                {number}
            </h2>
            <h3 className="xl:text-4xl text-2xl font-medium ">
                {title}
            </h3>
            <p className=" h-30  p-5  text-center  ">
                {description}
            </p>
        </div>
    );
}

export default AchievementCard;