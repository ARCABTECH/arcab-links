import Image from "next/image";
import type { ReactNode } from "react";

type HeaderProps = {
  subtitle: ReactNode;
};

export function Header({ subtitle }: HeaderProps) {
  return (
    <header className="space-y-4 text-center">
      <div className="flex justify-center">
        <Image
          src="/assets/main-logo.svg"
          alt="Logo ARCAB"
          width={210}
          height={78}
          priority
          className="h-auto w-[170px] sm:w-[210px]"
        />
      </div>
      <p className="mx-auto max-w-xs text-sm leading-relaxed text-eco-dark/78">{subtitle}</p>
    </header>
  );
}
