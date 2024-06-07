import { useEffect, useState } from 'react';
import Project from '../../components/Project';
import projectData from '../../data/projects.json';
import Modal from '../../components/Modal';
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import Scroll from '../../components/Scroll';

function Projects() {
    Scroll();

    const [projects, setProjects] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState([]);
    const [modalLink, setModalLink] = useState('');

    const openModal = (title, description, link) => {
        setModalTitle(title);
        setModalDescription(description);
        setModalLink(link);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        setProjects(projectData);
    }, []);

    return (
        <div className='projects'>
            <a id="top"></a>
            <h1>Mes Projets</h1>
            <article>
                <div className="project-grid">
                    {projects.map((project) => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            openModal={openModal}
                        />
                    ))}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    isClose={closeModal}
                    title={modalTitle}
                    description={modalDescription}
                    link={modalLink}
                />
            </article>
            <nav>
                <Link to={'/'}>
                    <p>Accueil</p>
                </Link>
                <Link to={'/Skills'}>
                    <p>Mes Skills</p>
                </Link>
            </nav>
        </div>
    )
}

export default Projects;