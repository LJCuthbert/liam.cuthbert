import { useInView } from "react-intersection-observer";
import {
    TypeWriterEffect,
    UnderlineEffect,
} from "../../components/Effects/TextEffects.tsx";
import { githubURL, linkedInURL } from "../../components/Header/Links.tsx";

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="relative flex min-h-svh snap-start flex-col items-center justify-center gap-10 bg-green-300 bg-gradient-to-b from-blue-300 transition-colors dark:bg-green-800 dark:from-blue-800 sm:min-h-screen">
            <div ref={ref} className="text-center">
                {inView && (
                    <UnderlineEffect
                        color={"after:bg-black after:dark:bg-white"}
                    >
                        <TypeWriterEffect text="Do not  Be Shy, Contact Me" />
                    </UnderlineEffect>
                )}
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-bold">liamjcuthbert@gmail.com</h2>
            </div>
            <div className="flex w-full items-center justify-evenly gap-4">
                <UnderlineEffect
                    color={
                        "hover:text-stone-700 hover:dark:text-stone-400 after:bg-stone-700 after:dark:bg-stone-400"
                    }
                >
                    <a
                        href={linkedInURL}
                        className="text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </UnderlineEffect>
                <UnderlineEffect
                    color={
                        "hover:text-stone-700 hover:dark:text-stone-400 after:bg-stone-700 after:dark:bg-stone-400"
                    }
                >
                    <a
                        href={githubURL}
                        className="text-2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </UnderlineEffect>
            </div>
        </div>
    );
};
export default Contact;
