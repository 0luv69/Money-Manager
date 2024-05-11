Money Manager App Documentation

Introduction:

The Money Manager app is a Python-based application designed to help users efficiently manage their finances. It provides a user-friendly interface with features for handling transactions related to different financial elements, tracking loans, and maintaining a transaction history.

Technologies Used:

- Programming Language: Python
- User Interface (UI) Libraries: Tkinter, Customtkinter, tkcalendar
- Data Handling Libraries: time, datetime, math, timedelta, calendar, os, openpyxl, configparser

Getting Started:

Installation:

Ensure that you have Python installed on your system. Clone or download the Money Manager app repository from [GitHub](https://github.com/your-money-manager-repo) and run the main Python script.

Functionality:

Initial Configuration Page:

- Purpose: Welcomes new users and gathers initial information.
- Input: File location, user name, and the number of financial elements to manage money.
- Output: User is redirected to the main page.

Main Page:

- Options:
  - User can select a financial element for transactions.
  - Options for Loan and Check transactions are available.

Element Transaction:

- For Each Element (e.g., "Handcash"):
  - Interface: Separate tabs for tracking income and expenses.
  - Details: Reason, amount, and keywords for each transaction.
  - Storage: Data is stored in an XML sheet named after the transaction element and the present date.

Loan Transaction:

- Loan Features:
  - Tabs: Loan Give and Loan Take.
  - Common Interface Elements:
    1. Due date selector (default: present date + 30 days).
    2. Toggle button for Normal or Paying Back transactions.
    3. Entry fields for reason and amount.
    4. Selector box for choosing or adding a new tangent name.
    5. Options to send the transaction or revert.

Check Page:

- Overview:
  - Displays a list of all transaction elements with total amounts.
  - Provides a button to check loan transactions.
  - Filter options for selecting the date range and transaction element.

Loan Transaction History Page:

- Loan Overview:
  - Displays a list of all tangents with total amounts left to pay and left to take.
  - History view with options to select different time periods.
  - Sorting options based on all transactions, loan given, loan taken, and due date crossed.
  - Filter options for date range and sorting.

Conclusion:

The Money Manager app provides a comprehensive solution for managing finances, tracking loans, and reviewing transaction history. Its intuitive user interface and robust features make it a reliable tool for personal finance management.