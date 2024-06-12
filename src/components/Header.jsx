// import logoImg from "../assets/logo.jpg"
import logoImg from "../assets/logo_mamaji.png"
import Button from "./UI/Button"

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A Restaurant"/>
                <h1>MAMA JI BURGER</h1>
            </div>
            <nav>
                <Button textOnly={true}>Cart (0)</Button>
            </nav>
        </header>
    )
};
