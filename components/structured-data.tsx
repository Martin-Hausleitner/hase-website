import React from 'react';

export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FlirtAgent',
    url: 'https://flirtagent.com',
    logo: 'https://flirtagent.com/iconlogo.svg',
    description: 'Fully autonomous AI agent that replaces human chatters. FlirtAgent manages all fan interactions, delivering flirty, revenue-boosting chats 24/7.',
    sameAs: [
      'https://twitter.com/flirtagent',
      'https://facebook.com/flirtagent',
      'https://instagram.com/flirtagent',
      'https://linkedin.com/company/flirtagent'
    ]
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FlirtAgent',
    url: 'https://flirtagent.com',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://flirtagent.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
