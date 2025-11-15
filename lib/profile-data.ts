export interface Profile {
  id: string
  name: string
  initials: string
  type: string
  status: "trustworthy" | "observation" | "suspicious"
  statusLabel: string
  verified: boolean
  socialLinks: {
    instagram?: string
    website?: string
  }
  reputation: {
    score: number
    metrics: Array<{ label: string; value: string }>
    ranking: string
  }
  complaints: Array<{
    title: string
    description: string
    date: string
    status: "pending" | "resolved"
    statusLabel: string
    likes: number
    comments: number
  }>
  reviews: Array<{
    author: string
    authorInitials: string
    rating: number
    comment: string
    date: string
  }>
  similarProfiles: Array<{
    id: string
    name: string
    initials: string
    type: string
    score: string
  }>
  recentlySearched: Array<{
    id: string
    name: string
  }>
}

// Mock data
export function getProfileData(id: string): Profile {
  return {
    id,
    name: "Rafael Silva",
    initials: "RS",
    type: "Influenciador",
    status: "trustworthy",
    statusLabel: "Confiável",
    verified: true,
    socialLinks: {
      instagram: "https://instagram.com/rafaelsilva",
      website: "https://rafaelsilva.com.br",
    },
    reputation: {
      score: 89, // Updated from 86 to 89 to match the 8.9/10 shown in the card
      metrics: [
        { label: "Reclamações resolvidas", value: "92%" },
        { label: "Denúncias recentes", value: "2" },
        { label: "Taxa de reembolso Pix", value: "95%" },
        { label: "Comportamento seguro", value: "91%" },
      ],
      ranking: "#8 influenciador mais confiável do mês",
    },
    complaints: [
      {
        title: "Produto entregue com atraso",
        description:
          "Comprei um produto anunciado no Instagram e a entrega atrasou 5 dias. Entrei em contato e recebi desconto na próxima compra.",
        date: "há 3 dias",
        status: "resolved",
        statusLabel: "Resolvida",
        likes: 15,
        comments: 7,
      },
      {
        title: "Dúvida sobre garantia do produto",
        description: "Questionei sobre a garantia e recebi todas as informações necessárias rapidamente.",
        date: "há 1 semana",
        status: "resolved",
        statusLabel: "Resolvida",
        likes: 10,
        comments: 4,
      },
      {
        title: "Embalagem danificada",
        description: "Produto chegou com embalagem amassada, mas o item estava perfeito. Vendedor se desculpou.",
        date: "há 2 semanas",
        status: "resolved",
        statusLabel: "Resolvida",
        likes: 6,
        comments: 2,
      },
    ],
    reviews: [
      {
        author: "Fernanda Lima",
        authorInitials: "FL",
        rating: 5,
        comment: "Vendedor muito atencioso! Produto de qualidade e entrega rápida. Super recomendo!",
        date: "há 2 dias",
      },
      {
        author: "Carlos Eduardo",
        authorInitials: "CE",
        rating: 5,
        comment: "Excelente experiência! Produto exatamente como descrito. Voltarei a comprar.",
        date: "há 5 dias",
      },
      {
        author: "Beatriz Souza",
        authorInitials: "BS",
        rating: 4,
        comment: "Boa compra, mas a entrega poderia ser mais rápida. No geral, satisfeita.",
        date: "há 1 semana",
      },
    ],
    similarProfiles: [
      {
        id: "rafael-mendes",
        name: "Rafael Mendes",
        initials: "RM",
        type: "Influenciador",
        score: "65",
      },
      {
        id: "rafael-gratta",
        name: "Rafael Gratta",
        initials: "RG",
        type: "Influenciador",
        score: "92",
      },
      {
        id: "techstore-brasil",
        name: "TechStore Brasil",
        initials: "TB",
        type: "Loja Virtual",
        score: "58",
      },
    ],
    recentlySearched: [
      { id: "rafael-mendes", name: "Rafael Mendes" },
      { id: "techstore-brasil", name: "TechStore Brasil" },
      { id: "rafael-gratta", name: "Rafael Gratta" },
      { id: "moda-express", name: "Moda Express" },
    ],
  }
}
