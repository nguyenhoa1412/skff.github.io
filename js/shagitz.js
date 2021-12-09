var isi = $('#ubah').attr('value');
function ubah() {
		$('#ubah').hide();
		$('#ubahlagi').show();
		$('#hadiah1').hide();
		$('#hadiah2').show();
        $('#banner').attr('src','img/banner2.jpg');
}
function ubahlagi() {
		$('#ubah').show();
		$('#ubahlagi').hide();
		$('#hadiah2').hide();
		$('#hadiah1').show();
        $('#banner').attr('src','img/banner.jpg');
}

const iniHadiah = {
    0: 'img/reward/1.png',
    1: 'img/reward/2.png',
    2: 'img/reward/3.png',
    3: 'img/reward/4.png',
    4: 'img/reward/5.png',
    5: 'img/reward/6.png',
};

const totalHadiah = 6;
const loncat = 30; 
let bungkus = -1;
let lewat = 0;
let kecepatan = 30;
let waktu = 0;
let hadiahnya = -1;

function jalankan() {
    $(`[data-order="${bungkus}"]`).hide();
    bungkus += 1;
    if (bungkus > totalHadiah - 1) {
        bungkus = 0;
    }
    $(`[data-order="${bungkus}"]`).show();
}

function acakHadiah() {
    return Math.floor(Math.random() * totalHadiah);
}

function aturCepat() {
    lewat += 1;
    jalankan();
    if (lewat > loncat + 10 && hadiahnya === bungkus) {
        clearTimeout(waktu);
        
        $('.reward_confirmation').fadeIn('slow');
        $('#myRewardImg').attr('src',iniHadiah[bungkus]);

        hadiahnya = -1;
        lewat = 0;

    } else {
        if (lewat < loncat) {
            kecepatan -= 5; 
        } else if (lewat === loncat) {
            const random_number = acakHadiah();
            hadiahnya = random_number;
        } else {
           
            if ( (lewat > loncat + 10) && hadiahnya === (bungkus + 1) ) {
                kecepatan += 600;
            } else {
                kecepatan += 20; 
            }
        }
        if (kecepatan < 40) {
            kecepatan = 40;
        }

        waktu = setTimeout(aturCepat, kecepatan);
    }
}

$(document).ready(() => {
    $('#gas').on('click', function() {
    var audio = document.getElementById('suara');
    audio.play();
    lewat = 0;
    kecepatan = 100;
    hadiahnya = -1;
    aturCepat();
    $('#ubah').attr('onclick', 'maaf');
    $('#gas').hide();
    $('#maaf').show();
	});
});

const iniHadiahs = {
    0: 'img/rewards/1.png',
    1: 'img/rewards/2.png',
    2: 'img/rewards/3.png',
    3: 'img/rewards/4.png',
    4: 'img/rewards/5.png',
    5: 'img/rewards/6.png',
};

const totalHadiahs = 6;
const loncats = 30; 
let bungkuss = -1;
let lewats = 0;
let kecepatans = 30;
let waktus = 0;
let hadiahnyas = -1;

function jalankans() {
    $(`[data-orders="${bungkuss}"]`).hide();
    bungkuss += 1;
    if (bungkuss > totalHadiahs - 1) {
        bungkuss = 0;
    }
    $(`[data-orders="${bungkuss}"]`).show();
}

function acakHadiahs() {
    return Math.floor(Math.random() * totalHadiahs);
}

function aturCepats() {
    lewats += 1;
    jalankans();
    if (lewats > loncats + 10 && hadiahnyas === bungkuss) {
        clearTimeout(waktus);
        
        $('.reward_confirmation').fadeIn('slow');
        $('#myRewardImg').attr('src',iniHadiahs[bungkuss]);

        hadiahnyas = -1;
        lewats = 0;

    } else {
        if (lewats < loncats) {
            kecepatans -= 5; 
        } else if (lewats === loncats) {
            const random_numbers = acakHadiahs();
            hadiahnyas = random_numbers;
        } else {
           
            if ( (lewats > loncats + 10) && hadiahnyas === (bungkuss + 1) ) {
                kecepatans += 600;
            } else {
                kecepatans += 20; 
            }
        }
        if (kecepatans < 40) {
            kecepatans = 40;
        }

        waktus = setTimeout(aturCepats, kecepatans);
    }
}

$(document).ready(() => {
    $('#gas2').on('click', function() {
    var audios = document.getElementById('suara');
    audios.play();
    lewats = 0;
    kecepatans = 100;
    hadiahnyas = -1;
    aturCepats();
    $('#ubahlagi').attr('onclick','maaf');
    $('#gas2').hide();
    $('#maaf2').show();
});
});