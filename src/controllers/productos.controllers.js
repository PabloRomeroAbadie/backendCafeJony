import Producto from "../models/producto";
const productoCtrl = {};

// agregamos la logica para obtener la lista de productos
productoCtrl.listarProductos = async (req,res)=>{
    //toda la logica que quiero que suceda para obtener la lista
    try{
        //crear un arreglo de productos y enviarlo
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos)
    }catch(error){
        console.log(error)
        //enviar codigo de error 
        res.status(404).json({
            mensaje: "Error al intentar listar los productos"
        })
    }
}

productoCtrl.crearProducto = async (req, res)=>{
    try{
        console.log(req.body)
        //validaciones de propiedades del objeto que me llega
        //crear el producto en la base de datos
        const productoNuevo = new Producto({
            productName: req.body.productName,
            price: req.body.price,
            urlImg: req.body.urlImg,
            category: req.body.category
        })
        //guardar el objeto nuevo en la BD
        await productoNuevo.save();
        //enviar respuesta
        res.status(201).json({
            mensaje: "Producto correctamente creado"
        })
    }catch(error){
        console.log(error)
        //enviar codigo de error 
        res.status(404).json({
            mensaje: "Error al intentar agregar un producto"
        })
    }
}

export default productoCtrl


