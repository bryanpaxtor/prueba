var historial = [];
var _this = this;

let addProduct = function (id) {
    console.log(`agregando al producto ${productos[id].descripcion}`);
    localStorage.setItem(productos[id].descripcion, JSON.stringify(productos[id].descripcion));
};

let removeProduct = function(id) {
    console.log("borrando del carrito");
    for (var i = 0; i < productos.length; i++) 
        if (productos[i].id == id)
            localStorage.removeItem(productos[i].descripcion);
};

let confirmarCompra = function() {

    if (localStorage.length) {
        alert("Gracias por comprar con nosotros...");
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            //console.log(`k:${key}, v:${value}`);
            //historial.push(localStorage.getItem(value));
            _this.historial[i] = value;
        }
        console.log("h=>" + historial);
        localStorage.clear();
        localStorage.setItem("historial", JSON.stringify(historial));
    } else {
        alert("Aun no has comprado nada...");
    }

};

    var productos = [
        {id:0, descripcion: "c programming", img: "book1.jpg"},
        {id:1, descripcion: "python 3", img: "book2.jpg"},
        {id:2, descripcion: "c# ", img: "book3.jpg"},
        {id:3, descripcion: "Node JS", img: "book4.jpg"}
    ];
    var numProducts = productos.length;
    var title = document.getElementsByTagName("title")[0].innerHTML;




    if (title == "productos") {
        console.log("usted esta en productos...");
        for (var i = 0; i < numProducts; i++) {
            $('#contenedor').append(`
            <div class="product-container">
                <div class="img-container">
                    <p><img class="img" src='images/${productos[i].img}'></p>
                </div>
                <div class="img-info">
                    <p><strong>Descripcion: ${productos[i].descripcion}</strong></p>
                    <p><a class="a_products" onclick="addProduct(${productos[i].id});"id="product_click">Agregar al carrito</a></p>
                </div>
            </div>`);
        }
    } else if(title == "historial") { /////////////////// HISTORIAL ----------------------------------
        //localStorage.clear();
        console.log("Usted esta en historial...");

        //let historial_productos = localStorage.getItem("historial").split(',');
        let h = JSON.parse(localStorage.getItem("historial"));


        /*j
        for (var i = 0; i < h.length; i++) {
            console.log(`producto: ${h[i]}`);
        }*/

        //localStorage.clear();
        //console.log("typet of historial: " + typeof(historial));
        for (var i = 0; i < productos.length; i++) {
            for (var j = i; j < h.length; j++) {
                if (productos[i].descripcion = h[j]) {
                    console.log(`log: '${productos[i].descripcion}', h[i]: ${h[j]}`);
                    $('#contenedor').append(`
                    <div class="product-container">
                        <div class="img-container">
                            <p><img class="img" src='images/${productos[i].img}'></p>

                        </div>
                        <div class="img-info">
                            <p><strong>Descripcion: ${productos[i].descripcion}</strong></p>
                        </div>
                    </div>`);
                }
            }
        }
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        /*
        console.log("length of productos: " + h.length);
        for (var i = 0; i < h.length; i++) {
                $('#contenedor').append(`
                <div class="product-container">
                    <div class="img-container">
                        <p><img class="img" src='images/${productos[i].img}'></p>

                    </div>
                    <div class="img-info">
                        <p><strong>Descripcion: ${productos[i].descripcion}</strong></p>
                    </div>
                </div>`);

        }
        */

        $('#confirmar').append(`
            <p>HISTORIAL DE COMPRAS</p>
        `);

    } else if(title == "carrito"){
        console.log("Usted esta en carrito...");

        for (var i = 0; i < productos.length; i++) {
            //let c = JSON.parse(localStorage.getItem(productos[i].descripcion));
            if (JSON.parse(localStorage.getItem(productos[i].descripcion))) {
                //let c = JSON.parse(localStorage.getItem(productos[i].descripcion));
                //console.log("_>" + c);
                $('#contenedor').append(`
                <div class="product-container">
                    <div class="img-container">
                        <p><img class="img" src='images/${productos[i].img}'></p>

                    </div>
                    <div class="img-info">
                        <p><strong>Descripcion: ${productos[i].descripcion}</strong></p>
                        <p><a class="a_products" onclick="removeProduct(${productos[i].id});"id="product_click">Borrar del Carrito</a></p>
                    </div>
                </div>`);
            }
        }
        $('#confirmar').append(`
            <p><a class="" onclick="confirmarCompra();"> Confirmar compras</a> || <a class="" onclick="">Borrar Compras</a></p>
        `);

    } else if (title == "principal"){
        console.log("Usted esta en index.html");
    }
       

//});