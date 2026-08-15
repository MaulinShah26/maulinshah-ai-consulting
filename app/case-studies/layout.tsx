import type { ReactNode } from "react";
import { Nav } from "@/components/Nav";
import { CaseStudyExperience } from "@/components/case-studies/CaseStudyExperience";
import styles from "./CaseStudyLayout.module.css";

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <Nav />
      <CaseStudyExperience>{children}</CaseStudyExperience>
    </div>
  );
}
