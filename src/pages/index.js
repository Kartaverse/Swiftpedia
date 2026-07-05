import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const sections = [

  {
    title: 'Swift',
    links: [
      { label: 'User Interface', href: '/docs/user-interface/' },
      { label: 'File IO', href: '/docs/fileio/' },
      { label: 'Networking', href: '/docs/networking/' },
      { label: 'Screensavers', href: '/docs/screensavers/' },
      { label: 'Metal GPU', href: '/docs/metal/' },
      { label: 'Scripting', href: '/docs/scripting/' },
      { label: 'Input Devices', href: '/docs/input-devices/' },
    ]
  }
];

export default function Home() {
  return (
    <Layout
      title="Swiftpedia"
      description="A local knowledge base for Swift 6 + Swift UI development">
      <main className="vfx-main-page">
        <div className="vfx-hero">
          <h1>Welcome to Swiftpedia</h1>
          <p>A local knowledge base for Swift 6 + Swift UI development</p>
        </div>
        <div className="vfx-sections-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="vfx-section-card">
              <img src={useBaseUrl(section.image)} alt={section.title} className="vfx-section-icon" />
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
