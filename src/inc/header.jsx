import PropTypes from 'prop-types';
// prop 유효성 검사 추가 : 코드 안정성, 유지 관리성을 개선하고 개발 프로세스 초기에 오류를 포착하는 데 도움이 됨. React 구성 요소의 견고성을 보장하기 위해 권장되는 방법.
import { NavLink } from 'react-router-dom';

const menuText = [
  { title: 'main', url: '/' },
  { title: 'error', url: '/error' },
  { title: 'about', url: '/about' },
  { title: 'childPage', url: '/childPage' },
];

const dropText = [
  { title: 'Login', url: '/Login' },
  { title: 'Profile', url: '/Profile' },
];

{
  /* Mobile menu button */
}
function Menu({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      id="nav-menu-button"
      aria-controls="nav-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      {/* Icon when menu is closed.
            Menu open: "hidden", Menu closed: "block" */}
      <svg
        className="block h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {/* Icon when menu is open.
            Menu open: "block", Menu closed: "hidden" */}
      <svg
        className="hidden h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
// prop 유효성 검사를 추가하여 onClick이 함수이며 Menu 컴포넌트에 필요함을 나타낸다.
Menu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function Logo() {
  return (
    <>
      <img
        className="block h-8 w-auto lg:hidden"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <img
        className="hidden h-8 w-auto lg:block"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
    </>
  );
}
function MenuLink() {
  const menuList = menuText.map((t) => {
    return (
      // Link, NavLink 서버에 리퀘스트 요청하지 않음
      <NavLink
        to={t.url}
        className="block text-base text-gray-100 after:content-['_↗'] rounded-md px-3 py-2 font-medium sm:text-lg sm:text-gray-600 hover:after:content-['_★'] hover:bg-gray-700 hover:text-white"
        key={t.title}
      >
        {t.title}
      </NavLink>
    );
  });

  return (
    <div className="space-y-1 px-2 pb-3 pt-2 sm:space-y-0 sm:flex sm:space-x-4 sm:p-0">
      {menuList}
    </div>
  );
}

function Notification() {
  return (
    <>
      <button
        type="button"
        className="rounded-full p-1 text-gray-400 hover:text-white hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 relative"
      >
        <span className="sr-only">View notifications</span>
        <span className="absolute right-0 top-0 flex h-2 w-2">
          <span className="animate-ping absolute h-full w-full rounded-full bg-sky-300 opacity-95"></span>
          <span className="relative  rounded-full h-full w-full bg-sky-500"></span>
        </span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </button>
    </>
  );
}

function Dropdown() {
  const userMenuList = dropText.map((d) => {
    return (
      // active link
      <NavLink
        to={d.url}
        className={({ isActive, isPending }) =>
          isActive ? 'active' : isPending ? 'pending' : ''
        }
        // className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-0"
        key={d.title}
      >
        {d.title}
      </NavLink>
    );
  });

  return (
    <div
      id="user-menu-content"
      className="hidden animate-dropOut absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      {userMenuList}
    </div>
  );
}

window,
  addEventListener('load', () => {
    const nav = document.querySelector('nav');
    const navTop = nav.offsetHeight;
    function navFixed() {
      if (window.scrollY > navTop) {
        nav.classList.add('is-fixed');
        nav.classList.remove('not-fixed');
      } else {
        nav.classList.add('not-fixed');
        nav.classList.remove('is-fixed');
      }
    }
    navFixed();
    window.addEventListener('scroll', () => {
      navFixed();
    });
  });

export default function Nav() {
  // 모바일 메뉴 조정
  function handleClick() {
    let button = document.querySelector('#nav-menu-button');
    const svg = button.querySelectorAll('svg');
    const menuContent = document.querySelector('#nav-menu');

    if (button.getAttribute('aria-expanded') == 'false') {
      button.setAttribute('aria-expanded', true);
      button.classList.add('bg-gray-800');
      svg[0].classList.replace('block', 'hidden');
      svg[1].classList.replace('hidden', 'block');
      menuContent.classList.replace('hidden', 'block');
      menuContent.setAttribute('aria-expanded', true);
    } else {
      button.setAttribute('aria-expanded', 'false');
      button.classList.remove('bg-gray-800');
      svg[0].classList.replace('hidden', 'block');
      svg[1].classList.replace('block', 'hidden');
      menuContent.classList.replace('block', 'hidden');
      menuContent.setAttribute('aria-expanded', 'false');
    }
  }

  function handleOPen() {
    console.log(2);
    let button = document.querySelector('#user-menu-button');
    const menuContent = document.querySelector('#user-menu-content');

    if (button.getAttribute('aria-expanded') == 'false') {
      button.setAttribute('aria-expanded', 'true');
      menuContent.classList.replace('hidden', 'block');
      menuContent.classList.replace('animate-dropOut', 'animate-dropIn');
    } else {
      button.setAttribute('aria-expanded', 'false');
      menuContent.classList.replace('block', 'hidden');
      menuContent.classList.replace('animate-dropIn', 'animate-dropOut');
    }
  }
  return (
    <>
      <nav className="transition ease-in-out duration-150 z-50 not-fixed">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Menu onClick={handleClick} />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Logo />
              </div>
              <div
                id="nav-menu"
                aria-labelledby="nav-menu-button"
                aria-expanded="true"
                className="hidden bg-gray-800 absolute -inset-x-2 top-full sm:block sm:bg-transparent sm:ml-6 sm:static sm:inset-auto sm:top-auto "
              >
                <MenuLink />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Notification />
              {/* Profile dropdown  */}
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={handleOPen}
                    id="user-menu-button"
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-controls="user-menu-content"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
