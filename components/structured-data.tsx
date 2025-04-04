import React from 'react';

export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FlirtAgent',
    url: 'https://flirtagent.com',
    logo: 'https://flirtagent.com/FlirtAgent Icon.svg',
    description: 'Fully autonomous AI agent that replaces human chatters. FlirtAgent manages all fan interactions, delivering flirty, revenue-boosting chats 24/7.',
    sameAs: [
      'https://twitter.com/flirtagent',
      'https://facebook.com/flirtagent',
      'https://instagram.com/flirtagent',
      'https://linkedin.com/company/flirtagent'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'office@flirtagent.ai',
      contactType: 'customer service',
      availableLanguage: ['English', 'German', 'French', 'Spanish']
    }
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

  const softwareApplicationData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FlirtAgent',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/ComingSoon'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '87'
    },
    featureList: [
      'AI Chat Automation',
      'Multi-Model AI Agent',
      'Media Recognition',
      '100+ Languages Support',
      'Flirty Chatting',
      'Complete Chat History',
      'Media Selecting Agent',
      'API Interface'
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
    </>
  );
}