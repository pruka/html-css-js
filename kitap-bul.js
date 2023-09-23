let kitap1 = {
    isim : "Her Şeyi Düşünme",
    yazar : "Anne Bogel",
    fiyat : 25,
    raf : "1.5.RAF"
}

let kitap2 = {
    isim : "Hiçbir Karşılaşma Tesadüf Değildir",
    yazar : "Hakan Mengüç",
    fiyat : 56,
    raf : "2.3.RAF"
}

let kitap3 = {
    isim : "İnsan Neyle Yaşar",
    yazar : "Tolstoy",
    fiyat : 34,
    raf : "3.4.RAF"
}

let kitap4 = {
    isim : "Zafer Sızlanarak Kazanılmaz",
    yazar : "Haluk Tatar",
    fiyat : 45,
    raf : "4.1.RAF"
}

let kitap5 = {
    isim : "Şeker Portakalı",
    yazar : "Jose Mauro de Vasconcelos",
    fiyat : 22,
    raf : "5.3.RAF"
}

let kitaplar = [kitap1, kitap2, kitap3, kitap4, kitap5]

function rafyap(raf){
    let raflar = [];
    for(let i = 1;i<6;i++){
        raflar.push({kod:raf+"."+String(i)+".RAF", goster:false})
    };
    return raflar
};

function rows(){
    let rows = [];
    for(i=1;i<6;i++){
        let raflar = rafyap(i)
        rows.push(raflar)
    }
    return rows
}
let raflar = rows()



function makerow(){
    satir = "";
    for(let i = 0; i<raflar.length; i++ ){
        for(let j = 0; j<raflar.length; j++){
            
            satir+="|"+(raflar[i][j].goster ? raflar[i][j].kod : "......." )+ "|";
        }
        satir+="\r\n"
    }
    console.log(satir)
    satir = "";
};

function kodbul(kitapismi){
    let rafkodu = null;
    kitaplar.forEach(function(kitap){
        console.log(kitap.isim.toUpperCase())
        if(kitap.isim.toUpperCase().includes(kitapismi.toUpperCase(), 0)){
            rafkodu =  kitap.raf;
        };
    });
    
    return rafkodu
};

let kitapisim = prompt("lütfen bana bir kitap ismi giriniz: ")
let kitaprafı = kodbul(kitapisim)

function falsetotrue(kitaprafı){
    
    for(let i = 0; i<raflar.length; i++ ){
        for(let j = 0; j<raflar.length; j++){
            if(raflar[i][j].kod==kitaprafı){
                raflar[i][j].goster = true
            }
        }
    }
}

if(kitaprafı!=null){
    falsetotrue(kitaprafı)
    makerow()
}else{
    alert("kitap bulunamadı.")
}


