console.log("el milton ama a la mely");


// electrodomestico: microondas, caracteristica:2000, precio:$100
var productos =[ 
    {electrodomestico: "microondas", caracteristica: "2000", precio: 100},
    {electrodomestico: "tv", caracteristica: "Toshiba", precio: 1000},
    {electrodomestico: "lavadora", caracteristica: "samsung", precio: 400}
];
var contenedor = document.getElementById("contenedor");
var linea = "";
for (var i = 0; i < productos.length; i++) {
    linea += `electrodomestico: ${productos[i].electrodomestico}, 
             caracteristica: ${productos[i].caracteristica}<br/>`;
    contenedor.innerHTML = linea;
}

// <div class="product-container"><img src=""></div>

//var div1 = document.createElement("div");
//div1.addClass("product-container");
//div1.classList.add("product-container");
//document.getElementById("contenedor").appendChild(div1);

var div1 = document.getElementById("p1");
var div2 = document.getElementById("p2");
var div3 = document.getElementById("p3");
var div4 = document.getElementById("p4");

var myDivs = [div1, div2, div3, div4];
var address = ""
var imagenes = ["a.jpeg", "b.jpeg", "c.jpeg", "d.jpeg"];
for (var i = 0; i < productos.length; i++) {
    //var current = `<img src="${imagenes[i]}>`;
    myDivs[i].innerHTML = "<img src="+imagenes[i]+">";
    //myDivs[i].appendChild(current);

}