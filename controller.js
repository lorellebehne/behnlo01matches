//THIS IS THE CONTROLLER
list = new ShoppingList()
count = 0
function addUpdate(){
	//GETTING THE INFORMATION FOR ITEM
	name = document.getElementById("item").value
	qty = document.getElementById("qty").value
	store = document.getElementById("stores").value
	section = document.getElementById("sections").value
	priority = document.getElementById("priority").value
	price = document.getElementById("price").value
	
	item = new Item(name, qty, store, section, priority, price, count)
	list.add(item)
	updateTable(list)
	count++
}
function removeUpdate(num){
	list.remove(num)
	updateTable(list)
}
function sectionUpdate(){
	buildSections()
}

