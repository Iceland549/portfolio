import '../../styles/main.css';
import { Link } from 'react-router-dom';
import Scroll from '../../components/Scroll';

function Home() {
    Scroll();
    return (
        <div className='home'>
            <a id="top"></a>
            <h1>En quelques mots...</h1>
            <article>
                <p>Je me spécialise dans la conception d’APIs robustes, l’architecture microservices et la gestion de données avec ASP.NET Core, SQL Server, MongoDB, Docker et la sécurité JWT.</p>
            </article>
            <nav>
                <Link to={'/Projects'}>
                    <p>Mes Projets</p>
                </Link>
                <Link to={'/Skills'}>
                    <p>Mes Skills</p>
                </Link>
            </nav>
        </div>
    )
}

export default Home;