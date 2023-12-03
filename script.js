
const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});
sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})
//geting live data from API 
/*
  document.addEventListener("DOMContentLoaded", () => {
    const cryptoList = document.getElementById('cryptoList');
  
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        data.forEach(coin => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <span>${coin.name}</span>: $${coin.current_price.toFixed(2)} (${coin.price_change_percentage_24h.toFixed(2)}%)
          `;
          cryptoList.appendChild(listItem);
        });
      })
      .catch(error => console.log(error));
  });
  */
 // Fetch data from CoinGecko API
 document.addEventListener('DOMContentLoaded', () => {
  const cryptoData = document.getElementById('cryptoData');

  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
          data.forEach(coin => {
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${coin.name}</td>
                  <td>${coin.current_price}</td>
                  <td>${coin.price_change_percentage_24h}</td>
                  <td>${coin.price_change_percentage_24h}</td>
              `;
              cryptoData.appendChild(row);
          });
      })
      .catch(error => console.log('Error fetching data:', error));
});
