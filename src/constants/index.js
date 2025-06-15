import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  icoComment,
  icoDashboard,
  icoFacebook,
  icoFolders,
  icoInstagram,
  icoLinkedin,
  icoProfiles,
  icoStatistic,
  icoTailored,
  icoX,
  logoAmazon,
  logoGoogle,
  logoNetflix,
  logoSlack,
  logoZoom,
} from "../assets";

export const branding = [
  {
    id: "0",
    alt: "Logo Google",
    image: logoGoogle,
  },
  {
    id: "1",
    alt: "Logo Slack",
    image: logoSlack,
  },
  {
    id: "2",
    alt: "Logo Amazon",
    image: logoAmazon,
  },
  {
    id: "3",
    alt: "Logo Zoom",
    image: logoZoom,
  },
  {
    id: "4",
    alt: "Logo Netflix",
    image: logoNetflix,
  },
];

export const features = [
  {
    id: "0",
    alt: "Icône Tableau de bord",
    image: icoDashboard,
    title: "Tableau de bord",
    text: "Visualisez rapidement les performances de votre entreprise grâce à un tableau de bord intuitif et complet.",
  },
  {
    id: "1",
    alt: "Icône Commentaire",
    image: icoComment,
    title: "Commentaires",
    text: "Gérez les retours de vos clients et améliorez vos services avec des commentaires personnalisés.",
  },
  {
    id: "2",
    alt: "Icône Personnalisation",
    image: icoTailored,
    title: "Fonctionnalités personnalisées",
    text: "Adaptez GestiCom aux besoins spécifiques de votre activité grâce à des options modulables.",
  },
  {
    id: "3",
    alt: "Icône Statistiques",
    image: icoStatistic,
    title: "Statistiques détaillées",
    text: "Suivez vos ventes, vos stocks et vos clients grâce à des statistiques claires et précises.",
  },
  {
    id: "4",
    alt: "Icône Profils",
    image: icoProfiles,
    title: "Gestion des utilisateurs",
    text: "Créez et gérez plusieurs comptes utilisateurs avec différents niveaux d’accès.",
  },
  {
    id: "5",
    alt: "Icône Dossiers",
    image: icoFolders,
    title: "Organisation par dossiers",
    text: "Classez vos documents et vos produits pour une gestion plus fluide et structurée.",
  },
];

export const bulletPoints = [
  {
    id: "0",
    alt: "Saas Bullet Point 1",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "Une prise en main rapide et efficace",
    text: "GestiCom est conçu pour être simple d'utilisation, même pour les utilisateurs non-techniques. Vous serez opérationnel en quelques clics.",
  },
  {
    id: "1",
    alt: "Saas Bullet Point 2",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "Un suivi des stocks en temps réel",
    text: "Gardez une vue claire et actualisée de votre inventaire, évitez les ruptures de stock et prenez des décisions plus éclairées.",
  },
  {
    id: "2",
    alt: "Saas Bullet Point 3",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "Des ventes optimisées, où que vous soyez",
    text: "Accédez à vos statistiques de vente, suivez les commandes et gérez vos clients depuis n’importe quel appareil, à tout moment.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Gratuit",
    amount: 0,
    featured: false,
    buttonText: "Commencer gratuitement",
    features: [
      "7 000 000+ événements",
      "4 domaines personnalisés",
      "Agent support dédié",
      "Historique des données sur 12 mois",
      "1 SSL dédié",
    ],
  },
  {
    id: "1",
    plan: "Basique",
    amount: 13,
    featured: true,
    buttonText: "Acheter ce plan",
    features: [
      "7 000 000+ événements",
      "4 domaines personnalisés",
      "Agent support dédié",
      "Historique des données sur 12 mois",
      "1 SSL dédié",
    ],
  },
  {
    id: "2",
    plan: "Premium",
    amount: 39,
    featured: false,
    buttonText: "Acheter ce plan",
    features: [
      "7 000 000+ événements",
      "4 domaines personnalisés",
      "Agent support dédié",
      "Historique des données sur 12 mois",
      "1 SSL dédié",
    ],
  },
];

export const social = [
  {
    id: "0",
    ico: icoFacebook,
    alt: "Facebook",
    link: "#/",
  },
  {
    id: "1",
    ico: icoX,
    alt: "X",
    link: "#/",
  },
  {
    id: "2",
    ico: icoInstagram,
    alt: "Instagram",
    link: "#/",
  },
  {
    id: "3",
    ico: icoLinkedin,
    alt: "Linkedin",
    link: "https://www.linkedin.com/in/ludovic-moyenga",
  },
];
