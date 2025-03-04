"use client";

import { ReactElement } from "react";

import Link from "next/link";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function HeaderComponent(): ReactElement {
  const pathName: string = usePathname();
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={clsx(pathName === "/" && styles.active)}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={clsx(pathName === "/about" && styles.active)}
            >
              درباره ی ما
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
