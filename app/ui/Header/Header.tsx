import { useContext, useEffect, useState } from 'react';
import { Context } from '../../contexs/Context';
import './header.scss';
export default function Header() {
  const { open, setOpen } = useContext(Context);
  const [openTheme, setOpenTheme] = useState(false);
  const [openBookmark, setOpenBookmark] = useState(false);
  const [theme, setTheme] = useState('system-default');

  const toggleTheme = (newTheme: string) => {
    const body = document.body;
    switch (newTheme) {
      case 'light':
        body.classList.add('lgT');
        body.classList.remove('drK', 'syD');
        setTheme('light');
        localStorage.setItem('theme', 'light');
        break;
      case 'dark':
        body.classList.add('drK');
        body.classList.remove('lgT', 'syD');
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
        break;
      default:
        const isDark =
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add('syD');
        body.classList.toggle('drK', isDark);
        body.classList.toggle('lgT', !isDark);
        setTheme('system-default');
        localStorage.setItem('theme', 'system-default');
        break;
    }
  };

  const handlePreferredColorSchemeChange = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'system-default') {
      const isDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      const body = document.body;
      body.classList.add('syD');
      body.classList.toggle('drK', isDark);
      body.classList.toggle('lgT', !isDark);
      setTheme('system-default');
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const body = document.body;
    const preferedColorScheme =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    preferedColorScheme?.addEventListener(
      'change',
      handlePreferredColorSchemeChange
    );
    switch (storedTheme) {
      case 'dark':
        body.classList.add('drK');
        body.classList.remove('lgT');
        setTheme('dark');
        break;
      case 'light':
        body.classList.add('lgT');
        body.classList.remove('drK');
        setTheme('light');
        break;
      default:
        const isDark = preferedColorScheme?.matches;
        body.classList.add('syD');
        body.classList.toggle('drK', isDark);
        body.classList.toggle('lgT', !isDark);
        setTheme('system-default');
        localStorage.setItem('theme', 'system-default');
        break;
    }
  }, []);

  return (
    <header className="header">
      <div className="headCn">
        <div className="headL">
          <div className="headIc">
            <label onClick={() => setOpen(!open)} className="tNav tIc bIc">
              <svg className="line" viewBox="0 0 24 24">
                <g style={{ opacity: open ? '1' : '0' }} className="h1">
                  <path d="M 3 18 H 14 M 10 6 H 21" />
                  <line className="svgC" x1={3} x2={21} y1={12} y2={12} />
                </g>
                <g
                  style={{ opacity: open ? '0' : '1' }}
                  className="h2"
                  transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)">
                  <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0"></path>
                </g>
              </svg>
            </label>
          </div>
          <div className="headN section" id="header-title">
            <div className="headInnr">
              <h1 className="headH notranslate hasSub">
                <bdi>
                  <span className="headTtl">Al-Quran</span>
                </bdi>
                <span className="headSub" data-text="Blog" />
              </h1>
            </div>
          </div>
        </div>
        <div className="headR">
          <div className="headI">
            <div className="headS" id="header-search">
              <div className="BlogSearch">
                <form className="srchF" target="_top">
                  <input
                    aria-label="Cari blog ini"
                    autoComplete="off"
                    id="searchIn"
                    minLength={3}
                    name="q"
                    placeholder="Try 'Adventure'"
                  />
                  <span className="sb">
                    <svg className="line" viewBox="0 0 24 24">
                      <g>
                        <circle cx="11.36167" cy="11.36167" r="9.36167" />
                        <line
                          className="svgC"
                          x1={22}
                          x2="19.9332"
                          y1={22}
                          y2="19.9332"
                        />
                      </g>
                    </svg>
                  </span>
                  <button
                    aria-label="Clear"
                    className="sb"
                    data-text="âœ•"
                    type="reset"
                  />
                  <span className="fCls" />
                </form>
              </div>
            </div>
            <div className="headP">
              <div>
                <ul className="headIc">
                  <li className="isSrh">
                    <label
                      aria-label="Search"
                      className="tSrch tIc bIc"
                      htmlFor="searchIn">
                      <svg className="line" viewBox="0 0 24 24">
                        <g>
                          <circle cx="11.36167" cy="11.36167" r="9.36167" />
                          <line
                            className="svgC"
                            x1={22}
                            x2="19.9332"
                            y1={22}
                            y2="19.9332"
                          />
                        </g>
                      </svg>
                    </label>
                  </li>
                  <li className="isBkm">
                    <label
                      onClick={() => setOpenBookmark(true)}
                      aria-label="Bookmark"
                      className="tBkmt tIc bIc"
                      data-text={1}>
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z" />
                        </g>
                      </svg>
                    </label>
                  </li>
                  <li className="isDrk">
                    <label
                      onClick={() => setOpenTheme(true)}
                      aria-label="Mode"
                      className="navM tDark tIc tDL bIc"
                      role="button">
                      <svg className="line" viewBox="0 0 24 24">
                        <g className="d1">
                          <path
                            d="M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z"
                            transform="translate(-169.3959 -166.45548)"
                          />
                        </g>
                        <g className="d2">
                          <path
                            className="f"
                            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                          />
                          <path
                            className="svgC"
                            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                            strokeWidth={2}
                          />
                        </g>
                      </svg>
                    </label>
                    <div
                      style={{
                        visibility: openTheme ? 'visible' : 'hidden',
                        opacity: openTheme ? '1' : '0',
                      }}
                      className={`headM`}
                      data-text="Theme">
                      <span
                        aria-label="Light"
                        className="lgtB"
                        onClick={() => toggleTheme('light')}
                        role="button"></span>
                      <span
                        aria-label="Dark"
                        className="drkB"
                        onClick={() => toggleTheme('dark')}
                        role="button"></span>
                      <span
                        aria-label="System Default"
                        className="sydB"
                        onClick={() => toggleTheme('system-default')}
                        role="button"
                        style={{ display: 'block' }}></span>
                    </div>
                    {openTheme ? (
                      <label
                        onClick={() => setOpenTheme(!openTheme)}
                        style={{
                          visibility: 'visible',
                          opacity: '1',
                          zIndex: '17',
                        }}
                        className={`fCls`}
                      />
                    ) : null}
                  </li>
                </ul>
              </div>
              <div className="cBkPs">
                <div className={`${openBookmark ? 'openBkm ' : ''}wBkm sl`}>
                  <div className="bkmS fixLs">
                    <div className="bkmH fixH fixT" data-text="Bookmark Posts">
                      <label
                        onClick={() => setOpenBookmark(!openBookmark)}
                        aria-label="Close"
                        className="c cl"
                      />
                    </div>
                    <div id="dBmPs" className="bkmC">
                      <div className="n">
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(3.650100, 2.749900)">
                            <path d="M16.51,5.55 L10.84,0.15 C10.11,0.05 9.29,0 8.39,0 C2.1,0 -1.95399252e-14,2.32 -1.95399252e-14,9.25 C-1.95399252e-14,16.19 2.1,18.5 8.39,18.5 C14.69,18.5 16.79,16.19 16.79,9.25 C16.79,7.83 16.7,6.6 16.51,5.55 Z" />
                            <path d="M10.2839,0.0827 L10.2839,2.7437 C10.2839,4.6017 11.7899,6.1067 13.6479,6.1067 L16.5989,6.1067" />
                            <line
                              className="svgC"
                              x1="10.6623"
                              y1="10.2306"
                              x2="5.7623"
                              y2="10.2306"
                            />
                            <line
                              className="svgC"
                              x1="8.2131"
                              y1="12.6808"
                              x2="8.2131"
                              y2="7.7808"
                            />
                          </g>
                        </svg>
                        <p>
                          The list of favorite articles does not exist yet...
                        </p>
                        <a className="button" href="/search">
                          View all articles
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {openBookmark ? (
                  <label
                    onClick={() => setOpenBookmark(!openBookmark)}
                    className={`bkmCls`}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
