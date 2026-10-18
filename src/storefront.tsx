import { useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Heart, Menu, Ruler, Search, ShoppingBag, SlidersHorizontal, Sparkles, X } from 'lucide-react';

type Product = { id: number; name: string; collection: string; price: number; oldPrice?: number; color: string; texture: string; image: string; tag?: string; sizes: string[] };

const products: Product[] = [
  { id: 1, name: 'Sarnıç', collection: 'ANADOLU KOLEKSİYONU', price: 4890, oldPrice: 6200, color: 'Kiremit / Krem', texture: 'Yün & pamuk', image: 'photo-1600166898405-da9535204843', tag: 'ÇOK SATAN', sizes: ['80 × 150', '120 × 180', '160 × 230', '200 × 290'] },
  { id: 2, name: 'Gün Işığı', collection: 'DOĞAL SERİ', price: 3750, color: 'Bal / Kum', texture: 'Jüt & pamuk', image: 'photo-1575414003591-ece8d3f1a5c9', sizes: ['80 × 150', '120 × 180', '160 × 230', '200 × 290'] },
  { id: 3, name: 'İznik', collection: 'ANADOLU KOLEKSİYONU', price: 5320, color: 'İndigo / Fildişi', texture: 'Yün', image: 'photo-1600210492486-724fe5c67fb0', tag: 'YENİ', sizes: ['80 × 150', '120 × 180', '160 × 230', '200 × 290'] },
  { id: 4, name: 'Toprak', collection: 'MODERN DOKUMA', price: 4190, color: 'Toprak / Taş', texture: 'Pamuk', image: 'photo-1600607687939-ce8a6c25118c', sizes: ['80 × 150', '120 × 180', '160 × 230', '200 × 290'] },
  { id: 5, name: 'Pera', collection: 'ŞEHİR SERİSİ', price: 6150, color: 'Adaçayı / Krem', texture: 'Yün & pamuk', image: 'photo-1600566753086-00f18fb6b3ea', sizes: ['80 × 150', '120 × 180', '160 × 230', '200 × 290'] },
  { id: 6, name: 'Yayla', collection: 'DOĞAL SERİ', price: 3280, color: 'Keten / Ekru', texture: 'Jüt', image: 'photo-1600573472550-8090b5e0745e', sizes: ['80 × 150', '120 × 180', '160 × 230', '200 × 290'] },
];

const formatPrice = (price: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(price);
const imageUrl = (photo: string, width = 780) => `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;

function App() {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [liked, setLiked] = useState<number[]>([]);
  const [cart, setCart] = useState(0);
  const [filter, setFilter] = useState('Tümü');
  const [customOpen, setCustomOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState('');
  const [sort, setSort] = useState('Öne çıkanlar');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  const visibleProducts = useMemo(() => {
    const filtered = filter === 'Tümü' ? products : products.filter(product => product.collection === filter);
    return [...filtered].sort((a, b) => sort === 'Fiyat: artan' ? a.price - b.price : sort === 'Fiyat: azalan' ? b.price - a.price : 0);
  }, [filter, sort]);

  const notify = (message: string) => { setToast(message); window.setTimeout(() => setToast(''), 2600); };
  const addToCart = (product: Product) => {
    if (!selected[product.id]) { notify('Önce halı ölçüsünü seçin.'); return; }
    setCart(count => count + 1);
    notify(`${product.name} · ${selected[product.id]} sepete eklendi`);
  };
  const toggleLiked = (id: number) => setLiked(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);

  return <>
    <div className="announcement">İlk siparişinize özel <strong>%10 indirim</strong><span> · </span> 1.500 TL üzeri ücretsiz kargo <ArrowRight size={13} /></div>
    <header className="header">
      <button className="mobile-menu icon-button" aria-label="Menüyü aç" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button>
      <a href="#top" className="wordmark"><span className="brand-mark">d.</span><span>DOKUMA<span className="brand-dot">.</span><small>EVİNİZE DOKUNAN HİKÂYELER</small></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#koleksiyon">Tüm halılar</a><a href="#koleksiyon">Koleksiyonlar</a><a href="#hikaye">Hikâyemiz</a><a href="#olcu" className="custom-link">Ölçüne özel <ArrowUpRight size={14} /></a>
      </nav>
      <div className="header-actions"><button className="icon-button search-button" aria-label="Ara" onClick={() => document.getElementById('collection-search')?.focus()}><Search /></button><button className="icon-button account-button" aria-label="Hesabım"><span>Hesabım</span></button><button className="icon-button cart-button" aria-label="Sepet"><ShoppingBag /><span>Sepetim</span><b>{cart}</b></button></div>
    </header>

    <main id="top">
      <section className="hero">
        <img className="hero-image" src={imageUrl('photo-1600210492486-724fe5c67fb0', 2200)} alt="Sıcak ışıklı bir oturma odasında dokuma halı" />
        <div className="hero-shade" />
        <div className="hero-copy"><p className="eyebrow light-eyebrow"><span /> ANADOLU'DAN İLHAMLA, BUGÜN İÇİN</p><h1>Her ilmekte<br /><em>bir hikâye.</em></h1><p className="hero-desc">Yaşanmışlığın sıcaklığı, evinizin en güzel yerinde.<br />Size ve yaşamınıza özel ölçülerde.</p><a className="button button-light" href="#koleksiyon">Koleksiyonu keşfet <ArrowRight size={16} /></a></div>
        <div className="hero-caption"><span>01 — 03</span><span>YAŞAMIN İÇİNDEN KARELER</span><div className="hero-progress"><i /></div></div>
        <a href="#koleksiyon" className="scroll-cue">AŞAĞI KEŞFET <ArrowDown size={14} /></a>
      </section>

      <section className="trust-strip" aria-label="Alışveriş avantajları"><div><span className="trust-icon">✳</span><p><strong>Ölçüne özel üretim</strong><small>Alanına tam uyum sağlar</small></p></div><i /><div><span className="trust-icon">⌂</span><p><strong>Ustalıkla dokundu</strong><small>Özenle seçilmiş iplikler</small></p></div><i /><div><span className="trust-icon">↺</span><p><strong>Kolay iade</strong><small>14 gün içinde ücretsiz</small></p></div><i /><div><span className="trust-icon">♧</span><p><strong>Güvenli alışveriş</strong><small>Korunan ödeme altyapısı</small></p></div></section>

      <section className="collection-section" id="koleksiyon">
        <div className="section-heading"><div><p className="eyebrow"><span /> ÖZENLE SEÇİLDİ</p><h2>Yaşam alanınıza<br /><em>iyi gelecek</em> bir dokunuş.</h2></div><p className="section-intro">Her desenin bir çıkış noktası, her dokumanın kendine özgü bir dokusu var. Sizin hikâyenize uyanı bulun.</p></div>
        <div className="collection-toolbar"><div className="filter-tabs">{['Tümü', 'ANADOLU KOLEKSİYONU', 'DOĞAL SERİ', 'MODERN DOKUMA'].map(item => <button key={item} className={filter === item ? 'filter-tab active' : 'filter-tab'} onClick={() => setFilter(item)}>{item === 'Tümü' ? 'Tüm halılar' : item}</button>)}</div><div className="toolbar-right"><button className="filter-button" onClick={() => notify('Filtre seçenekleri bir sonraki adımda bağlanacak.')}><SlidersHorizontal size={15} /> Filtrele</button><label className="sort-select"><span>Sırala:</span><select aria-label="Ürünleri sırala" value={sort} onChange={event => setSort(event.target.value)}><option>Öne çıkanlar</option><option>Fiyat: artan</option><option>Fiyat: azalan</option></select><ChevronDown size={14} /></label></div></div>
        <div className="product-grid">{visibleProducts.slice(0, 4).map(product => <article className="product-card" key={product.id}><div className="product-image-wrap"><img src={imageUrl(product.image)} alt={`${product.name} dokuma halı`} /><div className="product-badges">{product.tag && <span>{product.tag}</span>}</div><button className={liked.includes(product.id) ? 'favorite-button favorited' : 'favorite-button'} aria-label="Favorilere ekle" onClick={() => toggleLiked(product.id)}><Heart size={17} fill={liked.includes(product.id) ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={() => addToCart(product)}>Sepete ekle <ArrowUpRight size={15} /></button></div><div className="product-info"><div><span className="product-collection">{product.collection}</span><h3>{product.name}</h3></div><div className="product-prices">{product.oldPrice && <s>{formatPrice(product.oldPrice)}</s>}<strong>{formatPrice(product.price)}<small>'den</small></strong></div></div><p className="product-color"><span />{product.color} <span className="color-separator">·</span> {product.texture}</p><div className="size-row"><span>Ölçü</span><div className="size-options">{product.sizes.slice(0, 4).map(size => <button key={size} className={selected[product.id] === size ? 'size-option chosen' : 'size-option'} onClick={() => setSelected(current => ({ ...current, [product.id]: size }))}>{size}</button>)}<button className="size-custom" onClick={() => setCustomOpen(true)}>Özel <ArrowUpRight size={11} /></button></div></div></article>)}</div>
        <div className="catalog-bottom"><span>{visibleProducts.length} özenle seçilmiş model</span><button onClick={() => notify('Kataloğun tamamı çok yakında.')}>Tüm koleksiyonu gör <ArrowRight size={15} /></button></div>
      </section>

      <section className="custom-banner" id="olcu"><div className="custom-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-center">d.</div><span className="art-caption">ÖLÇÜ SİZE, HİKÂYE SİZİN</span></div><div className="custom-copy"><p className="eyebrow"><span /> TAM OLDUĞU GİBİ</p><h2>Evinizin ölçüsünde.<br /><em>Sizin için dokundu.</em></h2><p>Alanınızı ölçün, gerisini bize bırakın. Seçtiğiniz halıyı dilediğiniz en ve boyda üretelim; evinizde tam olması gereken yere yerleşsin.</p><button className="button button-dark" onClick={() => setCustomOpen(true)}>Ölçünü belirle <ArrowRight size={16} /></button><div className="custom-note"><Check size={14} /> 50 × 80 cm'den 400 × 600 cm'ye kadar üretim</div></div></section>

      <section className="story-section" id="hikaye"><div className="story-photo"><img src={imageUrl('photo-1600607687939-ce8a6c25118c', 1400)} alt="Doğal malzemelerle hazırlanmış sıcak bir yaşam alanı" /><span>DOĞAL İPLİKLER · ÖZENLİ DOKUMA</span></div><div className="story-copy"><p className="eyebrow"><span /> BİZİM HİKÂYEMİZ</p><h2>Geçmişten gelen<br /><em>bir sıcaklık.</em></h2><p>Anadolu'nun dokuma hafızasından, bugünün evlerine… Her halımız; malzemesine, rengine ve dokusuna özen gösterilerek seçilen, her gün yaşanacak anlara eşlik etsin diye tasarlanan bir parçadır.</p><a href="#footer">Hikâyemizi tanıyın <ArrowRight size={15} /></a></div></section>

      <section className="newsletter"><div><p className="eyebrow light-eyebrow"><span /> DOKUMADAN HABERDAR OLUN</p><h2>Güzel şeyler<br /><em>paylaşınca çoğalır.</em></h2></div><form onSubmit={event => { event.preventDefault(); notify('Aramıza katıldınız, teşekkürler.'); }}><label htmlFor="newsletter-email">Yeni koleksiyonlardan ve küçük sürprizlerden ilk siz haberdar olun.</label><div className="email-entry"><input id="newsletter-email" type="email" placeholder="E-posta adresiniz" required /><button aria-label="Kaydol"><ArrowRight /></button></div><small>Kaydolarak aydınlatma metnimizi kabul etmiş olursunuz.</small></form><Sparkles className="newsletter-sparkle" size={72} strokeWidth={0.8} /></section>
    </main>

    <footer id="footer"><div className="footer-main"><div className="footer-brand"><a href="#top" className="wordmark wordmark-footer"><span className="brand-mark">d.</span><span>DOKUMA<span className="brand-dot">.</span><small>EVİNİZE DOKUNAN HİKÂYELER</small></span></a><p>Yaşadıkça güzelleşen, evinize ve<br />size ait dokunuşlar.</p><div className="socials"><a href="#footer">ig</a><a href="#footer">p</a></div></div><div className="footer-col"><strong>ALIŞVERİŞ</strong><a href="#koleksiyon">Tüm halılar</a><a href="#koleksiyon">Koleksiyonlar</a><a href="#olcu">Ölçüne özel üretim</a><a href="#koleksiyon">Yeni gelenler</a></div><div className="footer-col"><strong>YARDIM</strong><a href="#footer">Sıkça sorulan sorular</a><a href="#footer">Kargo ve teslimat</a><a href="#footer">İade ve değişim</a><a href="#footer">Ölçü nasıl alınır?</a></div><div className="footer-col"><strong>BİZE ULAŞIN</strong><a href="mailto:merhaba@dokuma.com.tr">merhaba@dokuma.com.tr</a><a href="tel:+908501234567">0850 123 45 67</a><span>Hafta içi 09.00–18.00</span></div></div><div className="footer-bottom"><span>© 2026 DOKUMA — Tüm hakları saklıdır.</span><div><a href="#footer">Gizlilik</a><a href="#footer">Mesafeli satış sözleşmesi</a><span>Türkiye'den sevgiyle.</span></div></div></footer>

    {customOpen && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setCustomOpen(false); }}><section className="custom-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close icon-button" onClick={() => setCustomOpen(false)} aria-label="Kapat"><X /></button>{customSubmitted ? <div className="form-success"><span><Check /></span><p className="eyebrow"><span /> BİLGİLERİNİZ ALINDI</p><h2>Size özel bir teklif hazırlıyoruz.</h2><p>Ekibimiz seçtiğiniz halı ve ölçüler için kısa süre içinde sizinle iletişime geçecek.</p><button className="button button-dark" onClick={() => { setCustomOpen(false); setCustomSubmitted(false); }}>Tamam <ArrowRight size={16} /></button></div> : <><p className="eyebrow"><span /> SİZE ÖZEL DOKUMA</p><h2 id="modal-title">Ölçünüzü birlikte<br /><em>belirleyelim.</em></h2><p className="modal-desc">Halı koyacağınız alanın enini ve boyunu girin. Size özel fiyat teklifimizi iletelim.</p><div className="dimension-fields"><label>En <div><input type="number" min="50" max="400" placeholder="160" value={width} onChange={event => setWidth(event.target.value)} /><span>cm</span></div></label><span className="dimension-x">×</span><label>Boy <div><input type="number" min="80" max="600" placeholder="230" value={height} onChange={event => setHeight(event.target.value)} /><span>cm</span></div></label></div><p className="modal-tip"><Ruler size={15} /> En az 50 × 80 cm, en fazla 400 × 600 cm özel üretim yapıyoruz.</p><label className="contact-field">Telefon veya e-posta<input type="text" placeholder="Size nasıl ulaşalım?" required /></label><button className="button button-dark modal-submit" onClick={() => { if (!width || !height || Number(width) < 50 || Number(height) < 80) { notify('Lütfen geçerli bir en ve boy girin.'); return; } setCustomSubmitted(true); }}>Ölçü için teklif al <ArrowRight size={16} /></button><small className="modal-privacy">Bilgileriniz yalnızca teklif hazırlamak için kullanılır.</small></>}</section></div>}
    {toast && <div className="toast"><Check size={16} />{toast}<button onClick={() => setToast('')} aria-label="Bildirimi kapat"><X size={14} /></button></div>}
  </>;
}

export default App;
