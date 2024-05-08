function checkCashRegister(price, cash, cid) {
    let cambio = cash - price;
    let efectivo = [];
    let CambioBruto = [];
    let dineroDado = [];
    let cambioDado = cambio;
    let totalEfectivo = 0;
    let valorDeLasMonedas = [100.0, 20.0, 10.0, 5.0, 1.0, 0.25, 0.1, 0.05, 0.01];
    const sumaPorValor = {};

    for (let i = 0; i < cid.length; i++) {
        efectivo.unshift(cid[i][1]);
        totalEfectivo += cid[i][1];
    }

    for (let i = 0; i < efectivo.length; i++) {
        while (cambioDado >= valorDeLasMonedas[i]) {
            if (valorDeLasMonedas[i] <= cambioDado) {
                CambioBruto.push(valorDeLasMonedas[i]);
                cambioDado -= valorDeLasMonedas[i];
            } else {
                break; 
            }
        }
    }

    CambioBruto.forEach(valor => {
        sumaPorValor[valor] = (sumaPorValor[valor] || 0) + valor;
    });
    dineroDado = Object.values(sumaPorValor).sort((a, b) => b - a);

    

    console.log(efectivo, dineroDado);
    
}
 

  
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

