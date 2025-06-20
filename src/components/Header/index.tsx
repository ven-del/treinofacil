import { ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { limparSessao } from "../../services/authService";

type UserData = {
  nome: string;
  display_name: string;
  image_url: string;
  email: string;
};

const TITLES: Record<string, string> = {
  "/app/exercicios": "Dashboard do Aluno",
  "/app/calendario": "Calendário de Treinos",
  "/app/plano-de-treino": "Plano de Treinamento",
  "/app/acompanhamento-fisico": "Acompanhamento Físico",
  "/app/quests": "Quests",
  "/app/profile": "Perfil do Aluno",
};

function getTitle(pathname: string) {
    if (pathname.startsWith('/app/exercicios')) {
        if (pathname.includes('/exercicios/')) {
            return 'Detalhes do Exercício';
        }
        return 'Dashboard do Aluno';
    } else if (pathname.startsWith('/app/quests')) {
        if (pathname.includes('/quests/')) {
            return 'Detalhes da Quest';
        }
        return 'Quests';
    } else {
        return TITLES[pathname] || 'Página de Detalhes';
    }
}
const Header = () => {
    const location = useLocation();
    const title = getTitle(location.pathname);
    const [showMenu, setShowMenu] = useState(false);
    const [, setUserData] = useState<UserData | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("usuarioLogado");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowMenu(false);
          }
        };
        if (showMenu) {
          document.addEventListener("mousedown", handleClickOutside, true);
        }
        return () => {
          document.removeEventListener("mousedown", handleClickOutside, true);
        };

    }, [showMenu]);

    const  navigateToProfile = () => {
        navigate('/app/profile');
    }

    const logout = async () => {
      try {
        await fetch("http://localhost:3000/api/logout", {
          method: "POST",
          credentials: "include", // se estiver usando cookies
        });
      } catch (err) {
        console.error("Erro ao fazer logout:", err);
      } finally {
        limparSessao();
        navigate("/login");
      }
    };
    const [nomeAluno, setNomeAluno] = useState<string | null>(null);
  const [imagemAluno, setImagemAluno] = useState<string | null>(null);
  
  useEffect(() => {
    const dadosUsuario = localStorage.getItem("usuarioLogado");
    if (dadosUsuario) {
      try {
        const usuario = JSON.parse(dadosUsuario);
        setNomeAluno(usuario.display_name || usuario.nome);
        setImagemAluno(usuario.image_url);
      } catch (err) {
        console.error("Erro ao recuperar usuário do localStorage", err);
      }
    }
  }, []);

  

    return (
      <div className="grid grid-cols-3 items-center px-15 py-2 border-b border-gray-200">
        <div></div>
        <div className="flex justify-center">
          <h1 className="text-3xl text-(--text-color)">{title}</h1>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu((prev) => !prev);
          }}
          className="justify-self-end flex items-center cursor-pointer gap-3"
        >          <img
            src={imagemAluno || '/assets/icons/logo.png'}
            alt={`Foto de perfil de ${nomeAluno}`}
            className="h-20 w-20 rounded-full object-cover"
          />
          <h2>{nomeAluno}</h2>
          <ChevronDown color="#6C757D" />
        </div>
        <div
          ref={menuRef}
          className={`
    fixed right-8 top-16 w-30 z-50
    transition-all duration-300
    ${
      showMenu
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }
    bg-white shadow-lg rounded-lg p-4
  `}
        >
          <p
            onClick={navigateToProfile}
            className="w-full cursor-pointer text-center hover:bg-slate-200 transition-all ease-in-out duration-250"
          >
            Perfil
          </p>
          <p
            onClick={logout}
            className="w-full cursor-pointer text-center hover:bg-slate-200 transition-all ease-in-out duration-250"
          >
            Sair
          </p>
        </div>
      </div>
    );
}
 
export default Header;