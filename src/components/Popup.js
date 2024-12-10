import React from 'react';

function Popup(itemId) {
    const enteredPrice = prompt("Enter the price for item ID " + itemId + ":");
    if (enteredPrice) {
      alert("Payment of $" + enteredPrice + " for item ID " + itemId + " is successful!");
    } else {
      alert("Payment was cancelled.");
    }
  }
  
  export default Popup;
  
