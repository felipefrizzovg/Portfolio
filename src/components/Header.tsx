"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { SlMenu } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("menu");

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <header className="w-full px-4 py-4 md:py-6 md:px-20 flex justify-between items-center shadow-md relative z-50">
      <h1 className="">
        Felipe<span className="font-bold">Frizzo</span>
      </h1>
      <nav className="overflow-hidden">
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm"
              href="#home"
            >
              {t("item-1")}
            </Link>
          </li>
          <li>
            <Link
              className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm"
              href="#about"
            >
              {t("item-2")}
            </Link>
          </li>
          <li>
            <Link
              className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm"
              href="#projects"
            >
              {t("item-3")}
            </Link>
          </li>
          <li>
            <Link
              className="p-2 border-2 border-transparent hover:border-text-primary rounded-sm"
              href="#contact"
            >
              {t("item-4")}
            </Link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        {/* Menu Hamburguer */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <SlMenu size={24} color="white" className="block md:hidden" />
        </button>

        {/* Overlay menu hamburguer */}
        <div className={`fixed inset-0 z-50 bg-transparent backdrop-blur-md flex flex-col md:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}>
          <nav
            className={`
                  relative w-10/12 max-w-xs h-full shadow-xl p-8 flex flex-col gap-8 ml-auto
                  transform transition-transform bg-surface-background duration-300
                  ${menuOpen ? "translate-x-0" : "translate-x-full"}
              `}
          >
            <div className="flex justify-between items-center bg-surface-background">
              <h1 className="">
                Felipe<span className="font-bold">Frizzo</span>
              </h1>
              <button
                className="absolute top-8 right-7 text-3xl text-secondary-color"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <IoMdClose size={24} color="white" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 mt-12 items-end">
              <li>
                <Link
                  className="block py-2 text-lg hover:text-primary"
                  href="#home"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("item-1")}
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-lg hover:text-primary"
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("item-2")}
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-lg hover:text-primary"
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("item-3")}
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 text-lg hover:text-primary"
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                >
                  {t("item-4")}
                </Link>
              </li>
            </ul>
            <div className="mt-10 ml-auto flex items-center">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}
