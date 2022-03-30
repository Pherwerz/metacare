import { FC } from 'react';
import './Header.scss';
import icon from '../../assets/icons/icons.svg';

const links = [
  {
    name: 'Efficiency',
    active: true,
  },
  {
    name: 'Volume',
    active: false,
  },
  {
    name: 'Customer Satisfaction',
    active: false,
  },
  {
    name: 'Backlog',
    active: false,
  },
];

const Header: FC = () => {
  return (
    <header className="header">
      {/* header top */}
      <div className="header-top flex justify-between items-center">
        <div className="header-top-left">
          <form className="w-full h-full flex items-center">
            <div className="flex-1">
              <input
                type="text"
                className="focus:outline-none w-full bg-transparent"
                placeholder="Ask us any question"
              />
            </div>

            <button>
              <svg className="fill-transparent">
                <use xlinkHref={`${icon}#icon-search`} />
              </svg>
            </button>
          </form>
        </div>

        <div className="header-top-right flex justify-between items-center">
          <button className="header-top-notification flex justify-between items-center">
            <svg>
              <use xlinkHref={`${icon}#icon-bell`} />
            </svg>

            <span className="flex justify-center items-center">3</span>
          </button>

          <hr />

          <button className="header-top-avatar flex items-center">
            <div className="rounded-full"></div>

            <svg>
              <use xlinkHref={`${icon}#icon-chevron-down`} />
            </svg>
          </button>
        </div>
      </div>

      {/* header middle */}
      <div className="header-middle">
        <ul className="h-full flex ">
          {links.map(cur => (
            <li
              className={`h-full flex items-center${
                cur.active ? ' header-middle-active' : ''
              }`}
              key={cur.name}
            >
              {cur.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="header-bottom flex justify-between items-center">
        <h1>Efficiency Analytics</h1>

        <div className="flex-1 flex items-center justify-end">
          <form className="h-full flex items-center">
            <button>
              <svg className="fill-transparent">
                <use xlinkHref={`${icon}#icon-search`} />
              </svg>
            </button>

            <div className="flex-1">
              <input
                type="text"
                className="focus:outline-none w-full bg-transparent"
                placeholder="Search"
              />
            </div>
          </form>

          <button className="h-full flex items-center justify-center header-bottom-filter">
            Filter Options
            <svg>
              <use xlinkHref={`${icon}#icon-chevron-down`} />
            </svg>
          </button>

          <hr />

          <button className="h-full header-bottom-export">Export</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
