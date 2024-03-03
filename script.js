window.addEventListener("load", (event) => {
    fetch('https://api.hypixel.net/v2/skyblock/bazaar')
    .then(response => response.json()) 
    .then(data => {
        console.log(data['products']['STOCK_OF_STONKS']);
        let buy = data['products']['STOCK_OF_STONKS']['buy_summary'];
        let sell = data['products']['STOCK_OF_STONKS']['sell_summary'];
        document.getElementById('buy').innerText = "Buy Price: " + Intl.NumberFormat().format(data['products']['STOCK_OF_STONKS']['quick_status']['buyPrice']);
        document.getElementById('sell').innerText = "Sell Price: " + Intl.NumberFormat().format(data['products']['STOCK_OF_STONKS']['quick_status']['sellPrice']);
        const sellOrders = document.getElementById('sellOrders');
        const buyOrders = document.getElementById('buyOrders');
        for (let i = 0; i < sell.length; i++) {
            const order = document.createElement('div');
            order.className = "order";
            const amt = document.createElement('p');
            const price = document.createElement('h1');
            const orders = document.createElement('p');
            price.style.color = "red";
            price.innerText = Intl.NumberFormat().format(sell[i]['pricePerUnit']);
            amt.innerText = `Amount: ${sell[i]['amount']}`;
            orders.innerText = `Orders: ${sell[i]['orders']}`;
            order.appendChild(price);
            order.appendChild(amt);
            order.appendChild(orders);
            sellOrders.appendChild(order);
        }
        for (let i = 0; i < buy.length; i++) {
            const order = document.createElement('div');
            order.className = "order";
            const amt = document.createElement('p');
            const price = document.createElement('h1');
            const orders = document.createElement('p');
            price.style.color = "green";
            price.innerText = Intl.NumberFormat().format(buy[i]['pricePerUnit']);
            amt.innerText = `Amount: ${buy[i]['amount']}`;
            orders.innerText = `Orders: ${buy[i]['orders']}`;
            order.appendChild(price);
            order.appendChild(amt);
            order.appendChild(orders);
            buyOrders.appendChild(order);
        }
    });
});