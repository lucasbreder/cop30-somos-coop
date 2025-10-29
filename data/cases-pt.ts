import { BrazilianState } from "@/types/BrazilianState";
import { Case, CaseBranch, CaseCategory } from "@/types/Case";

export const casesPt:Case[] = [
    {
        id: 1,
        title: 'Lorem ipsum',
        cooperName: "Lorem Ipsum",
        mainOds: 16,
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.DF
    },
    {
        id: 2,
        title: 'Lorem ipsum 2',
        cooperName: "Lorem Ipsum 2",
        mainOds: 16,
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.SP
    },
    {
        id: 3,
        title: 'Lorem ipsum 3',
        cooperName: "Lorem Ipsum 3",
        mainOds: 16,
        asideOds: [4,12,13],
        branch: CaseBranch.LOREM_IPSUM,
        categories: [CaseCategory.LOREM_IPSUM],
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        development: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id libero at nunc euismod pretium nec sed quam. Suspendisse eget efficitur quam.",
        state: BrazilianState.AM
    }
]
    