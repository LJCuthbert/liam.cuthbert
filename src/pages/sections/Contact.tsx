import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import { useInView } from "react-intersection-observer";

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="relative flex min-h-screen snap-start items-center justify-center bg-green-300 bg-gradient-to-b from-blue-300 transition-colors dark:bg-green-800 dark:from-blue-800">
            <div ref={ref} className="text-center">
                {inView && (
                    <TypewriterEffect
                        text="Contact Me Please"
                        className={"hover underline-mid"}
                    />
                )}
            </div>
        </div>
    );
};
export default Contact;
