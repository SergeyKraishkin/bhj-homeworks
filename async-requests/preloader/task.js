const  xhr = new XMLHttpRequest();
xhr.open ('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.onreadystatechange = function () {
    //debugger;
    if(xhr.readyState === xhr.DONE) {
        document.getElementById('loader').classList.remove ('loader_active');
        let exchangeCurrencyHtml = document.querySelector('.item');
        exchangeCurrencyHtml.style.width = '150px';
       exchangeCurrencyHtml.style.flexWrap = 'wrap';
        let = exchangeCurrencyData = Object.entries (JSON.parse(xhr.responseText).response.Valute); 

        for (i=0; i< exchangeCurrencyData.length; i++) {
           // debugger;

            exchangeCurrencyHtml.insertAdjacentHTML('beforeEnd', `
                <div class="item__code">
                ${exchangeCurrencyData[i][0]}
                </div>
                <div class="item__value">
                ${exchangeCurrencyData[i][1].Value}
                </div>
                <div class="item__currency">
                руб.
                </div>
                
                `);
        };
    };
};