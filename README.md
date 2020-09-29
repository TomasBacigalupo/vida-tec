# vida-tec
prueba tecnica vida-tec

## Pasos para correr el servicio
* npm install
* npm run start

## Usabilidad
* post /account contentType json {startBalance, owner} crear cuenta
* get /account/{owner}  datos de la cuenta
* get /account/{owner}/moves movimientos de la cuenta
* put /account/{owner}/debit contentType json { value } depositar en cuenta
* put /account/{owner}/extract contentType json { value } ectraer de cuenta

