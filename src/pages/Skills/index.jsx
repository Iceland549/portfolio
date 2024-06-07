import '../../styles/main.css';
import { Link } from 'react-router-dom';
import Scroll from '../../components/Scroll';

function Skills() {
    Scroll();

    return (
        <div className='skills'>
            <a id="top"></a>
            <h1>Compétences</h1>
            <article>
                <section>
                    <h2>Soft Skills</h2>
                    <h3>Communication et Collaboration</h3>
                    <ul>
                        <li>Intégration front-end/back-end via des appels API REST (Projet Argent Bank)</li>
                        <li>Coordination avec différentes parties prenantes (Projet Argent Bank, Projet Débogage)</li>
                        <li>Rédaction d&apos;un cahier de recette détaillé (Projet Débogage)</li>
                    </ul>

                    <h3>Gestion du Temps et de l&apos;Organisation</h3>
                    <ul>
                        <li>Respect des délais et livrables (Tous les projets)</li>
                        <li>Planification et priorisation des tâches (Tous les projets)</li>
                        <li>Adaptation aux changements et revirements de situation (Projet Débogage, Projet SEO)</li>
                    </ul>

                    <h3>Résolution de Problèmes</h3>
                    <ul>
                        <li>Débogage et résolution de bugs (Projet Débogage)</li>
                        <li>Identification et correction des problèmes de performance (Projet SEO)</li>
                        <li>Pensée critique et analyse impartiale (Projet SEO)</li>
                    </ul>

                    <h3>Agilité et Adaptabilité</h3>
                    <ul>
                        <li>Intégration des changements en cours de projet (Projet Argent Bank, Projet Débogage)</li>
                        <li>Rebondir face aux obstacles et imprévus (Projet Débogage, Projet SEO)</li>
                        <li>Remise en question et évolution du projet (Projet Argent Bank)</li>
                    </ul>
                </section>

                <section>
                    <h2>Techniques Web</h2>
                    <h3>React</h3>
                    <ul>
                        <li>Développement d&apos;interfaces utilisateur réactives (Projets Argent Bank, Location Immobilière)</li>
                        <li>Gestion d&apos;état avec Redux (Projet Argent Bank)</li>
                        <li>Routage avec React Router (Projet Location Immobilière)</li>
                    </ul>

                    <h3>Node.js &amp; Express</h3>
                    <ul>
                        <li>Création d&apos;API REST (Projet Argent Bank)</li>
                        <li>Intégration front-end/back-end (Projet Argent Bank)</li>
                        <li>Exécution de code JavaScript côté serveur (Tous les projets)</li>
                    </ul>

                    <h3>MongoDB</h3>
                    <ul>
                        <li>Utilisation d&apos;une base de données NoSQL (Projet Argent Bank)</li>
                        <li>Modélisation et persistance des données (Projet Argent Bank)</li>
                    </ul>

                    <h3>Swagger</h3>
                    <ul>
                        <li>Documentation d&apos;API (Projet Argent Bank)</li>
                        <li>Description des routes et actions de l&apos;API (Projet Argent Bank)</li>
                    </ul>

                    <h3>Outils de développement</h3>
                    <ul>
                        <li>Chrome DevTools pour le débogage (Projet Débogage)</li>
                        <li>React Developer Tools (Projet Débogage)</li>
                        <li>Yarn pour la gestion des packages (Projet Débogage)</li>
                        <li>Lighthouse et Wave pour l&apos;audit de performance (Projet SEO)</li>
                    </ul>
                </section>
            </article>
            <nav>
                <Link to={'/'}>
                    <p>Accueil</p>
                </Link>
                <Link to={'/Projects'}>
                    <p>Mes Projets</p>
                </Link>
            </nav>
        </div>
    )
}

export default Skills;