import MetodoPagamento from "../entidades/metodo-pagamento";

export default class PagamentoCartao implements MetodoPagamento {
  pagar(valor: number): void {
      console.log(`Pagamento de: ${valor} efetuado no cartão.`);
  }
}