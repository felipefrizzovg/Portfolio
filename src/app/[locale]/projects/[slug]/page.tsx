import ProjectClient from "@/components/ProjectClient";
import { projects } from "@/data/projectsData";
import { ProjectType, ProjectPageTranslationsType } from "@/types/types";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export default async function Project({ params }: Props) {
  const t = await getTranslations("projects");
  const { slug } = await params

  const project: ProjectType | undefined = projects.find((p) => p.slug === slug);

  const translations: ProjectPageTranslationsType = {
    imageAlt: t(`${slug}.imageAlt`),
    imageSrc: t(`${slug}.imageSrc`),
    period: t(`${slug}.period`),
    title: t(`${slug}.title`),
    roleTitle: t(`${slug}.role-title`),
    role: t(`${slug}.role`),
    text: t(`${slug}.text`),
    linksTitle: t(`${slug}.links-title`),
    liveButton: t(`${slug}.live-button`),
    codeButton: t(`${slug}.code-button`)
  }

  if (!project) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <ProjectClient
      project={project}
      translations={translations}
    />
  );
}
