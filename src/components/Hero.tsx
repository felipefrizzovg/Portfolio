"use client"

import Image from "next/image";
import Button from "./Button";
import { PiReadCvLogo, PiArrowRight } from "react-icons/pi";
import { useLocale, useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale()
  const cvFile = locale === "pt" ? "cv-felipe-pt.pdf" : "cv-felipe-en.pdf"

  return (
    <section className="flex justify-around items-center px-[112px] py-24 gap-[136px]">
      <div className="flex flex-col">
        <h1 className="font-kalam text-kalam-hs font-kalam-hs mb-8 bg-gradient-to-r from-primary-color-500 to-secondary-color bg-clip-text text-transparent inline-block w-fit">{t('greetings')}</h1> {/* eslint-disable-line */}
        <h2 className="font-heebo-h2 text-heebo-h2">{t('subtitle')}</h2>
        <p className="text-text-secondary max-w-xl">{t('text')}</p>
        <div className="flex gap-4 mt-8">
          <Button
            text={t('resume-button')}
            icon={<PiReadCvLogo size={24} />}
            color="bg-surface-secondary"
            href={cvFile}
            download
          />
          
          <Button 
            text={t('touch-button')}
            icon={<PiArrowRight size={24} />}
            iconPosition="right"
          />
        </div>
      </div>
      <div>
        <Image width={500} height={400} src="/Linha.svg" alt="Coding Computer" />
      </div>
    </section>
  )
}