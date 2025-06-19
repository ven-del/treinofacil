interface NavbarItemProps {
  targetId: string;
  label: string;
  isActive: boolean;
}

function NavbarItem({ targetId, label, isActive }: NavbarItemProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    const navbarHeight = 100; // ajuste conforme a altura real da sua navbar
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button 
      className={`button ${isActive ? 'active' : ''}`} 
      onClick={scrollToSection}
    >
      {label}
    </button>
  );
}

export default NavbarItem;