import { notFound } from "next/navigation";
import { projectDetails } from "@/data/projectDetails";
import { ProjectDetailContent } from "./ui/ProjectDetailContent";

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);

  return { title: project ? `${project.title} | Sebastian Salas` : "Proyecto" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectDetails.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetailContent project={project} />;
}
