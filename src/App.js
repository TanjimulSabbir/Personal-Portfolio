import './App.css';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';
import Home from './Pages/Home';
import Work from './Pages/Work/Work';
import SocialLink from './Pages/SocialLink/SocialLink';
import Email from './Pages/Email/Email';


function App() {
  return (
    <div className='bg-[#0a192f]'>
      <Header></Header>
      <div className='relative UniversalPadding'>
        <Home></Home>
        <About></About>
        <Experience></Experience>
        <Work></Work>
        <Contact></Contact>
        <SocialLink></SocialLink>
        <Email></Email>
      </div>
    </div>
  );
}

export default App;
