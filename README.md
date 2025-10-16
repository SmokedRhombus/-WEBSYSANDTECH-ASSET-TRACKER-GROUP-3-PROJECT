# Net Worth Tracker

A beautiful, modern multi-page web application to track your personal assets and calculate your net worth in Philippine Pesos. Built with a stunning iOS-inspired interface featuring glassmorphism effects, smooth animations, and intuitive navigation.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎓 Academic Project

This project was developed as part of the **Web Systems and Technology** course at **Mapua Malayan Digital College** under Mapua Malayan Colleges Laguna.

**Development Team:**
- Miguel Dominic E. Roa
- Ian Federico Santiago
- Samuel Peter Ocampo
- Ralph Matthew Paran

## 🌟 Features

### Core Functionality
- **Multi-Page Navigation** - Intuitive navigation between Home, Assets, and About pages
- **Real-time Net Worth Calculation** - Automatically updates across all pages as you add/remove assets
- **Data Persistence** - Your data is saved locally using localStorage and persists between sessions
- **Philippine Peso Support** - Native support for ₱ currency with proper localization (en-PH)

### Asset Categories
Track four different types of assets:
- 🏠 **Real Estate** - Properties, homes, condos, and land
- 🚗 **Vehicles** - Cars, motorcycles, boats, and other vehicles
- 📱 **Personal Items** - Electronics, jewelry, collectibles, and valuables
- 💳 **Cash & Savings** - Bank accounts, cash on hand, and liquid assets

### Design & User Experience
- **Modern iOS-Style Interface** - Clean and elegant glassmorphic design
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Automatically adapts to your system preferences
- **Smooth Animations** - Delightful transitions and hover effects throughout
- **Intuitive Forms** - Easy-to-use input fields with validation
- **Visual Feedback** - Clear indicators for actions and states

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
   
   **Option 1: Direct Browser Opening**
   - Simply open `index.html` in your web browser
   - Double-click the file or right-click → Open with → Your Browser
   
   **Option 2: Using a Local Server (Recommended)**
   
   Using Python:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js:
   ```bash
   npx serve .
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Start tracking your net worth!**
   - Navigate to `http://localhost:8000` (if using a local server)
   - Or simply open `index.html` directly in your browser

## 📁 Project Structure

```
net-worth-tracker/
├── index.html          # Home page with welcome section and features
├── assets.html         # Assets management page with forms
├── about.html          # About page with project info and team details
├── format.css          # Comprehensive styling for all pages
├── script.js           # Application logic and localStorage management
├── mmdclogo.png        # School logo image
├── LICENSE             # MIT License file
└── README.md           # This file
```

## 🎯 Usage Guide

### Navigation
- **Home Page** - Overview of features and total net worth display
- **Assets Page** - Main interface for managing all your assets
- **About Page** - Information about the project and development team

### Adding Assets

1. Navigate to the **Assets** page
2. Choose the appropriate category (Real Estate, Vehicles, Personal Items, or Cash & Savings)
3. Fill in the asset name and value
4. Click the **Add** button
5. Your asset is added and net worth is automatically updated

### Managing Your Data

- **Add Assets**: Fill in the form fields and click "Add"
- **Remove Assets**: Click the "Remove" button next to any asset
- **Automatic Save**: All changes are automatically saved to localStorage
- **Synchronized Display**: Net worth updates across all pages in real-time
- **Sample Data**: Includes demonstration data on first use

### Multi-Page Synchronization

The application uses localStorage to maintain data consistency:
- Add/remove assets on the **Assets** page
- View updated net worth on the **Home** page
- All data persists across browser sessions
- Navigate freely between pages without losing data

## 🎨 Design Philosophy

This application follows Apple's Human Interface Guidelines and modern iOS design principles:

- **Clarity** - Clean typography with San Francisco font stack
- **Deference** - Content-first approach with minimal decorative elements
- **Depth** - Subtle shadows and glassmorphism create visual hierarchy
- **Consistency** - Unified design language across all pages
- **Accessibility** - High contrast ratios and semantic HTML
- **Performance** - Lightweight vanilla JavaScript with no dependencies
- **Responsiveness** - Mobile-first design that scales beautifully

## 🌈 Color System

The application uses a sophisticated color palette with support for both light and dark modes:

**Light Mode:**
- Primary Blue: `#007AFF`
- Secondary Blue: `#5AC8FA`
- Success Green: `#34C759`
- Warning Orange: `#FF9500`
- Error Red: `#FF3B30`

**Dark Mode:**
- Automatically adapts based on system preferences
- Maintains WCAG contrast ratios for accessibility

## 🌐 Browser Support

Tested and fully supported on:
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup and modern standards
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)** - Classes, arrow functions, template literals
- **localStorage API** - Client-side data persistence
- **Responsive Design** - Media queries and mobile-first approach

### Key Features Implementation
- Object-oriented JavaScript with ES6 classes
- Event-driven architecture
- Local storage for data persistence
- Real-time calculations and updates
- Cross-page data synchronization
- Input validation and sanitization
- XSS protection with HTML escaping

## 📧 Customization

### Changing Currency

To use a different currency:
1. Replace all `₱` symbols with your desired currency symbol in HTML files
2. Update the locale in `script.js` from `'en-PH'` to your locale:
   ```javascript
   value.toLocaleString('en-US', {...})  // For USD
   value.toLocaleString('en-GB', {...})  // For GBP
   ```

### Adding New Asset Categories

1. **HTML** (`assets.html`):
   - Copy an existing card structure
   - Update IDs and labels

2. **CSS** (`format.css`):
   - Add icon gradient for new category:
   ```css
   .icon-newcategory { 
       background: linear-gradient(135deg, #COLOR1, #COLOR2); 
   }
   ```

3. **JavaScript** (`script.js`):
   - Add category to `assets` object
   - Add form event listener
   - Update display methods

### Modifying Colors

All colors are defined as CSS custom properties in `:root`:
```css
:root {
    --primary-blue: #007AFF;
    --success-green: #34C759;
    /* Modify any color variable */
}
```

### Removing Sample Data

To remove the demonstration data for production:
1. Open `script.js`
2. Delete or comment out lines in the `setTimeout` function (approximately lines 160-185)
3. Or clear localStorage: `localStorage.removeItem('netWorthData')`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Mapua Malayan Digital College for academic guidance
- Apple Human Interface Guidelines for design inspiration
- Modern web standards and best practices
- Philippine peso localization standards
- Open source community for inspiration

## 🚧 Known Limitations

- Data is stored locally (not synced across devices)
- No user authentication or multi-user support
- No export functionality (planned for future)
- No historical data tracking (current snapshot only)
- Requires JavaScript enabled

## 📮 Future Roadmap

Planned features and improvements:

- [ ] Export data to PDF/Excel
- [ ] Import data from CSV/Excel
- [ ] Multiple currency support with conversion
- [ ] Cloud sync capabilities (Firebase/AWS)
- [ ] User authentication system
- [ ] Mobile app version (React Native/Flutter)
- [ ] Advanced analytics and charts
- [ ] Asset depreciation calculations
- [ ] Historical data tracking and trends
- [ ] Category customization
- [ ] Data backup and restore
- [ ] Print-friendly reports
- [ ] Email reports functionality

## 🤝 Contributing

This is an academic project, but suggestions and feedback are welcome! Feel free to:
- Report bugs
- Suggest new features
- Improve documentation
- Share your experience

## 📊 Project Statistics

- **Total Files**: 6
- **Lines of Code**: ~2000+
- **Development Time**: Academic semester project
- **Team Size**: 3 developers
- **License**: MIT

## 📸 Screenshots

### Home Page
Beautiful welcome interface with feature highlights and real-time net worth display.

### Assets Page
Comprehensive asset management with four categories and intuitive forms.

### About Page
Detailed project information, team profiles, and technical documentation.

---

**Built with ❤️ by Group 3**  
*Mapua Malayan Digital College - Web Systems and Technology*

© 2025 Net Worth Tracker. All rights reserved.
