export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Business Software Stack",
    "description": "Compare and discover the best business software tools for CRM, project management, invoicing, accounting, and productivity.",
    "url": "https://bizstack.affiliatesite.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bizstack.affiliatesite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Business Software Stack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizstack.affiliatesite.com/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
