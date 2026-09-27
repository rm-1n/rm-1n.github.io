# v1.16 görsel kaynakları

## Avrupa

NASA Black Marble 2016, Europe region; Suomi NPP / VIIRS gözlemlerinden oluşturulmuş kompozit. Kaynak ve kredi: [NASA Goddard / SVS 30877](https://svs.gsfc.nasa.gov/30877/); görüntü işleme: Joshua Stevens. Kullanım: [NASA görsel yönergesi](https://www.nasa.gov/nasa-brand-center/images-and-media/).

Ana kaynak: `https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_928m_europe.tif`.

Kaydedilen dosya: `design/v1.16/image-sources/earth.tif`, 5760 × 3240. Web kopyaları: `site/assets/v1.16/earth-{960,1600,2400}.{avif,webp}`. Görüntüye coğrafi öğe eklenmedi; yeniden boyutlandırma ve sıkıştırma yapıldı. Sayfadaki kadraj ve koyu geçiş CSS ile uygulanır. Telefonda kaynak kompozisyonunun tamamı görünür.

Bu, eski ISS görselinden farklı olarak uydu verilerine dayanan geniş bir haritadır. Güncel/canlı Dünya görüntüsü, NASA ortaklığı veya kurumsal onay olarak sunulmaz.

## Yeni temsilî görseller

OpenAI yerleşik imagegen ile 16 Eylül 2026 tarihinde ayrı ayrı üretildi. Gerçek şirket ürün/tesis fotoğrafı değildir.

| Dosya | Ölçü | İçerik |
|---|---|---|
| `design/v1.16/image-sources/hardware.png` | 1672 × 941 | Genel devre kartı iz ve bileşen ayrıntısı |
| `design/v1.16/image-sources/power.png` | 1536 × 1024 | Güç yarıiletkenleri, bakır bobin, soğutma plakası |
| `design/v1.16/image-sources/production.png` | 1672 × 941 | Tekrarlı kartlar ve otomatik seri üretim ortamı |

Web kopyaları aynı adlarla `site/assets/v1.16/` içinde 480, 960 ve 1440 piksel genişliklerde AVIF/WebP biçimindedir. Kartlarda 16:9 kadraj uygulanır. Tam üretim komutları `docs/IMAGE_PROMPTS_v1.16.json` içindedir. Orijinal üretimler ayrıca Codex generated_images klasöründe korunur; site o klasöre bağımlı değildir.

Verification görseli önceki sürümden gelir: `brand/RevB/image-sources/verification.png`; kaynağı `IMAGE_SOURCES_v1.15.md` içinde kayıtlıdır. Embedded şeması kod içinde gerçek SVG olarak yeniden çizildi; tekrar kullanılabilir EN/DE kopyaları `design/v1.16/` içindedir. FPGA şeması korunur.

## Yazı ve logo

Site Inter 400/600 kullanır; dosyalar ve SIL Open Font License `site/assets/fonts/` içindedir. Kaynak: [Google Fonts / Inter](https://github.com/google/fonts/tree/main/ofl/inter). Space Grotesk kaldırıldı. Logo Rev B değişmedi. Eski görseller ve kullanılmayan font `archive/v1.15-replaced-assets/` içinde korunur.
