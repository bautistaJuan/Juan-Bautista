import LogoText from "./LogoText";
const Header = () => {
  return (
    <header className="h-[5rem] border-b border-gray-300 flex items-center justify-center px-4">
      <div className="flex-grow">
        <LogoText />
      </div>
      <a href="mailto:vegajuancontact@gmail.com" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-[#ff8036] transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">Hablemos</a>
      {/* <a href="mailto:vegajuancontact@gmail.com" className="bg-[#ff8036] text-white rounded-lg absolute right-2 p-1 lg:text-[1.2rem] font-bold">Hablemos</a> */}
    </header>
  );
};

export default Header;