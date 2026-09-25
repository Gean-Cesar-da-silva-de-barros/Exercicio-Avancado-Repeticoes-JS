var inicio = document.getElementById("inicio");
var fim = document.getElementById("fim");
var passo = document.getElementById("passo");
var button = document.getElementById("button");
var res = document.getElementById("res");

function contar() {
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERROR] Faltam dados!");
    res.innerHTML = "";
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("[PASSO INVALIDO] Considerando passo1");
      p = 1;
    }

    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c > f; c -= p) {
        res.innerHTML += `${c}\u{1F449}`;
      }

      //contagem regressiva
    }

    res.innerHTML += `\u{1F3C1}`;
  }
}
