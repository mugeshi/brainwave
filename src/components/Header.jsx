import { brainwave } from "../assets";
import { navigation } from "../constants";

function Header() {
  return (
    <div
      className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm"
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:px-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav className="lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              console.log(item); 
              return (
                <a key={item.id} href={item.url} className="lg:mx-2 my-2 lg:my-0">
                  {item.title}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
