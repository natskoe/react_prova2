import BotaoHome from "./botao_home";
import BotaoLancamento from "./botao_lancamento";
import Logo from "./logo";
import "../styles/header/header.css"

function Header(){
    return(
        <header>
            <div class="grid">
                <div class="logo">
                    <Logo/>
                </div>
                <nav>
                    <ul>
                        <li>
                            <BotaoHome/>
                        </li>
                        <li>
                            <BotaoLancamento/>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;