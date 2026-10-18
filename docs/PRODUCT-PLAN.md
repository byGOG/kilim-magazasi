# Ürün ve marka yönü

## Geçici marka yönü

**Çalışma adı: Dokuma** (yalnızca prototip etiketi; alan adı, marka uygunluğu veya tescil kontrolü yapılmadı).

**Kültürel yön:** Anadolu kilim ve dokuma kültüründen ilham; doğal iplik, sıcak toprak paleti, modern ve sakin ev fotoğrafçılığı. Ürün kaynağı/ustası doğrulanmadan el dokuma, yöresel köken veya sürdürülebilirlik iddiası yayımlanmayacak.

**Marka adı keşfi:** Dokuma, İlmek, Kök, Yuva, İzi ve Oda isimleri yaratıcı başlangıç seçenekleridir; seçimden önce TÜRKPATENT, alan adı ve sosyal hesap uygunluğu kontrol edilmelidir. Bu prototipte değiştirilebilir olduğu için Dokuma görünür çalışma adı kullanıldı.

## Ticari varsayımlar (onay bekliyor)

- Türkiye'de perakende; fiyat para birimi TRY.
- Mağazaya her gün 10 ürün ekleme hedefi. Her kayıt için fotoğraf, ürün metni, SKU, maliyet/fiyat, stok, ölçü varyasyonları ve kalite onayı gerekir.
- Standart ölçü seçenekleri yanında özel ölçü için teklif/üretim akışı.
- Kart, taksit, havale ve kapıda ödeme seçeneklerinin tamamı değerlendirilecek; kullanılabilirlik ödeme ve kargo sağlayıcısı, risk politikası ve sözleşmelere bağlıdır.
- Gelecekte e-ticaret, depo/stok, muhasebe/ERP ve pazaryerleriyle entegrasyon.

## Sorulması gereken kararlar

1. İlk ürünler üretici kataloğundan mı, markanın kendi tasarımlarından mı? Günde 10 model hedefi ürün mü, yeni tasarım mı?
2. Özel ölçü fiyatı alan bazlı m² hesabı mı, seçili ürünün ölçü katsayısı mı olacak? Minimum/maksimum ölçü, fire, kenar/overlok ve üretim terminleri nedir?
3. Kapıda ödeme yalnızca nakit mi/kart mı; ücret veya limit var mı? Taksit için hangi ödeme kuruluşu düşünülüyor?
4. Sipariş/fatura için mevcut muhasebe, ERP, depo, kargo veya pazaryeri hesabı hangileri?
5. Üretici ve gerçek malzeme/menşe açıklamaları nedir? İade/iptal ve kişiye özel üretim koşulları hukuk danışmanı tarafından netleştirilmeli.
6. Kime satış yapılacak, nasıl bir marka kişiliği ve fiyat seviyesi isteniyor? Nihai marka adı bu kararlardan sonra seçilmeli.

## WooCommerce / özel yazılım

**Önerilen ilk sürüm: WooCommerce tabanlı mağaza + ölçü/teklif için özel modül.** Standart katalog, kampanya, müşteri ve sipariş yönetimi daha erken yayına çıkabilir; ürünler ve siparişler standart ihracat/API sınırlarında tutulursa sonraki sistem bağlantıları kolaylaşır. Ölçüye göre otomatik teklif, üretim iş emri, kumaş/fire hesapları ve pazaryerleri çoğalırsa özel servis veya özel yazılım yeniden değerlendirilmeli.

**Özel geliştirme** ancak ölçü/üretim fiyat motoru, gerçek zamanlı stok, ERP ve çoklu pazaryeri akışları ilk sürümün merkezindeyse mantıklıdır. Daha yüksek ilk geliştirme ve bakım yükü getirir.

## Aşamalı yol haritası

1. **Doğrulama:** marka kültürü/adı, hedef müşteri, katalog kaynağı, fiyatlandırma, iade ve teslimat politikası.
2. **Ticari altyapı:** alan adı/hosting, yasal sayfalar, şirket/ödeme kuruluşu, kargo ve e-fatura süreçleri.
3. **Mağaza MVP:** ürün, ölçü varyantı, özel ölçü fiyat/teklif, arama/filtre, sepet/ödeme, sipariş, mobil ve temel SEO.
4. **Operasyon:** rol bazlı yönetim, günlük 10 model yayın kontrol listesi, stok ve sipariş durumu, e-posta/SMS bildirimleri.
5. **Entegrasyon:** önce muhasebe/stok/kargo, sonra pazaryerleri; kaynak sahibi veri modeli ve hata kuyruğu.
6. **Ölçüm:** ürün görüntüleme, ölçü seçimi, sepete ekleme, ödeme başlatma/tamamlama, özel ölçü teklif dönüşümü.

## Ürün veri modeli

- Ürün: SKU, başlık, koleksiyon/kategori, açıklama, fotoğraf, malzeme, renk, desen, bakım, menşe iddiası için kanıt, durum.
- Varyant: ölçü (en × boy), satış fiyatı, maliyet, stok/SKU, teslim süresi.
- Özel ölçü: ürün, istenen en/boy, hesap yöntemi, üretim süresi, teklif/fiyat, müşteri onayı, iş emri ve sipariş ilişkisi.
- Sipariş: müşteri/adres, ödeme durumu, kargo etiketi/takip, fatura referansı, iade ve iptal durumu.

## Entegrasyon sınırları

Ödeme, kargo, muhasebe, stok ve pazaryerleri için sağlayıcıdan bağımsız sipariş/ürün kimlikleri; webhook ve idempotent eşitleme; hata kayıtları ve yeniden deneme kuyruğu tasarlayın. Kart verisini mağaza veritabanında tutmayın; ödeme kuruluşunun barındırdığı güvenli ödeme ekranı/alanları kullanın. Ödeme sağlayıcısı seçimi şirket uygunluğu ve güncel sözleşme koşullarıyla yapılmalı.
