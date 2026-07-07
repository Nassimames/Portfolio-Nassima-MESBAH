import { HeroCover } from "@/components/HeroCover";
import { ProfileChapter } from "@/components/ProfileChapter";
import { ExperienceChapter } from "@/components/ExperienceChapter";
import { ProjectsChapter } from "@/components/ProjectsChapter";
import { CertificationsChapter } from "@/components/CertificationsChapter";
import { SkillsChapter } from "@/components/SkillsChapter";
import { NowChapter } from "@/components/NowChapter";
import { ContactChapter } from "@/components/ContactChapter";

export default function Home() {
  return (
    <>
      <HeroCover />
      <ProfileChapter />
      <ExperienceChapter />
      <ProjectsChapter />
      <CertificationsChapter />
      <SkillsChapter />
      <NowChapter />
      <ContactChapter />
    </>
  );
}
