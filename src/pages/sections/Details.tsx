import CreativeWords from "../../components/Main/CreativeWords.tsx";
import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import {useInView} from "react-intersection-observer";

const Details = () => {
    const [ref, inView] = useInView({triggerOnce: false});

    return (
        <div className="min-h-screen relative flex e flex-col items-center justify-evenly snap-start">
            <main className="p-4">
                <div className="details flex flex-col gap-5 text-center">

                    <h1 className="uppercase font-extrabold dark:text-gray-300 text-7xl flex gap-5">Liam
                        <div ref={ref} className="text-center">
                            {inView && <TypewriterEffect text="Cuthbert"
                                                         className={"font-normal dark:text-rose-700 text-rose-300"}/>}
                        </div>
                    </h1>
                    <span className="text-left">
                        <span
                            className="uppercase text-5xl flex flex-col md:flex-row gap-0 md:gap-3 text-amber-300 dark:text-amber-600">Creative <CreativeWords
                            words={['developer', 'programmer', 'designer', "person"]}/> </span>

                    </span>
                </div>

            </main>
        </div>
    );
}

export default Details;