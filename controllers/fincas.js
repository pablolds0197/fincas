
const { response } = require("express");

const Finca = require("../models/fincas");

const fincaGet = async (req, res = response) => {
  const fincas = await Finca.find();

  res.json({
    fincas,
  });
};
const findFincasByCantidadDias = async (req, res) => {
  try {
    const { cantidadDias } = req.query;

    if (!cantidadDias) {
      return res.status(400).json({ message: 'Se requiere la cantidad de días para filtrar.' });
    }

    const fincas = await Fincas.find({ cantidadDias: cantidadDias });
    res.json({ fincas });
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al procesar la solicitud.' });
  }
};

const fincaPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Finca creado.";

  try {
    const finca = new Finca(body);
    await finca.save();
  } catch (error) {
    mensaje = "Problemas al crear una Finca.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const fincaPut = async (req, res) => {
  const { _id, numero, nombrefinca, direccion, valoralquiler, cantidadDias } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await Finca.findOneAndUpdate({ _id: _id }, { numero: numero, nombrefinca: nombrefinca, direccion: direccion,valoralquiler:valoralquiler, cantidadDias: cantidadDias });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const fincaDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await Finca.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { fincaGet, fincaPost, fincaPut, fincaDelete, findFincasByCantidadDias };


