class Mkulima{
    constructor(farms,products,orders,vendors) {
        this.farms = [];
        this.products = [];
        this.orders = [];
        this.vendors = [];
      }
addFarm(farmId, name, farmer, phone, address){
    var myFarm = {
        name:name, 
        farmId:farmId, 
        farmer:farmer, 
        phone:phone, 
        address:address,
    }
    this.farms.push(myFarm);
    return this.farms;
} 
removeFarm(farmId) {
    var myFarm = this.farms.find(myFarm => myFarm.farmId = farmId);
    delete this.farms[myFarm]
    return this.farms
}
updateFarm(farmId, name, farmer, phone, address){
    let newFarm =this.farms.find(newFarm => name == 5)
    newFarm={
        name:name, 
        farmId:farmId, 
        farmer:farmer, 
        phone:phone, 
        address:address,  
    }
    this.farms.push(newFarm)
    return this.farms;
}
getFarm(farmId){
    let shambaFarm = this.farms.find(shambaFarm => shambaFarm.farmId == farmId)
    return shambaFarm   
}
addProduct(productId, name, price){
    let product ={
        productId: productId,
        name: name,
        price: price,
    }
    this.products.push(product)
    return this.products
}
removeProduct(productId){
    var products1 = this.products.find(products1 => productId == productId)
    delete this.products[products1]
    return this.products;
}
updateProduct(productId, name, price){
    let NewProduct = this.products.find(NewProduct => NewProduct.name == "cabbages");
    NewProduct = {
        productId:productId,
        name:name,
        price:price,
    }
    return NewProduct
}
getProduct(productId){//returns a product object
    let products2 = this.products.find(products2 => products2.productId == productId);
        return this.products
    } 

printProducts(){
    for (let product of this.products){
        console.log(`${product.name},${product.price}`)
    }
} 
calculateOrderCost(productId, quantity) {
    let orderCost = this.products.find(orderCost => orderCost.productId === productId)
    return orderCost.price * quantity;
}
}
let mkulima = new Mkulima();
console.log(mkulima.addFarm(1,"James","Mbugua","0789564","Kitengela"));
console.log(mkulima.addFarm(2,"Dorcas","Wangari","0765478","Eldoret"));
console.log(mkulima.addFarm(3,"Tabby","Omondi","0781325","Taita"));
console.log(mkulima.removeFarm(1));
console.log(mkulima.updateFarm(5,"Dorcas","Wangari","0765478","Samburu"));
console.log(mkulima.getFarm(3));
console.log(mkulima.addProduct("z45", "Watermelon ", 1200));
console.log(mkulima.addProduct("z55", "Kales ", 5100));
console.log(mkulima.addProduct("z65", "Zucchini ", 3400));
console.log(mkulima.updateProduct("z76 ", "Peppers ", 4500));
console.log(mkulima.removeProduct("z55"));
console.log(mkulima.getProduct("z65 "));
mkulima.printProducts();
console.log(mkulima.calculateOrderCost("z45", 31));
