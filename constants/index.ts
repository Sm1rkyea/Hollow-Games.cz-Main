export const navbarButtons = [
    {
        route: "https://tiktok.hollow-games.cz",
        imgSrc: "/icons/tiktok.svg",
        label: "TikTok",
    },
    {
        route: "https://discord.hollow-games.cz",
        imgSrc: "/icons/discord.svg",
        label: "Discord",
    },
    {
        route: "https://instagram.hollow-games.cz",
        imgSrc: "/icons/instagram.svg",
        label: "Instagram",
    }
]

export const sidebarLinks = [
  {
    isDropdown: false,
    route: "/",
    label: "Domů",
  },
  {
    isDropdown: false,
    route: "/rules",
    label: "Pravidla",
  },
  {
    isDropdown: false,
    route: "/partnership",
    label: "Spolupráce",
  },
  {
    isDropdown: true,
    route: "/contact",
    label: "Kontakt",
    dropdownContent: [
      {
        route: "/contact",
        label: "Kontakt"
      },
      {
        route: "/team",
        label: "Admin tým"
      },
    ]
  },
  {
    isDropdown: true,
    route: "/contact",
    label: "Více",
    dropdownContent: [
      {
        route: "https://wiki.hollow-games.cz/",
        label: "Wikipedie"
      },
      {
        route: "https://store.hollow-games.cz/",
        label: "Obchod"
      },
    ]
  },
];