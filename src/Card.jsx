import picture from './assets/me.webp'
import './index.css'

function Card() {
    return(
        <div className='card background'>
            <a href="https://github.com/narehiko/Card-Components-React-JS">
            <img className='profilePic' loading='lazy' src={picture} alt="profile picture"></img>
            </a>
            <h2 className='card-title'>narehiko</h2>
            <p className='card-text'>I'm currently learning React 💕</p>
        </div>
    );
}

export default Card