import '../../styles/main.css';
import { Link } from 'react-router-dom';


function Error() {
    return (
        <div className='error'>
            <h1>404</h1>
            <article>
                <p>Oups ! La page que <br /> vous demandez n&apos;existe pas.</p>
                <Link to={'/'}>
                    <p className='error-link'> Retour sur la page d&apos;accueil</p>
                </Link>
            </article>
        </div>
    )
}

export default Error;