//self created get function for taking value from DOM of input
function get(id) {
    return document.getElementById(id).value
}

var ArrImagesShop=[
    "https://image.shutterstock.com/image-photo/sorry-were-closed-message-board-260nw-1680587521.jpg",
" https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-small:1-4-product-tile-desktop",
"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop",
"https://s7d1.scene7.com/is/image/mcdonalds/t-blueberry-muffin-bakery-mcd:1-4-product-tile-desktop",
"https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Iced-Tea-Large-unsweetened:1-4-product-tile-desktop"
];
var ImageContainer = document.querySelector("#showImage");
var menuImg = document.createElement("img")
menuImg.style = "width:300px; height:200px; margin-top:100px"
// fries burdger  butterflyMuffin icedTea
async function orderFood() {
    // var ImageContainer = document.querySelector("#showImage");
    // var menuImg = document.createElement("img");
    // ImageContainer.append("");
    
    let food = get("MenuSelector")
    let status = "open";




    let foodPromise = new Promise(function (resolve, reject) {
        let time = Math.random() * 500;
        if (status === "close") {
            reject("shop is Closed")
            menuImg.src = ArrImagesShop[0]
              ImageContainer.append(menuImg)
             
            
        }
        setTimeout(function () {

            if (status === "open") {
                resolve(food)

switch(food)
{
    case "Fries":   menuImg.src = ArrImagesShop[1];
                    ImageContainer.append(menuImg);
                    break;
    case "Burger": 
                     menuImg.src = ArrImagesShop[2];
                     ImageContainer.append(menuImg);
                     break;
     case "butterflyMuffin": 
                     menuImg.src = ArrImagesShop[3];
                     ImageContainer.append(menuImg);
                     break;
     case "IcedTea": 
                     menuImg.src = ArrImagesShop[4];
                     ImageContainer.append(menuImg);
                     break;


}
            }
}, time)

    });
    foodPromise.then(function (res) {
        console.log(`${res}is ready`);
        

    });
    foodPromise.catch(function (error) {
        console.log(`${error}`);
    });
    
    
    // try{
    //     let res =await "foodPromise";
    //   console.log("res:",res)
    // }
    // catch{
    //     console.log("error:",error)
    // }
   
}
 













