//THIS IS THE CONTROLLER

//neet to initialize a view and db along with model
list = new ShoppingList()
count = 0
function addUpdate(){
	//GETTING THE INFORMATION FOR ITEM
	name = document.getElementById("itemname").value
	qty = document.getElementById("qty").value
	store = document.getElementById("store").value
	section = document.getElementById("category").value
	priority = document.getElementById("priority").value
	price = document.getElementById("price").value
	
	item = new Item(name, qty, store, section, priority, price, count)
	list.add(item)
	updateTable(list)
	count++
	save()
}

function removeUpdate(num){
	list.remove(num)
	updateTable(list)
	save()
}
function save(){
	fetch("http://localhost:5001/saveList?lst="+JSON.stringify(list))
}
function sectionUpdate(){
	buildSections()
}
function sortByHead(){
	//blah blah cod that wors and does things
	
}
//setup for the save thing
//JSON.stringify(x) - creates string from object
//JSON.parse(x) - creats generic object from string
//localStorage.setItem("some name here", object to set)
//localStorage.getItem("the same name here")
//localStorage.length ===0 then ignore the stuff
window.onload = function () {
    if (localStorage.length>0){
		fetch("http://localhost:5001/getList?")
		.then(function(response){
			console.log(response)
			arr=JSON.parse(response)
			for (let itm of arr){
				console.log(itm)
				console.log(itm.name)
				item = new Item(itm.name, itm.qty, itm.store, itm.section, itm.priority, itm.price, count)
				count += 1
				list.add(item)
			}
			updateTable(list)
		})
	}
}

function load() {
	let config = {}
	let lst = document.getElementById("num1").value
}

class LocalStorageSaver {
	constructor(model, lsname){
		this.lsname = lsname;
		let self = this
		model.subscribe(function(slist, msg){self.saveAll(slist)})
		let restore_list = JSON.parse(localStorage.getItem(lsname))
		for(let vals of restore_list){
			let it = new Item(vals.name,vals.quantity)
		}
		
	}
}