// script.js

document.addEventListener('DOMContentLoaded', function () {
  const prices = document.querySelectorAll('.price');

  prices.forEach(price => {
    const currency = price.dataset.currency;
    const amount = parseFloat(price.dataset.amount);
    const formattedPrice = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);

    price.textContent = ${currency}${formattedPrice};
  });
});
