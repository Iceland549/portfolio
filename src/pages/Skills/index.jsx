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
            <li>Intégration front-back via APIs REST (MTB, Argent Bank).</li>
            <li>Coordination avec parties prenantes (débogage React, SEO Nina Carducci).</li>
            <li>Rédaction de cahiers de recette et rapports techniques.</li>
            <li>Empathie et écoute active, renforcées par des défis personnels.</li>
          </ul>

          <h3>Gestion du Temps et Organisation</h3>
          <ul>
            <li>Respect des délais malgré contraintes personnelles et familiales.</li>
            <li>Planification et priorisation des tâches (projets OC, MTB microservices).</li>
            <li>Adaptation aux imprévus.</li>
          </ul>

          <h3>Résolution de Problèmes</h3>
          <ul>
            <li>Débogage avancé avec Chrome DevTools et React Tools.</li>
            <li>Optimisation des performances (SEO, Lighthouse, Wave).</li>
            <li>Pensée critique et logique (tests unitaires xUnit, validation JWT).</li>
            <li>Résilience face aux doutes et obstacles techniques.</li>
          </ul>

          <h3>Agilité et Adaptabilité</h3>
          <ul>
            <li>Méthodologies agiles appliquées (Kanban, itérations).</li>
            <li>Rebond face aux obstacles (Docker, CI/CD, refactoring MTB).</li>
            <li>Remise en question et amélioration continue.</li>
          </ul>
        </section>

        <section>
          <h2>Hard Skills</h2>

          <h3>C# / .NET</h3>
          <ul>
            <li>Développement d’APIs REST sécurisées (JWT, EF Core).</li>
            <li>Architecture microservices (.NET 8, Ocelot Gateway).</li>
            <li>Gestion de la concurrence (async/await, thread safety).</li>
          </ul>

          <h3>Bases de Données</h3>
          <ul>
            <li>SQL Server avec EF Core (authentification, persistance).</li>
            <li>MongoDB pour données non structurées (MTB).</li>
            <li>Modélisation relationnelle (NexaWorks).</li>
          </ul>

          <h3>DevOps & Tests</h3>
          <ul>
            <li>Docker & Docker Compose (orchestration MTB).</li>
            <li>CI/CD avec GitHub Actions.</li>
            <li>Tests unitaires et d’intégration (xUnit, Moq).</li>
            <li>Documentation Swagger pour APIs.</li>
          </ul>

          <h3>Frontend (Complémentaire)</h3>
          <ul>
            <li>React & Redux (Argent Bank, Kasa).</li>
            <li>Optimisation SEO et accessibilité (Nina Carducci).</li>
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
  );
}

export default Skills;