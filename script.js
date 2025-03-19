const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const table = document.getElementsByTagName("table")[0];

let newRow = table.insertRow(-1);
let newCell1 = newRow.insertCell(0);
let newCell2 = newRow.insertCell(1);


let totalPrice = 0;
const getSum = () => {
//Add your code here
  const prices = document.getElementsByClassName("price");
	for(let i=0; i<prices.length; i++){
		let price = parseInt(prices[i].innerText);
		totalPrice += price;
	};
	newCell1.innerText = "Total Price";
	newCell2.innerText = totalPrice;
};

getSumBtn.addEventListener("click", getSum);

