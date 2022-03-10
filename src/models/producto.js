// modelamos el dato a guardar en la base de datos
import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema ({
    productName:{
        type: String,
        maxlength: 200,
        unique: true,
        required: true
    },
    price:{
        type: Number, 
        required:true
    },
    urlImg:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const Producto = mongoose.model("producto", productoSchema);

export default Producto; 

