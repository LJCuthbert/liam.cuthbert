import Header from "../components/Header/Header.tsx";
import CreativeHeader from "../components/Main/CreativeWords.tsx";
const HomePage = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <main className="p-4 mt-10 text-center">
                <div className="details">
                    <h1 className="text-7xl font-extrabold uppercase">Liam <span className="text-blue-500">Cuthbert</span></h1>
                    <CreativeHeader/>
                </div>

            </main>
        </div>
    )
}
export default HomePage;