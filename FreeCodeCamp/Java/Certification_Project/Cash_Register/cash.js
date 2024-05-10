const coin_value = {
    "ONE HUNDRED":100,
    "TWENTY":20.0,
    "TEN":10.0,
    "FIVE":5.0,
    "ONE":1.0,
    "QUARTER":0.25,
    "DIME":0.1,
    "NICKEL":0.05,
    "PENNY":0.01
    }
  function add(a, b, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round((a + b) * multiplier) / multiplier;
  }
  function rest(a, b, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round((a - b) * multiplier) / multiplier;
  }
  function checkCashRegister(price, cash, cid) {
    let change = rest(cash, price, 2);
    let result = {'status': "INSUFFICIENT_FUNDS", 'change':[]};
    let total_amount = 0;

    for (const coin_type of cid.reverse()){
      let [coin, total] = coin_type;
      total_amount = total_amount + total;
      let amount = Math.round(total/coin_value[coin]);
      // console.log(change/coin_value[coin], amount)

      if (change/coin_value[coin]>=1 && amount>0){
        let add_coin_type = [coin,0];
        // console.log(change/coin_value[coin], amount)

        while (change/coin_value[coin]>=1 && amount>0){
          // console.log(change, coin_value[coin], amount)
          add_coin_type[1] = add(add_coin_type[1], coin_value[coin], 2);
          change = rest(change, coin_value[coin], 2);
          amount=amount-1;
        }
        result['change'].push(add_coin_type);
      }
      console.log(total_amount, rest(cash, price, 2));
      if (change == 0){
        result['status'] = "OPEN";
        if (total_amount == cash - price){
          result['status'] = "CLOSED";
          result['change'] = cid.reverse();
        }
        return result
      }
    }
    result['change']=[]
    return result
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
