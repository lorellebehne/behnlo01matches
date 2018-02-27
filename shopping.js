function buildSections(){
	sections = ["produce", "dairy", "deli", "canned goods", "baking"]
	selectOps = document.getElementById("sections")
	selectOps.innerHTML=""
	for (let place of sections){
		op = document.createElement("option")
		op.setAttribute("value", place)
		op.innerHTML = place
		selectOps.appendChild(op)
	}
}
class Item{
	constructor(name,qty,store,section,priority,price){
		this.name=name
		this.qty=qty
		this.store=store
		this.section=section
		this.priority=priority
		this.price=price
		this.found=false
	}
}
shopping = []
function addEntry(){
	list = document.getElementById("lst")
		
	name = document.getElementById("item").value
	qty = document.getElementById("qty").value
	store = document.getElementById("stores").value
	section = document.getElementById("sections").value
	priority = document.getElementById("priority").value
	price = document.getElementById("price").value

	let itm = new Item(name,qty,store,section,priority,price)
	shopping.push(itm)
	outTable()
}
function outTable(){
	table = document.getElementById("lst")
	table.innerHTML=""
	for(item of shopping){
		//gathering items
		name = item.name
		qty = item.qty
		store = item.store
		section = item.section
		priority = item.priority
		price = item.price
		found = item.found
		
		row = document.createElement('tr')
		
		inp = document.createElement('input')
		inp.setAttribute("type","checkbox")
		
		
		col = document.createElement("td")
		col.appendChild(inp)
		row.appendChild(col)
		
		col = document.createElement("td")
		col.innerHTML = name
		row.appendChild(col)
		
		col = document.createElement("td")
		col.innerHTML = qty
		row.appendChild(col)
	
		col = document.createElement("td")
		col.innerHTML = store
		row.appendChild(col)
		
		col = document.createElement("td")
		col.innerHTML = section
		row.appendChild(col)
	
		col = document.createElement("td")
		col.innerHTML = price
		row.appendChild(col)
	
		table.appendChild(row)
	}
	
}