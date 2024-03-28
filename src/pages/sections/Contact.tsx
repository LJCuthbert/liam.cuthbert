import { useInView } from "react-intersection-observer";
import {
    TypeWriterEffect,
    UnderlineEffect,
} from "../../components/Effects/TextEffects.tsx";

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="relative flex min-h-svh snap-start items-center justify-center bg-green-300 bg-gradient-to-b from-blue-300 transition-colors dark:bg-green-800 dark:from-blue-800 sm:min-h-screen">
            <div ref={ref} className="text-center">
                {inView && (
                    <UnderlineEffect
                        color={"after:bg-black after:dark:bg-white"}
                    >
                        <TypeWriterEffect text="Contact Me Please" />
                    </UnderlineEffect>
                )}
            </div>
        </div>
    );
};
export default Contact;
