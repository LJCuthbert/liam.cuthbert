import CreativeWords from "../../components/Main/CreativeWords.tsx";
import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import { useInView } from "react-intersection-observer";

const Details = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="relative flex min-h-svh snap-start flex-col items-center justify-evenly sm:min-h-screen">
            <main className="p-4">
                <div className="details flex flex-col gap-5 text-center">
                    <h1 className="flex flex-col gap-5 text-7xl font-extrabold uppercase dark:text-gray-300 md:flex-row">
                        Liam
                        <div ref={ref} className="text-center">
                            {inView && (
                                <TypewriterEffect
                                    text="Cuthbert"
                                    className={
                                        "font-normal text-rose-300 dark:text-rose-700"
                                    }
                                />
                            )}
                        </div>
                    </h1>
                    <span className="flex flex-col gap-0 text-center text-5xl uppercase text-amber-300 dark:text-amber-600 md:flex-row md:gap-3 md:text-left">
                        Creative{" "}
                        <CreativeWords
                            words={[
                                "developer",
                                "programmer",
                                "designer",
                                "person",
                            ]}
                            className={["h-[1em]"]}
                            color={[
                                "word-cycle-1em",
                                "text-black dark:text-gray-300",
                            ]}
                        />
                    </span>
                </div>
            </main>
        </div>
    );
};

export default Details;
