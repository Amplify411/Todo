import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NavBar from './NavBar';
import "../css-files/header.css";
function Header(){
    return(
        <div className="Head">
            <header>
                <TextSnippetIcon />
            </header>
            <NavBar />
        </div>
    )

}

export default Header;