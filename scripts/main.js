window.onload = function(){
    const usuario = sessionStorage.getItem('nombre');
    const apellido = sessionStorage.getItem('apellido')
    const debito = parseFloat(sessionStorage.getItem('saldoDebito'));
    const credito = parseFloat(sessionStorage.getItem('saldoCredito'));
    const recompensas = parseFloat(sessionStorage.getItem('saldoRecompensas'));
    
    const total = debito + credito + recompensas;

    document.getElementById('greeting').innerHTML = `Hola de nuevo, ${usuario}!`;
    document.getElementById('balance').innerHTML = `\$${total} `;
    document.getElementById('balanceDebito').innerHTML = `\$${debito} `;
    document.getElementById('balanceCredito').innerHTML = `\$${credito} `;
    document.getElementById('balanceRecompensas').innerHTML = `\$${recompensas} `;
    document.getElementById('nameInTheCard').innerHTML = `${usuario} ${apellido}`


}