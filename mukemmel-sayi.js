let sayi = prompt("lütfen bir sayı giriniz: ")

function mukemmelSayi(sayi){
    let toplam = 0

    for(let i = 1; i<=sayi; i++){
        if(sayi%i==0){
            toplam += i
        }
    }
    if(toplam/2==sayi){
        alert("Tebrikler mükemmel bir sayı buldunuz. Toplam: " + toplam)
    }else{
        alert("Bu bir mükemmel sayı değil. Toplam: " + toplam)
    }
}
mukemmelSayi(sayi)