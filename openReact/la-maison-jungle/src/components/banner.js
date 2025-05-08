import '../styles/banner.css';
import logo from '../assets/logo.png';
import Recommandation from './recom.js'
function Banner(){
    const title = 'La maison jungle';
   
   

    return(<div className="lmj-banner">
        <img src={logo} alt='la maison jungle' className='lmj-logo'/>
        <h1 style={{color : 'green'}}> {title}</h1>
        <Recommandation />
    </div>
    )
}
export default Banner;



