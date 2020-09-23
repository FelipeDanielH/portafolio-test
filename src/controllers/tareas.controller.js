import Tarea from '../models/Tarea'

export const createTarea = async (req, res) => {

    const {
        descripcion_tarea,
        nombre_tarea,
        tarea_padre,
        aceptacion_tarea,
        justificacion_tarea,
        responsable_tarea,
        fecha_inicio_tarea,
        fecha_fin_tarea,
        nombre_flojo,
        problema_tarea,
        tarea_predecesora
    } = req.body

    const newTarea = new Tarea({
        descripcion_tarea,
        nombre_tarea,
        tarea_padre,
        aceptacion_tarea,
        justificacion_tarea,
        responsable_tarea,
        fecha_inicio_tarea,
        fecha_fin_tarea,
        nombre_flojo,
        problema_tarea,
        tarea_predecesora
    });

    const tareaSaved = await newTarea.save()

    res.status(201).json(tareaSaved)
}


export const getTareas = async (req, res) => {
    const tareas = await Tarea.find();
    res.json(tareas)
}

export const getTareaById = (req, res) => {

}

export const updateTareaById = (req, res) => {

}

export const deleteTareaById = (req, res) => {

}