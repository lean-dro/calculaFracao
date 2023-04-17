function calcular() {
  var numerador1 = Number(input_num1.value);
  var denominador1 = Number(input_den1.value);
  

  var numerador2 = Number(input_num2.value);
  var denominador2 = Number(input_den2.value);

  var operacao = select_operacao.value;
  var operacaoMulti = operacao == "mul";
  var operacaoDiv = operacao == "div";
  var operacaoAdi = operacao == "adi";

  var denominadorResult = document.getElementById("input_denR");
  var numeradorResult = document.getElementById("input_numR");

  var necessitaMMC = denominador1 != denominador2;
  var mmcCalc = calculaMMC(denominador1, denominador2);

  if (operacaoAdi) {
    if (necessitaMMC) {
      denominadorResult.value = mmcCalc;

      numeradorResult.value =
        (mmcCalc / denominador1) * numerador1 +
        (mmcCalc / denominador2) * numerador2;
        
    } else {
      numeradorResult.value = numerador1 + numerador2;
      denominadorResult.value = denominador1;
    }
  } else if (operacaoMulti) {
    numeradorResult.value = numerador1 * numerador2;
    denominadorResult.value = denominador1 * denominador2;
  } else if (operacaoDiv) {
    numeradorResult.value = numerador1 * denominador2;
    denominadorResult.value = denominador1 * numerador2;
  } else {
    if (necessitaMMC) {
        denominadorResult.value = mmcCalc;

        numeradorResult.value =
          (mmcCalc / denominador1) * numerador1 -
          (mmcCalc / denominador2) * numerador2;
          
    } else {
      numeradorResult.value = numerador1 - numerador2;
      denominadorResult.value = denominador1;
    }
  }
}

function calculaMMC(den1, den2) {
  var den1 = den1;
  var den2 = den2;
  var mmc;
  var maior;
  var testarMaior = den1 > den2;
  if (testarMaior) {
    maior = den1;
  } else {
    maior = den2;
  }
  for (var contador = 1; contador <= maior; contador++) {
    var testarMMC = contador % den1 == 0 && contador % den2 == 0;
    if (testarMMC) {
      mmc = contador;
      contador = maior;
    }
  }
  return mmc;
}
