import React from 'react';

interface BrandProps {
  label: string;
  tagline?: string;
}

const Brand: React.FC<BrandProps> = ({ label, tagline }) => {
  // NOTE: Using direct paths to images in public folder for React component
  // Astro's <Image> component handles optimization, but in React we'll link directly.
  // For this to work, the images should be in the `public` folder.
  // Let's assume they are at `/logos/logo-light.png` and `/logos/logo-dark.png`

  return (
    <a href="/" className="flex items-center gap-3">
      {/* Light Logo */}
      <img
        src="/logos/logo-light.png"
        alt={`${label} logo`}
        className="w-12 h-auto dark:hidden"
      />
      {/* Dark Logo */}
      <img
        src="/logos/logo-dark.png"
        alt={`${label} logo`}
        className="w-12 h-auto hidden dark:block"
      />
      <div>
        <div className="text-2xl font-bold">{label}</div>
        {tagline && <p className="text-sm text-gray-600">{tagline}</p>}
      </div>
    </a>
  );
};

export default Brand;