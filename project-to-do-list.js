var i=0
function newitem() {
    i++;
    var str="input".concat(String(i));
    let item_div=document.getElementById('item-div');

    // for input ( checkbox )
    var new_item = document.createElement('input');
    new_item.setAttribute('type',"checkbox");
    new_item.setAttribute('id',str);
    item_div.appendChild(new_item);

    // for label ( text )
    var new_item_label = document.createElement('label');
    new_item_label.setAttribute('for',str);
    item_div.appendChild(new_item_label);
    new_item_label.innerHTML= "checkbox";


    // for line break
    var new_br = document.createElement('br');
    item_div.appendChild(new_br);
}