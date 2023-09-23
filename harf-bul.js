let metin = "Geleceğe umutula bakarak yaşıyorum ve beni hiçbir şey bu umutlarından vazgeçiremez.";

let harf = prompt("Lütfen metindeki sayısını bulmak istediğiniz harfi giriniz.");

function bul(harf){
    let toplam = 0;
    for(let i = 0; i< metin.length; i++){
        if(harf.toLowerCase()===metin.charAt(i).toLowerCase()){
            toplam += 1
        }
    }
    return toplam
}

alert("Toplam harf sayısı: " + bul(harf));
