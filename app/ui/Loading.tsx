import React from 'react';

export default function Loading() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];
  return (
    <>
      <main className="mainBar">
        {items.map((_, index) => (
          <div
            key={index}
            className="items animate-pulse bg-[rgba(0,_0,_0,_0.2)_!important]"></div>
        ))}
      </main>
    </>
  );
}
