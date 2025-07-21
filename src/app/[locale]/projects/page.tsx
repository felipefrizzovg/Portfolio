import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projectsData";

export default function Projects() {
  const t = useTranslations("projects");

  const translatedProjects = projects.map((project) => ({
    ...project,
    title: t(`${project.slug}.title`),
    period: t(`${project.slug}.period`),
    description: t(`${project.slug}.description`),
    imageAlt: t(`${project.slug}.imageAlt`),
  }));

  return (
    <main className="py-4 px-8 md:py-8 md:px-16 lg:py-[72px] lg:px-28">
      <div className="flex flex-col lg:grid lg:grid-cols-3 justify-center gap-6">
        {translatedProjects.map((project, idx) => {
          return <ProjectCard key={idx} {...project} />;
        })}
      </div>
    </main>
  );
}
