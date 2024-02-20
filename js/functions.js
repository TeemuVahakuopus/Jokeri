const uusiRiviBtn = document.getElementById('uusiRiviBtn');
const arvottujenRivienLkm = document.getElementById('arvottujenRivienLkm');
const jokeriTaulukko = document.getElementById('jokeriTaulukko');

let arvottujenRivienMaara = 0;

uusiRiviBtn.addEventListener('click', generoiUusiRivi);

function generoiUusiRivi() {
    const rivi = jokeriTaulukko.insertRow();

    for (let i = 0; i < 7; i++) {
        const solu = rivi.insertCell();

        const numero = Math.floor(Math.random() * 10);
        solu.textContent = numero;
    }

    arvottujenRivienMaara++;
    arvottujenRivienLkm.textContent = `Arvottujen rivien lukumäärä: ${arvottujenRivienMaara}`;
}
