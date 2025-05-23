import { getDictionary } from '@/lib/dictionary';
import { generateBreadcrumbSchema } from '@/lib/schema';
import Script from 'next/script';

export async function generateMetadata({ params }) {
 const { locale } = await params;
  const dict = await getDictionary(locale);
  
  return {
    title: `${dict.navigation.about} | ${dict.meta.siteName}`,
    description: `${dict.navigation.about} - ${dict.meta.description}`,
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  
  // Example breadcrumb data
  const breadcrumbItems = [
    { name: dict.navigation.home, url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}` },
    { name: dict.navigation.about, url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/about` }
  ];
  
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
  
  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{dict.navigation.about}</h1>
        
        {/* Example content - replace with your actual content */}
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel 
          tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl.
        </p>
        
        <p className="mb-4">
          Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquam nisl, vel aliquam 
          nisl nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </>
  );
}