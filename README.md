# ATM Machine

Este repositorio es sobre un banco digital el cual almacena información de los siguientes usuarios.

_Mali González_
usuario: mali@correo.com
contraseña: pass

_Gera Gutierrez_
usuario: gera@correo.com
contraseña: pass

_Maui Guzmán_
usuario: maui@correo.com
contraseña: pass

Para poder acceder a él se puede hacer a través de [Github Pages](https://efrenjm.github.io/ATM_machine/) el cual se almacena como un sitio web estático. Si se desea descargar el repositorio es más recomendable descargar el branch localhost el cual utiliza referencias dinámicas.

En la página principal al hacer click en los botones de Mi cuenta, Iniciar sesión y Crear tu cuenta se redigirá a la página de inicio de sesión.

En la página de inicio de sesión se tiene un diccionario con los usuarios, estos se pueden encontrar explicitamente en el código fuente. Aquí es donde se verifica que el correo y la contraseña coincidan con los que están en la "base de datos". Los datos del usuario se almacenan en una sesión local.

Por último, al iniciar sesión con cualquier usuario mostrará la página del portal la cual tendrá la información del usuario como su nombre y su balance en sus cuentas.