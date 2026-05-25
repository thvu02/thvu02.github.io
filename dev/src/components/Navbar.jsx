import { Link } from 'react-router-dom';

const LINK_CLS = "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/hobbies', label: 'Hobbies' },
];

const Navbar = () => (
  <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-0 md:p-4">
      <div className="items-center justify-between w-full md:flex md:w-auto">
        <ul className="justify-center flex p-2 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={LINK_CLS}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
