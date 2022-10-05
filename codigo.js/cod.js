// let tablets = ["Note 7", "iPad mini", "Asus 123"];
// let eletronicos = ["Tv", ...tablets, "Rádio"];
// console.log(eletronicos);
//----------------------------------------------------
// function download(){
//         // 1. Create a new XMLHttpRequest object
//     let xhr = new XMLHttpRequest();

//     // 2. Configure it: GET-request for the URL /article/.../load
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

//     // 3. Send the request over the network
//     xhr.send();

//     // 4. This will be called after the response is received
//     xhr.onload = function() {
//     if (xhr.status != 200) { // analyze HTTP status of the response
//         alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
//     } else { // show the result
//         alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
//     }
//     };

//     xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//         alert(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//         alert(`Received ${event.loaded} bytes`); // no Content-Length
//     }

//     };

//     xhr.onerror = function() {
//     alert("Request failed");
//     };
// }

//-----------------------------------------------------
// function pegaDados(dados){
    //     for(let i = 0; i < dados.length; i++){
        //         //usar o createElementById
//         console.log(dados[i].id);
//         console.log(dados[i].name);
//         console.log(dados[i].email);
//         console.log(dados[i].address.street);
//     }

// }
//-------------------------------------------------

var usuarios;

function pegaDados(dados){  
    console.log(dados);
    //iterar sobre o array
    dados.forEach((obj) =>{
        //usar o createElementById
        let id, nome, email, endereco;
        id = document.getElementById(obj.id);
        nome = document.getElementById(obj.name);
        email = document.getElementById(obj.email);
        endereco = document.getElementById(obj.address.street);

        const tbody = document.querySelector("tbody");
        const tr = document.createElement("tr");
        const idC = document.createElement("td");
        const nomeC = document.createElement("td");
        const emailC = document.createElement("td");
        const enderecoC = document.createElement("td");

        idC.innerText = obj.id;
        nomeC.innerText = obj.name;
        emailC.innerText = obj.email;
        enderecoC.innerText = obj.address.street;

        tr.appendChild(idC);
        tr.appendChild(nomeC);
        tr.appendChild(emailC);
        tr.appendChild(enderecoC);

        tbody.appendChild(tr);

    });

}

function getUsuariosByFetch() {
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) =>pegaDados(json))
    .catch((error) => console.log("erro na requisição!" + error));

}

//function apagaLinha(){

//}

//criar o botão de saida em cada célula....