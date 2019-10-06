function pilihanKomputer(){
    const kom = Math.random();
    if (kom < 0.34) return 'gajah';
    if(kom >= 0.34 && kom < 0.67) return 'orang';
    return 'semut';
}

function getHasil(kom, player){
    if (player == kom) return 'SERI!';
    if (player == 'gajah') return (kom == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (kom == 'semut') ? 'MENANG!' : 'KALAH!';
    if (player == 'semut') return (kom == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar(){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length){
            i = 0;
        };
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilKom = pilihanKomputer();
        const pilPlayer = pil.className;
        const hasil = getHasil(pilKom, pilPlayer);
        putar();
        setTimeout(function(){
            const imgKom = document.querySelector('.img-komputer');
            imgKom.setAttribute('src', 'img/' + pilKom + '.png');

            const Thasil = document.querySelector('.info');
            
            Thasil.innerHTML = hasil;
        },1000);
        
    });
});

