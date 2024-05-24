import '../../styles/main.css';
import { Link } from 'react-router-dom';
import Scroll from '../../components/Scroll';

function Projects() {
    Scroll();

    return (
        <div className='projects'>
            <a id="top"></a>
            <h1>Mes Projets</h1>
            <article>
                <h2>Application bancaire avec React/Redux</h2>
                <p>Développement du front-end d&apos;une application bancaire en ligne utilisant React pour une interface utilisateur réactive et performante. Intégration de Redux pour une gestion d&apos;état cohérente à travers l&apos;application.</p>
                <p>Connexion fluide avec le back-end via des appels API REST, acquérant ainsi une expérience pratique du développement full-stack. Utilisation de Swagger pour documenter clairement l&apos;API et faciliter sa maintenance.</p>
                <p>Renforcement des compétences en React, Redux et Node.js dans un projet complet alliant rigueur technique et élégance minimaliste. Ce projet a permis de renforcer les compétences en intégration front-end/back-end, en gestion d&apos;état avec Redux, en documentation d&apos;API avec Swagger, ainsi qu&apos;en développement full-stack avec Node.js, tout en cultivant une approche minimaliste et élégante.</p>
                <p>Lien GitHub : <a href="https://github.com/Iceland549/argentbank-frontend" target="_blank" rel="noopener noreferrer" className="github-link">https://github.com/Iceland549/argentbank-frontend</a></p>

                <h2>Application de location immobilière avec React</h2>
                <p>Développement du front-end d&apos;une application web de location immobilière en utilisant React, une bibliothèque JavaScript populaire pour créer des interfaces utilisateur réactives et modernes.</p>
                <p>Mise en place d&apos;un routage efficace entre les différentes pages grâce à React Router, permettant une navigation fluide dans l&apos;application. Utilisation de Create React App pour une configuration initiale simplifiée et de Node.js pour l&apos;exécution du code JavaScript côté serveur.</p>
                <p>Implémentation de composants React pour une logique de présentation des données optimisée et une structure de code modulaire. Intégration de SASS pour une gestion élégante des styles CSS et d&apos;animations CSS pour améliorer l&apos;expérience utilisateur. Ce projet a permis de renforcer les compétences en React, React Router, SASS et animations CSS, tout en développant une application web interactive et visuellement attrayante.</p>
                <p>Lien GitHub : <a href="https://github.com/Iceland549/kasa" target="_blank" rel="noopener noreferrer" className="github-link">https://github.com/Iceland549/kasa</a></p>

                <h2>Débogage d&apos;un site web one-page avec React</h2>
                <p>Analyse approfondie du code existant d&apos;un site web one-page à l&apos;aide des Chrome DevTools pour identifier et comprendre les problèmes et bugs signalés.</p>
                <p>Résolution des bugs et problèmes identifiés en utilisant des compétences en JavaScript et les outils spécifiques à React, comme React Developer Tools.</p>
                <p>Rédaction d&apos;un cahier de recette détaillé pour documenter les scénarios de test unitaires et fonctionnels nécessaires à la vérification du bon fonctionnement du site. Utilisation de Yarn comme gestionnaire de packages et de Node.js pour exécuter le code JavaScript côté serveur, facilitant la gestion des dépendances et l&apos;exécution de tests locaux. Versionning du travail avec GitHub et utilisation de Visual Studio Code comme éditeur de code pour le développement et le débogage. Ce projet a permis de développer des compétences cruciales en débogage, en rédaction de cahiers de recette et en utilisation d&apos;outils tels que React Developer Tools, Yarn et Node.js, tout en appliquant une approche rigoureuse et méthodique pour assurer la qualité et la fiabilité du site web.</p>
                <p>Lien GitHub : <a href="https://github.com/Iceland549/Debuggez-une-application-React" target="_blank" rel="noopener noreferrer" className="github-link">https://github.com/Iceland549/Debuggez-une-application-React</a></p>

                <h2>Optimisation SEO et accessibilité d&apos;un site de photographe</h2>
                <p>Identification des problèmes de chargement et de référencement du site à l&apos;aide d&apos;outils tels que Lighthouse et Wave.</p>
                <p>Proposition de recommandations pour améliorer la vitesse de chargement, la structure du code et le référencement naturel (SEO).</p>
                <p>Implémentation des améliorations proposées en modifiant directement le code du site, dans le but d&apos;optimiser les performances et l&apos;accessibilité pour un meilleur référencement sur les moteurs de recherche. Création d&apos;un rapport détaillé illustrant les résultats avant et après les modifications, comprenant des captures d&apos;écran des audits, des explications sur les changements apportés et leur impact sur le SEO et l&apos;accessibilité. Ce projet a permis de développer des compétences essentielles en optimisation du référencement (SEO) et de l&apos;accessibilité, tout en mettant en pratique des techniques d&apos;analyse et d&apos;amélioration des performances d&apos;un site web, contribuant ainsi à une meilleure expérience utilisateur et une plus grande visibilité en ligne.</p>
                <p>Lien GitHub : <a href="https://github.com/Iceland549/ninacarducci.github.io" target="_blank" rel="noopener noreferrer" className="github-link">https://github.com/Iceland549/ninacarducci.github.io</a></p>
            </article>
            <nav>
                <Link to={'/#top'}>
                    <p>Accueil</p>
                </Link>
                <Link to={'/Skills#top'}>
                    <p>Mes Skills</p>
                </Link>
            </nav>
        </div>
    )
}

export default Projects;