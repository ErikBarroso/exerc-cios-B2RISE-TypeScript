import MetodoPagamento from "../entidades/metodo-pagamento";

export default class SistemaPagamento {
  constructor(readonly metodoPagamento: MetodoPagamento){}

  comprar(valor: number) {
    this.metodoPagamento.pagar(valor)
  }
}