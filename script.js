const button = document.querySelector('#converti')

button.addEventListener('click', function(e) {
    const p_valuta = document.querySelector('#p_valuta').value
    if(p_valuta.length === 0){
        alert("Devi inserire i dati")
    }

    const valute = {
        "euro" : {
            "lek": 117.21
        },
        "lek" : {
            "euro":  0.0085
        } 
    }
    const uno_valuta = document.querySelector("#valuta_uno").value
    const due_valuta = document.querySelector("#valuta_due").value
    const ris = document.querySelector("#risultato")

    uno_valuta === due_valuta ? ris.innerHTML = p_valuta : ris.innerHTML = (valute[uno_valuta][due_valuta] * p_valuta).toFixed(4)
})