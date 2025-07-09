import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import LanguageSwitcher from "./LanguageSwitcher"


export default function Header() {
  const t = useTranslations("menu")
  
  return (
    <header className="w-full py-6 px-20 flex justify-between items-center shadow-md">
      <h1 className="">Felipe<span className="font-bold">Frizzo</span></h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="#home">{t('item-1')}</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="#about">{t('item-2')}</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="#projects">{t('item-3')}</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="#contact">{t('item-4')}</Link></li>
          <li><LanguageSwitcher /></li>
        </ul>
      </nav>
    </header>
  )
}