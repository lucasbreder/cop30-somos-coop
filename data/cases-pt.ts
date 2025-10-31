import { BrazilianState } from "@/types/BrazilianState";
import { Case, CaseBranch, CaseCategory } from "@/types/Case";

// Sequências fixas para garantir que os valores não mudem entre execuções.
const getFixedOds = (index: number) => (index % 17) + 1; // 1 a 17, repetindo
const getFixedImagePath = (index: number) => `/intro/intro-pic${(index % 14) + 1}.png`; // 1 a 14, repetindo
const getFixedGalleryPath1 = (index: number) => `/intro/intro-pic${((index + 6) % 14) + 1}.png`;
const getFixedGalleryPath2 = (index: number) => `/intro/intro-pic${((index + 12) % 14) + 1}.png`;

export const casesPt:Case[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        cooperName: "Lorem Ipsum",
        mainOds: 1, // Fixo: (0 % 17) + 1
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.AP,
        thumbnail: "/intro/intro-pic1.png", // Fixo: (0 % 14) + 1
        gallery: ["/intro/intro-pic7.png", "/intro/intro-pic13.png"] // Fixo: ((0+6)%14)+1, ((0+12)%14)+1
    },
    {
        id: 2,
        title: 'Lorem ipsum 2',
        cooperName: "Lorem Ipsum 2",
        mainOds: 2, // Fixo: (1 % 17) + 1
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.SP,
        thumbnail: "/intro/intro-pic2.png", // Fixo: (1 % 14) + 1
        gallery: ["/intro/intro-pic8.png", "/intro/intro-pic14.png"] // Fixo: ((1+6)%14)+1, ((1+12)%14)+1
    },
    {
        id: 3,
        title: 'Lorem ipsum 3',
        cooperName: "Lorem Ipsum 3",
        mainOds: 3, // Fixo: (2 % 17) + 1
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.AM,
        thumbnail: "/intro/intro-pic3.png", // Fixo: (2 % 14) + 1
        gallery: ["/intro/intro-pic9.png", "/intro/intro-pic1.png"] // Fixo: ((2+6)%14)+1, ((2+12)%14)+1 -> 9, 14+2=16%14=2. Não, é 12+2=14. 14%14=0. Não, é 1 a 14. 14+1=15. 15%14=1. Pic1.png
    },
    {
        id: 4,
        title: 'Lorem ipsum 4',
        cooperName: "Lorem Ipsum 4",
        mainOds: 4, // Fixo: (3 % 17) + 1
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.AC, // Acre
        thumbnail: "/intro/intro-pic4.png", // Fixo: (3 % 14) + 1
        gallery: ["/intro/intro-pic10.png", "/intro/intro-pic2.png"]
    },
    {
        id: 5,
        title: 'Lorem ipsum 5',
        cooperName: "Lorem Ipsum 5",
        mainOds: 5, // Fixo: (4 % 17) + 1
        asideOds: [1,8,9],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.AL, // Alagoas
        thumbnail: "/intro/intro-pic5.png", // Fixo: (4 % 14) + 1
        gallery: ["/intro/intro-pic11.png", "/intro/intro-pic3.png"]
    },
    {
        id: 6,
        title: 'Lorem ipsum 6',
        cooperName: "Lorem Ipsum 6",
        mainOds: 6, // Fixo: (5 % 17) + 1
        asideOds: [5,10,17],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.BA, // Bahia
        thumbnail: "/intro/intro-pic6.png", // Fixo: (5 % 14) + 1
        gallery: ["/intro/intro-pic12.png", "/intro/intro-pic4.png"]
    },
    {
        id: 7,
        title: 'Lorem ipsum 7',
        cooperName: "Lorem Ipsum 7",
        mainOds: 7, // Fixo: (6 % 17) + 1
        asideOds: [6,7,11],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.CE, // Ceará
        thumbnail: "/intro/intro-pic7.png", // Fixo: (6 % 14) + 1
        gallery: ["/intro/intro-pic13.png", "/intro/intro-pic5.png"]
    },
    {
        id: 8,
        title: 'Lorem ipsum 8',
        cooperName: "Lorem Ipsum 8",
        mainOds: 8, // Fixo: (7 % 17) + 1
        asideOds: [1,16,17],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.DF, // Distrito Federal
        thumbnail: "/intro/intro-pic8.png", // Fixo: (7 % 14) + 1
        gallery: ["/intro/intro-pic14.png", "/intro/intro-pic6.png"]
    },
    {
        id: 9,
        title: 'Lorem ipsum 9',
        cooperName: "Lorem Ipsum 9",
        mainOds: 9, // Fixo: (8 % 17) + 1
        asideOds: [3,11,14],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.ES, // Espírito Santo
        thumbnail: "/intro/intro-pic9.png", // Fixo: (8 % 14) + 1
        gallery: ["/intro/intro-pic1.png", "/intro/intro-pic7.png"]
    },
    {
        id: 10,
        title: 'Lorem ipsum 10',
        cooperName: "Lorem Ipsum 10",
        mainOds: 10, // Fixo: (9 % 17) + 1
        asideOds: [9,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.GO, // Goiás
        thumbnail: "/intro/intro-pic10.png", // Fixo: (9 % 14) + 1
        gallery: ["/intro/intro-pic2.png", "/intro/intro-pic8.png"]
    },
    {
        id: 11,
        title: 'Lorem ipsum 11',
        cooperName: "Lorem Ipsum 11",
        mainOds: 11, // Fixo: (10 % 17) + 1
        asideOds: [1,2,10],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.MA, // Maranhão
        thumbnail: "/intro/intro-pic11.png", // Fixo: (10 % 14) + 1
        gallery: ["/intro/intro-pic3.png", "/intro/intro-pic9.png"]
    },
    {
        id: 12,
        title: 'Lorem ipsum 12',
        cooperName: "Lorem Ipsum 12",
        mainOds: 12, // Fixo: (11 % 17) + 1
        asideOds: [7,11,15],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.MT, // Mato Grosso
        thumbnail: "/intro/intro-pic12.png", // Fixo: (11 % 14) + 1
        gallery: ["/intro/intro-pic4.png", "/intro/intro-pic10.png"]
    },
    {
        id: 13,
        title: 'Lorem ipsum 13',
        cooperName: "Lorem Ipsum 13",
        mainOds: 13, // Fixo: (12 % 17) + 1
        asideOds: [1,5,16],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.MS, // Mato Grosso do Sul
        thumbnail: "/intro/intro-pic13.png", // Fixo: (12 % 14) + 1
        gallery: ["/intro/intro-pic5.png", "/intro/intro-pic11.png"]
    },
    {
        id: 14,
        title: 'Lorem ipsum 14',
        cooperName: "Lorem Ipsum 14",
        mainOds: 14, // Fixo: (13 % 17) + 1
        asideOds: [4,6,9],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.MG, // Minas Gerais
        thumbnail: "/intro/intro-pic14.png", // Fixo: (13 % 14) + 1
        gallery: ["/intro/intro-pic6.png", "/intro/intro-pic12.png"]
    },
    {
        id: 15,
        title: 'Lorem ipsum 15',
        cooperName: "Lorem Ipsum 15",
        mainOds: 15, // Fixo: (14 % 17) + 1
        asideOds: [2,8,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.PA, // Pará
        thumbnail: "/intro/intro-pic1.png", // Fixo: (14 % 14) + 1 = 1
        gallery: ["/intro/intro-pic7.png", "/intro/intro-pic13.png"]
    },
    {
        id: 16,
        title: 'Lorem ipsum 16',
        cooperName: "Lorem Ipsum 16",
        mainOds: 16, // Fixo: (15 % 17) + 1
        asideOds: [7,12,15],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.PB, // Paraíba
        thumbnail: "/intro/intro-pic2.png", // Fixo: (15 % 14) + 1 = 2
        gallery: ["/intro/intro-pic8.png", "/intro/intro-pic14.png"]
    },
    {
        id: 17,
        title: 'Lorem ipsum 17',
        cooperName: "Lorem Ipsum 17",
        mainOds: 17, // Fixo: (16 % 17) + 1
        asideOds: [6,13,17],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.PR, // Paraná
        thumbnail: "/intro/intro-pic3.png", // Fixo: (16 % 14) + 1 = 3
        gallery: ["/intro/intro-pic9.png", "/intro/intro-pic1.png"]
    },
    {
        id: 18,
        title: 'Lorem ipsum 18',
        cooperName: "Lorem Ipsum 18",
        mainOds: 1, // Fixo: (17 % 17) + 1 = 1
        asideOds: [8,9,11],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.PE, // Pernambuco
        thumbnail: "/intro/intro-pic4.png", // Fixo: (17 % 14) + 1 = 4
        gallery: ["/intro/intro-pic10.png", "/intro/intro-pic2.png"]
    },
    {
        id: 19,
        title: 'Lorem ipsum 19',
        cooperName: "Lorem Ipsum 19",
        mainOds: 2, // Fixo: (18 % 17) + 1 = 2
        asideOds: [2,5,10],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.PI, // Piauí
        thumbnail: "/intro/intro-pic5.png", // Fixo: (18 % 14) + 1 = 5
        gallery: ["/intro/intro-pic11.png", "/intro/intro-pic3.png"]
    },
    {
        id: 20,
        title: 'Lorem ipsum 20',
        cooperName: "Lorem Ipsum 20",
        mainOds: 3, // Fixo: (19 % 17) + 1 = 3
        asideOds: [3,4,16],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.RJ, // Rio de Janeiro
        thumbnail: "/intro/intro-pic6.png", // Fixo: (19 % 14) + 1 = 6
        gallery: ["/intro/intro-pic12.png", "/intro/intro-pic4.png"]
    },
    {
        id: 21,
        title: 'Lorem ipsum 21',
        cooperName: "Lorem Ipsum 21",
        mainOds: 4, // Fixo: (20 % 17) + 1 = 4
        asideOds: [7,14,17],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.RN, // Rio Grande do Norte
        thumbnail: "/intro/intro-pic7.png", // Fixo: (20 % 14) + 1 = 7
        gallery: ["/intro/intro-pic13.png", "/intro/intro-pic5.png"]
    },
    {
        id: 22,
        title: 'Lorem ipsum 22',
        cooperName: "Lorem Ipsum 22",
        mainOds: 5, // Fixo: (21 % 17) + 1 = 5
        asideOds: [1,8,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.RS, // Rio Grande do Sul
        thumbnail: "/intro/intro-pic8.png", // Fixo: (21 % 14) + 1 = 8
        gallery: ["/intro/intro-pic14.png", "/intro/intro-pic6.png"]
    },
    {
        id: 23,
        title: 'Lorem ipsum 23',
        cooperName: "Lorem Ipsum 23",
        mainOds: 6, // Fixo: (22 % 17) + 1 = 6
        asideOds: [2,6,10],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.RO, // Rondônia
        thumbnail: "/intro/intro-pic9.png", // Fixo: (22 % 14) + 1 = 9
        gallery: ["/intro/intro-pic1.png", "/intro/intro-pic7.png"]
    },
    {
        id: 24,
        title: 'Lorem ipsum 24',
        cooperName: "Lorem Ipsum 24",
        mainOds: 7, // Fixo: (23 % 17) + 1 = 7
        asideOds: [3,9,15],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.RR, // Roraima
        thumbnail: "/intro/intro-pic10.png", // Fixo: (23 % 14) + 1 = 10
        gallery: ["/intro/intro-pic2.png", "/intro/intro-pic8.png"]
    },
    {
        id: 25,
        title: 'Lorem ipsum 25',
        cooperName: "Lorem Ipsum 25",
        mainOds: 8, // Fixo: (24 % 17) + 1 = 8
        asideOds: [4,11,14],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.SC, // Santa Catarina
        thumbnail: "/intro/intro-pic11.png", // Fixo: (24 % 14) + 1 = 11
        gallery: ["/intro/intro-pic3.png", "/intro/intro-pic9.png"]
    },
    {
        id: 26,
        title: 'Lorem ipsum 26',
        cooperName: "Lorem Ipsum 26",
        mainOds: 9, // Fixo: (25 % 17) + 1 = 9
        asideOds: [1,5,16],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.SE, // Sergipe
        thumbnail: "/intro/intro-pic12.png", // Fixo: (25 % 14) + 1 = 12
        gallery: ["/intro/intro-pic4.png", "/intro/intro-pic10.png"]
    },
    {
        id: 27,
        title: 'Lorem ipsum 27',
        cooperName: "Lorem Ipsum 27",
        mainOds: 10, // Fixo: (26 % 17) + 1 = 10
        asideOds: [2,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.TO, // Tocantins
        thumbnail: "/intro/intro-pic13.png", // Fixo: (26 % 14) + 1 = 13
        gallery: ["/intro/intro-pic5.png", "/intro/intro-pic11.png"]
    }
]