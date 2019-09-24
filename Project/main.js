const apiUrl = "http://api.nbp.pl/api/exchangerates/tables/A/?format=json";

fetch(apiUrl)
    .then(resp => resp.json())
    .then(resp => {
        let rates = resp[0];
        console.log(rates);
        let rate = rates.rates;
        console.log(rate);
        for (let i = 0; i < rate.length; i++) {
            let row = document.createElement("tr");
            document.querySelector("tbody").appendChild(row);
            console.log(rate[i]);

            let col1 = document.createElement("td");
            col1.innerText = rate[i].currency;
            row.appendChild(col1);

            let col2 = document.createElement("td");
            col2.innerText = rate[i].code;
            row.appendChild(col2);

            let col3 = document.createElement("td");
            col3.innerText = rate[i].mid;
            row.appendChild(col3);

        }
    });


