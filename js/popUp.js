let divArry = document.getElementById("arrayInput");
for(let i = 0; i < inventory.length; i ++) {
let div = document.createElement("div");
div.className = "listImg";
div.dataset.index = i;

let img =  document.createElement("img");
img.src = inventory[i][0];
div.appendChild(img);
divArry.appendChild(div);
div.onclick = expandImg;
}

function expandImg() {
    let body = document.querySelector('body');
    let dataIndex = this.getAttribute('data-index');
    let text = inventory[dataIndex][2];
    let div = document.createElement("div");
    div.className = "showDescription";

    let p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);

    let div2 = document.createElement("div");
    div2.className = "imgWrap";    

    let frontImg = inventory[dataIndex][0];
    let backImg = inventory[dataIndex][1];
    let imgLeft = document.createElement("img");
    imgLeft.src = frontImg;
    let imgRight = document.createElement("img");
    imgRight.src = backImg;
    div2.appendChild(imgLeft);
    div2.appendChild(imgRight);
    div.appendChild(div2);
    

    div.innerHTML +='<div id="close">X</div>';
    body.appendChild(div);
    
    let closeButton = document.querySelector('#close');
    closeButton.addEventListener('click', () => {
        removeImg();
    });
}


function removeImg() {
    let body = document.querySelector('body');
    let div = document.querySelector('.showDescription');
    body.removeChild(div);
    
}