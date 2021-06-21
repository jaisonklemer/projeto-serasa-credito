class GetParcelamento {
  calcular(id) {
    let rangeValueEl = document.getElementById(`rangeSelect-${id}`);
    let qtdParcelasEl = document.getElementById(`qtdParcelas-${id}`);

    let valor = rangeValueEl.valueAsNumber;
    let qtdParcelas = qtdParcelasEl.valueAsNumber || 1;
    let taxa = document.getElementById(`taxa-${id}`).valueAsNumber;
    taxa = taxa / 100;
    let total = valor + valor * (taxa / 100) * qtdParcelas;

    total = taxa / (1 - 1 / Math.pow(1 + taxa, qtdParcelas));

    let valorParcela = total * valor;

    document.getElementById(`valorParcela-${id}`).value = valorParcela;

    document.getElementById(
      `resultado-${id}`
    ).innerHTML = `${qtdParcelas}x R$ ${valorParcela
      .toFixed(2)
      .replace(".", ",")}`;
  }
}
