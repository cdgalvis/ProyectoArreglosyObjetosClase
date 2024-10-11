
// Obteniendo el dato de la clave itemList que esta en LocalStorage
var items = localStorage.getItem('itemList') 
// Convertir el dato en un array           
items = items ? JSON.parse(items) : []
showItem()

function addItem() {
    let item = document.getElementById('nameItem').value
    let desc = document.getElementById('descItem').value
    let value = document.getElementById('valueItem').value

    if(item && desc && value){
        items.push({"nombreArticulo" : item,"descripArticulo": desc,"valorArticulo": value})

        localStorage.setItem('itemList',  JSON.stringify(items)) 
        showItem()
    }
}

function showItem() {
    document.getElementById('nameItem').value = ''
    document.getElementById('descItem').value = ''
    document.getElementById('valueItem').value = ''

    let html = ""
    for (let i = 0; i < items.length ; i++) {
           //html += "<div class='col-6 m-2'>" + items[i] + "</div>" 
           html += `<div class="col-3 m-2"> ${items[i].nombreArticulo} </div>`
           html += `<div class="col-3 m-2"> ${items[i].descripArticulo} </div>`
           html += `<div class="col-3 m-2"> ${items[i].valorArticulo} </div>`
           //html += "<div class='col-2 m-2'> <input type='button' class='btn btn-danger' onclick='deleteItem("+ i +")' value='X'> </div>" 
           html += `<div class='col-2 m-2'> <input type='button' class='btn btn-danger' onclick='deleteItem(${i})' value='X'> </div>`
    }

    /*items.forEach((i, index) => {
        html += `<div class="col-3 m-2"> ${i.nombreArticulo} </div>`
        html += `<div class="col-3 m-2"> ${i.descripArticulo} </div>`
        html += `<div class="col-3 m-2"> ${i.valorArticulo} </div>`
        //html += "<div class='col-2 m-2'> <input type='button' class='btn btn-danger' onclick='deleteItem("+ i +")' value='X'> </div>" 
        html += `<div class='col-2 m-2'> <input type='button' class='btn btn-danger' onclick='deleteItem(${index})' value='X'> </div>`
    });*/

    document.getElementById('ListItems').innerHTML = html
}


function deleteItem(item) {
    //items.splice(1, 0, 'Cocacola')
    //items.splice(3, 1, 'Cocacola')
    items.splice(item, 1)
    showItem()    
}