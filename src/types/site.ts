export interface SiteMeta {
  title: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'Contact', href: `mailto:theo@theo.com?subject=${encodeURIComponent('お問い合わせ')}` },
];
