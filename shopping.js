var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens']
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing']

function clickedon() {
    addUpdate()
}


function buildRow(itm, parent){
	let row = document.createElement("tr")
	row.classList.add(itm.priority)
	let cb = document.createElement("input")
    cb.type = "checkbox"
    cb.classList.add("form-control")
    cb.setAttribute("onclick","removeUpdate("+itm.iD+")")
	row.appendChild(cb)
	
	name = itm.name
	qty = itm.qty
	store = itm.store
	section = itm.section
	price = itm.price
	if (itm.found===false){
		for (let val of [name, qty, store, section, price]){
			let td = document.createElement("td")
			td.innerHTML = val
			row.appendChild(td)
		}
		parent.appendChild(row)
	}
}
function updateTable(lst){
	document.getElementById("shoppinglist").innerHTML = ""
	for (let itm of lst){
		buildRow(itm, document.getElementById("shoppinglist"))
	}	
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})