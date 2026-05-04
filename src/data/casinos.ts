export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  dopBonus?: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Blitz",
    logo: "/blitz.svg",
    rating: 9.8,
    bonus: "100% até 500€ + 100 Rodadas Grátis",
    features: ["Saques Rápidos", "App Móvel", "15% Cashback"],
    isTopChoice: true,
    url: "https://qualityboost.top/Qqb39Lv8",
  },
  {
    rank: 2,
    name: "Lamabet",
    logo: "/lamabet.svg",
    rating: 9.7,
    bonus: "100% até 300€ + 300 Rodadas Grátis",
    features: ["Casino Móvel", "Jogos Exclusivos", "Apostas Desportivas"],
    url: "https://qualityboost.top/fr1LYYch",
  },
  {
    rank: 3,
    name: "Boomerang",
    logo: "/boomerang-bet.svg",
    rating: 9.5,
    bonus: " 100% até 150€ + 100 Rodadas Grátis",
    dopBonus: "",
    features: ["Tjedni Cashback", "Besplatne Vrtnje", "Brza isplata"],
    url: "https://qualityboost.top/fr1LYYch",
  },
  {
    rank: 4,
    name: "BillyBets",
    logo: "/billybets.webp",
    rating: 9.4,
    bonus: "100% até 150€ + 100 Rodadas Grátis",
    dopBonus: "",
    features: ["Reload bonus", "Besplatne Vrtnje", "Brza isplata"],
    url: " https://qualityboost.top/Qqb39Lv8",
  },
  {
    rank: 5,
    name: "MrPacho",
    logo: "/mrpacho.svg",
    rating: 9.2,
    bonus: "100% até 150€ + 100 Rodadas Grátis",
    dopBonus: "",
    features: ["Besplatne Vrtnje", "Brza isplata"],
    url: "https://qualityboost.top/Qqb39Lv8",
  },
  // {
  //   rank: 7,
  //   name: "Winrolla",
  //   logo: "/winrolla.webp",
  //   rating: 9.0,
  //   bonus: "300% até €8000 + 300 GG + 1 Bonus Crab",
  //   dopBonus: "",
  //   features: ["Besplatne Vrtnje", "Brza isplata"],
  //   url: "https://qualityboost.top/4cPkdZPR",
  // },
  // {
  //   rank: 8,
  //   name: "betibet",
  //   logo: "/betibet.svg",
  //   rating: 8.9,
  //   bonus: "100% até €200 + 50 Giros Grátis",
  //   dopBonus: "",
  //   features: ["Besplatne Vrtnje", "Brza isplata"],
  //   url: "https://qualityboost.top/4cPkdZPR",
  // }
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
