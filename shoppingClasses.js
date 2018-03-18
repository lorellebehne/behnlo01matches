//THIS IS THE MODEL
class Item{
	constructor(name, qty, store, section, priority, price, id){
		this.name = name
		this.qty = qty
		this.store = store
		this.section = section
		this.priority = priority
		this.price = price
		this.found = false
		this.iD = id
	}
	setPurchace(def = true){
		this.found = def
	}
}
class ShoppingList extends Array{
	constructor(){
		super()
	}
	add(item){
		super.push(item)
	}
	
	remove(num){
		for (item of this){
			if (item.iD===num){
				super.splice(super.indexOf(item),1)			
			}
		}
	}
	sortBy(trait){
		super.sort(function(){
			
		})
	}
}