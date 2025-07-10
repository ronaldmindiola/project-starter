import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconWrapperProps {
  name: keyof typeof LucideIcons;
  size?: number;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ name, size = 24, className }) => {
  const IconComponent = LucideIcons[name];
  if (
    !IconComponent ||
    typeof IconComponent !== 'function' ||
    !('render' in IconComponent || 'displayName' in IconComponent)
  ) {
    return null; // Or a fallback icon
  }
  return React.createElement(IconComponent as React.ElementType, { size, className });
};

export default IconWrapper;