import { useState, useEffect } from "react";
import NavbarItem from "../NavbarItem";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "alunos", "professores"];

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-10 py-5 bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] z-10">
      <Link to="/">
        <div className="flex gap-5 items-center">
          <img
            src="/assets/icons/logo-treinofacil.svg"
            alt="Logo TreinoFacil"
          />
          <h1 className="text-4xl font-bold text-white">TreinoFacil</h1>
        </div>
      </Link>

      <div>
        {location.pathname === "/" ? (
          <ul className="flex gap-8 items-center">
            <li>
              <NavbarItem
                targetId="home"
                label="Home"
                isActive={activeSection === "home"}
              />
            </li>
            <li>
              <NavbarItem
                targetId="alunos"
                label="Para Alunos"
                isActive={activeSection === "alunos"}
              />
            </li>
            <li>
              <NavbarItem
                targetId="professores"
                label="Para Professores"
                isActive={activeSection === "professores"}
              />
            </li>
          </ul>
        ) : (
          <Link to="/">
            <h2 className="text-white text-3xl font-bold hover:underline">
              Voltar para a Home
            </h2>
          </Link>
        )}
      </div>

      <div className="flex gap-4 items-center">
        <button
          className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-md hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => navigate("/cadastro")}
        >
          Cadastro
        </button>
        <button
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;