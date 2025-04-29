interface NavbarItemProps {
  targetId: string;
  label: string;
  isActive: boolean;
}

function NavbarItem({ targetId, label }: NavbarItemProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
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