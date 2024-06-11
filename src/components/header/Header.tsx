// header.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { githubURL, instagramURL, linkedInURL } from "./Links.tsx";
import DarkModeToggle from "../theme/DarkModeToggle.tsx";

const Header = () => {
    const iconSize = "2x"; // You can adjust the size as needed

    return (
        <header className="sticky top-[2svh] z-50 sm:top-10">
            <nav className="flex justify-center gap-2">
                <a
                    className=""
                    href={linkedInURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
                </a>
                <a
                    className=""
                    href={instagramURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faInstagram} size={iconSize} />
                </a>
                <a
                    className=""
                    href={githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} size={iconSize} />
                </a>
                <DarkModeToggle />
            </nav>
        </header>
    );
};

export default Header;
