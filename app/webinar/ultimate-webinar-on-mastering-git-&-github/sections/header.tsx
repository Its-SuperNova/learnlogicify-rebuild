import Image from "next/image";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  return (
    <header className="py-4 border-b border-white/20 md:border-none" >
      <div className="container mx-auto pl-2 pr-2" >
        <div className="flex justify-between items-center  md:p-2.5 rounded-xl max-w-2xl mx-auto">
          <div>
            <Image
              src="/SVG/logo/logo-icon.svg"
              alt="Logo"
              width={50}
              height={50}
              className="h-10 w-10"
            />
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              
              <a href="" className=" text-white/70 hover:text-white transition">
                Company
              </a>
              <a href="" className=" text-white/70 hover:text-white transition">
                Courses
              </a>
              <a href="" className=" text-white/70 hover:text-white transition">
                Portal
              </a>
              <a href="" className=" text-white/70 hover:text-white transition">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c25ff] ">
              <div className="absolute inset-0 rounded-lg">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <span>enroll now</span>
            </button>
            <IoMenu size={35} className="md:hidden"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
