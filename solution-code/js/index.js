



function deleteItem(e){

  e.target.parentNode.parentNode.remove() 
}


function getTotalPrice(){
  var items = document.getElementsByClassName('item')
  window.items = items
  for(item of items){
    window.item = item
    //getPriceByProduct(item)
    let price = item.getElementsByClassName('item-price')[0].innerText
    price = Number(price.replace('$','').replace('.00',''));
    let value = Number(item.getElementsByClassName('quantity')[0].value)
    let total = value*price; 
    item.getElementsByClassName('item-subtotal')[0].innerText = '$' + total + '.00'
    console.log(total)
  }
}


function createNewItem(){
  let newItem = document.getElementById('new-item-name').value
  let newPrice = document.getElementById('new-item-unit-price').value
  console.log(newItem, newPrice)
  let html = `<div class="item row">
              <div class="item-name col-xs-2">
                <span>${newItem}</span>
              </div>
                <div class="item-price col-xs-2"><span>$${newPrice}.00</span></div>
              <div class="item-qty col-xs-3">
                <label>QTY</label>
                <input class="quantity" value="0">
              </div>
              <div class="item-subtotal col-xs-2">
                <span>$0.00</span>
              </div>
              <div class="item-delete col-xs-3">
                <button class="btn btn-delete">Delete</button>
              </div>
            </div>`

  document.getElementById('items-list').innerHTML += html

  var deleteButtons = document.getElementsByClassName('btn-delete');

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
}








// function deleteItem(e){
//   var selectedRow = e.currentTarget.parentNode.parentNode;
//   var itemList = selectedRow.parentNode;
//   itemList.removeChild(selectedRow);
// }

// function getPriceByProduct(itemNode){
//   var itemInfo = itemNode.getElementsByTagName('div');
//   var itemUnityPrice = itemInfo[1].getElementsByTagName('span')[0];
//   var unityPrice = itemUnityPrice.innerHTML.substr(1);
//   var itemQuantity = itemInfo[2].getElementsByClassName('quantity')[0].value;
//   //console.log(itemQuantity)
//   return parseInt(unityPrice) * parseInt(itemQuantity);
// }

// function updatePriceByProduct(productPrice, index){
//   var actualPrice = document.getElementsByClassName('item-subtotal')[index];
//   actualPrice.innerHTML = "$" + productPrice;
// }

// function getTotalPrice() {
//   var totalPrice = 0;
//   var items = document.getElementsByClassName('item');

//   for(var i = 0; i < items.length ; i++){
//     var priceByProduct = getPriceByProduct(items[i]);
//     updatePriceByProduct(priceByProduct, i);
//     totalPrice += priceByProduct;
//   }

//   var actualTotalPrice = document.getElementById('total-price');
//   actualTotalPrice.innerHTML = "$" + totalPrice;
// }

// function createQuantityInput(){
//   var inputNode = document.createElement('input');
//   inputNode.className = "quantity";
//   inputNode.value = 0;

//   return inputNode;
// }

// function createDeleteButton(){
//   var div = document.createElement('div');
//   div.className = "item-delete col-xs-3";
//   var buttonNode = document.createElement('button');

//   buttonNode.className = "btn btn-delete";
//   buttonNode.innerHTML = "Delete";
//   buttonNode.onclick = deleteItem;
//   div.appendChild(buttonNode);

//   return div;
// }

// function createQuantityNode(){
//   var element = document.createElement('div');
//   element.className = "item-qty col-xs-3";

//   var label = document.createElement('label');
//   label.innerHTML = "QTY";
//   var input = createQuantityInput();

//   element.appendChild(label);
//   element.appendChild(input);

//   return element;
// }

// function createItemNode(dataType, itemData){
//   itemData = itemData || "$0.00";
//   var element = document.createElement('div');
//   var span = document.createElement('span');
//   var textNode = document.createTextNode(itemData);
//   span.appendChild(textNode);
//   element.appendChild(span);
//   element.className = "item-" + dataType + " col-xs-2";

//   return element;
// }

// function createNewItemRow(itemName, itemUnitPrice){
//   var itemRow = document.createElement('div');
//   itemRow.className = "item row";

//   var nameNode = createItemNode("name", itemName);
//   var unitPriceNode = createItemNode("price", itemUnitPrice);
//   var quantityNode = createQuantityNode();
//   var productPrice = createItemNode("subtotal");
//   var button = createDeleteButton();

//   itemRow.appendChild(nameNode);
//   itemRow.appendChild(unitPriceNode);
//   itemRow.appendChild(quantityNode);
//   itemRow.appendChild(productPrice);
//   itemRow.appendChild(button);

//   return itemRow;
// }

// function createNewItem(){
//   var itemsList = document.getElementById('items-list');
//   var itemRowsLength = itemsList.getElementsByClassName('item').length;
//   var lastItemRow = itemsList.getElementsByClassName('item')[itemRowsLength-1];

//   var itemName = document.getElementById('new-item-name').value;
//   var itemUnitPrice = document.getElementById('new-item-unit-price').value;
//   var itemRow = createNewItemRow(itemName, itemUnitPrice);

//   itemsList.insertBefore(itemRow, lastItemRow);
// }

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
