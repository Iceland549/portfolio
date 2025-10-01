/* eslint-disable react/prop-types */

function Project({ title, description, technologies, highlights, link, openModal }) {
  return (
    <div className="project">
      <h3 onClick={() => openModal(title, description, technologies, highlights, link)}>
        {title}
      </h3>
    </div>
  );
}

export default Project;
