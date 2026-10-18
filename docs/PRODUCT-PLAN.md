# Ürün ve marka yönü

## Geçici marka yönü

**Çalışma adı: Dokuma** (yalnızca prototip etiketi; alan adı, marka uygunluğu veya tescil kontrolü yapılmadı).

**Kültürel yön:** Anadolu kilim ve dokuma kültüründen ilham; doğal iplik, sıcak toprak paleti, modern ve sakin ev fotoğrafçılığı. Ürün kaynağı/ustası doğrulanmadan el dokuma, yöresel köken veya sürdürülebilirlik iddiası yayımlanmayacak.

**Marka adı keşfi:** Dokuma, İlmek, Kök, Yuva, İzi ve Oda isimleri yaratıcı başlangıç seçenekleridir; seçimden önce TÜRKPATENT, alan adı ve sosyal hesap uygunluğu kontrol edilmelidir.

## Ticari varsayımlar

- Türkiye'de perakende; fiyat para birimi TRY.
- Mağazaya her gün 10 ürün ekleme hedefi. Her ürün için fotoğraf, metin, SKU, fiyat, stok, ölçü varyasyonları ve kalite onayı gerekir.
- Standart ölçüler yanında özel ölçü için teklif/üretim akışı.
- Kart, taksit, havale ve kapıda ödeme seçeneklerinin tamamı değerlendirilecek; kullanılabilirlik sağlayıcı ve sözleşmelere bağlıdır.
- Gelecekte stok, muhasebe/ERP, kargo ve pazaryerleriyle entegrasyon.

## Açık kararlar

1. İlk ürünler üretici kataloğundan mı, markanın kendi tasarımlarından mı?
2. Özel ölçü fiyatı m² hesabı mı, ürün bazlı katsayı mı? Minimum/maksimum ölçü, fire, kenar işçiliği ve teslim süreleri nedir?
3. Kapıda ödeme nakit/kart seçenekleri, ücret/limit ve taksit sağlayıcısı nedir?
4. Kullanılacak muhasebe, ERP, depo, kargo ve pazaryeri hesapları hangileri?
5. Üretici, malzeme ve menşe bilgileri nasıl doğrulanacak? İade/iptal ve kişiye özel üretim koşulları netleştirilmeli.
6. Hedef müşteri, marka kişiliği ve fiyat seviyesi nedir?

## WooCommerce / özel yazılım

**Öneri: WooCommerce + özel ölçü/teklif modülüyle MVP.** Standart katalog, kampanya, müşteri ve sipariş yönetimini hızlandırır. Ürün ve sipariş verisi standart dışa aktarma/API sınırlarında tutulursa ileride operasyon bağlantıları kolaylaşır.

Özel ölçü fiyat motoru, üretim iş emri, fire hesabı, gerçek zamanlı stok ve çoklu pazaryeri akışları ilk sürümde temel gereksinimse özel yazılım değerlendirilebilir; ilk yatırım ve bakım yükü daha yüksektir.

## Yol haritası

1. **Doğrulama:** marka, hedef müşteri, katalog kaynağı, fiyatlama, iade ve teslimat.
2. **Ticari altyapı:** alan adı, hosting, yasal sayfalar, ödeme kuruluşu, kargo ve fatura süreçleri.
3. **Mağaza MVP:** ürün/ölçü varyantı, özel ölçü, arama/filtre, sepet/ödeme, sipariş, mobil ve SEO.
4. **Operasyon:** günlük 10 ürün için yayın akışı, rol bazlı panel, stok/sipariş ve bildirimler.
5. **Entegrasyon:** muhasebe/stok/kargo, ardından pazaryerleri; hata kayıtları ve yeniden deneme.
6. **Ölçüm:** görüntüleme, ölçü seçimi, sepete ekleme, ödeme dönüşümü ve özel ölçü talebi.

## Ürün veri modeli

- Ürün: SKU, başlık, kategori/koleksiyon, açıklama, fotoğraf, malzeme, renk, desen, bakım ve doğrulanmış menşe.
- Varyant: ölçü (en × boy), fiyat, maliyet, stok/SKU ve teslim süresi.
- Özel ölçü: ürün, en/boy, hesap yöntemi, üretim süresi, teklif/fiyat, onay ve iş emri.
- Sipariş: müşteri/adres, ödeme, kargo/takip, fatura referansı, iade ve iptal durumu.

## Entegrasyon sınırları

Sağlayıcıdan bağımsız ürün/sipariş kimlikleri, webhook, yinelenen olaylara dayanıklı eşitleme, hata kaydı ve yeniden deneme kuyruğu kurun. Kart verisini mağaza veritabanında tutmayın; ödeme kuruluşunun güvenli ödeme ekranını kullanın.
