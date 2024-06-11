const ConQuestPage = () => {
    return (
        <div className="mx-auto bg-gradient-to-b from-emerald-200 to-white dark:from-emerald-800 dark:to-black">
            <main className="flex min-h-svh snap-start flex-col items-center justify-center gap-8 p-4 sm:min-h-screen">
                <h1 className="text-7xl font-extrabold uppercase dark:text-gray-300">
                    ConQuest
                </h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-3xl uppercase text-amber-300 dark:text-amber-600 sm:text-left">
                            Details
                        </h3>
                        <ul className="list-disc">
                            <li className="text-xl">
                                Full Year Project for University
                            </li>
                            <li className="text-xl">Sports Team Management</li>
                            <li className="text-xl">Nutrition and Fitness</li>
                            <li className="text-xl">Statistics Tracking</li>
                            <li className="text-xl">8 Person Team</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-center text-3xl uppercase text-rose-300 dark:text-rose-600 sm:text-left">
                            Tools used
                        </h3>
                        <ul className="list-disc">
                            <li className="text-xl">
                                Java, Spring Boot, Spring Security
                            </li>
                            <li className="text-xl">
                                APIs: Nutrition, Garmin Wearable
                            </li>
                            <li className="text-xl">Scrum, CI/CD</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default ConQuestPage;
