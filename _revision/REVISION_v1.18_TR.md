# Website v1.18 — şirket adı ve marka güncellemesi

23 Eylül 2026 · Önceki sürüm: v1.17 · Güncel marka: Rev02

Şirket adı, kullanıcının talebi doğrultusunda **münchner Avionikwerk** olarak güncellendi. Kartvizit ve sunumla aynı Brand Rev02 vektör logo kullanılır.

## Değişiklikler

- Şirket adı başlıklarda da tam olarak “münchner Avionikwerk” biçiminde gösterilir; şirket adı için otomatik büyük harf dönüşümü kapatıldı.
- 18 İngilizce/Almanca sayfanın şirket metinleri, başlıkları, sosyal önizleme ve uygulama metaverileri, erişilebilirlik etiketleri, telif satırı ve e-posta konu alanı güncellendi.
- Başlık/altbilgi logoları `assets/brand-rev02/logo-white.svg` dosyasını kullanır. Üç web logo varyantı ve favicon başlığı güncellendi; sembol geometrisi korundu.
- Üst satır “münchner”, alt satır “Avionikwerk” olacak şekilde yenilenen kelime işareti Inter ile çizime dönüştürüldü. SVG dosyaları font kurulumu gerektirmez. Logo oranı 1127 × 330 olarak tanımlandı.
- Eski web logoları `archive/v1.17-brand-assets/` içinde korunur. Önceki paket, marka dosyaları, sürüm belgeleri ve Git geçmişi yerinde tutulur.
- `tools/build_site.py` güncel içeriğin kaynağıdır. `tools/package_release.py --output-dir <klasör>` yeni sürümü istenen teslim klasörüne paketler.

## Doğrulama

- 18 sayfa ve 684 yerel dosya/bölüm bağlantısı: hata yok.
- Aktif HTML/SVG dosyalarında eski şirket yazımı kalmadı.
- Yeni marka SVG dosyaları XML olarak doğrulandı; metin öğesi veya gömülü raster içermez.
- İngilizce ana sayfa 1280 px, Almanca ana sayfa 390 px genişlikte tarayıcıdan incelendi. İki logonun yüklenmesi ve yeni şirket adı doğrulandı; yatay taşma bulunmadı. Masaüstü ve telefon üstbilgisi görsel olarak kontrol edildi.
- Kayıtlar: `STATIC_CHECK_v1.18.json`, `BROWSER_CHECK_v1.18.json`.

Paket: `Muenchner_Avionikwerk_Website_v1.18.zip`. Tamamını çıkardıktan sonra `index.html` ile açılır. Yerel Git etiketi: `website-v1.18`.

Bu yerel inceleme sürümüdür; canlı siteye yayın yapılmadı. Mevcut Imprint/Privacy taslakları ve önceki yayın hazırlık durumu sürer.
