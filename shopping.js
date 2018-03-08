//THIS IS THE VIEW
function buildSections(store){
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

function updateTable(list){
	table = document.getElementById("lst")
	table.innerHTML=""
	for(item of list){
		//gathering items
		name = item.name
		qty = item.qty
		store = item.store
		section = item.section
		priority = item.priority
		price = item.price
		found = item.found
		id = item.iD
		
		row = document.createElement('tr')
		
		inp = document.createElement('input')
		inp.setAttribute("type","checkbox")
		inp.setAttribute("onchange","removeUpdate("+id+")")
		
		
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
