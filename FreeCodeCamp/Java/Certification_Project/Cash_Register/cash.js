function checkCashRegister(price, cash, cid) {
    let cambio = cash - price;
    let dineroDisponible = 0;
    let cambioEnMonedas = cambio;
    let devuelta = [];
    let monedas = {
        "ONE HUNDRED": [100, 0],
        "TWENTY": [20, 0],
        "TEN": [10, 0],
        "FIVE": [5, 0],
        "ONE": [1, 0],
        "QUARTER": [0.25, 0],
        "DIME": [0.1, 0],
        "NICKEL": [0.05, 0],
        "PENNY": [0.01, 0]
    };

    // Calcular el dinero disponible
    for (let i = 0; i < cid.length; i++) {
        dineroDisponible += cid[i][1];
    }
    dineroDisponible = dineroDisponible.toFixed(2);

    // Verificar si hay suficiente dinero disponible
    if (cambio > dineroDisponible) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } 
    
    else if (cambio == dineroDisponible) {
        return { status: "CLOSED", change: cid };
    } 
    
    else {
        // Actualizar la cantidad de cada moneda disponible
        for (const nombreMoneda in monedas) {
            let cantidadMoneda = cid.find(item => item[0] === nombreMoneda);
            if (cantidadMoneda) {
                monedas[nombreMoneda][1] = cantidadMoneda[1];
            }
        }

        // Calcular el cambio en monedas
        for (const nombreMoneda in monedas) {
            while (cambioEnMonedas >= monedas[nombreMoneda][0] && monedas[nombreMoneda][1] > 0) {
                devuelta.push(monedas[nombreMoneda][0]);
                cambioEnMonedas -= monedas[nombreMoneda][0];
                monedas[nombreMoneda][1] -= monedas[nombreMoneda][0];
            }
        }
        console.log(monedas, devuelta);
        
        return { status: "OPEN", change: devuelta };
    }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
