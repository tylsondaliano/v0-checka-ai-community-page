export const MOCK_RANK = {
  gateways: [
    { name: "PayX Pro", category: "Pagamento", risk: 89, reports: 412, trend: "+6.2%" },
    { name: "FlashPay", category: "Pagamento", risk: 83, reports: 297, trend: "+3.1%" },
    { name: "CoinZillaPay", category: "Cripto", risk: 78, reports: 201, trend: "+1.4%" },
    { name: "QuickSplit", category: "Pagamento", risk: 74, reports: 165, trend: "-0.6%" },
    { name: "QRGate", category: "Pagamento", risk: 71, reports: 142, trend: "+2.0%" },
  ],
  influencers: [
    { name: "@dinheiroinstantaneo", category: "Finanças", risk: 88, reports: 355, trend: "+5.8%" },
    { name: "@rendaextra_24h", category: "Conteúdo", risk: 84, reports: 289, trend: "+2.9%" },
    { name: "@investecomigo", category: "Finanças", risk: 79, reports: 223, trend: "+1.1%" },
    { name: "@iphone_199", category: "Promoções", risk: 76, reports: 188, trend: "-0.3%" },
    { name: "@cursofastgrana", category: "Cursos", risk: 72, reports: 150, trend: "+0.7%" },
  ],
}

export const MOCK_FEED = [
  {
    id: "1",
    author: "Anthony Wellace",
    initials: "AW",
    category: "Building and Sharing Your Analysis",
    timestamp: "22 Hours ago",
    title: "Cannot login - how to contact support?",
    description:
      "I can't login - see attached screenshot. I am trying to find a way to contact support but all I see is help articles and this community.",
    likes: 3,
    comments: 10,
  },
  {
    id: "2",
    author: "Robert Treciu",
    initials: "RT",
    category: "Data Instrumentation",
    timestamp: "1 day Ago",
    title: "Events sent to wring API key/Emplided Org",
    description:
      "We have 2 emplided accounts/orgs: 1 for events in production builds(from App store) and 1 to track and test events on test-builds. After updating from production builds(from App store) to test-builds",
    likes: 12,
    comments: 5,
  },
  {
    id: "3",
    author: "Maria Santos",
    initials: "MS",
    category: "Security and Privacy",
    timestamp: "3 hours ago",
    title: "How to report suspicious Pix transactions?",
    description:
      "I received a suspicious Pix request with a strange description. What's the best way to report this to the community and help others avoid potential scams?",
    likes: 28,
    comments: 15,
  },
]

export const MOCK_RESULTS = {
  seguro: {
    label: "Seguro",
    color: "emerald",
    score: 18,
    reasons: ["Sem recorrência de chave", "Descrição neutra", "Sem relatos semelhantes"],
  },
  atencao: {
    label: "Atenção",
    color: "amber",
    score: 52,
    reasons: ["Termos de isca detectados", "Instituição com incidência moderada", "Valor típico de taxa"],
  },
  golpe: {
    label: "Provável golpe",
    color: "red",
    score: 82,
    reasons: ["Reincidência de chave (14)", "Descrição 'vaga 99Food'", "Banco receptor recorrente"],
  },
}

export const MOCK_SEARCH_RESULTS = {
  profiles: [
    {
      id: "1",
      name: "Rafael Silva",
      initials: "RS",
      type: "Influenciador",
      status: "confiavel",
      score: 89,
      maxScore: 100,
      reputation: ["Nenhuma denúncia ativa.", "Histórico limpo nos últimos 6 meses.", "Verificado pela comunidade."],
    },
    {
      id: "2",
      name: "Rafael Mendes",
      initials: "RM",
      type: "Influenciador",
      status: "observacao",
      score: 65,
      maxScore: 100,
      reputation: ["5 relatos da comunidade nos últimos 30 dias.", "Aguardando verificação de identidade."],
    },
    {
      id: "3",
      name: "Rafael de Brito Silva",
      initials: "RB",
      type: "Influenciador",
      status: "suspeito",
      score: 32,
      maxScore: 100,
      reputation: ["Padrão de comportamento suspeito.", "12 denúncias ativas.", "Evite transações até nova análise."],
    },
    {
      id: "4",
      name: "Rafael da Silva Santos",
      initials: "RS",
      type: "Influenciador",
      status: "sem-dados",
      score: 0,
      maxScore: 100,
      reputation: ["Perfil novo, sem histórico.", "Aguardando primeiras avaliações."],
    },
    {
      id: "5",
      name: "Rafael Gratta",
      initials: "RG",
      type: "Influenciador",
      status: "confiavel",
      score: 92,
      maxScore: 100,
      reputation: ["Perfil verificado.", "Excelente histórico.", "Recomendado pela comunidade."],
    },
  ],
  companies: [
    {
      id: "c1",
      name: "CentralAr.com",
      initials: "CA",
      type: "Loja Virtual",
      status: "confiavel",
      score: 95,
      maxScore: 100,
      reputation: [
        "Empresa verificada com CNPJ ativo.",
        "Mais de 1.000 avaliações positivas.",
        "Certificado SSL válido.",
      ],
      isAd: true,
    },
    {
      id: "c2",
      name: "TechStore Brasil",
      initials: "TB",
      type: "Loja Virtual",
      status: "observacao",
      score: 58,
      maxScore: 100,
      reputation: ["8 reclamações sobre atraso na entrega.", "CNPJ válido, mas site recente."],
    },
  ],
  gateways: [
    {
      id: "g1",
      name: "PayX Pro",
      initials: "PP",
      type: "Gateway",
      status: "suspeito",
      score: 28,
      maxScore: 100,
      reputation: ["412 denúncias registradas.", "Padrão de fraude identificado.", "Não recomendado para transações."],
    },
    {
      id: "g2",
      name: "FlashPay",
      initials: "FP",
      type: "Gateway",
      status: "observacao",
      score: 62,
      maxScore: 100,
      reputation: ["297 relatos nos últimos 90 dias.", "Em análise pela equipe de segurança."],
    },
  ],
}

export function isPixPayload(s: string) {
  const t = s.trim()
  return t.startsWith("000201") && t.includes("BR.GOV.BCB.PIX")
}

export function pickResult(): "seguro" | "atencao" | "golpe" {
  const r = Math.random()
  return r < 0.55 ? "golpe" : r < 0.8 ? "atencao" : "seguro"
}
