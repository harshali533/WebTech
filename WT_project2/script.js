let balance = 0;

const balanceEl = document.getElementById("balance");
const descEl = document.getElementById("desc");
const amountEl = document.getElementById("amount");
const typeEl = document.getElementById("type");
const listEl = document.getElementById("transactionList");
const addBtn = document.getElementById("addBtn");

// Event Listener
addBtn.addEventListener("click", addTransaction);

function addTransaction() {

    const desc = descEl.value;
    const amount = parseFloat(amountEl.value);
    const type = typeEl.value;

    if (desc === "" || isNaN(amount)) {
        alert("Please fill all fields!");
        return;
    }

    if (type === "income") {
        balance += amount;
    } else {
        balance -= amount;
    }

    balanceEl.textContent = balance;

    // Create new list item using DOM
    const li = document.createElement("li");
    li.classList.add(type);
    li.innerHTML = `
        ${desc} - ₹${amount}
        <span class="delete-btn">X</span>
    `;

    // Delete event
    li.querySelector(".delete-btn").addEventListener("click", function() {
        if (type === "income") {
            balance -= amount;
        } else {
            balance += amount;
        }
        balanceEl.textContent = balance;
        li.remove();
    });

    listEl.appendChild(li);

    // Clear inputs
    descEl.value = "";
    amountEl.value = "";
}