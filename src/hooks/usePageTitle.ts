// src/hooks/usePageTitle.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLES: Record<string, string> = {
    "/app/exercicios": "Dashboard do Aluno",
    "/app/exercicios/:id": "Detalhes do Exercício", // Este é um placeholder, a função getTitle trata melhor
    "/app/calendario": "Calendário de Treinos",
    "/app/plano-de-treino": "Plano de Treinamento",
    "/app/acompanhamento-fisico": "Acompanhamento Físico",
    "/app/quests": "Quests",
    "/app/quests/:id": "Detalhes da Quest" // Este é um placeholder, a função getTitle trata melhor
};

// Mantenha sua função getTitle fora do hook se ela for usada em outros lugares,
// ou mova-a para dentro se for exclusiva do gerenciamento de títulos.
// Para este exemplo, vou duplicar, mas o ideal é ter uma única fonte de verdade.
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
        return TITLES[pathname] || 'Página Não Encontrada'; // Adicione um fallback mais claro
    }
}

export function usePageTitle() {
    const location = useLocation();
    const pageTitle = getTitle(location.pathname);

    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle]);
}