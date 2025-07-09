import Image from "next/image";
import Link from "next/link";

import { useLocale } from "next-intl";

type ProjectCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  period: string;
  description: string;
  icons: React.ReactNode[];
  slug?: string;
  link?: string
}

export default function ProjectCard(props: ProjectCardProps) {
  const { description, icons, imageAlt, imageSrc, period, title, link, slug } = props
  const locale = useLocale()

  const CardContent = (
    <div className="px-6 pt-4 pb-8 bg-surface-primary rounded-xl">
      <div className="flex flex-col gap-4 ">
        <Image src={imageSrc} alt={imageAlt} width={336} height={160} className="rounded-tl-xl rounded-tr-xl" />

        <div className="flex justify-between items-center">
          <p className="text-text-secondary text-[14px]">{period}</p>
          <div className="flex gap-2">{icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
        </div>

        <div>
          <h2 className="font-heebo-h2 text-heebo-h2">{title}</h2>
          <p className="font-heebo-p text-heebo-p">{description}</p>
        </div>
      </div>
    </div>
  )

  if (slug) {
    return (
      <Link href={`/${locale}/projects/${slug}`} tabIndex={0} className="cursor-pointer hover:border-secondary-color hover:shadow-secondary-color hover:border-1 border-1 border-transparent">
        {CardContent}
      </Link>
    )
  }

  if (link) {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" tabIndex={0} className="cursor-pointer hover:border-secondary-color hover:shadow-secondary-color hover:border-1 border-1 border-transparent">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}