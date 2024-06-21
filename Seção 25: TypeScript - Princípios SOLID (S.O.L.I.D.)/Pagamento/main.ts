// 3-Utilize os princípios de segregação de interfaces e inversão de dependência para criar um sistema de pagamento modular, onde diferentes métodos de pagamento (cartão, boleto, etc.) podem ser facilmente integrados e substituídos

import SistemaPagamento from "./service/sistema-pagamento";
import PagamentoBoleto from "./tiposPagamentos/pagamento-boleto";
import PagamentoCartao from "./tiposPagamentos/pagamento-cartao";

const pagamentoCartao = new PagamentoCartao()
const pagamentoBoleto = new PagamentoBoleto()

const sistema1 = new SistemaPagamento(pagamentoCartao)
const sistema2 = new SistemaPagamento(pagamentoBoleto)

sistema1.comprar(500)
sistema2.comprar(100)

