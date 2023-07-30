window.onload = function(){
    const usuario = sessionStorage.getItem('nombre');
    const apellido = sessionStorage.getItem('appelido')
    const debito = sessionStorage.getItem('saldoDebito');
    const credito = sessionStorage.getItem('saldoCredito');
    const recompensas = sessionStorage.getItem('saldoRecompensas');
    
    const total = debito + credito + recompensas;

    document.getElementById('greeting').innerHTML = `Hola de nuevo, ${usuario}!`;
    document.getElementById('balance').innerHTML = `\$${total} `;
    document.getElementById('balanceDebito').innerHTML = `\$${debito} `;
    document.getElementById('balanceCredito').innerHTML = `\$${credito} `;
    document.getElementById('balanceRecompensas').innerHTML = `\$${recompensas} `;



}