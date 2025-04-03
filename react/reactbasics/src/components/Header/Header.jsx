import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center py-4 px-6">
        <h1 className="text-2xl font-bold mr-auto">
          <Link
            to="/"
            className={({ isActive }) => `
    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    lg:hover:bg-transparent lg:border-0
    hover:text-orange-700
    lg:p-0 
  `}
          >
            Basic React App
          </Link>
        </h1>
        <ul className="flex space-x-6 mx-auto">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `
    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    lg:hover:bg-transparent lg:border-0
    hover:text-orange-700
    lg:p-0 
  `}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/currencyconverter"
              className={({ isActive }) => `
    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    lg:hover:bg-transparent lg:border-0
    hover:text-orange-700
    lg:p-0 
  `}
            >
              Currency Converter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bgcolor"
              className={({ isActive }) => `
    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    lg:hover:bg-transparent lg:border-0
    hover:text-orange-700
    lg:p-0 
  `}
            >
              BG Color
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/card"
              className={({ isActive }) => `
    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    lg:hover:bg-transparent lg:border-0
    hover:text-orange-700
    lg:p-0 
  `}
            >
              Card
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user"
              className={({ isActive }) => `
    block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
    lg:hover:bg-transparent lg:border-0
    hover:text-orange-700
    lg:p-0 
  `}
            >
              User
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) => `
              block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
              lg:hover:bg-transparent lg:border-0
              hover:text-orange-700
              lg:p-0 
            `}
            >
              Github
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pwdgen"
              className={({ isActive }) => `
              block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
              lg:hover:bg-transparent lg:border-0
              hover:text-orange-700
              lg:p-0 
            `}
            >
              Password generator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/themeswitch"
              className={({ isActive }) => `
        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
        lg:hover:bg-transparent lg:border-0
        hover:text-orange-700
        lg:p-0 
      `}
            >
              Theme switch
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/todo"
              className={({ isActive }) => `
      block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
      lg:hover:bg-transparent lg:border-0
      hover:text-orange-700
      lg:p-0 
    `}
            >
              Todo app
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
