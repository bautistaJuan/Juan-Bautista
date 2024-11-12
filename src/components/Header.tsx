import LogoText from "./LogoText";
const Header = () => {
  return (
    <header className="h-[5rem] border-b border-gray-300 flex items-center justify-center px-4">
      <div className="flex-grow">
        <LogoText />
      </div>
      <a href="mailto:vegajuancontact@gmail.com" className="text-[#FFA500] absolute right-0 p-3 lg:text-[1.3rem] font-bold">Hablame</a>
    </header>
  );
};

export default Header;