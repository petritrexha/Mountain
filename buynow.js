document.addEventListener('DOMContentLoaded', function() {
    const buyNowButtons = document.querySelectorAll('.pr-button');
    buyNowButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        alert("We apologize, but the item is currently out of stock.");
      });
    });
  });
