import { useState, useEffect } from 'react';
import NavbarItem from "../navbar-item/navbar-item"

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'alunos', 'professores', 'cadastro', 'login'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

return (
    <nav className="navbar">
        <div className="navbar_logo">
            <img src="src\assets\icons\logo-treinofacil.svg" alt="Logo TreinoFacil" />
            <h1 className="title">TreinoFacil</h1>
        </div>
        <ul className="navbar_menu">
            {['home', 'alunos', 'professores', 'cadastro', 'login'].map((section) => (
                <li key={section}>
                    <NavbarItem
                        targetId={section}
                        label={section.charAt(0).toUpperCase() + section.slice(1)}
                        isActive={activeSection === section}
                    />
                </li>
            ))}
        </ul>
    </nav>
);
}

export default Navbar;