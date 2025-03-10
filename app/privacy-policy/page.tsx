import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | FlirtAgent",
  description: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl py-12 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy for FlirtAgent Using Vercel Web Analytics</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction and Data Protection Commitment</h2>
        <p className="mb-4">
          The protection of your personal data is of utmost importance to us at FlirtAgent. This privacy policy explains how we collect, process, and protect your data when you use our website and services, with particular focus on our implementation of Vercel Web Analytics. We are committed to transparent data practices and process your information in compliance with applicable data protection regulations, including the General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Responsible Entity</h2>
        <p className="mb-4">
          FlirtAgent is responsible for the data processing activities described in this privacy policy. As the data controller, we determine the purposes and means of processing your personal data. For any questions regarding your data or this privacy policy, please contact us using the information provided at the end of this document.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Web Analytics Implementation</h2>
        <p className="mb-4">
          We use Vercel Web Analytics to collect anonymous usage data about visitors to our website. This service allows us to understand how our website is being used and to improve the user experience without compromising your privacy.
        </p>

        <h3 className="text-xl font-semibold mb-3">Privacy-Focused Approach</h3>
        <p className="mb-4">
          Vercel Web Analytics has been designed with privacy in mind. The service does not collect personal identifiers that track and cross-check end users' data across different applications or websites. By default, only aggregated data that cannot identify or re-identify website visitors is used. This privacy-centric approach allows us to gain insights without compromising your personal information.
        </p>

        <h3 className="text-xl font-semibold mb-3">Data Collection Without Cookies</h3>
        <p className="mb-4">
          Vercel Web Analytics operates without using third-party cookies. Instead, visitors are identified by a hash created from the incoming request, which cannot be used to personally identify you. This hash-based identification is automatically discarded after 24 hours, ensuring that long-term tracking is not possible.
        </p>

        <h3 className="text-xl font-semibold mb-3">Data Points Collected</h3>
        <p className="mb-4">
          Our implementation of Vercel Web Analytics may collect and store the following anonymous information with each page view or interaction:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Event timestamp (when you visited a particular page)</li>
          <li>URL and page path information</li>
          <li>Dynamic path structure</li>
          <li>Referrer information (which site directed you to our website)</li>
          <li>Filtered query parameters</li>
          <li>General geolocation data (country, region, city level only)</li>
          <li>Device operating system and version</li>
          <li>Browser type and version</li>
          <li>Device type (mobile, desktop, or tablet)</li>
          <li>Web Analytics script version</li>
        </ul>
        <p className="mb-4">
          This information is collected both when you first load a page and during client-side page transitions (when you navigate within our website without reloading the page).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Processing and Storage</h2>
        <p className="mb-4">
          The data collected through Vercel Web Analytics is processed to provide us with aggregated statistics about user behavior on our website. This processing helps us identify potential issues such as error pages, search engine problems, or unpopular content sections.
        </p>

        <h3 className="text-xl font-semibold mb-3">International Data Transfers</h3>
        <p className="mb-4">
          Vercel Inc., the provider of Vercel Web Analytics, is an American company that processes data in the United States. We note that according to the European Court of Justice, there may not currently be an adequate level of data protection for transfers to the USA.
        </p>
        <p className="mb-4">
          To address this concern, Vercel implements Standard Contractual Clauses (SCCs) as approved by the European Commission. These contractual provisions are designed to ensure that your data receives protection consistent with European data protection standards even when processed in the United States.
        </p>
        <p className="mb-4">
          The Data Processing Addendum (DPA) that includes these Standard Contractual Clauses can be found at <a href="https://vercel.com/legal/dpa" className="text-primary hover:underline">https://vercel.com/legal/dpa</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Service Data Processing</h2>
        <p className="mb-4">
          In addition to analytics data, FlirtAgent processes certain personal data necessary for the provision of our AI chat service.
        </p>

        <h3 className="text-xl font-semibold mb-3">Service Data Collection</h3>
        <p className="mb-4">
          When you use FlirtAgent, we may collect and process:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Account information (username, email address, password)</li>
          <li>Communication content (messages sent through our platform)</li>
          <li>Payment information (processed through secure third-party payment processors)</li>
          <li>Preferences and settings you configure for the AI agent</li>
          <li>Media files you upload or share with the service</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Purpose and Legal Basis for Processing</h3>
        <p className="mb-4">
          We process your personal data for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>To process transactions and send related information</li>
        </ul>
        <p className="mb-4">
          The legal basis for this processing includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Performance of the contract we have with you</li>
          <li>Your consent, where applicable</li>
          <li>Our legitimate interests in operating and improving our service</li>
          <li>Compliance with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include encryption of sensitive data, regular security assessments, and access controls for our staff.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights Regarding Your Data</h2>
        <p className="mb-4">
          Depending on your jurisdiction, you may have various rights regarding your personal data, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The right to access information about your personal data</li>
          <li>The right to request rectification of inaccurate data</li>
          <li>The right to request erasure of your data under certain circumstances</li>
          <li>The right to restrict or object to processing</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent at any time</li>
          <li>The right to lodge a complaint with a supervisory authority</li>
        </ul>
        <p className="mb-4">
          To exercise any of these rights, please contact us using the information provided below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage Limitations and Notifications</h2>
        <p className="mb-4">
          Vercel Web Analytics has certain usage limitations based on the plan we subscribe to. For our current plan, we are notified as we approach usage limits. This does not affect your privacy but may temporarily impact our ability to collect new analytics data if limits are reached.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "last updated" date. You are advised to review this privacy policy periodically for any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Effective Date</h2>
        <p className="mb-4">
          This privacy policy is effective as of March 10, 2025.
        </p>
      </section>

      <div className="mt-12 border-t pt-8">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
