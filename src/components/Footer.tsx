import { useTranslations } from "next-intl"
import Link from "next/link"
import { PiArrowUp } from "react-icons/pi"

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer 
      className="
        flex flex-col items-start gap-4 px-4 py-6
        md:flex-row md:justify-between md:items-center
        md:px-28 md:py-8">
      <p>{t('text')}</p>

      <nav className="w-full">
        <ul 
          className="
            flex w-full justify-between items-center mt-2
            md:mt-0 md:justify-end md:w-auto md:space-x-4">
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="https://github.com/felipefrizzovg">GitHub</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="https://www.linkedin.com/in/felipe-frizzo">LinkedIn</Link></li>
          <li><Link className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm" href="https://www.instagram.com/felipefrizzovg/">Instagram</Link></li>
          <li className="border-2 border-transparent hover:border-text-primary rounded-sm"><Link href="#home">{<PiArrowUp size={24} fill="#F5F6F6" />}</Link></li>
        </ul>
      </nav>
    </footer>
  )
}