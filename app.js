// DATA STRUCTURES

// Linked List Node (Primary data structure for inventory)
function Node(id, name, qty, price) {
    this.id = id;
    this.name = name;
    this.qty = qty;
    this.price = price;
    this.next = null;
}

let head = null;

// STACK - For Undo/Redo Operations (LIFO - Last In First Out)
// Algorithm: Manual Stack Implementation
// Using manual array management (C-style)
let operationStack = [];
let stackTop = -1; // Stack pointer
const MAX_STACK_SIZE = 10;

function pushOperation(operation) {
    // Manually shift elements if stack is full (like circular buffer)
    if (stackTop >= MAX_STACK_SIZE - 1) {
        // Manual shift: move all elements one position left
        for (let i = 0; i < MAX_STACK_SIZE - 1; i++) {
            operationStack[i] = operationStack[i + 1];
        }
        stackTop = MAX_STACK_SIZE - 2;
    }
    
    stackTop++;
    operationStack[stackTop] = operation;
}

function popOperation() {
    if (stackTop === -1) {
        return null;
    }
    
    let operation = operationStack[stackTop];
    operationStack[stackTop] = null; // Clear the slot
    stackTop--;
    return operation;
}

function isStackEmpty() {
    return stackTop === -1;
}

function undoLastOperation() {
    if (isStackEmpty()) {
        alert("No operations to undo!");
        return;
    }
    
    let lastOp = popOperation();
    
    switch(lastOp.type) {
        case 'ADD':
            // Remove the added item
            deleteById(lastOp.data.id, true);
            alert(`Undid ADD operation for ${lastOp.data.name}`);
            break;
        case 'DELETE':
            // Restore the deleted item
            restoreNode(lastOp.data);
            alert(`Undid DELETE operation for ${lastOp.data.name}`);
            break;
        case 'UPDATE':
            // Restore previous values
            let temp = head;
            while (temp !== null) {
                if (temp.id === lastOp.data.id) {
                    temp.name = lastOp.data.oldName;
                    temp.qty = lastOp.data.oldQty;
                    temp.price = lastOp.data.oldPrice;
                    break;
                }
                temp = temp.next;
            }
            alert(`Undid UPDATE operation for item ${lastOp.data.id}`);
            break;
    }
    
    refreshTable();
}

function restoreNode(data) {
    let newNode = new Node(data.id, data.name, data.qty, data.price);
    newNode.next = head;
    head = newNode;
}

// HASH TABLE - For Fast Item Lookup
// Algorithm: Hash Map with Chaining for collision resolution
let hashTable = {};

function rebuildHashTable() {
    hashTable = {};
    let temp = head;
    while (temp !== null) {
        hashTable[temp.id] = temp;
        temp = temp.next;
    }
}

function hashSearch(id) {
    return hashTable[id] || null;
}

// QUEUE - For Low Stock Alerts (FIFO - First In First Out)
// Algorithm: Manual Queue Implementation
// Using circular queue concept (C-style)
const MAX_QUEUE_SIZE = 100;
let lowStockQueue = new Array(MAX_QUEUE_SIZE);
let queueFront = 0;
let queueRear = -1;
let queueSize = 0;

function enqueue(item) {
    if (queueSize >= MAX_QUEUE_SIZE) {
        return false; // Queue full
    }
    
    queueRear = (queueRear + 1) % MAX_QUEUE_SIZE; // Circular increment
    lowStockQueue[queueRear] = item;
    queueSize++;
    return true;
}

function dequeue() {
    if (queueSize === 0) {
        return null; // Queue empty
    }
    
    let item = lowStockQueue[queueFront];
    lowStockQueue[queueFront] = null; // Clear the slot
    queueFront = (queueFront + 1) % MAX_QUEUE_SIZE; // Circular increment
    queueSize--;
    return item;
}

function isQueueEmpty() {
    return queueSize === 0;
}

function clearQueue() {
    queueFront = 0;
    queueRear = -1;
    queueSize = 0;
    // Clear all elements
    for (let i = 0; i < MAX_QUEUE_SIZE; i++) {
        lowStockQueue[i] = null;
    }
}

function updateLowStockQueue() {
    clearQueue();
    let temp = head;
    
    while (temp !== null) {
        if (temp.qty < 10) {
            enqueue({
                id: temp.id,
                name: temp.name,
                qty: temp.qty
            });
        }
        temp = temp.next;
    }
}

function showLowStockAlerts() {
    updateLowStockQueue();
    
    if (isQueueEmpty()) {
        alert("All items are well-stocked!");
        return;
    }
    
    let message = `LOW STOCK ALERTS (${queueSize} items):\n\n`;
    
    // Manual iteration through queue (without forEach)
    let index = queueFront;
    for (let i = 0; i < queueSize; i++) {
        let item = lowStockQueue[index];
        message += `${item.name} (ID: ${item.id}) - Only ${item.qty} left\n`;
        index = (index + 1) % MAX_QUEUE_SIZE; // Circular increment
    }
    
    alert(message);
}


// Preloaded Items (30 items)
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


// Add Item
// Algorithm: Linked List Insertion at Head
function addItem() {
    let id = Number(document.getElementById("itemId").value);
    let name = document.getElementById("itemName").value;
    let qty = Number(document.getElementById("itemQty").value);
    let price = Number(document.getElementById("itemPrice").value);

    if (!id || !name || !qty || !price) {
        alert("Fill all fields.");
        return;
    }

    // Check for duplicate ID using hash table
    if (hashTable[id]) {
        alert("Item with this ID already exists!");
        return;
    }

    let newNode = new Node(id, name, qty, price);
    newNode.next = head;
    head = newNode;
    
    // Update hash table
    hashTable[id] = newNode;
    
    // Push to stack for undo functionality
    pushOperation({
        type: 'ADD',
        data: { id, name, qty, price }
    });

    refreshTable();
    clearInputFields();
    alert("Item added!")
}


// Update Item
// Algorithm: Linear Search through Linked List
// Can be optimized using hash table
function updateItem() {
    let id = Number(document.getElementById("itemId").value);
    let name = document.getElementById("itemName").value;
    let qty = Number(document.getElementById("itemQty").value);
    let price = Number(document.getElementById("itemPrice").value);

    // Use hash table for fast lookup
    let temp = hashTable[id];
    
    if (!temp) {
        alert("Item not found.");
        return;
    }
    
    // Save old values for undo
    pushOperation({
        type: 'UPDATE',
        data: {
            id: id,
            oldName: temp.name,
            oldQty: temp.qty,
            oldPrice: temp.price
        }
    });
    
    // Update values
    temp.name = name;
    temp.qty = qty;
    temp.price = price;

    refreshTable();
    clearInputFields();
    alert("Item Updated!")
}


// Delete Item
// Algorithm: Linked List Deletion
function deleteItem() {
    let id = Number(document.getElementById("deleteId").value);
    deleteById(id, false);
}

function deleteById(id, isUndo) {
    let temp = head;
    let prev = null;

    while (temp !== null) {
        if (temp.id === id) {
            // Save for undo (only if not already undoing)
            if (!isUndo) {
                pushOperation({
                    type: 'DELETE',
                    data: {
                        id: temp.id,
                        name: temp.name,
                        qty: temp.qty,
                        price: temp.price
                    }
                });
            }
            
            if (prev === null) head = temp.next;
            else prev.next = temp.next;
            
            // Remove from hash table
            delete hashTable[id];

            refreshTable();
            document.getElementById("deleteId").value = '';
            if (!isUndo) alert("Item deleted successfully.");
            return;
        }
        prev = temp;
        temp = temp.next;
    }

    alert("Item not found.");
}

function clearInputFields() {
    document.getElementById("itemId").value = '';
    document.getElementById("itemName").value = '';
    document.getElementById("itemQty").value = '';
    document.getElementById("itemPrice").value = '';
}


// Search Item
// Algorithm: Hash Table Lookup
// Fallback to Linear Search
let searchMode = 'hash'; // 'hash' or 'binary'

function searchItem() {
    let id = Number(document.getElementById("searchId").value);
    let result = document.getElementById("searchResult");

    if (!id) {
        result.innerText = "Please enter an ID!";
        result.style.color = "#ef4444";
        return;
    }

    let item = null;
    
    if (searchMode === 'hash') {
        // Hash Table Search
        item = hashTable[id];
    } else {
        // Binary Search - requires sorted array
        let arr = toArray();
        arr.sort((a, b) => a.id - b.id); // Sort by ID
        item = binarySearchById(arr, id);
    }

    if (item) {
        result.innerText = `Found: ${item.name} | Qty: ${item.qty} | Price: ₹${item.price}`;
        result.style.color = "#059669";
    } else {
        result.innerText = "Item not found";
        result.style.color = "#ef4444";
    }
}

// BINARY SEARCH Algorithm
// Requires sorted array
function binarySearchById(arr, targetId) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid].id === targetId) {
            return arr[mid];
        } else if (arr[mid].id < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return null;
}

function toggleSearchMode() {
    searchMode = (searchMode === 'hash') ? 'binary' : 'hash';
    let modeText = searchMode === 'hash' ? 'Hash Table' : 'Binary Search';
    document.getElementById('searchModeBtn').innerHTML = 
        `<i data-feather="zap" class="w-4 h-4 mr-2"></i>${modeText}`;
    feather.replace();
    alert(`Search mode changed to: ${modeText}`);
}


// Convert Linked List to Array
// Algorithm: Linked List Traversal
// Convert Linked List to Array
// Manual conversion without using push() - C-style
function toArray() {
    // First, count the number of nodes
    let count = 0;
    let temp = head;
    while (temp !== null) {
        count++;
        temp = temp.next;
    }
    
    // Allocate array of exact size (like malloc in C)
    let arr = new Array(count);
    
    // Fill array manually
    temp = head;
    let index = 0;
    while (temp !== null) {
        arr[index] = temp;
        index++;
        temp = temp.next;
    }
    
    return arr;
}


// MERGE SORT - Divide and Conquer Algorithm
// MERGE SORT Algorithm
// Pure C-style implementation without built-in functions
// Manual array copying and merging
function mergeSort(arr, key, ascending) {
    let n = arr.length;
    if (n <= 1) return arr;
    
    let mid = Math.floor(n / 2);
    
    // Manual array copying (like malloc in C)
    let left = new Array(mid);
    let right = new Array(n - mid);
    
    // Copy left half
    for (let i = 0; i < mid; i++) {
        left[i] = arr[i];
    }
    
    // Copy right half
    for (let i = mid; i < n; i++) {
        right[i - mid] = arr[i];
    }
    
    // Recursive sort
    left = mergeSort(left, key, ascending);
    right = mergeSort(right, key, ascending);
    
    // Merge sorted halves
    return merge(left, right, key, ascending);
}

function merge(left, right, key, ascending) {
    let leftSize = left.length;
    let rightSize = right.length;
    let resultSize = leftSize + rightSize;
    let result = new Array(resultSize);
    
    let i = 0;  // Left array index
    let j = 0;  // Right array index
    let k = 0;  // Result array index
    
    // Merge elements in sorted order
    while (i < leftSize && j < rightSize) {
        let comparison;
        if (ascending) {
            comparison = left[i][key] < right[j][key];
        } else {
            comparison = left[i][key] > right[j][key];
        }
        
        if (comparison) {
            result[k] = left[i];
            i++;
        } else {
            result[k] = right[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements from left (if any)
    while (i < leftSize) {
        result[k] = left[i];
        i++;
        k++;
    }
    
    // Copy remaining elements from right (if any)
    while (j < rightSize) {
        result[k] = right[j];
        j++;
        k++;
    }
    
    return result;
}


// Sort by Price (DESC) using Merge Sort
// Algorithm: Merge Sort
function sortByPrice() {
    let arr = toArray();
    
    if (arr.length === 0) {
        alert("Inventory is empty!");
        return;
    }

    // Use Merge Sort instead of Bubble Sort for better performance
    arr = mergeSort(arr, 'price', false); // Descending order

    rebuildList(arr);
    refreshTable();
    alert("Sorted by Price (High to Low)");
}


// Sort by Quantity (ASC) using Merge Sort
// Algorithm: Merge Sort
function sortByQty() {
    let arr = toArray();
    
    if (arr.length === 0) {
        alert("Inventory is empty!");
        return;
    }

    // Use Merge Sort
    arr = mergeSort(arr, 'qty', true); // Ascending order

    rebuildList(arr);
    refreshTable();
    alert("Sorted by Quantity (Low to High)");
}


// Rebuild Linked List from Array
// Algorithm: Array to Linked List conversion
function rebuildList(arr) {
    head = null;

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i].next = head;
        head = arr[i];
    }
    
    // Rebuild hash table after reconstruction
    rebuildHashTable();
}


// STATISTICS CALCULATIONS using Array Algorithms

// Find Min/Max using Linear Scan
function calculateStats() {
    let arr = toArray();
    
    if (arr.length === 0) {
        alert("No items in inventory!");
        return;
    }
    
    // Save data to localStorage
    localStorage.setItem('inventoryStats', JSON.stringify({
        items: arr,
        timestamp: new Date().toISOString()
    }));
    
    // Navigate to statistics page
    window.location.href = 'statistics.html';
}

// Open Forecast Page
function openForecast() {
    let arr = toArray();
    
    if (arr.length === 0) {
        alert("No items in inventory!");
        return;
    }
    
    // Save data to localStorage
    localStorage.setItem('inventoryStats', JSON.stringify({
        items: arr,
        timestamp: new Date().toISOString()
    }));
    
    // Navigate to forecast page
    window.location.href = 'forecast.html';
}


// Count Items
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


// Show Algorithms Information
function showAlgorithmsInfo() {
    const info = `DATA STRUCTURES & ALGORITHMS USED:

1. LINKED LIST - Primary storage
2. HASH TABLE - Fast lookup
3. STACK - Undo/Redo
4. QUEUE - Low stock alerts
5. MERGE SORT - Sorting
6. BINARY SEARCH - Efficient search
7. LINEAR SEARCH - Statistics

Toggle between Hash Table and Binary Search modes!`;
    
    alert(info);
}


// Refresh Table (with Low Stock)
function refreshTable() {
    let table = document.getElementById("invTable");
    let tbody = table.querySelector('tbody');
    
    if (!tbody) {
        tbody = document.createElement('tbody');
        tbody.className = 'bg-white divide-y divide-gray-200';
        table.appendChild(tbody);
    }
    
    tbody.innerHTML = '';

    let temp = head;

    while (temp !== null) {
        let row = tbody.insertRow();
        
        // Apply low stock highlight if quantity < 10
        if (temp.qty < 10) {
            row.classList.add('low-stock');
        }

        row.insertCell(0).textContent = temp.id;
        row.insertCell(1).textContent = temp.name;
        row.insertCell(2).textContent = temp.qty;
        row.insertCell(3).textContent = '₹' + temp.price;

        temp = temp.next;
    }

    countItems();
}


// Auto-Load Table
window.onload = function () {
    // Initialize hash table on load
    rebuildHashTable();
    refreshTable();
    
    // Initialize Feather icons if available
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
};
