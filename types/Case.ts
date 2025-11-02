import { BrazilianState } from "./BrazilianState"

export type Case = {
    id: number
    title: string
    markdownTitle?: string
    context: string
    challenge: string
    development: string
    cooperName: string
    excerpt: string
    categories: CaseCategory[]
    branch: CaseBranch
    mainOds: number
    asideOds: number[]
    state: BrazilianState
    thumbnail?: string
    gallery?: string[]
}

export enum CaseCategory {
    LOREM_IPSUM = 'Lorem Ipsum', // Use a sintaxe de atribuição
    LOREM_IPSUM1 = 'Lorem Ipsum1', // para strings
}

export enum CaseBranch {
    LOREM_IPSUM = 'Lorem Ipsum',
    LOREM_IPSUM1 = 'Lorem Ipsum1',
}