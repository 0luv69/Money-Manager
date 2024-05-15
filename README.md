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
  ### > Upper section: (Transaction Summary List)
    - Displays a list of all transaction elements along with their total amounts.
    - Provides a button to navigate to the Loan Transaction History Page for checking loan transactions.
    - Loan Transaction History Page

  ### > Lower Section: (Detailed Transaction History)
    - Displays a detailed history of each transaction element upon selection.
    - Offers the ability to select a time period (e.g., 30, 60, or 90 days) for viewing transaction history.
    - Provides filter options for specifying date range and transaction element.

## Loan Overview page: 
  ### > Upper Section: (Tangents Summary List)
    - Lists all tangents with their corresponding total amounts left to pay and take.
  ### > Lower Section: (Detailed Tangents Transaction History)
    - Presents a detailed transaction history for tangents, including selection of time periods.
    - Offers sorting options based on transaction types and due dates.
    - Provides filter options for specifying date range and sorting criteria.

# Getting started with Command line Factor

## Run the Application
```bash
python main.py
```

1. **Welcome Message:** You'll see a welcome message and a numbered list of options representing your financial elements (e.g., Hand Cash, Bank Account Element name) With Loan & Check money Option.

2. **Choose an Option:** Type the number corresponding to the element you want to manage and press Enter. This could be:
   - for managing transactions related to your Element.
   - for managing transactions related to your Loan.
   - for Checking the transaction history.

3. **Entering Details:** The program will prompt you for details like:
   - Reason: Briefly describe the purpose of the transaction. Note: Typing "ed" allows you to remove the last entered transaction in the reason field.
   - Amount: Enter the amount of money involved (Note: positive for income, negative for expenses).
   - Keywords: Add keywords by using the ‘add’ word, or select any one keyword according to the keywords needed also for multiple selections use 1,2,3 Note: select at least 2 keywords like (2,3)).
   - End after adding Multiple Transactions: You can keep entering transactions one after another. When finished, type "end" and press Enter.

4. **Loan Management:** Choose the "Loan" option from the main menu to manage borrowed and lent money. Here you can do:
   - Add reason
   - Amount: - for given & + for Taken loan
   - Tangent: can select only one Tangent with the index number of a particular box like 2 for the second number tangent, to ADD type ‘add’.
   - Due date: just press Enter if it's for 30 days, or type a new date in the format of Year-month-date.
   - Transaction type: N for normal, or D for if deposited money. [Normal/Deposit]
     - Normal: This transaction type is used for regular loan transactions, where money is either borrowed or lent without any additional considerations.
     - Deposit: Use this when money is being paid back on a loan, either way. Think of it as "adding money back" to the loan pool.

   **Why to use opposite menu tab, while payback?**
   - [-]: In the Given tab, money is subtracted from the total when lending money. When we return our money, it gets deducted, hence we record our Taken transaction in the Given tab using the Deposit toggle.
   - [+]: In the Taken tab, money is added to the total when receiving repayment for loans. When we get back our money, it gets added, so we record our Given transaction in the Taken tab using the Deposit toggle.
     - Send or revert transactions for editing or correction.

   **Examples:**
   - Paying Back Money You Borrowed: Use "Deposit" to record when you return the borrowed money in Given Menu Tab [-].
   - Getting Paid Back Money You Lent: Use "Deposit" when someone repays a loan you gave them in Taken Menu Tab [+].

5. **Checking Money:** Select the "Check Money" option to view your overall financial status. This displays summaries of your income, expenses, and loan balances.

6. **Exiting the Program:** When finished, press Enter at the confirmation prompt to exit the command-line interface.

Enjoy managing your finances with the Money Manager command line!

    
# Conclusion
The Money Manager app offers a comprehensive solution for finance management, loan tracking, and transaction history review. Its user-friendly interface and robust features make it an essential tool for personal finance management.
