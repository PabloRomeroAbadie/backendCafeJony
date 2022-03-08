// la mision de este archivo es mantener las rutas o peticiones
import { Router } from "express";
import productoCtrl from "../controllers/productos.controllers";
// instancio al Router
const router = Router();

// crear la ruta
router.route("/products").get(productoCtrl.listarProductos).post(productoCtrl.crearProducto);

export default router; 
