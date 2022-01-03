
const reportClose = document.getElementById('close');

reportClose.addEventListener('click' , () => {
    document.getElementById('todays-report').style.display = 'none';
});

const disTogg = document.getElementById('disc');

disTogg.addEventListener('click', () => {
    var toggDis = document.getElementById('togg');
    toggDis.style.display == 'none' ? toggDis.style.display = 'block': toggDis.style.display = 'none';
});