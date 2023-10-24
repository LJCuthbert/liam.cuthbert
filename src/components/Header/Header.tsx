// Header.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {linkedInURL, githubURL, instagramURL} from "./Links.tsx";

const Header = () => {
    return (
        <header>
            <nav className="flex justify-center gap-2">
                <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={instagramURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href={githubURL} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </nav>
        </header>
    );
};

export default Header;
