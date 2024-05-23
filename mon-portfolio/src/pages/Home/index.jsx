import '../../styles/main.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='home'>
            <h1>Mon Portfolio</h1>
            <article>
                Mon Profil...
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