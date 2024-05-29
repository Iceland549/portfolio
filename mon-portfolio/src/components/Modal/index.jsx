/* eslint-disable react/prop-types */
import ReactModal from 'react-modal';

const Modal = ({ isOpen, isClose, title, description, link }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            isClose={isClose}
            contentLabel={title}
            className="modal-content"
        >
            <h2>{title}</h2>
            {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <p>Lien GitHub : <a href={link} target="_blank" rel="noopener noreferrer" className='github-link'>{link}</a></p>
            <button onClick={isClose}>Fermer</button>
        </ReactModal>
    );
};

export default Modal;