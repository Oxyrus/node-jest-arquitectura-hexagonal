import { ErrorDeNegocio } from './error-de-negocio';

export class ErrorValorRequerido extends ErrorDeNegocio {
  constructor(mensaje: string) {
    super(mensaje);
  }
}
