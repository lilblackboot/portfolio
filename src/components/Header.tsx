'use client';

import StaggeredMenu from './StaggeredMenu';
import type { StaggeredMenuItem, StaggeredMenuSocialItem } from './StaggeredMenu';

const Header = () => {
  const menuItems: StaggeredMenuItem[] = [
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Skills', ariaLabel: 'View my skills', link: '#skills' },
    { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
    { label: 'Education', ariaLabel: 'View my education', link: '#education' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
  ];

  const socialItems: StaggeredMenuSocialItem[] = [
    { label: 'GitHub', link: 'https://github.com/lilblackboot' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Email', link: 'mailto:suzanmansuri.work@gmail.com' },
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#e9e9ef"
      openMenuButtonColor="#000"
      changeMenuColorOnOpen={true}
      colors={['#7c3aed', '#5b21b6']}
      logoUrl="/logo.png"
      accentColor="#8b5cf6"
      isFixed={true}
      closeOnClickAway={true}
    />
  );
};

export default Header;
