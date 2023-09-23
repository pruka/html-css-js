let metin = `
Migros'a Hoş geldiniz.
Money Kart'ınız var mı?
1-Evet
2-Hayır
`

const urunler = [
    {
        fiyat:20,
        urunIsmi:"süt"
    },
    {
        fiyat:100,
        urunIsmi:"bebek bezi"
    },
    {
        fiyat:220,
        urunIsmi:"kıyma"
    }
]

let sonuc = confirm(metin)
let  odenecekTutar
if(sonuc){
    let isim = prompt("lütfen isminizi giriniz: ")
    let soyisim = prompt("lütfen soyisminizi girniz: ")
    const musteri = new Musteri(isim, soyisim, sonuc, urunler)
    odenecekTutar = musteri.hesapla()
    alert(`
    müşteri bilgileri:
    isim: ${isim}
    soyisim: ${soyisim}
    odenecek tutar: ${odenecekTutar}
    `)
}else{
    const musteri = new Musteri(null, null, false, urunler)
    odenecekTutar = musteri.hesapla()
    alert(`ödenecek tutar: ${odenecekTutar}`)
}