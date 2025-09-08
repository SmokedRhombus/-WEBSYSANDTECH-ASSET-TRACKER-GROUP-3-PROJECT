# -WEBSYSANDTECH-ASSET-TRACKER-GROUP-3-PROJECT

A beautiful, modern web application to track your personal assets and calculate your net worth in Philippine Pesos. Built in collaboration with Miguel Dominic E. Roa, Ian Federico Santiago, and Samuel Peter Ocampo as a Mapua Malayan Digital College project for our Web Systems and Technology subject.

## 🌟 Features

- **Modern iOS-Style Interface** - Clean and glassmorphic design
- **Philippine Peso Support** - Native support for ₱ currency with proper localization
- **Multiple Asset Categories**:
  - 🏠 Real Estate
  - 🚗 Vehicles 
  - 📱 Personal Items
  - 💳 Cash & Savings
- **Real-time Net Worth Calculation** - Automatically updates as you add/remove assets
- **Data Persistence** - Your data is saved locally and persists between sessions
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Automatically adapts to your system preferences
- **Smooth Animations** - Delightful transitions and hover effects throughout

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/net-worth-tracker.git
   cd net-worth-tracker
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for better experience:
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js (if you have it installed):**
   ```bash
   npx serve .
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Start tracking your net worth!**
   - Open your browser and navigate to `http://localhost:8000` (if using a local server)
   - Or simply double-click `index.html` to open directly

## 📁 Project Structure

```
net-worth-tracker/
├── index.html          # Main HTML structure
├── styles.css          # iOS 26-inspired styling
├── script.js           # Application logic and functionality
└── README.md          # This file
```

## 🎯 Usage Guide

### Adding Assets

1. **Real Estate**: Add properties like homes, condos, or land
2. **Vehicles**: Track cars, motorcycles, boats, etc.
3. **Personal Items**: Electronics, jewelry, collectibles, and more
4. **Cash & Savings**: Bank accounts, cash on hand, investments

### Managing Your Data

- **Add**: Fill in the asset name and value, then click "Add"
- **Remove**: Click the "Remove" button next to any asset
- **Automatic Save**: Your data is automatically saved to your browser's local storage
- **Net Worth**: Updates in real-time as you add or remove assets

### Sample Data

The application includes sample data for demonstration purposes. This will only appear if you haven't added any assets yet. To remove sample data for production use, delete lines 143-169 in `script.js`.

## 🎨 Design Philosophy

This application follows Apple's Human Interface Guidelines and iOS design principles:

- **Clarity**: Clean typography and intuitive layout
- **Deference**: Content takes priority over decorative elements  
- **Depth**: Subtle shadows and glassmorphism create visual hierarchy
- **Accessibility**: High contrast ratios and semantic HTML
- **Performance**: Lightweight and fast-loading

## 🌐 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Changing Currency

To use a different currency:
1. Replace all `₱` symbols with your desired currency symbol
2. Update the locale in `script.js` from `'en-PH'` to your locale (e.g., `'en-US'` for USD)

### Adding New Asset Categories

1. Add the HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. Update the `assets` object and add event listeners in `script.js`

### Modifying Colors

All colors are defined as CSS custom properties in `:root` at the top of `formats.css`. Simply modify these variables to change the color scheme.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Modern web standards and best practices
- Philippine peso localization standards

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/net-worth-tracker/issues) page
2. Create a new issue if your problem hasn't been addressed
3. Provide as much detail as possible including browser version and steps to reproduce

## 🔮 Roadmap

- [ ] Export data to PDF/Excel
- [ ] Data import functionality
- [ ] Multiple currency support
- [ ] Cloud sync capabilities
- [ ] Mobile app version
- [ ] Advanced analytics and charts
- [ ] Asset depreciation calculations
