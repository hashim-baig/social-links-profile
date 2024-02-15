import profilePic from './assets/images/hashim-baig.jpg';

import NameLocation from './components/NameLocation';
import Socials from './components/Socails';
import profile from './data';

function App() {

  
  return (

    <section className="main-container">

      <img className="image-social" src={profilePic} alt={profile.name} />

      <NameLocation name={profile.name} city={profile.city}/>

      <p className="role">{profile.description}</p>

      <Socials urls={profile.socialLinks}/>

    </section>

  )
}

export default App
