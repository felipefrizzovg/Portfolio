"use client"
import Image from "next/image";
import Link from "next/link";

import { PiArrowLeft, PiArrowUpRight, PiGlobe } from "react-icons/pi";
import { SiGithub } from "react-icons/si";

import { useRouter } from "next/navigation";
import { ProjectType, ProjectPageTranslationsType } from "@/types/types";

type ProjectProps = {
  project: ProjectType;
  translations: ProjectPageTranslationsType;
}

export default function ProjectClient({ project, translations }: ProjectProps) {
  const router = useRouter()

  return (
    <main className="px-28 py-8 flex justify-center items-start gap-20 relative">
      <button className="absolute top-[2rem] left-[7rem] p-3 bg-surface-secondary rounded-xl cursor-pointer border-2 border-transparent hover:border-text-primary" onClick={() => router.back()}><PiArrowLeft size={24} className="text-text-primary" /></button>
      <div className="flex flex-col">
        <Image width={800} height={360} src={translations.imageSrc} alt={translations.imageAlt} className="rounded-tl-xl rounded-tr-xl" />
        <div className="p-12 pt-8 bg-surface-primary rounded-bl-xl rounded-br-xl flex flex-col gap-4 max-w-[800px]">
          <div className="flex justify-between items-center">
            <p className="text-text-secondary text-[14px]">{translations.period}</p>
            <div className="flex gap-4">{project.icons.map((icon, i) => <span key={i}>{icon}</span>)}</div>
          </div>
          <h1 className="font-heebo-h1 text-heebo-h1 text-text-primary">{translations.title}</h1>
          <div className="flex flex-col gap-3">
            <p className="text-text-secondary"><span className="font-bold">{translations.roleTitle}</span> {translations.role}</p>
            <p className="text-text-secondary">{translations.text}</p>
          </div>
        </div>
      </div>
      <div className="p-8 bg-surface-primary flex flex-col gap-6 justify-center items-start rounded-xl ">
        <h2>{translations.linksTitle}</h2>
        <div className="flex flex-col gap-4 flex-1 w-full">
          <Link href="#" className="px-6 py-4 bg-primary-color-500 rounded-xl transition-colors text-text-primary border-2 border-transparent hover:border-text-primary flex justify-between items-center">
            <PiGlobe size={24} fill="#F5F6F6"/>
              {translations.liveButton}
            <PiArrowUpRight size={24} fill="#F5F6F6"/>
          </Link>
          <Link href="#" className="px-6 py-4 bg-surface-secondary rounded-xl transition-colors text-text-primary border-2 border-transparent hover:border-text-primary flex justify-between items-center">
            <SiGithub size={24} fill="#F5F6F6"/>
              {translations.codeButton}
            <PiArrowUpRight size={24} fill="#F5F6F6"/>
          </Link>
        </div>
      </div>
    </main>
  )
}