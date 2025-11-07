#----------------------------------------------------------------------
# Otimizador Recursivo de Imagens para Web
#
# Este script usa o 'find' para localizar todos os arquivos de imagem
# (JPG, JPEG, PNG) recursivamente e aplica otimizações de compressão.
#
# Requer: 'mogrify' (parte do ImageMagick).
#
# Instalação (Ubuntu/Debian): sudo apt install imagemagick
#----------------------------------------------------------------------

# Define a qualidade de compressão desejada para JPEGs (ex: 80%)
# Valores comuns são entre 70 e 85.
JPEG_QUALITY="80"

# Diretório de busca ('.' significa diretório atual e subdiretórios)
SEARCH_DIR="."

echo "--- Iniciando Otimização de Imagens (Qualidade JPEG: $JPEG_QUALITY%) ---"

# 1. Encontra e processa arquivos JPEG e JPG
# Usa -print0 e while read -d '' para lidar corretamente com nomes de arquivos com espaços e caracteres especiais.
find "$SEARCH_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) -print0 | while IFS= read -r -d '' IMAGE_FILE; do
    echo "Processando JPEG: $IMAGE_FILE"
    
    # mogrify: Reduz a qualidade e otimiza a compressão sem perdas de metadados
    # Use 'mogrify -strip' se quiser remover todos os metadados (tamanho menor, mas perde informações EXIF)
    mogrify -quality "$JPEG_QUALITY%" -interlace Plane "$IMAGE_FILE"
    
    # Se você tiver o 'jpegoptim' instalado e quiser usá-lo para uma otimização extra:
    # if command -v jpegoptim &> /dev/null; then
    #     jpegoptim --max="$JPEG_QUALITY" --strip-all "$IMAGE_FILE"
    # fi
done

# 2. Encontra e processa arquivos PNG
find "$SEARCH_DIR" -type f -iname "*.png" -print0 | while IFS= read -r -d '' IMAGE_FILE; do
    echo "Processando PNG: $IMAGE_FILE"
    
    # mogrify: Remove metadados (strip) e otimiza a paleta de cores para reduzir o tamanho.
    mogrify -strip "$IMAGE_FILE"
    
    # Se você tiver o 'optipng' instalado e quiser usá-lo para uma otimização extra:
    # if command -v optipng &> /dev/null; then
    #     optipng -o7 "$IMAGE_FILE" # -o7 é um nível de compressão alto
    # fi
done

echo "-------------------------------------------------------------------"
echo "Otimização concluída. Verifique os tamanhos dos arquivos."
