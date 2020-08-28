function persononclik() {
    let OSet = document.getElementsByClassName('set')[0];
    let Odesign = document.getElementsByClassName('design')[0];
    let n = 1;
    OSet.onclick = function () {
        n++;
        if (n % 2 == 0) {
            Odesign.style.display = 'block';
        } else {
            Odesign.style.display = 'none';
        }
    }
}
persononclik();