// Group 3 Members
// Miguel Dominic E. Roa
// Ian Federico Santiago
// Samuel Peter Ocampo

class NetWorthTracker {
    constructor() {
        this.assets = {
            realEstate: [],
            vehicles: [],
            items: [],
            cash: []
        };
        
        this.initializeEventListeners();
        this.loadFromStorage();
        this.updateDisplay();
    }

    initializeEventListeners() {
        document.getElementById('realEstateForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addAsset('realEstate', 'propertyName', 'propertyValue');
        });

        document.getElementById('vehicleForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addAsset('vehicles', 'vehicleName', 'vehicleValue');
        });

        document.getElementById('itemForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addAsset('items', 'itemName', 'itemValue');
        });

        document.getElementById('cashForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addAsset('cash', 'accountName', 'accountValue');
        });
    }

    addAsset(category, nameField, valueField) {
        const name = document.getElementById(nameField).value.trim();
        const value = parseFloat(document.getElementById(valueField).value) || 0;

        if (name === '') {
            alert('Please enter a name for the asset.');
            return;
        }

        if (value <= 0) {
            alert('Please enter a valid positive value.');
            return;
        }

        const asset = {
            id: Date.now() + Math.random(),
            name: name,
            value: value,
            dateAdded: new Date().toLocaleDateString()
        };

        this.assets[category].push(asset);
        
        document.getElementById(nameField).value = '';
        document.getElementById(valueField).value = '';
        
        this.updateDisplay();
        this.saveToStorage();
    }

    removeAsset(category, assetId) {
        this.assets[category] = this.assets[category].filter(asset => asset.id !== assetId);
        this.updateDisplay();
        this.saveToStorage();
    }

    updateDisplay() {
        this.updateCategoryDisplay('realEstate', 'realEstateList', 'realEstateTotal');
        this.updateCategoryDisplay('vehicles', 'vehicleList', 'vehicleTotal');
        this.updateCategoryDisplay('items', 'itemList', 'itemTotal');
        this.updateCategoryDisplay('cash', 'cashList', 'cashTotal');
        this.updateNetWorth();
    }

    updateCategoryDisplay(category, listId, totalId) {
        const listElement = document.getElementById(listId);
        const totalElement = document.getElementById(totalId);
        const assets = this.assets[category];

        if (assets.length === 0) {
            listElement.innerHTML = `
                <div class="empty-state">
                    <div class="empty-icon">📭</div>
                    <p>No assets added yet</p>
                </div>
            `;
        } else {
            listElement.innerHTML = assets.map(asset => `
                <div class="asset-item">
                    <div class="asset-info">
                        <div class="asset-name">${this.escapeHtml(asset.name)}</div>
                        <div class="asset-details">Added ${asset.dateAdded}</div>
                    </div>
                    <div class="asset-value">₱${asset.value.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    <button class="btn btn-danger" onclick="tracker.removeAsset('${category}', ${asset.id})">Remove</button>
                </div>
            `).join('');
        }

        const total = assets.reduce((sum, asset) => sum + asset.value, 0);
        totalElement.textContent = `₱${total.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }

    updateNetWorth() {
        const total = Object.values(this.assets).flat().reduce((sum, asset) => sum + asset.value, 0);
        document.getElementById('totalNetWorth').textContent = `₱${total.toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    }

    saveToStorage() {
        localStorage.setItem('netWorthData', JSON.stringify(this.assets));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('netWorthData');
        if (saved) {
            this.assets = JSON.parse(saved);
        }
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, (m) => map[m]);
    }
}

const tracker = new NetWorthTracker();

setTimeout(() => {
    if (Object.values(tracker.assets).flat().length === 0) {
        tracker.assets.realEstate.push({
            id: 1,
            name: "Primary Residence",
            value: 15000000,
            dateAdded: "4/06/2025"
        });
        
        tracker.assets.vehicles.push({
            id: 2,
            name: "2025 Ford Ranger Raptor",
            value: 2500000,
            dateAdded: "2/15/2025"
        });
        
        tracker.assets.items.push({
            id: 3,
            name: "MacBook Pro M4 14\"",
            value: 100000,
            dateAdded: "1/20/2025"
        });
        
        tracker.assets.cash.push({
            id: 4,
            name: "Savings Account",
            value: 995452.56,
            dateAdded: "3/26/2025"
        });
        
        tracker.updateDisplay();
    }
}, 500);