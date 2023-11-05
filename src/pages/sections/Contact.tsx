import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import {useInView} from "react-intersection-observer";

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: false });

    return (
        <div className="min-h-screen relative transition-colors bg-gradient-to-b from-blue-300 dark:from-blue-800 flex justify-center items-center bg-green-300 dark:bg-green-800">
            <div ref={ref} className="text-center">
                {inView && <TypewriterEffect text="Contact Me Please" className={"hover underline-mid"}/>}
            </div>

        </div>
    )
}
export default Contact;