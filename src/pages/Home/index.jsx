import '../../styles/main.css';
import { Link } from 'react-router-dom';
import Scroll from '../../components/Scroll';

function Home() {
    Scroll();
    return (
        <div className='home'>
            <a id="top"></a>
            <h1>Si peu de choses...</h1>
            <article>
                <p>Semblable à un ruisseau philosophique, je m&apos;écoule sereinement dans cette nouvelle voie, abreuvé de multiples sources créatives. Bien que novice, une soif d&apos;apprendre m&apos;anime sans relâche. Avec patience, je cisèle mes compétences en développement web, gravissant chaque jour de nouveaux sommets. Parfois enveloppé d&apos;un mystère insondable lorsque concentré.</p>

                <p>Mais au-delà des sentiers techniques, l&apos;humain guide mes pas. L&apos;empathie, l&apos;écoute et la chaleur sont les vents tissant des liens véritables au sein des équipes. Un rayon facétieux vient alors réchauffer les cœurs.</p>

                <p>Si vous recherchez un intégrateur zen mais déterminé, ouvert d&apos;esprit mais parfois dans sa bulle, respectueux mais jamais austère, laissez-moi insuffler la vie à vos projets. Ensemble, nous créerons des expériences harmonieuses et mémorables.</p>
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