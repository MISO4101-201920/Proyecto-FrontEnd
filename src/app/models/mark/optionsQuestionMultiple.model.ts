export class OpcionesPreguntaMultiple {

  constructor(
    public id: Int16Array,
    public opcion: string,
    public esCorrecta: boolean,
    public preguntaSeleccionMultiple: Int16Array
  ) { }

}
