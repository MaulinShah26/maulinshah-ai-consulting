import type { ReactNode } from "react";
import styles from "./CaseStudyLayout.module.css";

export default function CaseStudiesLayout({ children }: { children: ReactNode }) {
  return <div className={styles.shell}>{children}</div>;
}
