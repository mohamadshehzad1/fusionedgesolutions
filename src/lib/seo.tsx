import type { Metadata } from "next";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  path: string;
  schema?: Record<string, unknown>;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path,
}: Omit<PageSEOProps, "schema">): Metadata {
  const url = `https://www.thecompensationpeople.co.uk${path}`;

  return {
    title,
    description,
    keywords: [
      "housing disrepair claims",
      "housing disrepair solicitors",
      "housing disrepair compensation",
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_GB",
      siteName: "The Compensation People",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function WebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `https://www.thecompensationpeople.co.uk${path}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      name: "The Compensation People",
      url: "https://www.thecompensationpeople.co.uk",
    },
    about: {
      "@type": "Thing",
      name: "Housing Disrepair Claims",
    },
    dateModified: new Date().toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://www.thecompensationpeople.co.uk${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://www.thecompensationpeople.co.uk${url}`,
    provider: {
      "@type": "LegalService",
      name: "The Compensation People",
      url: "https://www.thecompensationpeople.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: "Housing Disrepair Claims",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
