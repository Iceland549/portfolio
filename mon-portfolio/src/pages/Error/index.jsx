import '../../styles/main.css';
import { Link } from 'react-router-dom';


function Error() {
    return (
        <div className='error-container'>
            <h1>404</h1>
            <p>Oups ! La page que <br /> vous demandez n&apos;existe pas.</p>
            <Link to={'/'}>
                <p className='error-link'> Retour sur la page d&apos;accueil</p>
            </Link>
        </div>
    )
}

export default Error;