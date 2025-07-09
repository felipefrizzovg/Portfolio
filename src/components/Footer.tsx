import { useTranslations } from "next-intl"
import Link from "next/link"
import { PiArrowUp } from "react-icons/pi"

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="px-28 py-8 flex justify-between items-center">
      <p>{t('text')}</p>

      <nav>
        <ul className="flex space-x-4 items-center">
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="https://github.com/felipefrizzovg">GitHub</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="https://www.linkedin.com/in/felipe-frizzo">LinkedIn</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="https://www.instagram.com/felipefrizzovg/">Instagram</Link></li>
          <li className="border-2 border-transparent hover:border-text-primary rounded-sm"><Link href="#home">{<PiArrowUp size={24} fill="#F5F6F6" />}</Link></li>
        </ul>
      </nav>
    </footer>
  )
}