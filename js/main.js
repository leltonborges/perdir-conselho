let autors = ["Graciliano Ramos", "Mario Quintana", "Guimarães Rosa", "Ruth Rocha", "Luis F. Veríssimo", "Ana M. Machado", "Chico B. Holanda", "Adélia Prado", "Eva Furnari", "Martha Medeiros", "Conceição Evaristo", "André Dahmer", "Marcelino Freire", "Marçal Aquino", "Antônio Prata", "Ana Maria Gonçalves", "Veronica Stigger", "Luisa Geisler", "Raphael Montes", "Daniel Galera"]

window.addEventListener('load', function () {
    const API = 'https://api.adviceslip.com/advice';
    fetch(API, {
            method: 'GET'
        })
        .then(resp => resp.json())
        .then(resp => resp.slip.advice)
        .then(setDataRef);

    randoAutors()
})

const randoAutors = () => {
    const size = autors.length;
    let num = Math.floor((Math.random() * size) + 1)
    document.querySelectorAll("[goat]").forEach(e => e.innerHTML = autors[num])
}

const setDataRef = (text) => {
    document.querySelector("p[data-ref]").innerHTML = text;
}
