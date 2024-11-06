import LogoText from "./LogoText";
const Header = () => {
  return (
    <header className="h-[5rem] border-b border-gray-300 flex items-center justify-center px-4">
      <div className="flex-grow">
        <LogoText />
      </div>
      <button className="text-[#62646A] absolute right-0 p-3 rounded">Hablame</button>
    </header>
  );
};

export default Header;