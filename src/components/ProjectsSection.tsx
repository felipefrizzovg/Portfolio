import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { PiArrowRight } from "react-icons/pi";
import { projects } from "@/data/projectsData";


export default function ProjectsSection() {
  const t = useTranslations('projects')

  const highlightedProjects = projects.filter((p) => p.highlighted)

  const translatedProjects = highlightedProjects.map((project) => ({
    ...project,
    title: t(`${project.slug}.title`),
    period: t(`${project.slug}.period`),
    description: t(`${project.slug}.description`),
    imageAlt: t(`${project.slug}.imageAlt`)
  }))
  
  return (
    <section className="py-[72px] px-28 flex flex-col gap-10 items-center" id="projects">
      <div className="text-center">
        <h1 className="text-kalam-section text-secondary-color font-kalam mb-2">{t('title')}</h1>
        <h2 className="text-heebo-h2 font-heebo-h2">{t('subtitle')}</h2>
      </div>

      <div className="flex justify-center items-center gap-8">
        {translatedProjects.map((project, idx) => {
          return <ProjectCard key={idx} {...project} />
        })}
      </div>

      <Button 
        color="bg-surface-secondary"
        text={t('button')}
        icon={<PiArrowRight size={24} />}
        iconPosition="right"
        href="/projects"
      />
    </section>
  )
}