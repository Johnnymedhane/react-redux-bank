# 🏦 React-Redux Bank App ⚛️

A banking application built with React and Redux Toolkit featuring currency conversion, loans, and state management.

## ✨ Features

- 👤 Customer account creation and management
- 💰 Multi-currency deposits with automatic USD conversion
- 💸 Withdrawals and balance tracking
- 🏦 Loan requests and payments
- 🌐 Real-time currency conversion via Frankfurter API
- ⏳ Loading states and error handling

## 🛠 Tech Stack

React 19 • Redux Toolkit • React-Redux • Frankfurter API

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Johnnymedhane/react-redux-bank.git
cd react-redux-bank

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

## 🌐 Live Demo

🔗 **[View Live App](https://johnnymedhane.github.io/react-redux-bank/)**

## 📦 Deployment

This app is automatically deployed to GitHub Pages using GitHub Actions.

### Deploy to GitHub Pages
```bash
# Build and deploy
npm run build
npm run deploy
```

## 🏗 Project Structure

```
src/
├── App.js                    # Main app component
├── store.js                  # Redux store config
└── features/
    ├── accounts/             # Account operations & state
    └── customers/            # Customer management & state
```

## 💡 Usage

1. **Create Customer** → Enter name and ID
2. **Banking Operations** → Deposit, withdraw, request loans
3. **Currency Support** → Automatic conversion to USD

## 🔧 Redux State

```javascript
{
  customer: { fullName, nationalID, CreatedAt },
  account: { balance, loan, loanPurpose, isLoading }
}
```

## 🌐 API

**Currency Conversion**: [Frankfurter API](https://www.frankfurter.app/)
```
GET https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD
```
