'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';

export default function NotFound() {
  const [translations, setTranslations] = useState({
    title: 'Az oldal nem található',
    message: 'Sajnáljuk, de az oldal, amit keresel, nem létezik vagy áthelyezték.',
    returnHome: 'Vissza a főoldalra'
  });

  const [locale, setLocale] = useState('hu');

  useEffect(() => {
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const possibleLocale = pathSegments[0] || 'hu';
    setLocale(possibleLocale);

    const loadTranslations = async () => {
      try {
        const dict = await getDictionary(possibleLocale);
        if (dict?.notFound) {
          setTranslations(dict.notFound);
        }
      } catch (err) {
        console.error('Nem sikerült betölteni a fordításokat:', err);
      }
    };

    loadTranslations();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">{translations.title}</h2>
      <p className="mb-8 max-w-md">{translations.message}</p>
      <Link
        href={`/${locale}`}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        {translations.returnHome}
      </Link>
    </div>
  );
}
