
// Obteniendo el dato de la clave itemList que esta en LocalStorage
var items = localStorage.getItem('itemList') 
// Convertir el dato en un array           
items = items ? items.split(',') : []
showItem()

function addItem() {
    let item = document.getElementById('nameItem').value
    if(item){
        items.push(item)
        showItem()
    }
}

function showItem() {
    document.getElementById('nameItem').value = ''

    let html = ""
    for (let i = 0; i < items.length ; i++) {
           html += "<div class='col-6 m-2'>" + items[i] + "</div>" 
           html += "<div class='col-2 m-2'> <input type='button' class='btn btn-danger' onclick='deleteItem("+ i +")' value='X'> </div>" 

           //html += `<div class="col-6 m-2"> ${items[i]} </div>`
    }

    // Guardamos el dato de la clave itemList que esta en LocalStorage
    localStorage.setItem('itemList', items) 
    document.getElementById('ListItems').innerHTML = html
}



function deleteItem(item) {

    showItem()    
}