// JSON-LD Schema for Business Stack Solutions

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Business Stack Solutions",
  "url": "https://bizstacksolutions.com",
  "description": "Independent reviews and comparisons of business software for CRM, project management, invoicing, and productivity",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://bizstacksolutions.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Business Stack Solutions",
  "url": "https://bizstacksolutions.com",
  "description": "Independent business software reviews and comparisons",
  "founder": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "dateFounded": "2026",
  "publishingPrinciples": "https://bizstacksolutions.com/legal/terms"
};

export const articleSchema = (title: string, description: string, date: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": date,
  "dateModified": date,
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Business Stack Solutions",
    "url": "https://bizstacksolutions.com"
  }
});

export const productReviewSchema = (productName: string, reviewBody: string, rating: number) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "description": reviewBody,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": rating,
    "bestRating": 5,
    "worstRating": 1
  }
});

export const faqSchema = (questions: Array<{q: string, a: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.a
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
