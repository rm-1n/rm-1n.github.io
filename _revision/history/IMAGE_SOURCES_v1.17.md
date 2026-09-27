# v1.17 görsel kaynakları

## Yeni görseller

OpenAI yerleşik imagegen aracıyla 16 Eylül 2026 tarihinde üretildi. Gerçek şirket ürün veya tesis fotoğrafı değildir. Tam üretim komutları `IMAGE_PROMPTS_v1.17.json` içinde saklanır.

| Dosya | Ölçü | İçerik |
|---|---|---|
| `design/v1.17/image-sources/production.png` | 1660 × 948 | Lehimleme, kart taşıma ve kontrol robotlarıyla seri elektronik üretim konsepti |
| `design/v1.17/image-sources/power.png` | 1659 × 948 | Bakır güç bağlantıları, yarıiletken modüller ve soğutma tabanının yakın planı |

Web kopyaları `site/assets/v1.17/` içinde 480, 960 ve 1440 piksel genişliklerde AVIF/WebP olarak saklanır. Yalnızca yeniden boyutlandırma ve sıkıştırma uygulanmıştır; kart kadrajları CSS ile belirlenir.

Üretim görseli, kullanıcının bu görüşmede belirttiği robotik kollar ve lehim robotlarıyla fabrika açma planına yönelik temsilî konsepttir. Mevcut veya tamamlanmış bir tesisin belgesi değildir. Güç elektroniği görseli genel bir mühendislik temsili olup uygulanabilir bir devre veya ürün tasarımı olarak kullanılmamalıdır.

## V-model

Kodla çizilen özgün SVG; üretilmiş raster metin içermez. Tasarım, uygulama ve eşleşen doğrulama seviyeleri yedi blokla gösterilir. İki kısa başlık dışında görünür yazı yoktur. EN/DE açıklamalar erişilebilirlik etiketinde yer alır.

- `design/v1.17/verification-en.svg`
- `design/v1.17/verification-de.svg`
- Üreten kaynak: `tools/visuals.py`; site şemayı satır içi SVG olarak kullanır.

Kavramsal başvuru: [NASA — Systems Engineering V](https://ntrs.nasa.gov/api/citations/20130012822/downloads/20130012822.pdf) ve [NASA — Product Verification](https://www.nasa.gov/reference/5-3-product-verification/). Kaynaktaki çizim kopyalanmadı; bu sade şema projeye özgün olarak çizildi. Sertifika veya standart uygunluğu iddiası değildir.

## Korunan kaynaklar

Hardware görseli, Avrupa NASA uydu kompoziti, Embedded/FPGA şemaları ve Inter yazı tipleri v1.16'dan gelir; kaynakları `IMAGE_SOURCES_v1.16.md` içinde kayıtlıdır. Logo Rev B değişmedi.

Değiştirilen eski Power/Production web kopyaları ve Verification fotoğrafı `archive/v1.16-replaced-assets/` içinde korunur. Önceki kaynak görselleri, ZIP teslimleri ve Git etiketleri silinmedi.
