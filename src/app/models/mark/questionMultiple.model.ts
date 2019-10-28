import { OpcionesPreguntaMultiple } from './optionsQuestionMultiple.model';
export class PreguntaOpcionMultiple {

  constructor(
    public id: Int16Array,
    public enunciado: string,
    public esMultipleResp: boolean,
    public opciones: Array<OpcionesPreguntaMultiple>
  ) { }

}
