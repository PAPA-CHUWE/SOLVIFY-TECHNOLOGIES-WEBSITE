'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface MenuItem {
  title: string;
  links: { text: string; url: string }[];
}

interface FooterProps {
  logo?: {
    src: string;
    alt: string;
    title: string;
    url: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: { text: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({
  logo = {
    src: '/logos/solvify.svg',
    alt: 'Solvify Technologies Logo',
    title: 'Solvify Technologies',
    url: '/',
  },
  tagline = 'Empowering digital transformation through AI-driven solutions.',
  menuItems = [
    {
      title: 'Solutions',
      links: [
        { text: 'Enterprise Software', url: '#' },
        { text: 'AI & Automation', url: '#' },
        { text: 'Cloud Services', url: '#' },
        { text: 'Integrations', url: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', url: '#' },
        { text: 'Our Team', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Contact', url: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', url: '#' },
        { text: 'Help Center', url: '#' },
        { text: 'Developer Docs', url: '#' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'LinkedIn', url: '#' },
        { text: 'Twitter', url: '#' },
        { text: 'GitHub', url: '#' },
      ],
    },
  ],
  copyright = '© 2025 Solvify Technologies. All rights reserved.',
  bottomLinks = [
    { text: 'Terms', url: '#' },
    { text: 'Privacy', url: '#' },
  ],
}) => {
    const currentYear = new Date().getFullYear();
    const resolvedCopyright =
      copyright || `© ${currentYear} Solvify Technologies. All rights reserved.`;
  return (
    <footer className="bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-6">
          {/* Logo & tagline */}
          <div className="col-span-2 space-y-4">
            <Link href={logo.url} className="flex items-center space-x-2">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={40}
                className="dark:invert"
              />
            </Link>
            <p className="text-cyan-500 text-sm tracking-widest font-semibold">{tagline}</p>
          </div>


          {menuItems.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-semibold mb-4 flex justify-start gap-1 items-center tracking-widest uppercase text-[#e3c53c]"><ChevronRight/> {section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className="text-cyan-500 hover:text-[#e3c53c] text-sm transition-colors tracking-wider font-semibold"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className='font-semibold'>{resolvedCopyright}</p>
          <ul className="flex gap-4 mt-4 md:mt-0">
            {bottomLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.url}
                  className="hover:text-primary underline-offset-4 hover:underline"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
