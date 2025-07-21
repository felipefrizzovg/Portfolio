import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import ContactForm from "./ContactForm";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 md:p-10" id="contact">
      <div 
        className="
          flex flex-col items-center gap-8
          bg-surface-primary rounded-xl 
          p-6
          max-w-md mx-auto
          shadow-md
          md:flex-row md:items-start md:justify-between
          md:p-[72px] md:gap-[136px] md:max-w-none md:mx-0
      ">
        <div className="flex flex-col items-center gap-6 md:items-start md:gap-8">
          <Image
            width={160}
            height={160}
            src="/Cute_Avatar-removebg-preview.png"
            alt="Avatar"
          />

          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-secondary font-kalam font-kalam-section">
              {t("title")}
              </h1>
              <h2 className="text-text-primary font-heebo-h2 text-heebo-h2">
                {t("subtitle")}
              </h2>
            </div>

            <p className="font-heebo-p text-heebo-p text-text-secondary">
              {t("text-1")}
              <span className="text-secondary-color">
                <a href="#" className="underline">{t("email")}</a>
              </span>
              {t("text-2")}
            </p>

            <div className="flex gap-2">
              <SocialIcons href="https://github.com/felipefrizzovg" icon={<SiGithub size={24} color="#F5F6F6" />} target="_blank" />
              <SocialIcons href="https://www.linkedin.com/in/felipe-frizzo" icon={<SiLinkedin size={24} color="#F5F6F6" />} target="_blank" />
              <SocialIcons href="https://www.instagram.com/felipefrizzovg/" icon={<SiInstagram size={24} color="#F5F6F6" />} target="_blank" />
            </div>

          </div>
        </div>

        <div className="w-full md:items-start md:flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
