class MigrosBase{
    indirimOrani = 20
    constructor(isim, soyisim, kartVarmı, urunler){
        this.isim = isim
        this.soyisim = soyisim
        this.kartVarmı = kartVarmı
        this.urunler = urunler
    }
    hesapla(){
        let odenecekTutar = 0
        if(this.urunleriKontrolEt(this.urunler)){
            if(this.kartVarmı){
                this.urunler.forEach(element => {
                    odenecekTutar += (element.fiyat*(100-this.indirimOrani)/100)});
            }else{
                this.urunler.forEach(element=>{odenecekTutar+=(element.fiyat)})
            }

        }else{
            alert("Sepetinize birkaç ürün eklemelisiniz!")
        }
        return odenecekTutar
    }

    urunleriKontrolEt(urunler){
        if(urunler!=null && urunler.lenght>0){
            return true
        }
        return false
    }

}