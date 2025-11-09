// =======================================================
// Linked List Node
// =======================================================
function Node(id, name, qty, price) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.price = price;
    this.next = null;
}

let head = null;


// =======================================================
// Preloaded Items (30 items)
// =======================================================
function insertPreloaded(id, name, qty, price) {
    let newNode = new Node(id, name, qty, price);
    newNode.next = head;
    head = newNode;
}

// 30 items
insertPreloaded(105, "Keyboard", 12, 899);
insertPreloaded(212, "SSD 256GB", 7, 2499);
insertPreloaded(87, "USB Cable", 25, 199);
insertPreloaded(450, "Laptop Stand", 9, 1299);
insertPreloaded(333, "Bluetooth Mouse", 18, 699);
insertPreloaded(178, "Webcam 1080p", 11, 1599);
insertPreloaded(512, "Pendrive 64GB", 30, 549);
insertPreloaded(35, "Headphones", 14, 1099);
insertPreloaded(619, "Gaming Keyboard", 16, 2999);
insertPreloaded(742, "HDMI Cable", 22, 249);
insertPreloaded(381, "LED Desk Lamp", 10, 999);
insertPreloaded(894, "Portable Speaker", 19, 1799);
insertPreloaded(556, "Smartwatch Band", 28, 149);
insertPreloaded(928, "Laptop Charger 65W", 8, 1899);
insertPreloaded(40, "Hard Drive 1TB", 5, 3299);
insertPreloaded(771, "Ethernet Cable 10m", 27, 350);
insertPreloaded(489, "Bluetooth Earbuds", 15, 1599);
insertPreloaded(630, "Monitor 24-inch", 6, 8999);
insertPreloaded(44, "Graphic Tablet", 7, 4599);
insertPreloaded(807, "USB Hub 4-Port", 17, 399);
insertPreloaded(290, "Power Bank 20000mAh", 13, 1899);
insertPreloaded(931, "WiFi Router", 11, 2499);
insertPreloaded(168, "MicroSD 128GB", 24, 699);
insertPreloaded(402, "Wireless Charger", 10, 1199);
insertPreloaded(31, "Action Camera", 8, 4999);
insertPreloaded(849, "Laptop Sleeve 15-inch", 20, 499);
insertPreloaded(915, "Portable HDD 2TB", 9, 5499);
insertPreloaded(287, "Phone Holder", 33, 149);
insertPreloaded(678, "Mini Tripod", 14, 299);


// =======================================================
// Add Item
// =======================================================
function addItem() {
    let id = Number(document.getElementById("itemId").value);
    let name = document.getElementById("itemName").value;
    let qty = Number(document.getElementById("itemQty").value);
    let price = Number(document.getElementById("itemPrice").value);

    if (!id || !name || !qty || !price) {
        alert("Fill all fields.");
        return;
    }

    let newNode = new Node(id, name, qty, price);
    newNode.next = head;
    head = newNode;

    refreshTable();
    alert("Item added!")
}


// =======================================================
// Update Item
// =======================================================
function updateItem() {
    let id = Number(document.getElementById("itemId").value);
    let name = document.getElementById("itemName").value;
    let qty = Number(document.getElementById("itemQty").value);
    let price = Number(document.getElementById("itemPrice").value);

    let temp = head;

    while (temp !== null) {
        if (temp.id === id) {
            temp.name = name;
            temp.qty = qty;
            temp.price = price;

            refreshTable();
            alert("Item Updated!")
            return;
        }
        temp = temp.next;
    }

    alert("Item not found.");
}


// =======================================================
// Delete Item
// =======================================================
function deleteItem() {
    let id = Number(document.getElementById("deleteId").value);

    let temp = head;
    let prev = null;

    while (temp !== null) {
        if (temp.id === id) {
            if (prev === null) head = temp.next;
            else prev.next = temp.next;

            refreshTable();
            alert("Item deleted successfully.");
            return;
        }
        prev = temp;
        temp = temp.next;
    }

    alert("Item not found.");
}


// =======================================================
// Search Item
// =======================================================
function searchItem() {
    let id = Number(document.getElementById("searchId").value);
    let result = document.getElementById("searchResult");

    let temp = head;

    while (temp !== null) {
        if (temp.id === id) {
            result.innerText =
                "Found → " + temp.name +
                " | Qty: " + temp.qty +
                " | Price: " + temp.price;
            return;
        }
        temp = temp.next;
    }

    result.innerText = "Item not found.";
}


// =======================================================
// Convert Linked List to Array
// =======================================================
function toArray() {
    let arr = [];
    let temp = head;

    while (temp !== null) {
        arr.push(temp);
        temp = temp.next;
    }
    return arr;
}


// =======================================================
// Sort by Price (DESC)
// =======================================================
function sortByPrice() {
    let arr = toArray();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].price < arr[j + 1].price) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }

    rebuildList(arr);
    refreshTable();
}


// =======================================================
// Sort by Quantity (ASC)
// =======================================================
function sortByQty() {
    let arr = toArray();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].qty > arr[j + 1].qty) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }

    rebuildList(arr);
    refreshTable();
}


// =======================================================
// Rebuild Linked List
// =======================================================
function rebuildList(arr) {
    head = null;

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i].next = head;
        head = arr[i];
    }
}


// =======================================================
// Count Items
// =======================================================
function countItems() {
    let temp = head;
    let count = 0;

    while (temp !== null) {
        count++;
        temp = temp.next;
    }

    document.getElementById("totalCount").innerText =
        "Total Items in Inventory: " + count;
}


// =======================================================
// Refresh Table (with Low Stock)
// =======================================================
function refreshTable() {
    let table = document.getElementById("invTable");

    table.innerHTML =
        "<tr><th>ID</th><th>Name</th><th>Qty</th><th>Price</th></tr>";

    let temp = head;

    while (temp !== null) {
        let rowClass = (temp.qty < 10) ? "class='low-stock'" : "";

        table.innerHTML += `
            <tr ${rowClass}>
                <td>${temp.id}</td>
                <td>${temp.name}</td>
                <td>${temp.qty}</td>
                <td>${temp.price}</td>
            </tr>
        `;

        temp = temp.next;
    }

    countItems();
}


// =======================================================
// Auto-Load Table
// =======================================================
window.onload = function () {
    refreshTable();
};
