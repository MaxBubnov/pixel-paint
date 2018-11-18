window.onload = function () {
    let paint = document.querySelector(".paint-panel");
    let row = document.querySelector("#rows");
    // let colour;
    let button = document.querySelector("button");
    let choose = document.querySelector(".choose-colour");
    button.onclick = function () {
        row = parseInt(row.value);
        let rowQadrat = row * row;
        paint.style.gridTemplateRows = "repeat(" + row + ", 1fr)";
        paint.style.gridTemplateColumns = "repeat(" + row + ", 1fr)";
        if (row == null) {
            alert("введите все данные");
        }
        paint.innerHTML = "";
        for (let i = 0; i < rowQadrat; i++) {
            paint.innerHTML += '<div class="pixels"></div>';
        }
    }
    let pixels = document.querySelectorAll(".pixels");
    let down = false;
	paint.addEventListener("mousedown", function(e){
        if(e.target.className == "pixels"){
            down = true;
            e.target.style.background = choose.value;
        }
    })
	paint.addEventListener("mouseover", function (e) {
		if (down == true && e.target.className == "pixels"){
			e.target.style.background = choose.value;
        }
    })
	paint.addEventListener("mouseup", function(e){
        if (e.target.className == "pixels"){
            down = false;
        }
    })
}