import CreativeWords from "../../components/Main/CreativeWords.tsx";
import TypewriterEffect from "../../components/Util/TypeWritterEffect.tsx";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./Details.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import BasketballGame from "../../components/Game/BasketballGame.tsx";

const Details = () => {
    const [ref1, inView1] = useInView({ triggerOnce: false });
    const [ref2] = useInView({ triggerOnce: false });
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleButtonClick = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const nextScrollPosition = containerRef.current.clientWidth;
            const currentScrollPosition = containerRef.current.scrollLeft;
            let newScrollPosition = 0;
            if (direction === 'left') {
                newScrollPosition = currentScrollPosition - nextScrollPosition
            } else if (direction === 'right') {
                newScrollPosition = currentScrollPosition + nextScrollPosition
            }

            containerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex-container" style={{scrollSnapType: 'x mandatory'}} ref={containerRef}>
            <div ref={ref1}  className="container relative min-h-screen min-w-full flex flex-col items-center justify-evenly snap-start">
                <main className="p-4">
                    <div className="details flex flex-col gap-5 text-center">
                        <h1 className="uppercase font-extrabold dark:text-gray-300 text-7xl flex gap-5">Liam
                            <div ref={ref1} className="text-center">
                                {inView1 && <TypewriterEffect text="Cuthbert" className={"font-normal dark:text-rose-700 text-rose-300"} />}
                            </div>
                        </h1>
                        <span className="text-left">
                            <span className="uppercase text-5xl text-amber-300 dark:text-amber-600">Creative </span>
                            <CreativeWords words={['developer', 'programmer', 'designer']} style={['text-5xl', 'font-bold', 'uppercase']} />
                        </span>
                    </div>
                </main>
                <button className="absolute right-0 z-20" onClick={() => handleButtonClick('right')}>
                    <FontAwesomeIcon icon={faAngleRight} size={'5x'}></FontAwesomeIcon>
                </button>
            </div>

            <div ref={ref2} className="container relative min-h-screen min-w-full flex flex-col items-center justify-evenly snap-start">
                <BasketballGame/>
                {/* Your content for the second container */}
                <button className="absolute left-0 z-20" onClick={() => handleButtonClick('left')}>
                    <FontAwesomeIcon icon={faAngleLeft} size={'5x'}></FontAwesomeIcon>
                </button>
            </div>


        </div>
    );
}

export default Details;
