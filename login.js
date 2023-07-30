let cuentas = [
    { nombre:{nombre:'Mali',apellido:'González'}, correo: 'Mali@correo.com', contraseña:'pass', saldo: {debito: 5000, credito: 2000, recompensas:500} },
    { nombre:{nombre:'Gera',appelido:'Gutierrez'}, correo: 'Gera@correo.com', contraseña:'pass', saldo: {debito: 3000, credito: 28000, recompensas:600} },
    { nombre:{nombre:'Maui',appelido:'Guzmán'}, correo: 'Maui@correo.com', contraseña:'pass', saldo: {debito: 1000, credito: 0, recompensas:100}} ,
];

window.onload = function () {
    let submit = document.getElementById('login');
    let correo = document.getElementById('floatingInput');
    let pass = document.getElementById('floatingPassword');
    //let textOfValidation = document.getElementById('validation');
    submit.addEventListener('click',()=>{
        for (usuario of cuentas){
            if(correo == usuario.nombre || correo == usuario.correo){
                if(pass == usuario.contraseña){
                    sessionStorage.setItem('nombre',cuentas.nombre.nombre);
                    sessionStorage.setItem('apellido',cuentas.nombre.apellido);
                    sessionStorage.setItem('saldoDebito',cuentas.saldo.debito);
                    sessionStorage.setItem('saldoCredito',cuentas.saldo.credito);
                    sessionStorage.setItem('saldoRecompensas',cuentas.saldo.recompensas);

                    window.location.replace('https://efrenjm.github.io/ATM_machine/main.html');
                }
                alert('Usuario y/o contraseña no válidos');
                break;
            }
        }
    });
};






