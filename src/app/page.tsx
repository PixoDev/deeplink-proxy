'use client';
import Image from 'next/image';
import { LocalStorageService } from './services/local-storage.service';
import { useEffect, useState } from 'react';

export default function Home() {
  const [recentDeepLinks, setRecentDeepLinks] = useState<string[] | null>();
  useEffect(() => {
    getRecentOpenedDeeplinks();
  }, []);

  const getRecentOpenedDeeplinks = () => {
    const storedRecentDeeplinks = LocalStorageService.instance.getArray<string>(
      'RECENT_OPENED_DEEPLINKS'
    );

    setRecentDeepLinks(storedRecentDeeplinks);
  };

  const renderRecentDeeplink = (deeplink: string, index: number) => {
    return (
      <button
        key={deeplink + index}
        className="w-full hover:bg-gray-700 transition-colors cursor-pointer mb-4 border border-gray-700 bg-gray-800 px-4 py-6 rounded flex flex-row justify-between items-center
      "
        onClick={() => {
          window.open(deeplink, '_blank');
        }}
      >
        <h3 className="text-gray-100">{deeplink}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-6"
        >
          <rect width="256" height="256" fill="none" />
          <line
            x1="136"
            y1="120"
            x2="216"
            y2="40"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          />
          <polyline
            points="216 104 215.99 40.01 152 40"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M184,140v68a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h68"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </svg>
      </button>
    );
  };
  return (
    <main className="bg-gray-900 min-h-screen">
      <section className="container flex items-center justify-center flex-1 pt-16">
        <div className="w-96 ">
          {recentDeepLinks?.map(renderRecentDeeplink)}
        </div>
      </section>
    </main>
  );
}
