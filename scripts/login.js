let cuentas = [
    { nombre:{nombre:'Mali',apellido:'González'}, correo: 'mali@correo.com', contraseña:'pass', saldo: {debito: 5000, credito: 2000, recompensas:500} },
    { nombre:{nombre:'Gera',apellido:'Gutierrez'}, correo: 'gera@correo.com', contraseña:'pass', saldo: {debito: 3000, credito: 28000, recompensas:600} },
    { nombre:{nombre:'Maui',apellido:'Guzmán'}, correo: 'maui@correo.com', contraseña:'pass', saldo: {debito: 1000, credito: 0, recompensas:100}} ,
];

window.onload = function () {
    let submit = document.getElementById('login');
    let correo = document.getElementById('floatingInput');
    let pass = document.getElementById('floatingPassword');
    let form = document.getElementById('login-form');
    let validationText = document.getElementById('validation');
    let redirect = false;
    form.addEventListener('submit',(event)=>{
        event.preventDefault();
    })

    submit.addEventListener('click',()=>{
        for (usuario of cuentas){
            if(correo.value.toLowerCase() == usuario.correo){
                if(pass.value == usuario.contraseña){
                    console.log(pass.value)
                    console.log("La contraseña y el usuario coinciden")
                    sessionStorage.setItem('nombre',usuario.nombre.nombre);
                    sessionStorage.setItem('apellido',usuario.nombre.apellido);
                    sessionStorage.setItem('saldoDebito',usuario.saldo.debito);
                    sessionStorage.setItem('saldoCredito',usuario.saldo.credito);
                    sessionStorage.setItem('saldoRecompensas',usuario.saldo.recompensas);
                    redirect = true;
                    window.location.replace('main.html');
                }else{
                    validationText.style.display = 'block';
                    break;
                }
                
            }
            
        }
        if(!redirect)   validationText.style.display = 'block';
    });
};






