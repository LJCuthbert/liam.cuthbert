import Header from "../components/Header/Header.tsx";
import CreativeWords from "../components/Main/CreativeWords.tsx";
const HomePage = () => {
    return (
        <div className="container dark:bg-gray-90 dark:bg-gradient-to-b mx-auto">
            <Header />
            <main className="p-4 mt-16">
                <div className="details flex  flex-col gap-5">
                    <h1 className="text-7xl dark:text-gray-300 font-extrabold uppercase">Liam <span className="text-blue-400 dark:text-blue-600">Cuthbert</span></h1>
                    <CreativeWords/>
                </div>

            </main>
        </div>
    )
}
export default HomePage;