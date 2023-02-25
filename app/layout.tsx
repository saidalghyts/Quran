'use client';

import { ContextProvider } from './contexs/Context';
import './styles/globals.scss';
import Header from './ui/Header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Al-Quran</title>
        <meta name="description" content="Baca Al-Qur'an Online" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        style={{ position: 'relative', minHeight: '100%', top: '0px' }}
        className="bD">
        <ContextProvider>
          <div className="mainWrp">
            <Header />
            <div className="mainIn">
              <div className="blogCnt">
                <div className="secIn">
                  <div className="blogM">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
