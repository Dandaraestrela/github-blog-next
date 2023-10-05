"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { ProfileHeader } from "./components/ProfileHeader";

export default function Home() {
  return (
    <div>
      <ProfileHeader />
    </div>
  );
}
