const Footer = () => {
  return (
    <div className="mt-auto py-4 flex flex-col gap-8 bg-slate-800">
      <div className="flex flex-col mt-5 md:flex-row justify-evenly items-start px-4 md:px-20 gap-4 md:gap-15">
        <div>
          <h3 className="font-bold text-white mb-2">Institucional</h3>
          <ul className="text-gray-500 w-42 list-disc">
            <li className="footer-link w-fit">Sobre o treino fácil</li>
            <li className="footer-link w-fit">Política de Privacidade</li>
            <li className="footer-link w-fit">Programa de Afiliados</li>
            <li className="footer-link w-fit">Soluções Corporativas</li>
            <li className="footer-link w-fit">Regulamentos</li>
            <li className="footer-link w-fit">Relatórios</li>
            <li className="footer-link w-fit">Programa de Integridade</li>
            <li className="footer-link w-fit">Blog</li>
            <li className="footer-link w-fit">Black Friday TreinoFácil</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-white mb-2">Ajuda</h3>
          <ul className="text-gray-500 w-fit list-disc">
            <li className="footer-link">Minha Conta</li>
            <li className="footer-link">Meus Pedidos</li>
            <li className="footer-link">Pagamentos</li>
            <li className="footer-link">Cancelamentos</li>
            <li className="footer-link">Segurança & Privacidade</li>
            <li className="footer-link">Como Comprar</li>
            <li className="footer-link">Acessibilidade</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-white">Central de Relacionamentos</h3>
          <h2 className="font-extrabold text-white p-2 border-2 w-fit rounded-full cursor-pointer">
            Tire suas dúvidas
          </h2>
          <p className="text-gray-500 w-fit">Central de Vendas</p>
          <p className="text-gray-500 w-fit">(85) XXXXX-XXXX</p>
          <p className="text-gray-500 w-fit">(85) XXXXX-XXXX</p>
        </div>
        <div>
          <h2 className="font-bold text-white">Nossas redes sociais:</h2>
        </div>
      </div>
      <div className="border-t border-white mt-4 w-[80%] self-center">
        <p className="text-center text-white text-md pt-4">
          &copy; {new Date().getFullYear()} TreinoFacil. Criado por equipe Lab
          Interns @ Laboratório.CE. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
