'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { LocalStorageService } from '../services/local-storage.service';
import { useRouter } from 'next/navigation';

const RECENTS_LIMIT = 10;
export default function DonePage() {
  const params = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    saveRecentlyOpenedDeeplinkLocally();
    router.replace('/');
  }, []);

  const saveRecentlyOpenedDeeplinkLocally = () => {
    const currentDeeplink = params.get('link');
    const isPossiblyDeeplink = currentDeeplink?.includes('://');
    if (!currentDeeplink || !isPossiblyDeeplink) return;

    const recentItems =
      LocalStorageService.instance.getArray<string>(
        'RECENT_OPENED_DEEPLINKS'
      ) || [];

    recentItems.push(currentDeeplink);

    if (recentItems.length > RECENTS_LIMIT) {
      recentItems.pop();
    }

    LocalStorageService.instance.set('RECENT_OPENED_DEEPLINKS', recentItems);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
