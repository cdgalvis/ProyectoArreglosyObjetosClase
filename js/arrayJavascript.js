var items = localStorage.getItem('itemList')            
items = items ? items.split(',') : []

console.log('Inicio: ')
console.log(items)

function addItem() {
    let item = document.getElementById('nameItem').value
    if(item){
        items.push(item)
    }

    console.log(items)

    localStorage.setItem('itemList', items)  
}