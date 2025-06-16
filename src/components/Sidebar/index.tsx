import { useState } from "react";
import {
  Calendar,
  Filter,
  FileText,
  Activity,
  Target,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";

const menuItems = [
  { title: "Treino de hoje", icon: Filter, url: "/app/exercicios", isActive: true, },
  { title: "Calendário", icon: Calendar, url: "/app/calendario" },
  { title: "Plano de treinamento", icon: FileText, url: "/app/plano-de-treino", },
  { title: "Acompanhamento Físico", icon: Activity, url: "/app/acompanhamento-fisico",},
  { title: "Quests", icon: Target, url: "/app/quests" },
];

const Sidebar = () => {
  usePageTitle();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <div
      className={`bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-18 py-2" : "w-64"}`}
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-4 h-24.2">
        <button
          onClick={toggleSidebar}
          className={`w-full p-3 rounded-lg transition-colors duration-200 cursor-pointer flex items-center
            ${isCollapsed ? "justify-center" : "justify-start"}`}
        >
          <div className="flex items-center justify-center w-8 h-8 shrink-0">
            <img
              src="/assets/icons/logged-logo.svg"
              className="w-30 text-blue-500"
            />
          </div>
          {!isCollapsed && (
            <div className="flex flex-col items-start ml-3">
              <span className="text-lg font-bold text-gray-900 leading-tight">
                TREINO FÁCIL
              </span>
              <span className="text-sm text-gray-600 leading-tight">
                Nome da Academia
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 p-3">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.url}
              className={({ isActive }) => `
             flex items-center h-12 px-3 rounded-xl transition-all duration-200
             ${isCollapsed ? "w-12 justify-center px-0" : "w-full"}
             ${
               isActive
                 ? "bg-blue-500 text-white hover:bg-blue-600 shadow-sm"
                 : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
             }
           `}
            >
              <item.icon
                className={`shrink-0 ${isCollapsed ? "w-6 h-6" : "w-5 h-5"}`}
              />
              {!isCollapsed && (
                <span className="ml-3 font-medium truncate">{item.title}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;