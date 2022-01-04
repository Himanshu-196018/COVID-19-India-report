//report close button function
const reportClose = document.getElementById('close');

reportClose.addEventListener('click' , () => {
    document.getElementById('todays-report').style.display = 'none';
});

// state report toggle ACTION button
const stateRepTogg = document.getElementById('st');

stateRepTogg.addEventListener('click', () =>{
    var toggRepTab = document.getElementById('st-ws-rep');
    toggRepTab.style.display == 'none' ? toggRepTab.style.display = 'table': toggRepTab.style.display = 'none';
})

//disclaimer toggle ACTION button
const disTogg = document.getElementById('disc');

disTogg.addEventListener('click', () => {
    var toggDis = document.getElementById('togg');
    toggDis.style.display == 'none' ? toggDis.style.display = 'table-cell': toggDis.style.display = 'none';
});