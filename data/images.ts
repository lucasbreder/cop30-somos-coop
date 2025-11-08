// Definição da interface Images para tipagem
export interface Images {
  id: number;
  gallery: string[];
}

/**
 * Array de objetos que mapeia a hierarquia de pastas fornecida.
 * O ID é o nome da pasta (convertido para número) e a propriedade 'gallery'
 * lista o caminho completo dos arquivos de imagem dentro dessa pasta.
 */
export const images: Images[] = [
  {
    id: 1,
    gallery: [
      "/images/01/1-004.jpg",
      "/images/01/1-005.jpg",
      "/images/01/1-011.jpg",
      "/images/01/1-012.jpg",
    ],
  },
  {
    id: 2,
    gallery: ["/images/02/FECOOGAP.2.jpeg"],
  },
  {
    id: 3,
    gallery: [
      "/images/03/03-000.jpg",
      "/images/03/03-001.jpg",
      "/images/03/03-002.jpg",
      "/images/03/03-003.jpg",
      "/images/03/03-004.jpg",
      "/images/03/03-005.jpg",
    ],
  },
  {
    id: 5,
    gallery: ["/images/05/5.jpeg"],
  },
  {
    id: 8,
    gallery: ["/images/08/0J6A1284.jpg"],
  },
  {
    id: 9,
    gallery: ["/images/09/SITE-06.jpg-000.jpg"],
  },
  {
    id: 10,
    gallery: [
      "/images/10/Comitiva-COOPERNORTE-em-visita-a-cooperativas-americanas.webp",
      "/images/10/qual-e-o-destaque-do-i-forum-regional-do-sudeste-paraense-em-relacao-a-sustentabilidade-agricola-e-ao-sistema-plantio-direto.webp",
      "/images/10/WhatsApp-Image-2023-09-25-at-15.11.32-1068x712.webp",
    ],
  },
  {
    id: 11,
    gallery: [
      "/images/11/_MG_7712.jpg",
      "/images/11/_MG_7740.jpg",
      "/images/11/_MG_7768.jpg",
      "/images/11/_MG_7796.jpg",
      "/images/11/_MG_7952.jpg",
    ],
  },
  {
    id: 13,
    gallery: [
      "/images/13/6eed33bd-d5f1-4575-b5e1-2b3c53f0d99a.jpg",
      "/images/13/agro_coopernorte_agroindustria_16abr24_Divulgacao.jpg",
      "/images/13/LEK00350.jpg",
      "/images/13/WE406436.jpg",
      "/images/13/WE406447.jpg",
    ],
  },
  {
    id: 15,
    gallery: [
      "/images/15/Cooperativas_20Mirins-páginas-1-000.jpg",
      "/images/15/Cooperativas_20Mirins-páginas-1-001.jpg",
      "/images/15/Cooperativas_20Mirins-páginas-1-002.jpg",
    ],
  },
  {
    id: 16,
    gallery: [
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-1-000.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-2-003.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-21-002.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-21-005.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-21-011.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-21-014.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-3-001.jpg",
      "/images/16/N_C3_ADvel_20II_20Pr_C3_A1ticas_20Nota_2010_Fazenda_20Sustent_C3_A1vel-21-008.jpg",
    ],
  },
  {
    id: 17,
    gallery: ["/images/17/WhatsApp_20Image_202022-04-28_20at_2018.28.34.jpeg"],
  },
  {
    id: 19,
    gallery: ["/images/19/adesivo_20carro.jpeg"],
  },
  {
    id: 20,
    gallery: ["/images/20/imagem_20(9).png"],
  },
  {
    id: 21,
    gallery: ["/images/21/IMG_20220716_124312.jpg"],
  },
  {
    id: 22,
    gallery: ["/images/22/IMG_6723.jpg"],
  },
  {
    id: 23,
    gallery: [
      "/images/23/Documentos_Comprobat_C3_B3rio_Projeto_RECA_compressed_20(1)_(1) (2)-12-000.jpg",
      "/images/23/Documentos_Comprobat_C3_B3rio_Projeto_RECA_compressed_20(1)_(1) (2)-17-000.jpg",
      "/images/23/Documentos_Comprobat_C3_B3rio_Projeto_RECA_compressed_20(1)_(1) (2)-25-001.jpg",
      "/images/23/Documentos_Comprobat_C3_B3rio_Projeto_RECA_compressed_20(1)_(1) (2)-25-002.jpg",
    ],
  },
  {
    id: 24,
    gallery: [], // Pasta vazia, mantida
  },
  {
    id: 25,
    gallery: ["/images/25/251.png", "/images/25/252.png", "/images/25/253.png"],
  },
  {
    id: 28,
    gallery: [
      "/images/28/whatsapp-image-2024-05-20-at-09.16.35.avif",
      "/images/28/whatsapp-image-2024-05-20-at-09.16.54.avif",
    ],
  },
  {
    id: 29,
    gallery: [
      "/images/29/ANEXOS_20-_20IMAGENS_20_2B_20CONTRATO-1-004.jpg",
      "/images/29/ANEXOS_20-_20IMAGENS_20_2B_20CONTRATO-2-004.jpg",
      "/images/29/ANEXOS_20-_20IMAGENS_20_2B_20CONTRATO-2-005.jpg",
      "/images/29/ANEXOS_20-_20IMAGENS_20_2B_20CONTRATO-3-004.jpg",
      "/images/29/ANEXOS_20-_20IMAGENS_20_2B_20CONTRATO-4-004.jpg",
      "/images/29/ANEXOS_20-_20IMAGENS_20_2B_20CONTRATO-5-004.jpg",
    ],
  },
  {
    id: 31,
    gallery: ["/images/31/210824tresmeni36.avif"],
  },
  {
    id: 34,
    gallery: ["/images/34/image_(40).png"],
  },
  {
    id: 35,
    gallery: [
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-10-000.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-14-006.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-14-007.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-14-008.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-15-006.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-16-006.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-16-007.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-16-008.jpg",
      "/images/35/Evid_C3_AAncias_201-mesclado_20(1)-16-009.jpg",
    ],
  },
  {
    id: 36,
    gallery: [
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-1-000.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-1-001.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-1-002.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-1-003.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-1-004.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-1-005.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-2-000.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-2-001.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-2-002.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-2-003.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-2-004.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-2-005.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-3-000.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-3-001.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-3-002.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-3-003.jpg",
      "/images/36/Eventos_20sobre_20sistemas_20de_20produ_C3_A7_C3_A3o_20de_20uva-3-004.jpg",
    ],
  },
  {
    id: 38,
    gallery: ["/images/38/FCC_20-_20COP30-3-000.jpg"],
  },
  {
    id: 39,
    gallery: [
      "/images/39/PAV_20COOPMETRO-000.jpg",
      "/images/39/PAV_20COOPMETRO-001.jpg",
      "/images/39/PAV_20COOPMETRO-002.jpg",
      "/images/39/PAV_20COOPMETRO-003.jpg",
      "/images/39/PAV_20COOPMETRO-004.jpg",
    ],
  },
  {
    id: 41,
    gallery: [
      "/images/41/Relat_C3_B3rio_20CRERAL-003.jpg",
      "/images/41/Relat_C3_B3rio_20CRERAL-004.jpg",
      "/images/41/Relat_C3_B3rio_20CRERAL-006.jpg",
      "/images/41/Relat_C3_B3rio_20CRERAL-007.jpg",
      "/images/41/Relat_C3_B3rio_20CRERAL-009.jpg",
    ],
  },
  {
    id: 45,
    gallery: ["/images/45/02-01.webp"],
  },
  {
    id: 46,
    gallery: [
      "/images/46/ED-98-VERSAO-DIGITAL-p_C3_A1ginas-000.jpg",
      "/images/46/ED-98-VERSAO-DIGITAL-p_C3_A1ginas-006.jpg",
    ],
  },
  {
    id: 57,
    gallery: [
      "/images/57/FOTOS_PDF-001.jpg",
      "/images/57/FOTOS_PDF-002.jpg",
      "/images/57/FOTOS_PDF-003.jpg",
      "/images/57/FOTOS_PDF-004.jpg",
      "/images/57/FOTOS_PDF-005.jpg",
      "/images/57/FOTOS_PDF-006.jpg",
      "/images/57/FOTOS_PDF-007.jpg",
      "/images/57/FOTOS_PDF-008.jpg",
      "/images/57/FOTOS_PDF-009.jpg",
      "/images/57/FOTOS_PDF-010.jpg",
      "/images/57/FOTOS_PDF-011.jpg",
      "/images/57/FOTOS_PDF-012.jpg",
      "/images/57/FOTOS_PDF-013.jpg",
      "/images/57/FOTOS_PDF-014.jpg",
      "/images/57/FOTOS_PDF-015.jpg",
      "/images/57/FOTOS_PDF-016.jpg",
      "/images/57/FOTOS_PDF-017.jpg",
      "/images/57/FOTOS_PDF-018.jpg",
      "/images/57/FOTOS_PDF-019.jpg",
    ],
  },
  {
    id: 60,
    gallery: [
      "/images/60/Projeto_20Energia_20Solar_(1)-003.jpg",
      "/images/60/Projeto_20Energia_20Solar_(1)-004.jpg",
      "/images/60/Projeto_20Energia_20Solar_(1)-009.jpg",
    ],
  },
  {
    id: 61,
    gallery: ["/images/61/image_(45).png", "/images/61/image_(46).png"],
  },
  {
    id: 62,
    gallery: ["/images/62/dbe62a84-8441-48b4-a697-7dc8b38d4df4.jpeg"],
  },
  {
    id: 64,
    gallery: ["/images/64/image_(47).png", "/images/64/image_(48).png"],
  },
  {
    id: 65,
    gallery: ["/images/65/image_(49).png", "/images/65/image_(50).png"],
  },
  {
    id: 66,
    gallery: ["/images/66/31_1.png"],
  },
  {
    id: 67,
    gallery: ["/images/67/31_1.png"],
  },
];
