import { AnchorHTMLAttributes, ReactNode } from "react";

type SocialIconsProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon: ReactNode
}

export default function SocialIcons(props: SocialIconsProps) {
  const { href, icon, ...rest } = props

  return (
    <a href={href} {...rest} className="bg-surface-secondary flex justify-center items-center p-3 rounded-lg">
      {icon}
    </a>
  )
}