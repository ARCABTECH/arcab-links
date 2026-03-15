export type LinkItem = {
  label: string;
  url: string;
  icon: "site" | "linkedin" | "whatsapp" | "instagram" | "email";
  external?: boolean;
};

export const links: LinkItem[] = [
  {
    label: "Sobre nós",
    url: "https://arcab.com.br",
    icon: "site",
    external: true,
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/message/HWOCCN2PVH4VG1",
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/arcabtech/",
    icon: "instagram",
    external: true,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/arcab-tech",
    icon: "linkedin",
    external: true,
  },
  {
    label: "Email",
    url: "mailto:contato@arcab.com.br",
    icon: "email",
  },
];
