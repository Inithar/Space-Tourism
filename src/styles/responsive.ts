const size = {
  tablet: '768px',
  smallDesktop: '1200px',
  desktop: '1440px',
};

export const device = {
  tablet: `@media (min-width: ${size.tablet})`,
  smallDesktop: `@media (min-width: ${size.smallDesktop})`,
  desktop: `@media (min-width: ${size.desktop})`,
};
