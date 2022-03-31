import { FC, useState } from 'react';
import './Nav.scss';
import icon from '../../assets/icons/icons.svg';

const links = [
  {
    title: 'Admin',
    icon: 'user',
    type: 1,
    links: [
      { name: 'Teams', link: '#' },
      { name: 'Knowledge Base', link: '#' },
      { name: 'Training SAM', link: '#' },
      { name: 'Help Center', link: '#' },
    ],
  },
  {
    title: 'Knowledge Base',
    icon: 'tick',
    type: 2,
    links: [
      { name: 'Teams', link: '#' },
      { name: 'Knowledge Base', link: '#' },
      { name: 'Training SAM', link: '#' },
      { name: 'Help Center', link: '#' },
    ],
  },
  {
    title: 'Train SAM',
    type: 2,
    icon: 'tick',
    links: [
      { name: 'Teams', link: '#' },
      { name: 'Knowledge Base', link: '#' },
      { name: 'Training SAM', link: '#' },
      { name: 'Help Center', link: '#' },
    ],
  },
  {
    title: 'Agent Inbox',
    icon: 'box',
    type: 3,
    links: [
      { name: 'Teams', link: '#' },
      { name: 'Knowledge Base', link: '#' },
      { name: 'Training SAM', link: '#' },
      { name: 'Help Center', link: '#' },
    ],
  },
  {
    title: 'Help Center',
    icon: 'time',
    type: 3,
    links: [
      { name: 'Teams', link: '#' },
      { name: 'Knowledge Base', link: '#' },
      { name: 'Training SAM', link: '#' },
      { name: 'Help Center', link: '#' },
    ],
  },
  {
    title: 'Analytics',
    icon: 'message',
    type: 3,
    links: [
      { name: 'Teams', link: '#' },
      { name: 'Knowledge Base', link: '#' },
      { name: 'Training SAM', link: '#' },
      { name: 'Help Center', link: '#' },
    ],
  },
];

const Nav: FC = () => {
  const [currentlyOpened, setCurrentlyOpened] = useState(5);
  const [currentLink, setCurrentLink] = useState(0);

  return (
    <nav className="nav">
      <div className="nav-avatar">
        <h2>Metacare</h2>
        <p>adeyinka@metacare.app</p>
      </div>

      <div className="nav-link">
        {links.map((cur, i) => (
          <div key={cur.title} className="nav-items">
            <button
              className={`flex w-full items-center nav-items-btn nav-items-btn-${
                cur.type
              }${currentlyOpened === i ? ' nav-items-btn-active' : ''}`}
              onClick={() => {
                setCurrentlyOpened(i);
                setCurrentLink(0);
              }}
            >
              <svg>
                <use xlinkHref={`${icon}#icon-${cur.icon}`} />
              </svg>

              <span
                className={`mr-auto ${
                  currentlyOpened === i ? 'font-medium' : ''
                }`}
              >
                {cur.title}
              </span>

              <svg
                className={` transition-transform ${
                  currentlyOpened !== i ? '-rotate-90' : ''
                }`}
              >
                <use xlinkHref={`${icon}#icon-chevron-down`} />
              </svg>
            </button>

            <ul className="nav-list">
              {currentlyOpened === i &&
                cur.links.map((link, il) => (
                  <li
                    className={`nav-list-items cursor-pointer ${
                      currentLink === il ? 'nav-list-items-active' : ''
                    }`}
                    key={link.name}
                    onClick={() => {
                      setCurrentLink(il);
                    }}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
