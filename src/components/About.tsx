import Image from "next/image";

import {
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { PiReadCvLogo } from "react-icons/pi";

import Button from "./Button";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale()
  const cvFile = locale === "pt" ? "cv-felipe-pt.pdf" : "cv-felipe-en.pdf"

  return (
    <section className="p-10 relative" id="about">
      <Image src="/graphic-03.svg" width={120} height={34} alt="Seta" className="absolute top-[-4rem] right-1/3 rotate-135" />
      <div className="bg-surface-primary rounded-sm p-[72px] flex justify-evenly gap-[136px]">
        <Image width={500} height={400} src="/pana.svg" alt="Coding Computer" />

        <div className="flex flex-col items-start gap-8">
          <div className="flex gap-6">
            <SiReact size={24} color="#9955E8" />
            <SiNextdotjs size={24} color="#9955E8" />
            <SiNodedotjs size={24} color="#9955E8" />
            <SiNestjs size={24} color="#9955E8" />
            <SiTypescript size={24} color="#9955E8" />
            <SiTailwindcss size={24} color="#9955E8" />
          </div>
          <div>
            <h1 className="text-secondary font-kalam font-kalam-section">{t('title')}</h1>
            <h2 className="text-text-primary font-heebo-h2 text-heebo-h2 mb-4">{t('subtitle')}</h2>
            <p className="font-heebo-p text-heebo-p text-text-secondary">{t('text')}</p>
          </div>
          <Button
            text={t('button')}
            icon={<PiReadCvLogo size={24} />}
            href={cvFile}
            download
          />
        </div>
      </div>
    </section>
  );
}
