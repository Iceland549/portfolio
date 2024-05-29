/* eslint-disable react/prop-types */

function Project({ title, description, openModal, link }) {
    return (
        <div className="project">
            <h3 onClick={() => openModal(title, description, link)}>{title}</h3>
        </div>
    );
}

export default Project;
