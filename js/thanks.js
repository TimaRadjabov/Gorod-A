document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".main__title");

  let nameClient = localStorage.getItem("lpg3746_name");
  let cityClient = localStorage.getItem("lpg3746_city");
  document.title = nameClient + ", спасибо! Ваша заявка принята";
  
  if (nameClient) {
    title.innerHTML = `<span class="thanks-name">${nameClient}</span>, благодарим Вас за обращение
    в компанию <span>«Студия Город.А»</span>©`;
  }
  if (cityClient && nameClient) {
    title.innerHTML = `<span class="thanks-name">${nameClient}</span>, благодарим Вас<br />
    за&nbsp;заявку на&nbsp;город
    <span class="thanks-city">${cityClient}</span> на&nbsp;франшизу
    <span>&quot;Студия Город.А&quot;</span>&copy;`;
  }
});
