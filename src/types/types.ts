export type ProjectType = {
  slug: string;
  imageSrc: string;
  icons: React.ReactNode[];
  link?: string;
  highlighted: boolean;
}

export type ProjectPageTranslationsType = {
  title: string;
  period: string;
  description?: string;
  imageAlt: string;
  roleTitle: string;
  role: string;
  text: string;
  linksTitle: string;
  liveButton: string;
  codeButton: string;
  imageSrc: string;
};
