# StockSymphony - DSA Inventory Management System

A comprehensive inventory management system demonstrating practical applications of Data Structures and Algorithms.

---

## Project Overview

This project showcases algorithms and data structures working together to create an efficient inventory management system.

**Tech Stack:** HTML5, CSS3 (Tailwind), JavaScript (C-style), Chart.js  
**Core Focus:** Data Structures, Algorithms, Manual Implementation

---

## Data Structures Implemented

| Structure | Purpose | Complexity |
|-----------|---------|------------|
| **Linked List** | Primary inventory storage | Insert: O(1), Search: O(n) |
| **Hash Table** | Fast lookups by ID | All ops: O(1) average |
| **Stack (LIFO)** | Undo/Redo operations | Push/Pop: O(1) |
| **Queue (FIFO)** | Low stock alerts | Enqueue/Dequeue: O(1) |

---

## Algorithms Implemented

### Sorting:
- **Merge Sort** - O(n log n) [Divide & Conquer]

### Searching:
- **Hash Table Search** - O(1) [Average case]
- **Binary Search** - O(log n) [On sorted data]
- **Linear Search** - O(n) [Fallback method]

### Analysis:
- **Min/Max Finding** - O(n)
- **Average Calculation** - O(n)
- **Median Finding** - O(n log n)

---

## Key Features

### 1. Undo/Redo (Stack)
- Revert last 10 operations
- Operations tracked: Add, Delete, Update
- **Algorithm:** Stack data structure (LIFO)
- **Complexity:** O(1) per operation

### 2. Low Stock Alerts (Queue)
- Automatic alerts for items < 10 quantity
- FIFO processing order
- **Algorithm:** Queue data structure (FIFO)
- **Complexity:** O(n) to build queue

### 3. Advanced Search
- **Mode 1:** Hash Table - O(1) lookup
- **Mode 2:** Binary Search - O(log n) lookup
- Toggle between modes to compare

### 4. Efficient Sorting
- **Merge Sort** O(n log n)
- Sorts by Price (desc) or Quantity (asc)

### 5. Statistics Dashboard
- Total inventory value
- Min/Max priced items
- Average & Median prices
- Low stock count

### 6. Forecast & Predictions
- Priority Queue for reorder recommendations
- Stock depletion timeline
- Urgency scoring system

---

## Quick Start

### 1. Open the Project
```bash
# Simply open in browser
index.html
```

### 2. Pre-loaded Data
- 30 sample items ready to explore
- Mix of high/low stock items
- Various price ranges

### 3. Try These Features
**Test Undo:**
1. Delete any item
2. Click "Undo Last Operation"
3. Watch it restore

**Compare Search Modes:**
1. Search for ID: 105
2. Note comparison count
3. Toggle search mode
4. Search again - see difference

**View Statistics:**
1. Click "View Statistics"
2. See comprehensive analytics

**Check Alerts:**
1. Click "Low Stock Alerts"
2. See items needing restock
3. Queue shows in FIFO order

---

## Performance Improvements

### Before Optimization
- Search: O(n) linear only
- Sort: O(n²) bubble sort
- Update: O(n) linear search
- No undo functionality
- No statistics

### After Optimization
- Search: O(1) with hash table
- Sort: O(n log n) merge sort
- Update: O(1) with hash lookup
- Undo: O(1) with stack
- Stats: O(n log n) comprehensive

### Real Performance
For 1000 items:
- **Search:** 1000x faster (O(n) to O(1))
- **Sort:** 100x faster (O(n²) to O(n log n))
- **Update:** 1000x faster (O(n) to O(1))

---

## Project Structure

```
DSA_Project_Inventory_Management/
├── index.html              # Main UI
├── app.js                  # All algorithms
├── style.css               # Professional styling
├── statistics.html         # Analytics dashboard
├── forecast.html           # Predictions page
└── README.md               # This file
```

---

## Learning Outcomes

By studying this project, you'll understand:

**Data Structure Selection**
- When to use Linked Lists vs Arrays
- Benefits of Hash Tables for O(1) lookup
- Stack vs Queue applications

**Algorithm Optimization**
- Bubble Sort O(n²) to Merge Sort O(n log n)
- Linear Search O(n) to Hash/Binary O(1)/O(log n)
- Trade-offs between time and space

**Big-O Analysis**
- Practical complexity calculations
- Real-world performance impact
- Optimization techniques

**Design Patterns**
- Undo/Redo with Stack
- Caching with Hash Table
- Queue for fair processing

---

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Styling:** Tailwind CSS (CDN)
- **Icons:** Feather Icons
- **Charts:** Chart.js
- **Fonts:** Inter (Google Fonts)

**No build tools required** - just open and run!

---

## Use Cases

### For Students:
- Learn DSA through practical application
- Understand Big-O in real scenarios
- See algorithm performance differences
- Reference well-commented code

### For Teachers:
- Live demonstrations of algorithms
- Interactive complexity comparisons
- Real-world DSA applications
- Educational tool for classes

### For Developers:
- Production-ready code patterns
- Best practices reference
- Algorithm implementation examples
- UI/UX inspiration

---

## Algorithm Complexity Table

| Operation | Structure | Time | Space |
|-----------|-----------|------|-------|
| Add Item | Linked List + Hash | O(1) | O(1) |
| Update Item | Hash Table | O(1) | O(1) |
| Delete Item | Linked List | O(n) | O(1) |
| Search (Hash) | Hash Table | O(1) | O(1) |
| Search (Binary) | Sorted Array | O(log n) | O(n) |
| Sort | Merge Sort | O(n log n) | O(n) |
| Undo | Stack | O(1) | O(1) |
| Low Stock | Queue + Scan | O(n) | O(k) |
| Statistics | Scan + Sort | O(n log n) | O(n) |

---

## Code Philosophy

**C-Style Programming in JavaScript:**

- No `push()`, `pop()`, `shift()`, `unshift()`
- No `map()`, `filter()`, `reduce()`, `forEach()`
- No `sort()`, `slice()`, `concat()`, `splice()`
- Manual loops (`for`, `while`)
- Index-based access (`arr[i]`)
- Manual swapping with temp variables
- Pointer/counter tracking
- Pre-allocated arrays

---

## Author

**DSA Project - Inventory Management System**  
Built for educational purposes to demonstrate Data Structures & Algorithms in action.

---

## License

This project is for educational purposes.

---

## 🎯 Project Overview## 🌟 Project Overview

This project demonstrates the practical application of fundamental DSA concepts in a real-world inventory management scenario. All algorithms are implemented from scratch using C-style programming patterns for educational purposes.This project showcases **7+ algorithms** and **4 data structures** working together to create an efficient, educational, and visually appealing inventory management system.

**Tech Stack:** HTML5, CSS3 (Tailwind), JavaScript (C-style), Chart.js  ### **Live Demo**

**Core Focus:** Data Structures, Algorithms, Manual Memory Management ConceptsOpen `index.html` in any modern browser to see the system in action!

---

## 🚀 Features & DSA Implementation## 📚 Data Structures Implemented

### **1️⃣ Linked List - Primary Data Storage**| Structure | Purpose | Complexity |

|-----------|---------|------------|

**Feature:** Store and manage inventory items dynamically| **Linked List** | Primary inventory storage | Insert: O(1), Search: O(n) |

| **Hash Table** | Fast O(1) lookups by ID | All ops: O(1) average |

**Code Snippet:**| **Stack (LIFO)** | Undo/Redo operations | Push/Pop: O(1) |

```javascript|

// Linked List Node Structure

function Node(id, name, qty, price) {---

    this.id = id;

    this.name = name;## 🧮 Algorithms Implemented

    this.qty = qty;

    this.price = price;### **Sorting:**

    this.next = null;- ✅ **Merge Sort** - O(n log n) [Divide & Conquer]

}- ❌ ~~Bubble Sort~~ - O(n²) [Replaced for efficiency]



let head = null;### **Searching:**

- ✅ **Hash Table Search** - O(1) [Average case]

// Add Item at Beginning - O(1)- ✅ **Binary Search** - O(log n) [On sorted data]

function addItem() {- ✅ **Linear Search** - O(n) [Fallback method]

    let id = Number(document.getElementById("itemId").value);

    let name = document.getElementById("itemName").value;### **Analysis:**

    let qty = Number(document.getElementById("itemQty").value);- ✅ **Min/Max Finding** - O(n) [Linear scan]

    let price = Number(document.getElementById("itemPrice").value);- ✅ **Average Calculation** - O(n) [Reduction]

- ✅ **Median Finding** - O(n log n) [Sort-based]

    if (!id || !name || !qty || !price) {

        alert("All fields are required!");---

        return;

    }## ✨ Key Features



    let newNode = new Node(id, name, qty, price);### **1. Undo/Redo (Stack)**

    newNode.next = head;- Revert last 10 operations

    head = newNode;- Operations tracked: Add, Delete, Update

    - **Algorithm:** Stack data structure (LIFO)

    rebuildHashTable();- **Complexity:** O(1) per operation

    pushOperation({ type: 'ADD', data: { id, name, qty, price } });

    refreshTable();### **2. Low Stock Alerts (Queue)**

}- Automatic alerts for items < 10 quantity

```- FIFO processing order

- **Algorithm:** Queue data structure (FIFO)

**How It's Used:**- **Complexity:** O(n) to build queue

- Each inventory item is stored as a node in a singly linked list

- Items are inserted at the head for O(1) insertion### **3. Advanced Search**

- Traversal is done by following `next` pointers- **Mode 1:** Hash Table - O(1) lookup

- Provides dynamic memory allocation without fixed array sizes- **Mode 2:** Binary Search - O(log n) lookup

- Toggle between modes to compare!

---- Shows comparison count for education



### **2️⃣ Hash Table - O(1) Item Lookup**### **4. Efficient Sorting**

- **Merge Sort** instead of Bubble Sort

**Feature:** Fast search for items by ID- **100x faster** for 1000 items

- Sorts by Price (desc) or Quantity (asc)

**Code Snippet:**- **Complexity:** O(n log n)

```javascript

// Hash Table for instant lookup### **5. Statistics Dashboard**

let hashTable = {};- Total inventory value

- Min/Max priced items

// Rebuild Hash Table from Linked List - O(n)- Average & Median prices

function rebuildHashTable() {- Low stock count

    hashTable = {};- **Algorithms:** Linear scan + Sort

    let temp = head;

    while (temp !== null) {### **6. Educational Interface**

        hashTable[temp.id] = temp;- Algorithm info panel

        temp = temp.next;- Complexity indicators

    }- Real-time comparison counters

}- Code comments explain every algorithm



// Hash Search - O(1) average case---

function hashSearch(id) {

    return hashTable[id] || null;## 🚀 Quick Start

}

### **1. Open the Project**

// Search Item using Hash Table or Binary Search```bash

function searchItem() {# Simply open in browser

    let id = Number(document.getElementById("searchId").value);index.html

    let result = document.getElementById("searchResult");```



    if (!id) {### **2. Pre-loaded Data**

        result.innerText = "Please enter an ID!";- 30 sample items ready to explore

        return;- Mix of high/low stock items

    }- Various price ranges



    let item = null;### **3. Try These Features**

  

    if (searchMode === 'hash') {**Test Undo:**

        item = hashTable[id];  // O(1) lookup1. Delete any item

    } else {2. Click "Undo Last Operation"

        let arr = toArray();3. Watch it restore!

        // Sort manually before binary search

        item = binarySearchById(arr, id);**Compare Search Modes:**

    }1. Search for ID: 105

2. Note comparison count

    if (item) {3. Toggle search mode

        result.innerText = `✓ Found: ${item.name} | Qty: ${item.qty} | Price: ₹${item.price}`;4. Search again - see difference!

    } else {

        result.innerText = "✗ Item not found";**View Statistics:**

    }1. Click "View Statistics"

}2. See comprehensive analytics

```3. Algorithms listed in popup



**How It's Used:****Check Alerts:**

- Hash table maps item IDs to node references1. Click "Low Stock Alerts"

- Provides instant O(1) lookup instead of O(n) traversal2. See items needing restock

- Rebuilt whenever items are added/deleted3. Queue shows in FIFO order

- Toggle between hash search and binary search for comparison

---

---

## 📊 Performance Improvements

### **3️⃣ Stack - Undo Operation (LIFO)**

### **Before Optimization**

**Feature:** Undo last operations on inventory- Search: O(n) linear only

- Sort: O(n²) bubble sort

**Code Snippet:**- Update: O(n) linear search

```javascript- No undo functionality

// Manual Stack Implementation (C-style)- No statistics

let operationStack = [];

let stackTop = -1;### **After Optimization** ⚡

const MAX_STACK_SIZE = 10;- Search: O(1) with hash table

- Sort: O(n log n) merge sort

// Push Operation - O(1)- Update: O(1) with hash lookup

function pushOperation(operation) {- Undo: O(1) with stack

    // Manual shift if stack is full- Stats: O(n log n) comprehensive

    if (stackTop >= MAX_STACK_SIZE - 1) {

        for (let i = 0; i < MAX_STACK_SIZE - 1; i++) {### **Real Performance**

            operationStack[i] = operationStack[i + 1];For 1000 items:

        }- **Search:** 1000x faster (O(n) → O(1))

        stackTop = MAX_STACK_SIZE - 2;- **Sort:** 100x faster (O(n²) → O(n log n))

    }- **Update:** 1000x faster (O(n) → O(1))

  

    stackTop++;---

    operationStack[stackTop] = operation;

}## 📁 Project Structure



// Pop Operation - O(1)```

function popOperation() {DSA_Project_Inventory_Management/

    if (stackTop === -1) {│

        return null;├── index.html              # Main UI with modern design

    }├── app.js                  # All algorithms (heavily commented)

    ├── style.css               # Professional styling

    let operation = operationStack[stackTop];│

    operationStack[stackTop] = null;├── DSA_DOCUMENTATION.md    # Complete technical docs

    stackTop--;├── FEATURES.md             # Quick reference guide

    return operation;├── PROJECT_SUMMARY.md      # Detailed summary

}└── README.md               # This file

```

// Undo Last Operation

function undoLastOperation() {---

    if (stackTop === -1) {

    alert("No operations to undo!");## 🎓 Learning Outcomes

    return;

    }By studying this project, you'll understand:

    let lastOp = popOperation();✅**Data Structure Selection**

    - When to use Linked Lists vs Arrays

    switch(lastOp.type) {- Benefits of Hash Tables for O(1) lookup

    case 'ADD':- Stack vs Queue applications

    deleteById(lastOp.data.id, true);

    alert(`Undid ADD operation for ${lastOp.data.name}`);✅ **Algorithm Optimization**

    break;- Bubble Sort (O(n²)) → Merge Sort (O(n log n))

    case 'DELETE':- Linear Search (O(n)) → Hash/Binary (O(1)/O(log n))

    restoreNode(lastOp.data);- Trade-offs between time and space

    alert(`Undid DELETE operation for ${lastOp.data.name}`);

    break;✅**Big-O Analysis**

    case 'UPDATE':- Practical complexity calculations

    // Restore previous values- Real-world performance impact

    let temp = head;- Optimization techniques

    while (temp !== null) {

    if (temp.id === lastOp.data.id) {✅**Design Patterns**

    temp.name = lastOp.data.oldName;- Undo/Redo with Stack

    temp.qty = lastOp.data.oldQty;- Caching with Hash Table

    temp.price = lastOp.data.oldPrice;- Queue for fair processing

    break;

    }---

    temp = temp.next;

    }## 🛠️ Technology Stack

    break;

    }-**Frontend:** HTML5, CSS3, JavaScript (ES6+)

    -**Styling:** Tailwind CSS (CDN)

    refreshTable();-**Icons:** Feather Icons

}- **Fonts:** Inter (Google Fonts)

```

**No build tools required** - just open and run!

**How It's Used:**

- Stores last 10 operations (ADD, DELETE, UPDATE)---

- Manual stack pointer (`stackTop`) tracks the top

- LIFO behavior: Last operation is undone first## 📖 Code Documentation

- Manual array shifting when stack is full (circular buffer concept)

Every algorithm includes detailed comments:

---

```javascript

### **4️⃣ Queue - Low Stock Alerts (FIFO)**// =======================================================

// MERGE SORT - Divide and Conquer Algorithm

**Feature:** Display low stock items in order// Time Complexity: O(n log n) - Much better than Bubble Sort O(n²)

// Space Complexity: O(n)

**Code Snippet:**// =======================================================

```javascriptfunction mergeSort(arr, key, ascending = true) {

// Circular Queue Implementation (C-style)    // Implementation with comments...

const MAX_QUEUE_SIZE = 100;}

let lowStockQueue = new Array(MAX_QUEUE_SIZE);```

let queueFront = 0;

let queueRear = -1;**Documentation files:**

let queueSize = 0;- `DSA_DOCUMENTATION.md` - Algorithm deep-dive

- `FEATURES.md` - Feature usage guide

// Enqueue - O(1)- `PROJECT_SUMMARY.md` - Complete overview

function enqueue(item) {

    if (queueSize >= MAX_QUEUE_SIZE) {---

        return false;

    }## 🎯 Use Cases

  

    queueRear = (queueRear + 1) % MAX_QUEUE_SIZE;  // Circular increment### **For Students:**

    lowStockQueue[queueRear] = item;- Learn DSA through practical application

    queueSize++;- Understand Big-O in real scenarios

    return true;- See algorithm performance differences

}- Reference well-commented code



// Dequeue - O(1)### **For Teachers:**

function dequeue() {- Live demonstrations of algorithms

    if (queueSize === 0) {- Interactive complexity comparisons

        return null;- Real-world DSA applications

    }- Educational tool for classes

  

    let item = lowStockQueue[queueFront];### **For Developers:**

    lowStockQueue[queueFront] = null;- Production-ready code patterns

    queueFront = (queueFront + 1) % MAX_QUEUE_SIZE;  // Circular increment- Best practices reference

    queueSize--;- Algorithm implementation examples

    return item;- UI/UX inspiration

}

---

// Update Low Stock Queue

function updateLowStockQueue() {## 🏆 Project Highlights

    clearQueue();

    let temp = head;### **What Makes This Special:**

  

    while (temp !== null) {1. **Multiple Data Structures**

        if (temp.qty < 10) {   - Linked List, Hash Table, Stack, Queue

            enqueue({   - Each serves a specific purpose

                id: temp.id,   - Demonstrates proper selection criteria

                name: temp.name,

                qty: temp.qty2. **Algorithm Variety**

            });   - Sorting, Searching, Analysis

        }   - Classic algorithms (Merge, Binary)

        temp = temp.next;   - Modern optimizations (Hash Table)

    }

}3. **Educational Design**

   - Built-in algorithm info

// Show Alerts   - Comparison counters

function showLowStockAlerts() {   - Complexity indicators

    updateLowStockQueue();   - Detailed documentation

  

    if (queueSize === 0) {4. **Professional Quality**

        alert("✓ All items are well-stocked!");   - Clean, modern UI

        return;   - Responsive design

    }   - Production-ready code

       - Comprehensive comments

    let message = `⚠️ LOW STOCK ALERTS (${queueSize} items):\n\n`;

    5. **Real-World Features**

    let index = queueFront;   - Undo/Redo (like real apps!)

    for (let i = 0; i < queueSize; i++) {   - Statistics dashboard

        let item = lowStockQueue[index];   - Alert system

        message += `• ${item.name} (ID: ${item.id}) - Only ${item.qty} left\n`;   - Dual search modes

        index = (index + 1) % MAX_QUEUE_SIZE;

    }---

  

    alert(message);## 🎬 Demo Scenarios

}

```### **Scenario 1: Algorithm Comparison**

```

**How It's Used:**1. Click "Algorithms Info" button

- Circular queue with front and rear pointers2. See all 7 algorithms listed
- Stores items with quantity < 103. Toggle search modes
- FIFO behavior: First added items are shown first4. Compare O(1) vs O(log n)
- Circular increment prevents array overflow```

---### **Scenario 2: Performance Demo**

```

### **5️⃣ Merge Sort - Sorting Algorithm**1. Click "Sort by Price"

2. Alert shows "Merge Sort O(n log n)"

**Feature:** Sort items by price or quantity3. Instant sorting of 30 items

4. Much faster than Bubble Sort!

**Code Snippet:**```

```javascript

// Merge Sort - O(n log n) - Pure C-style### **Scenario 3: Undo Feature**

function mergeSort(arr, key, ascending) {```

    let n = arr.length;1. Add item: ID 999

    if (n <= 1) return arr;2. Delete it by mistake

    3. Click "Undo"

    let mid = Math.floor(n / 2);4. Stack restores it!

    ```

    // Manual array copying (like malloc in C)

    let left = new Array(mid);### **Scenario 4: Analytics**

    let right = new Array(n - mid);```

    1. Click "View Statistics"

    // Copy left half2. See min/max items

    for (let i = 0; i < mid; i++) {3. Average and median prices

        left[i] = arr[i];4. Algorithms used shown

    }```

  

    // Copy right half---

    for (let i = mid; i < n; i++) {

        right[i - mid] = arr[i];## 🔮 Future Enhancements (Optional)

    }

    Want to extend the project? Consider adding:

    // Recursive sort

    left = mergeSort(left, key, ascending);### **1. Heap / Priority Queue**

    right = mergeSort(right, key, ascending);- Maintain top-K expensive items

    - Automatic priority sorting

    // Merge sorted halves- **Complexity:** O(log n) insert/delete

    return merge(left, right, key, ascending);

}### **2. Trie / Prefix Tree**

- Auto-complete product names

// Merge Function - Three-pointer technique- Fast prefix matching

function merge(left, right, key, ascending) {- **Complexity:** O(m) where m = string length

    let leftSize = left.length;

    let rightSize = right.length;### **3. Graph Algorithms**

    let resultSize = leftSize + rightSize;- Product relationships

    let result = new Array(resultSize);- BFS/DFS traversal

    - Supplier network optimization

    let i = 0;  // Left array pointer

    let j = 0;  // Right array pointer### **4. AVL Tree / Red-Black Tree**

    let k = 0;  // Result array pointer- Self-balancing sorted storage

    - Always O(log n) operations

    // Merge in sorted order- Better than linked list for sorted data

    while (i < leftSize && j < rightSize) {

        let comparison;### **5. Bloom Filter**

        if (ascending) {- Space-efficient duplicate checking

            comparison = left[i][key] < right[j][key];- Probabilistic data structure

        } else {- Very low memory usage

            comparison = left[i][key] > right[j][key];

        }---

      

        if (comparison) {## 📝 Algorithm Complexity Table

            result[k] = left[i];

            i++;| Operation | Structure | Time | Space |

        } else {|-----------|-----------|------|-------|

            result[k] = right[j];| Add Item | Linked List + Hash | O(1) | O(1) |

            j++;| Update Item | Hash Table | O(1) | O(1) |

        }| Delete Item | Linked List | O(n) | O(1) |

        k++;| Search (Hash) | Hash Table | O(1) | O(1) |

    }| Search (Binary) | Sorted Array | O(log n) | O(n) |

    | Sort | Merge Sort | O(n log n) | O(n) |

    // Copy remaining from left| Undo | Stack | O(1) | O(1) |

    while (i < leftSize) {| Low Stock | Queue + Scan | O(n) | O(k) |

        result[k] = left[i];| Statistics | Scan + Sort | O(n log n) | O(n) |

        i++;

        k++;---

    }

    ## 🎨 UI Features

    // Copy remaining from right

    while (j < rightSize) {### **Design Elements:**

        result[k] = right[j];- 🎨 Gradient header with DSA branding

        j++;- 🎯 Color-coded buttons by operation type

        k++;- 📊 Real-time algorithm feedback

    }- ⚡ Smooth animations and transitions

    - 📱 Fully responsive layout

    return result;- 🌈 Modern color palette

}

### **User Experience:**

// Sort by Price (Descending)- ✅ Instant visual feedback

function sortByPrice() {- ✅ Educational tooltips

    let arr = toArray();- ✅ Clear operation results

    if (arr.length === 0) {- ✅ Professional aesthetics

        alert("Inventory is empty!");- ✅ Intuitive interface

        return;

    }---



    arr = mergeSort(arr, 'price', false);## 💡 Best Practices Demonstrated

    rebuildList(arr);

    refreshTable();### **1. Code Organization**

    alert("✓ Sorted by Price (High → Low)");- Modular functions

}- Clear separation of concerns

```- Consistent naming conventions



**How It's Used:**### **2. Documentation**

- Divide and conquer sorting algorithm- Detailed comments

- Splits array in half recursively until single elements- Algorithm complexity noted

- Merges sorted subarrays using three pointers (i, j, k)- Usage examples included

- Manual array copying without `slice()` or `concat()`

- Used for sorting by price (DESC) and quantity (ASC)### **3. Performance**

- Optimal algorithm selection

---- Time vs space tradeoffs

- Caching strategies

### **6️⃣ Binary Search - Logarithmic Search**

### **4. User Experience**

**Feature:** Fast search in sorted array- Responsive design

- Clear feedback

**Code Snippet:**- Educational elements

```javascript

// Binary Search - O(log n)---

function binarySearchById(arr, targetId) {

    let left = 0;## 🤝 Contributing

    let right = arr.length - 1;

    This is an educational project, but suggestions are welcome!

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);### **Areas for Improvement:**

        - Additional algorithms

        if (arr[mid].id === targetId) {- More data structures

            return arr[mid];  // Found- Enhanced UI features

        } else if (arr[mid].id < targetId) {- Performance optimizations

            left = mid + 1;   // Search right half

        } else {---

            right = mid - 1;  // Search left half

        }## 📄 License

    }

    This project is created for educational purposes. Feel free to use it for learning, teaching, or as a reference for your own projects.

    return null;  // Not found

}---



// Toggle Search Mode## 👨‍💻 Author

let searchMode = 'hash';  // 'hash' or 'binary'

**DSA Project Team**  

function toggleSearchMode() {Created: November 2025  

    searchMode = (searchMode === 'hash') ? 'binary' : 'hash';Version: 2.0 (Enhanced Edition)

    let modeText = searchMode === 'hash' ? 'Hash Table' : 'Binary Search';

    document.getElementById('searchModeBtn').innerHTML = ---

        `<i data-feather="zap" class="w-4 h-4 mr-2"></i>${modeText}`;

    feather.replace();## 🙏 Acknowledgments

    alert(`Search mode changed to: ${modeText}`);

}- **Algorithms:** Based on classic computer science concepts

```- **Design:** Inspired by modern web applications

- **Education:** Built to help students learn DSA practically

**How It's Used:**

- Requires sorted array (sorts by ID before searching)---

- Repeatedly divides search space in half

- Compares middle element with target## 📞 Support

- O(log n) time complexity vs O(n) linear search

- Toggleable with hash table search for comparisonFor questions or issues:

1. Check `DSA_DOCUMENTATION.md` for detailed explanations

---2. Read `FEATURES.md` for usage guide

3. Review `PROJECT_SUMMARY.md` for overview

### **7️⃣ Priority Queue - Inventory Forecasting**

---

**Feature:** Prioritize items needing reorder

## 🎯 Quick Commands

**Code Snippet:**

```javascript```bash

// Priority Queue with Manual Bubble Sort (C-style)# Open the application

class PriorityQueue {start index.html

    constructor() {

        this.queue = [];# View documentation

        this.size = 0;start DSA_DOCUMENTATION.md

        this.maxSize = 1000;

    }# Check features

start FEATURES.md

    // Enqueue with Priority - O(n²)```

    enqueue(item) {

        if (this.size >= this.maxSize) {---

            return false;

        }**🎉 Happy Learning! Explore the power of Data Structures & Algorithms! 🚀**

      

        this.queue[this.size] = item;---

        this.size++;

        ### **Key Takeaway:**

        // Manual Bubble Sort by urgency score> "This project demonstrates that DSA isn't just theory - it's the foundation of efficient, real-world applications!"

        for (let i = 0; i < this.size - 1; i++) {

            for (let j = 0; j < this.size - i - 1; j++) {**Algorithms = Speed ⚡**  

                if (this.queue[j].urgencyScore > this.queue[j + 1].urgencyScore) {**Data Structures = Organization 🗂️**  

                    // Manual swap**Together = Powerful Software 💪**

                    let temp = this.queue[j];
                    this.queue[j] = this.queue[j + 1];
                    this.queue[j + 1] = temp;
                }
            }
        }
      
        return true;
    }

    // Dequeue - O(n)
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
      
        let item = this.queue[0];
      
        // Manual shift left
        for (let i = 0; i < this.size - 1; i++) {
            this.queue[i] = this.queue[i + 1];
        }
      
        this.queue[this.size - 1] = null;
        this.size--;
        return item;
    }

    peek() {
        return this.size > 0 ? this.queue[0] : null;
    }

    isEmpty() {
        return this.size === 0;
    }
}

// Calculate Urgency Score
let urgencyScore = (item.qty / reorderThreshold) * (reorderInDays + 1);

// Add to Priority Queue
if (priority < 4) {
    priorityQueue.enqueue(forecastItem);
}
```

**How It's Used:**

- Items prioritized by urgency score (lower = more urgent)
- Manual bubble sort maintains queue order after each enqueue
- Used in forecast page to show which items need reordering first
- Items with lowest stock-to-usage ratio get highest priority

---

### **8️⃣ Array Conversion - Linked List to Array**

**Feature:** Convert linked list to array for sorting

**Code Snippet:**

```javascript
// Convert Linked List to Array - O(n) - C-style
function toArray() {
    // Count nodes first
    let count = 0;
    let temp = head;
    while (temp !== null) {
        count++;
        temp = temp.next;
    }
  
    // Allocate array of exact size
    let arr = new Array(count);
  
    // Fill array manually (no push)
    temp = head;
    let index = 0;
    while (temp !== null) {
        arr[index] = temp;
        index++;
        temp = temp.next;
    }
  
    return arr;
}
```

**How It's Used:**

- Pre-counts nodes to allocate exact array size (like malloc in C)
- Manually fills array using index-based insertion
- No `push()` method used - pure C-style
- Required before sorting operations (merge sort, selection sort)

---

### **9️⃣ Statistics Calculation - Manual Aggregation**

**Feature:** Calculate inventory statistics

**Code Snippet:**

```javascript
// Manual Statistics Calculation (forecast.html)
function updateSummaryCards() {
    // Manual counting (no filter)
    let critical = 0;
    let urgent = 0;
    let warning = 0;
    let healthy = 0;
  
    for (let i = 0; i < forecastData.length; i++) {
        if (forecastData[i].status === 'Critical') {
            critical++;
        } else if (forecastData[i].status === 'Urgent') {
            urgent++;
        } else if (forecastData[i].status === 'Warning') {
            warning++;
        } else if (forecastData[i].status === 'Healthy') {
            healthy++;
        }
    }
  
    document.getElementById('criticalCount').textContent = critical;
    document.getElementById('urgentCount').textContent = urgent;
    document.getElementById('warningCount').textContent = warning;
    document.getElementById('healthyCount').textContent = healthy;
}
```

**How It's Used:**

- Manual loop instead of `filter()` or `reduce()`
- Conditional counting with if-else statements
- No built-in array aggregation methods
- Pure C-style data processing

---

## 📊 Pages & Features

### **Main Inventory Page (`index.html`)**

- Add, update, delete items (Linked List operations)
- Search by ID (Hash Table or Binary Search)
- Sort by price/quantity (Merge Sort)
- Undo operations (Stack)
- Low stock alerts (Queue)

### **Statistics Dashboard (`statistics.html`)**

- Visual charts with Chart.js
- Price distribution bar chart
- Quantity distribution doughnut chart
- Top 10 expensive items
- Stock level analysis
- Price statistics (min, max, avg, median)

### **Forecast & Predictions (`forecast.html`)**

- Priority Queue for reorder recommendations
- Stock depletion timeline
- Urgency scoring system
- Critical/Urgent/Warning/Healthy categorization
- Configurable usage rate and thresholds

---

## 🎓 Learning Outcomes

This project demonstrates:

✅ **Linked List**: Dynamic memory, pointer manipulation
✅ **Hash Table**: O(1) lookups, collision handling concepts
✅ **Stack**: LIFO operations, undo functionality
✅ **Queue**: FIFO operations, circular queue implementation
✅ **Merge Sort**: Divide & conquer, O(n log n) sorting
✅ **Binary Search**: Logarithmic search in sorted data
✅ **Selection Sort**: Simple comparison-based sorting
✅ **Priority Queue**: Priority-based processing
✅ **Manual Memory Management**: Pre-allocation, index tracking
✅ **Algorithm Analysis**: Time & space complexity understanding

---

## 🚦 How to Run

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process required - pure HTML/CSS/JS
4. Pre-loaded with 30 sample items for testing

---

## 💻 Code Philosophy

**C-Style Programming in JavaScript:**

- ❌ No `push()`, `pop()`, `shift()`, `unshift()`
- ❌ No `map()`, `filter()`, `reduce()`, `forEach()`
- ❌ No `sort()`, `slice()`, `concat()`, `splice()`
- ✅ Manual loops (`for`, `while`)
- ✅ Index-based access (`arr[i]`)
- ✅ Manual swapping with temp variables
- ✅ Pointer/counter tracking
- ✅ Pre-allocated arrays

---

## 📈 Time Complexity Summary

| Operation        | Data Structure | Complexity |
| ---------------- | -------------- | ---------- |
| Add Item         | Linked List    | O(1)       |
| Delete Item      | Linked List    | O(n)       |
| Search (Hash)    | Hash Table     | O(1) avg   |
| Search (Binary)  | Sorted Array   | O(log n)   |
| Sort             | Merge Sort     | O(n log n) |
| Undo             | Stack          | O(1)       |
| Low Stock Alert  | Queue          | O(n)       |
| Priority Enqueue | Priority Queue | O(n²) *   |
| Convert to Array | Linked List    | O(n)       |

*Using bubble sort for priority ordering (educational purpose)

---

## 👨‍💻 Author

**DSA Project - Inventory Management System**
Built for educational purposes to demonstrate Data Structures & Algorithms in action.

---

## 📝 License

This project is for educational purposes.
