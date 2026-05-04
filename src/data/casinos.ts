export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
  {
    id: 1,
    name: "BWIN",
    logo: "/bwin.png",
    bonus: "Aposta Grátis por Nossa Conta!",
    url: "https://www.bwin.pt/pt",
    rating: 9.8,
    stars: 5,
    reviews: 3218,
    badges: ["MARCA INTERNACIONAL"],
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 9.7,
    stars: 5,
    reviews: 1847,
    badges: ["MARCA PORTUGUESA"],
    isTopRating: true,
  },
  {
    id: 3,
    name: "Betano",
    logo: "/betano.svg",
    bonus: "10€ Apostas + 50 Rodadas Grátis no Registo",
    url: "https://www.betano.pt/",
    rating: 9.4,
    stars: 5,
    reviews: 3847,
    badges: ["MELHOR AVALIAÇÃO"],
    isPopular: true,
  },
  {
    id: 4,
    name: "ESC Online",
    logo: "/esc.svg",
    bonus: "Até 250€ em Freebets",
    url: "https://www.estorilsolcasinos.pt/pt",
    rating: 9.3,
    stars: 5,
    reviews: 2463,
    badges: ["ESTORIL SOL CASINOS"],
    isTrending: true,
  },
  {
    id: 5,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 9.0,
    stars: 4,
    reviews: 2691,
    badges: ["LICENCIADO SRIJ", "POPULAR"],
  },
  {
    id: 6,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    bonus: "Aposta Grátis de 2€ Atualmente",
    url: "https://www.casinoportugal.pt/",
    rating: 8.9,
    stars: 4,
    reviews: 1394,
    badges: ["APOSTAS & DESPORTO"],
  },
  {
    id: 7,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 8.8,
    stars: 4,
    reviews: 1572,
    badges: ["BÓNUS GENEROSO"],
  },
]
