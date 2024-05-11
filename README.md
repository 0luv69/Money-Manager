# Money Manager App

## Introduction

The Money Manager app simplifies finance management through an intuitive Python-based application. It offers a user-friendly interface and robust features for handling transactions, tracking loans, and maintaining a transaction history.

## Technologies Used

- Programming Language: Python
- User Interface (UI) Libraries: Tkinter, Customtkinter, tkcalendar
- Data Handling Libraries: time, datetime, math, timedelta, calendar, os, openpyxl, configparser

## Getting Started

### Installation

Ensure Python is installed. Clone/download the Money Manager app from GitHub and run the `main.py`.

First Clone the Repo

And Run:

```bash
python main.py
```

# Functionality

## Initial Configuration Page

### User Inputs The information : Welcomes new users and gathers initial information.
- File location,
- user name,
- the numbers of financial elements.

### Then user are Redirects to the main page.

## Main Page

### Options
- Select financial element for transactions.
- Loan and Check transaction options available.

## Element Transaction

### For Each Element (e.g., "Handcash")
- Separate tabs for income and expenses.
- Capture reason, amount, and keywords for each transaction.
- Data stored in XML sheet named after transaction element and present date.

## Loan Transaction

### Features
- Tabs: Loan Give and Loan Take.
- Interface elements include due date selector, transaction type toggle, entry fields for reason and amount, and selector box for tangent name.
- Options to send or revert transactions.

## Check Page

### Overview
- Displays list of all transaction elements with total amounts.
- Provides button to check loan transactions.
- Filter options for date range and transaction element.

## Loan Transaction History Page

### Loan Overview
- Lists all tangents with total amounts left to pay and take.
- History view with time period selection.
- Sorting options based on transaction types and due dates.
- Filter options for date range and sorting.

# Conclusion

The Money Manager app offers a comprehensive solution for finance management, loan tracking, and transaction history review. Its user-friendly interface and robust features make it an essential tool for personal finance management.
