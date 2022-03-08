const productoCtrl = {};

// agregamos la logica para obtener la lista de productos
productoCtrl.listarProductos = (req,res)=>{
    //toda la logica que quiero que suceda para obtener la lista
    res.send("hola desde el backend")
}

productoCtrl.crearProducto = (req, res)=>{
    console.log(req.body)
    res.send("voy a crear un producto")
}

export default productoCtrl