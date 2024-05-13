# Money Manager App

## Introduction
The Money Manager app simplifies finance management through an intuitive Python-based application. It offers a user-friendly interface and robust features for handling transactions, tracking loans, and maintaining a transaction history.

## Technologies Used
- **Programming Language:** Python
- **User Interface (UI) Libraries:** Tkinter, Customtkinter, tkcalendar
- **Data Handling Libraries:** time, datetime, math, timedelta, calendar, os, openpyxl, configparser

## Ways to Access Money Manager Application
- GUI
- Command line

## Getting Started With GUI

### Installation
Users can install the Money Manager app by following these steps:
1. Ensure Python is installed on your system.
2. Clone or download the Money Manager app from GitHub.
3. Run the `main.py` file to launch the application.

### Functionality: How things work
#### Initial Configuration Page
- Welcomes new users and gathers essential information:
  - File location to store data. (By default it selects the Document folder)
  - User name for Personalization.
  - Number of financial elements you want to track (e.g., Hand Cash, Businesses).
- Redirects you to the main page after setup.

#### Main Page
- Options To do:
  - Store Transaction History: Select any financial element for Storing transactions History on a particular Element.
  - Loan Transaction: Select Loan Button for Getting into Loan Segment.
  - Check Transaction History: Select Check transaction options To view History of your transaction.
  - Saving the Transaction:
     - Data stored in XML sheet named after the transaction element and present date. Where inside page sheet includes columns for [SN, Date, Keywords, Reason, Income, Expenses ].

#### Element Transaction Section/Page
- Tabs: Separate Menu tabs for income [+] and expenses [-].
- Input Details: Capture reason, amount, and keywords for each transaction.
  - Keywords: To track the transaction later
    - Add, Create, or Delete keywords to categorize transactions as needed.
    - Needed To select at least 2 Keywords [one Element name and create another as transaction]
  - Built-in keywords represent the element itself (e.g., Hand Cash).
- Send or revert transactions for editing or correction.

#### Loan Transaction Section/Page
- Tabs: Separate Menu tabs for Loan to Give [-] and Loan to Take [+].
- Input Details: Capture reason, amount, Tangent Name, Due-Date, Transaction Type;
  - Due-Date: set the deadline to pay back the money [default 30 days],
  - Tangent Name: To track the transaction later on a specific Tangent,
    - Can create, add, delete Tangent,
    - Can select only one Tangent for each Transaction,
  - Transaction Type: Toggle button between [Normal/Deposit]
    - Normal: This transaction type is used for regular loan transactions, where money is either borrowed or lent without any additional considerations.
    - Deposit: Use this when money is being paid back on a loan, either way. Think of it as "adding money back" to the loan pool.
        ### Why to use the opposite menu tab, while paying money back? 
         #### [-]: In the Given tab, money is subtracted from the total when lending money. When we return our money, it gets deducted, hence we record our Taken transaction in the Given tab using the Deposit                           toggle.
         #### [+]: In the Taken tab, money is added to the total when receiving repayment for loans. When we get back our money, it gets added, so we record our Given transaction in the Taken tab using the                               Deposit toggle.
        ### Examples
          - Paying Back Money You Borrowed: Use "Deposit" to record when you return the borrowed money in Given Menu Tab [-].
          - Getting Paid Back Money You Lent: Use "Deposit" when someone repays a loan you gave them in Taken Menu Tab [+].
    - Send or revert transactions for editing or correction.


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
