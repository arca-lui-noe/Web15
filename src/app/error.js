// app/[locale]/error.js - Javított hibaoldal
'use client';

import { useEffect, useState } from 'react';
import { getDictionary } from '@/lib/dictionary';

export default function Error({ error, reset }) {
  const [translations, setTranslations] = useState({
    title: 'Hiba történt',
    message: 'Sajnáljuk, de hiba történt az oldal betöltése közben.',
    tryAgain: 'Próbáld újra'
  });
  
  useEffect(() => {
    // Aszinkron műveletek useEffect-ben futtathatók
    const loadTranslations = async () => {
      try {
        // A locale-t az URL-ből szerezzük be, mivel kliensoldali komponensben nem
        // férünk hozzá a params-hoz közvetlenül
        const locale = window.location.pathname.split('/')[1];
        const dict = await getDictionary(locale);
        
        if (dict && dict.error) {
          setTranslations(dict.error);
        }
      } catch (err) {
        console.error('Nem sikerült betölteni a fordításokat:', err);
      }
    };
    
    loadTranslations();
    
    // Opcionálisan naplózhatod a hibát
    console.error('Alkalmazáshiba:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-2xl font-medium mb-6">{translations.title}</h2>
      <p className="mb-8 max-w-md">{translations.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {translations.tryAgain}
      </button>
    </div>
  );
}