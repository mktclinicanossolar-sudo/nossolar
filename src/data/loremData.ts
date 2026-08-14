import {
  ServiceItem,
  Testimonial,
  FAQItem,
  StatItem
} from '../types';

import heroImg from '../assets/images/clinic_nosso_lar_hero_1785682985030-1.jpg';
import sensoryImg from '../assets/images/clinic_sensory_room_1785682999432.jpg';
import abaImg from '../assets/images/clinic_aba_room_1785683009808-1.jpg';
import receptionImg from '../assets/images/clinic_reception_area_1785683020117.jpg';

export const HERO_DATA = {
  title: "Lorem Ipsum Dolor Sit Amet Consectetur",
  highlight: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  heroImage: heroImg,
  statsBadge: {
    value: "XXXX%",
    label: "Lorem Ipsum"
  },
  statusBadge: {
    title: "Lorem Ipsum",
    subtitle: "Lorem Ipsum Dolor"
  }
};

export const ABOUT_DATA = {
  badge: "Lorem Ipsum",
  title: "Lorem Ipsum Dolor Sit Amet Consectetur",
  paragraph1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  paragraph2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  highlights: [
    { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ],
  quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.”"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    title: "Psicoterapia",
    subtitle: "Atendimento Clínico & Emocional",
    description: "Um espaço de escuta e cuidado emocional conduzido por um psicólogo. Voltada para compreender comportamentos, emoções e dificuldades que impactam a qualidade de vida.",
    whatIs: "Um espaço de escuta e cuidado emocional conduzido por um psicólogo. Voltada para compreender comportamentos, emoções e dificuldades que impactam a qualidade de vida.",
    whatDoes: "Ajuda a criança a identificar e expressar o que sente, desenvolver habilidades emocionais e lidar melhor com situações do cotidiano. Trabalha ansiedade, medos, dificuldades de relacionamento e questões comportamentais. Oferece um ambiente seguro para que o desenvolvimento emocional aconteça com suporte profissional.",
    iconName: "Brain",
    category: "Psicologia",
    features: ["Expressão emocional", "Gestão de ansiedade e medos", "Habilidades sociais", "Suporte profissional contínuo"],
    duration: "Sessões Semanais",
    code: "PSICO-01"
  },
  {
    id: "s2",
    title: "Psicopedagogia",
    subtitle: "Investigação & Aprendizagem",
    description: "Uma área que investiga e intervém nas dificuldades de aprendizagem, entendendo como cada criança aprende e o que pode estar impedindo esse processo.",
    whatIs: "Uma área que investiga e intervém nas dificuldades de aprendizagem, entendendo como cada criança aprende e o que pode estar impedindo esse processo.",
    whatDoes: "Avalia o perfil de aprendizagem da criança e identifica barreiras como dislexia, dificuldade de atenção e atrasos no desenvolvimento escolar. Desenvolve estratégias personalizadas para tornar o aprendizado mais acessível e eficiente. Trabalha em parceria com a escola e a família para garantir continuidade fora do consultório.",
    iconName: "Sparkles",
    category: "Aprendizagem",
    features: ["Perfil de aprendizagem", "Identificação de barreiras", "Estratégias personalizadas", "Parceria escola e família"],
    duration: "Sessões Individuais",
    code: "PEDAG-02"
  },
  {
    id: "s3",
    title: "Musicoterapia",
    subtitle: "Estímulo Sonoro & Expressão",
    description: "Uma terapia que utiliza a música e os elementos sonoros como ferramentas clínicas para promover saúde, comunicação e desenvolvimento.",
    whatIs: "Uma terapia que utiliza a música e os elementos sonoros como ferramentas clínicas para promover saúde, comunicação e desenvolvimento.",
    whatDoes: "Estimula a linguagem, a atenção e a interação social por meio do ritmo, da melodia e da expressão musical. Contribui para a regulação emocional e o desenvolvimento sensorial, especialmente em crianças com TEA. Cria um ambiente lúdico e acolhedor onde a criança se expressa mesmo quando as palavras ainda não chegaram.",
    iconName: "Activity",
    category: "Expressão",
    features: ["Estimulação da linguagem", "Regulação sensorial", "Expressão não-verbal", "Interação rítmica e lúdica"],
    duration: "Sessões Clínicas",
    code: "MUSIC-03"
  },
  {
    id: "s4",
    title: "Intervenção ABA",
    subtitle: "Análise do Comportamento Aplicada",
    description: "A Análise do Comportamento Aplicada é uma abordagem cientificamente validada que estuda e modifica comportamentos por meio de estratégias estruturadas e individualizadas.",
    whatIs: "A Análise do Comportamento Aplicada é uma abordagem cientificamente validada que estuda e modifica comportamentos por meio de estratégias estruturadas e individualizadas.",
    whatDoes: "Desenvolve habilidades de comunicação, socialização, autonomia e aprendizado acadêmico com base em metas individuais para cada criança. Reduz comportamentos que interferem na qualidade de vida e amplia repertórios funcionais de forma gradual e consistente. É considerada a intervenção com maior evidência científica para crianças com Transtorno do Espectro Autista.",
    iconName: "HeartPulse",
    category: "Comportamento",
    features: ["Metas individualizadas", "Evidência científica comprovada", "Autonomia e socialização", "Ampliação de repertório"],
    duration: "Plano Intensivo",
    code: "ABA-04"
  },
  {
    id: "s5",
    title: "Acolhimento de Pais",
    subtitle: "Suporte & Orientação Familiar",
    description: "Um espaço dedicado exclusivamente às famílias, onde pais e responsáveis recebem orientação, suporte emocional e ferramentas para o dia a dia.",
    whatIs: "Um espaço dedicado exclusivamente às famílias, onde pais e responsáveis recebem orientação, suporte emocional e ferramentas para o dia a dia.",
    whatDoes: "Auxilia as famílias a compreender o diagnóstico e as necessidades específicas de seus filhos de forma clara e humanizada. Oferece orientações práticas para lidar com situações desafiadoras em casa, na escola e nos espaços sociais. Fortalece o vínculo familiar e prepara os pais para serem parceiros ativos no processo terapêutico.",
    iconName: "Baby",
    category: "Família",
    features: ["Suporte emocional aos pais", "Orientação pós-diagnóstico", "Estratégias para o cotidiano", "Fortalecimento do vínculo"],
    duration: "Encontros Periódicos",
    code: "PAIS-05"
  },
  {
    id: "s6",
    title: "Terapia Ocupacional",
    subtitle: "Autonomia & Integração Sensorial",
    description: "Uma especialidade que avalia e trata dificuldades relacionadas às atividades do cotidiano, ao processamento sensorial e ao desenvolvimento motor.",
    whatIs: "Uma especialidade que avalia e trata dificuldades relacionadas às atividades do cotidiano, ao processamento sensorial e ao desenvolvimento motor.",
    whatDoes: "Trabalha habilidades como se vestir, usar talheres, escrever e participar de rotinas que exigem coordenação e organização do comportamento. Identifica e trata hipersensibilidades sensoriais que causam desconforto e interferem na participação da criança em ambientes do dia a dia. Amplia a autonomia e a funcionalidade da criança para que ela navegue o mundo com mais segurança e independência.",
    iconName: "Stethoscope",
    category: "Sensorial & Motor",
    features: ["Atividades da vida diária", "Processamento sensorial", "Coordenação motora", "Desenvolvimento da autonomia"],
    duration: "Sessões Práticas",
    code: "TO-06"
  },
  {
    id: "s7",
    title: "Fonoaudiologia",
    subtitle: "Linguagem & Comunicação",
    description: "A ciência que estuda, avalia e trata as funções relacionadas à comunicação humana, incluindo fala, linguagem, voz e deglutição.",
    whatIs: "A ciência que estuda, avalia e trata as funções relacionadas à comunicação humana, incluindo fala, linguagem, voz e deglutição.",
    whatDoes: "Estimula o desenvolvimento da linguagem oral e escrita, trabalhando desde os primeiros sons até a construção de frases e conversas funcionais. Atua em dificuldades como atraso de fala, gagueira, dificuldades de leitura e processamento auditivo. Contribui diretamente para que a criança se comunique com mais clareza, confiança e autonomia no ambiente familiar e social.",
    iconName: "Activity",
    category: "Comunicação",
    features: ["Estimulação da fala", "Construção de frases", "Processamento auditivo", "Clareza e confiança"],
    duration: "Sessões Especializadas",
    code: "FONO-07"
  },
  {
    id: "s8",
    title: "Avaliação Multidisciplinar",
    subtitle: "Diagnóstico & Plano Integrado",
    description: "Mapeamento integral e contínuo do desenvolvimento global infantil conduzido por equipe clínica multidisciplinar especializada.",
    whatIs: "Um mapeamento integral e contínuo do desenvolvimento global infantil conduzido por equipe clínica multidisciplinar especializada.",
    whatDoes: "Alinha os objetivos de cada especialidade terapêutica em um plano terapêutico singular e integrado. Acompanha a evolução da criança de forma holística, garantindo suporte completo para todos os marcos do neurodesenvolvimento infantil.",
    iconName: "Brain",
    category: "Diagnóstico",
    features: ["Plano terapêutico singular", "Equipe multidisciplinar", "Mapeamento do neurodesenvolvimento", "Acompanhamento holístico"],
    duration: "Avaliação Inicial",
    code: "AVAL-08"
  }
];

export interface GalleryItem {
  id: string;
  type: 'photo' | 'video';
  title: string;
  subtitle: string;
  image: string;
  fallbackImage?: string;
  videoUrl?: string; // YouTube video link (e.g. https://www.youtube.com/watch?v=... or embed URL)
}

export const GALLERY_CAROUSEL_DATA: GalleryItem[] = [
  {
    id: "g-video-1",
    type: "video",
    title: "Conheça a Clínica Nosso Lar",
    subtitle: "Faça um tour em vídeo pelos nossos ambientes e conheça o acolhimento da nossa equipe.",
    image: "https://img.youtube.com/vi/xtrijgAE51U/hqdefault.jpg",
    fallbackImage: sensoryImg,
    videoUrl: "https://youtube.com/shorts/xtrijgAE51U?feature=share",
  },
  {
    id: "g-integracao-sensorial",
    type: "photo",
    title: "Sala de Integração Sensorial",
    subtitle: "Circuito completo com balanço de pneu, tatames coloridos, rampa e equipamentos suspensos.",
    image: "/gallery/top.jpg",
    fallbackImage: sensoryImg,
  },
  {
    id: "g-piscina-bolinha",
    type: "photo",
    title: "Piscina de Bolinhas Terapêutica",
    subtitle: "Espaço acolhedor para estimulação sensorial, propriocepção e interação divertida.",
    image: "/gallery/psicina de bolinha.jpg",
    fallbackImage: sensoryImg,
  },
  {
    id: "g-reuniao",
    type: "photo",
    title: "Sala de Reunião & Orientação Familiar",
    subtitle: "Ambiente reservado para acolhimento de pais, escuta atenta e alinhamento de condutas.",
    image: "/gallery/Reunião.jpg",
    fallbackImage: receptionImg,
  },
  {
    id: "g-recepcao",
    type: "photo",
    title: "Recepção & Sala de Espera",
    subtitle: "Ambiente tranquilo, climatizado e confortável para as famílias antes das sessões.",
    image: "/gallery/recepção 2.jpg",
    fallbackImage: receptionImg,
  },
  {
    id: "g-jogos-ludicos",
    type: "photo",
    title: "Sala de Recursos & Jogos Lúdicos",
    subtitle: "Amplo acervo de brinquedos pedagógicos para desenvolvimento de habilidades e autonomia.",
    image: "/gallery/WhatsApp Image 2026-08-13 at 20.08.10.jpeg",
    fallbackImage: abaImg,
  },
  {
    id: "g-fachada",
    type: "photo",
    title: "Fachada & Entrada da Clínica",
    subtitle: "Estrutura moderna e acolhedora com acessibilidade total em Mogi Guaçu - SP.",
    image: "/gallery/WhatsApp Image 2026-08-13 at 20.08.10 (2).jpeg",
    fallbackImage: heroImg,
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: "st1",
    label: "Lorem Ipsum",
    number: "XXXX",
    prefix: "+",
    subtext: "Lorem ipsum dolor sit amet"
  },
  {
    id: "st2",
    label: "Lorem Ipsum",
    number: "XXXX",
    prefix: "",
    suffix: "+",
    subtext: "Lorem ipsum dolor sit amet"
  },
  {
    id: "st3",
    label: "Lorem Ipsum",
    number: "XXXX",
    prefix: "",
    subtext: "Lorem ipsum dolor sit amet"
  },
  {
    id: "st4",
    label: "Lorem Ipsum",
    number: "XXXX",
    suffix: "%",
    subtext: "Lorem ipsum dolor sit amet"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "ts1",
    author: "Lorem Ipsum",
    role: "Lorem Ipsum",
    department: "Lorem Ipsum",
    rating: 5,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "XXXX"
  },
  {
    id: "ts2",
    author: "Lorem Ipsum",
    role: "Lorem Ipsum",
    department: "Lorem Ipsum",
    rating: 5,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "XXXX"
  },
  {
    id: "ts3",
    author: "Lorem Ipsum",
    role: "Lorem Ipsum",
    department: "Lorem Ipsum",
    rating: 5,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "XXXX"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "f1",
    question: "A ABA serve só para autismo?",
    answer: "Não. Embora seja muito conhecida pelo trabalho com TEA, os princípios da Análise do Comportamento podem ajudar em diversas dificuldades de desenvolvimento e aprendizagem, não apenas no espectro autista.",
    category: "Geral"
  },
  {
    id: "f2",
    question: "Com que idade posso começar o tratamento?",
    answer: "Quanto mais cedo, melhor. A intervenção precoce costuma trazer resultados mais expressivos. Mas isso não significa que crianças maiores, adolescentes ou adultos não se beneficiem: cada caso é avaliado individualmente.",
    category: "Geral"
  },
  {
    id: "f3",
    question: "Como é feita a avaliação inicial?",
    answer: "Antes de começar, a criança passa por uma avaliação com nossa equipe para entender suas necessidades específicas, e a partir disso montamos um plano de intervenção personalizado.",
    category: "Avaliação"
  },
  {
    id: "f4",
    question: "Já passamos por várias clínicas e não vimos efeito. Como podemos confiar em vocês e no tratamento que oferecem?",
    answer: "Entendemos essa preocupação e sabemos que ela vem de uma vivência real e cansativa. Muitas vezes a falta de resultado não está relacionada à falta de potencial da criança, mas sim à ausência de um plano verdadeiramente individualizado, de acompanhamento próximo e de ajustes constantes com base em dados. Na Nosso Lar, cada intervenção parte de uma avaliação detalhada, é conduzida por profissionais capacitados e é revisada periodicamente para garantir que o que estamos fazendo realmente está gerando progresso, e não apenas seguindo um protocolo padrão. Também acreditamos que confiança se constrói com transparência: você acompanha de perto a evolução do seu filho e pode nos procurar sempre que tiver dúvidas sobre o processo.",
    category: "Tratamento"
  },
  {
    id: "f5",
    question: "Tenho medo de que o tratamento seja muito rígido ou 'robotize' meu filho.",
    answer: "Esse é um receio comum, principalmente por conta de relatos antigos sobre a ABA. Hoje a abordagem é muito mais flexível, respeitosa e centrada na criança, com foco em motivação natural e vínculo, não em obediência mecânica.",
    category: "Tratamento"
  },
  {
    id: "f6",
    question: "Sinto culpa por não saber lidar com o comportamento do meu filho em casa. Vocês podem me ajudar com isso também?",
    answer: "Sim, e essa culpa é muito comum, mas ela não deveria existir. Parte do nosso trabalho é justamente orientar a família para entender o que está por trás dos comportamentos e como lidar com eles no dia a dia, com mais leveza e segurança.",
    category: "Família"
  }
];
