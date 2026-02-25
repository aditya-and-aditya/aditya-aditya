import { notFound } from 'next/navigation';
import { caseStudiesData } from '@/app/_lib/caseStudiesData';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DynamicCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const study = caseStudiesData.find((s) => s.id === resolvedParams.id);

  if (!study) {
    return notFound();
  }

  return (
    <main>
      {study.content}
    </main>
  );
}