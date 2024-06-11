import CreativeWords from "../../components/effects/CreativeWords.tsx";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
    TypeWriterEffect,
    UnderlineEffect,
} from "../../components/effects/TextEffects.tsx";

const Lander = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="flex min-h-svh snap-start flex-col items-center justify-evenly dark:bg-gray-950 sm:min-h-screen">
            <main className="p-4">
                <div className="details flex flex-col gap-5 text-center md:text-left">
                    <h1 className="flex flex-col text-7xl font-extrabold uppercase dark:text-gray-300 md:flex-row md:gap-5">
                        Liam
                        <div ref={ref} className="text-center">
                            {inView && (
                                <TypeWriterEffect
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
                            color={
                                "word-cycle-1em text-black dark:text-gray-300"
                            }
                        />
                    </span>
                </div>
            </main>
            <footer className="hover underline-mid text-rose-300 hover:text-rose-500 dark:text-rose-700">
                <UnderlineEffect color={"after:bg-rose-500"}>
                    <a
                        href="/Resume.pdf"
                        className=" flex items-center gap-2 rounded-md p-2"
                        download
                    >
                        <h1 className={"text-xl"}>Download My CV</h1>
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                </UnderlineEffect>
            </footer>
        </div>
    );
};

export default Lander;
