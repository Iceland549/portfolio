/* eslint-disable react/prop-types */
import ReactModal from 'react-modal';

const Modal = ({ isOpen, isClose, title, description, technologies, highlights, link }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={isClose}
      contentLabel={title}
      className="modal-content"
    >
      <h2>{title}</h2>

      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      {technologies && (
        <div>
          <h3>Technologies</h3>
          <p>{technologies}</p>
        </div>
      )}

      {highlights && (
        <div>
          <h3>Highlights</h3>
          <p>{highlights}</p>
        </div>
      )}

      {link && (
        <p>
          Lien GitHub :{' '}
          <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
            {link}
          </a>
        </p>
      )}

      <button onClick={isClose}>Fermer</button>
    </ReactModal>
  );
};

export default Modal;