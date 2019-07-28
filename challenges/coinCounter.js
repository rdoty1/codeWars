var num = 25
coins(num)

function coins(num) {


    coins = [1, 5, 7, 9, 11];

    for (var i = 0; i < coins.length; i++) {


        if (num % coins[i] === 0) {
            console.log(coins[i])
        }



    }




}