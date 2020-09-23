import {Schema, model} from 'mongoose'

const TareaSchema = new Schema({
   
    descripcion_tarea: {
        type: String,
        required: true
    },
    nombre_tarea: {
        type: String,
        required: true
    },
    tarea_padre: {
        type: String
    },
    aceptacion_tarea: {
        type: String
    },
    justificacion_tarea: {
        type: String
    },
    responsable_tarea: {
        type: String
    },
    fecha_inicio_tarea: {
        type: String
    },
    fecha_fin_tarea: {
        type: String
    },
    nombre_flojo: {
        type: String
    },
    problema_tarea: {
        type: String
    },
    tarea_predecesora: {
        type: String
    }
})

export default model('Tarea', TareaSchema)