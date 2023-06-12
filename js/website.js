var shopCart    = document.getElementById('shop-cart');
var shopCartContent = document.getElementById('shop-cart-content');



/* shop cart */
document.getElementById('btn-shop-cart').onclick = ()=>{
    shopCart.classList.toggle('d-none');
 }



 function adicionaCarrinho(id, quantidade, tamanho){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
            resposta = xhr.responseText;
            shopCartContent.innerHTML += resposta;
        }
    }

    xhr.open('GET', 'ajax/adicionaCarrinho.php?produto='+id+'&quantidade='+quantidade+'&tamanho='+tamanho);
    xhr.send();
}

async function loginAviso() {
    let xhr = new XMLHttpRequest();
    let formData = new FormData();

    formData.append("loginEmail", document.getElementById("login-email").value);
    formData.append("loginPass", document.getElementById("login-pass").value);
    xhr.open("POST", "forms/login.php");
    xhr.onload = function () {
        if (xhr.status === 200) {
            resposta = xhr.responseText;
            if (resposta === "true") {
                const html =
                    '<div class="text-center rounded mb-2" style="background: darkgreen;color:white">\
                      <span class="fw-semibold fs-5">Login com sucesso!</span><br>\
                      </div>\
                  ';
                aviso.innerHTML = html;
                setTimeout(function () {
                    window.open("index.php", "_SELF");
                }, 500);
            } else {
                resposta = xhr.responseText;
                aviso.innerHTML = "";
                aviso.innerHTML = resposta;
            }
        }
    };

    xhr.send(formData);
}