// Header.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {linkedInURL, githubURL, instagramURL} from "./Links.tsx";
import DarkModeToggle from "../Util/DarkModeToggle.tsx";

const Header = () => {
    const iconSize = "2x"; // You can adjust the size as needed

    return (
        <header>
            <nav className="flex justify-center gap-2">
                <a className="" href={linkedInURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size={iconSize} />
                </a>
                <a className="" href={instagramURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size={iconSize} />
                </a>
                <a className="" href={githubURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size={iconSize} />
                </a>
                <DarkModeToggle/>
            </nav>
        </header>
    );
};


export default Header;
