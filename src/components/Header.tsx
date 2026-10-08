import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 md:grid-cols-3">
        <div className="hidden md:block" />

        <div className="flex items-center gap-3 md:justify-center">
          <Image
            src="/logo.webp"
            height={40}
            width={40}
            alt="Bangla News 24 logo"
            className="rounded-xl shadow-sm"
          />
          <div className="leading-tight">
            <h2 className="text-lg font-bold tracking-tight text-[#C10007]">
              Bangla News 24
            </h2>
            <p className="text-xs text-gray-500 sm:text-sm">{date}</p>
          </div>
        </div>
       </div>
        <UserInfo></UserInfo>
   
      <NavLinks></NavLinks>
    </header>
  );
};

export default Header;
