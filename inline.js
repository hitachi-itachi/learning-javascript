const form = document.querySelector("#groceryForm");
const qtyValue = document.querySelector("#qty");
const prodValue = document.querySelector("#product");
const Mlist = document.querySelector("#list");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(qtyValue.value);
    const list = document.createElement('li');
    list.innerText = qtyValue.value + " " + prodValue.value;
    Mlist.append(list);
    qtyValue.value = "";
    prodValue.value = "";




})

