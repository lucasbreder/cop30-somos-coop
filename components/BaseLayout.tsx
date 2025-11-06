"use client";
import { ReactNode } from "react";
import { Intro } from "./Intro";
import { useParams, usePathname } from "next/navigation";
import { CreditCompany } from "@/types/CreditCompany";

export const BaseLayout = ({ children }: { children?: ReactNode }) => {
  const pathname = usePathname();
  const params = useParams();
  const company = params.company as CreditCompany;
  return (
    <Intro creditCompany={company} isHome={pathname === "/"}>
      {children}
    </Intro>
  );
};
