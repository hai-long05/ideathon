import { useScrollDirection } from '../hooks/useScrollDirection';

type HeaderProps = {
  refs: Record<string, React.RefObject<HTMLElement | null>>;
};

const Header = ({ refs }: HeaderProps) => {
  const scrollDir = useScrollDirection();

  const scrollToSection = (section: string) => {
    const ref = refs[section];
    if (!ref?.current) return;

    const elementPosition =
      ref.current.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  return (
    <div
      className={`sticky top-0 z-50 px-16 py-4 flex justify-between items-center bg-white transition-transform duration-300 ${
        scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="font-medium">[re:frame]</div>
      <div className="flex space-x-8 text-gray-500">
        {Object.keys(refs).map((section) => (
          <div
            key={section}
            className="cursor-pointer"
            onClick={() => scrollToSection(section)}
          >
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
