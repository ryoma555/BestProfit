import moment from "moment"

export const getBestCombination = quotes => {
    if (quotes.length < 2) {
        return null;
    }
    let buyIndex = 0;
    let sellIndex = 1;
    let profit = -1;
    let bestCombinationIndex = [-1, -1];
    for (let i = 0; i < quotes.length - 1; i++) {
        sellIndex = i + 1;
        const sellPrice = quotes[sellIndex].price;
        const buyPrice = quotes[buyIndex].price

        if (sellPrice < buyPrice) {
            buyIndex = sellIndex;
        } else {
            const tempProfit = sellPrice - buyPrice;
            if (tempProfit > profit) {
                profit = tempProfit;
                bestCombinationIndex = [buyIndex, sellIndex]
            }
        }
    }

    return profit > 0
        ? {
            buy: quotes[bestCombinationIndex[0]],
            sell: quotes[bestCombinationIndex[1]],
            profit
        } : null;
};

export const getDisplayTime = time => {
    return moment(time, 'HHmm').format('hh:mmA');
}

export const getDisplayDate = date => {
    return moment(date, 'YYYYMMDD').format('DD-MMM-YY')
}