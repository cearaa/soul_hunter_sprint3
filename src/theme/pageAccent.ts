export interface PageAccent {
  /** Classe de gradiente usada na listra do Header/Footer */
  stripe: string;
  /** Cor de texto/ícone em destaque para a página */
  text: string;
  /** Gradiente usado em heros e destaques da página */
  hero: string;
  /** Cor usada em SVGs (ex: fantasmas */
  hex: string;
  /** Nome curto da atmo  da pg, usado como selo opcional */
  label: string;
}

const defaultAccent: PageAccent = {
  stripe: "from-soul-teal via-soul-cyan to-soul-700",
  text: "text-soul-cyan",
  hero: "from-soul-900 via-soul-800 to-soul-700",
  hex: "#22d3ee",
  label: "SoulHunter",
};

export const pageAccents: Record<string, PageAccent> = {
  "/": {
    stripe: "from-soul-teal via-soul-cyan to-soul-700",
    text: "text-soul-cyan",
    hero: "from-soul-900 via-soul-800 to-soul-600",
    hex: "#22d3ee",
    label: "Base de operações",
  },
  "/integrantes": {
    stripe: "from-soul-violet via-soul-violet-soft to-soul-700",
    text: "text-soul-violet-soft",
    hero: "from-soul-900 via-[#241a45] to-soul-700",
    hex: "#8b5cf6",
    label: "A equipe por trás da caçada",
  },
  "/sobre": {
    stripe: "from-soul-teal via-soul-600 to-soul-700",
    text: "text-soul-teal",
    hero: "from-soul-900 via-[#0e3a3a] to-soul-700",
    hex: "#2dd4bf",
    label: "O universo SoulHunter",
  },
  "/faq": {
    stripe: "from-soul-magenta via-soul-violet to-soul-700",
    text: "text-soul-magenta",
    hero: "from-soul-900 via-[#3a1240] to-soul-700",
    hex: "#d946ef",
    label: "Dúvidas de caçador(a)",
  },
  "/contato": {
    stripe: "from-soul-gold via-soul-600 to-soul-700",
    text: "text-soul-gold",
    hero: "from-soul-900 via-[#3a2a0e] to-soul-700",
    hex: "#fbbf24",
    label: "Fale com a SoulUp",
  },
  "/dashboard": {
    stripe: "from-soul-cyan via-soul-violet to-soul-700",
    text: "text-soul-cyan-soft",
    hero: "from-soul-900 via-[#12203f] to-soul-700",
    hex: "#22d3ee",
    label: "Central de missões",
  },
  "/ranking": {
    stripe: "from-soul-gold via-soul-magenta to-soul-700",
    text: "text-soul-gold",
    hero: "from-soul-900 via-[#341a2e] to-soul-700",
    hex: "#fbbf24",
    label: "Hall da fama",
  },
  "/fantasma": {
    stripe: "from-soul-violet via-soul-magenta to-soul-950",
    text: "text-soul-magenta",
    hero: "from-soul-950 via-[#2a0f3a] to-soul-950",
    hex: "#d946ef",
    label: "???",
  },
};

export function getPageAccent(pathname: string): PageAccent {
  if (pageAccents[pathname]) return pageAccents[pathname];

  const matchedKey = Object.keys(pageAccents).find(
    (key) => key !== "/" && pathname.startsWith(key),
  );

  return matchedKey ? pageAccents[matchedKey] : defaultAccent;
}
