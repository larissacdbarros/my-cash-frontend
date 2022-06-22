export class Fatura {
  faturaId: Number;
  cartaoCreditoId: Number;
  //CartaoCredito: CartaoCredito
  dataFechamentoFatura: Date;
  dataVencimentoFatura: Date;
  mes: string;
  valorFatura: Number
  isFaturaVencida: boolean;
  isFaturaPaga: boolean;
  //despesas: Despesas;
}
