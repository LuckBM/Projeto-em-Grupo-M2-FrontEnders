// JS extraído do Bootstrap
document.getElementById("toastbtn").onclick = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

/*    
function DigiteseuEmail(){
    while(true){
        email = prompt ("Digite seu E-mail: ");
        if ((email.includes("@")) && (email.includes(".com"))) {
            alert("Email válidado com sucesso");
            break;}
            else{ 
                alert("Email inválido, DIGITE NOVAMENTE");
            }
    }
    }
    </script>
 */