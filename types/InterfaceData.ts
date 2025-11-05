// Conteúdo do arquivo "@/types/InterfaceData.ts" (ajustado para a sua nova necessidade)

// 1. Definição da estrutura para o VALOR aninhado (o que está dentro de "ods-title" em 'pt')
interface TranslationValue {
  value: string;
  array?: string[]; // O valor 'value' é sempre uma string, podendo conter HTML
}

// 3. Definição da estrutura para o objeto aninhado (como o objeto de 'pt')
// Chave (e.g., "ods-title") aponta para TranslationValue
type TranslationMap = Record<string, TranslationValue>;

// 4. Definição da estrutura principal 'InterfaceData'
// Ela deve aceitar:
// - TranslationMap (para 'pt')
// - TranslationItem[] (para 'env')
// Como as estruturas são diferentes, a forma mais flexível é:
export type InterfaceData = {
  // Se 'pt' e 'env' tivessem a mesma estrutura (ex: todos TranslationMap ou todos TranslationItem[]),
  // poderíamos usar Record<string, TranslationMap | TranslationItem[]>, mas eles têm diferentes estruturas no seu exemplo.
  pt: TranslationMap;
  // Se houverem outras chaves, você precisaria definir a estrutura delas aqui também
  [key: string]: TranslationMap;
};
