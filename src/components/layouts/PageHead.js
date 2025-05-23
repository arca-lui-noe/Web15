import Head from "next/head";
import Script from "next/script";
import { generateWebsiteSchema } from "@/lib/schema";
const PageHead = ({ headTitle }) => {
  const websiteSchema = generateWebsiteSchema(
    process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"
  );
  return (
    <>
      <Head>
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <title>
          {headTitle ? headTitle : "Arca Lui Noe – Clinică Veterinară"}
        </title>
      </Head>
    </>
  );
};

export default PageHead;
