"use client"

import { usePathname, useRouter } from "@/i18n/navigation"
import { useLocale } from "next-intl"

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  
  const nextLocale = locale === "en" ? "pt" : "en"
  const buttonLabel = locale === "en" ? "PT" : "EN"
  
  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <a onClick={handleSwitch} className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm cursor-pointer">
      {buttonLabel}
    </a>
  )
}