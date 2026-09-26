💰 Personal Finance Advisor Bot

An AI-powered personal finance planning assistant designed to help individuals manage their income, track expenses, create personalized budgets, monitor savings, and gain intelligent financial insights.

The Personal Finance Advisor Bot combines a Flask-based full-stack architecture with Gemini AI to simplify personal financial management. Users can record monthly income, track daily and weekly expenses by category, receive personalized budgeting recommendations, and analyze their monthly financial performance from a centralized platform.

🚀 Features

💵 Income Management

Record and manage monthly income.

Support for different income sources.

Track income over time.

🧾 Expense Tracking

Record daily and weekly expenses.

Categorize expenses such as:

Rent

Food

Transport

Entertainment

Education

Healthcare

Utilities

Other expenses

📊 Personalized Budget Planning

Generate budget plans based on income and spending patterns.

Set category-wise spending limits.

Identify areas of excessive spending.

🤖 AI-Powered Financial Insights

Analyze spending behavior using Gemini AI.

Generate personalized financial recommendations.

Provide actionable suggestions for reducing unnecessary expenses.

💰 Savings Management

Track monthly savings.

Monitor progress toward financial goals.

Receive saving recommendations.

📅 Monthly Financial Reports

Compare income and expenses.

View total savings.

Identify budget overruns.

Review financial performance for the month.

👥 Multiple User Scenarios

Salaried professionals

College students

Freelancers

Household managers

🧠 How It Works

The system follows a simple financial management workflow:

             ┌───────────────────┐
             │       User        │
             └─────────┬─────────┘
                       │
                       ▼
             ┌───────────────────┐
             │   Flask Web App   │
             └─────────┬─────────┘
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
      ┌──────────────┐    ┌──────────────┐
      │   Expense &  │    │   Financial  │
      │ Income Data  │    │   Database   │
      └──────┬───────┘    └──────┬───────┘
             │                   │
             └─────────┬─────────┘
                       ▼
              ┌─────────────────┐
              │   AI Analysis   │
              │   Gemini AI     │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Budget & Saving │
              │ Recommendations │
              └────────┬────────┘
                       │
                       ▼
              ┌─────────────────┐
              │ Monthly Report  │
              └─────────────────┘

🛠️ Tech Stack
Technology	Purpose
Python	Core backend programming
Flask	Web application framework
SQLAlchemy	Database ORM
SQLite	Database management
JavaScript	Frontend functionality
Gemini AI	AI-powered financial analysis
HTML/CSS	User interface
Git & GitHub	Version control and collaboration
📂 Project Structure
personal-finance-advisor-bot/
│
├── app/
│   ├── __init__.py
│   ├── routes.py
│   ├── models.py
│   ├── services/
│   │   └── ai_service.py
│   │
│   ├── templates/
│   │   ├── base.html
│   │   ├── dashboard.html
│   │   ├── income.html
│   │   ├── expenses.html
│   │   ├── budget.html
│   │   └── reports.html
│   │
│   └── static/
│       ├── css/
│       └── js/
│
├── instance/
│   └── finance.db
│
├── tests/
│
├── .env
├── .gitignore
├── requirements.txt
├── config.py
├── run.py
└── README.md


The project structure may vary depending on the final implementation.

⚙️ System Requirements
Hardware

Processor: Intel Core i5 8th Gen or above / AMD Ryzen 5 or equivalent

RAM: Minimum 8 GB

Recommended RAM: 16 GB

Storage: Minimum 256 GB SSD or 500 GB HDD

Internet: Minimum 10 Mbps recommended

Software

Windows 10/11, macOS, or Linux

Python 3.8+

Git

Visual Studio Code or another IDE

Modern web browser

AWS CLI (if deployment/AWS labs are required)

📥 Installation
1. Clone the Repository
git clone https://github.com/your-username/personal-finance-advisor-bot.git


Move into the project directory:

cd personal-finance-advisor-bot

2. Create a Virtual Environment
Windows
python -m venv venv
venv\Scripts\activate

macOS / Linux
python3 -m venv venv
source venv/bin/activate

3. Install Dependencies
pip install -r requirements.txt

🔑 Environment Configuration

Create a .env file in the root directory:

GEMINI_API_KEY=your_gemini_api_key
SECRET_KEY=your_secret_key


Replace your_gemini_api_key with your Gemini API key.

Important: Never commit your .env file or API keys to GitHub.

Add the following to .gitignore:

.env
venv/
__pycache__/
*.pyc
instance/

▶️ Running the Application

Start the Flask application:

python run.py


Or, depending on your Flask configuration:

flask run


The application will typically be available at:

http://127.0.0.1:5000/


Open the address in your web browser.

💡 Example Use Cases
👨‍💼 Salaried Professional

A salaried user records their monthly salary and tracks expenses such as rent, food, transportation, and entertainment.

The system analyzes spending patterns and provides:

Category-wise expense analysis

Personalized budget recommendations

Saving suggestions

Monthly financial summaries

🎓 College Student

A student enters their monthly allowance and tracks spending across essential and discretionary categories.

The system helps them:

Set realistic spending limits

Identify unnecessary expenses

Monitor remaining allowance

Improve saving habits

💻 Freelancer

A freelancer can record income received from multiple clients while tracking project-related expenses.

The system can help analyze:

Variable monthly income

Monthly saving capacity

Expense patterns

Emergency fund planning

🏠 Household Manager

A household manager can track shared income and expenses such as:

Groceries

Utilities

Education

Healthcare

Transportation

The system generates consolidated financial insights and identifies categories where spending exceeds the planned budget.

📊 Core Financial Workflow
Add Income
    ↓
Record Expenses
    ↓
Categorize Spending
    ↓
Analyze Financial Data
    ↓
Generate Budget
    ↓
AI Financial Insights
    ↓
Track Savings
    ↓
Generate Monthly Report

🔮 Future Enhancements

The project can be extended with additional financial intelligence and productivity features:

📈 Predictive spending analytics

🎯 Goal-based savings tracking

🚨 Budget overspending alerts

💳 Recurring expense management

📊 Advanced financial dashboards

💼 Investment planning suggestions

🏦 Emergency fund tracking

📱 Mobile application

☁️ Cloud-based deployment

🔐 User authentication and authorization

📑 PDF financial reports

🧠 Advanced AI-driven financial health analysis

📆 Long-term spending trend analysis

🔒 Security Considerations

Financial information is sensitive data. A production version should include:

Secure authentication

Password hashing

Environment-based API key management

Input validation

CSRF protection

Secure session management

Database access controls

HTTPS deployment

Proper authorization for user-specific financial data

⚠️ Disclaimer

This project is intended for educational and personal financial planning purposes.

AI-generated financial insights are informational and should not be considered professional financial, investment, tax, or legal advice. Users should independently verify important financial decisions with a qualified professional.

🎯 Project Objectives

The main objectives of the Personal Finance Advisor Bot are to:

Simplify personal income and expense tracking.

Automate personalized budget generation.

Provide AI-powered spending insights.

Encourage structured saving habits.

Generate meaningful monthly financial reports.

Provide a scalable foundation for future financial planning features.

📌 Project Information

Project: Personal Finance Advisor Bot

Type: AI-Powered Full-Stack Web Application

Backend: Python + Flask

Database: SQLite + SQLAlchemy

AI Engine: Gemini AI

Frontend: HTML, CSS, JavaScript

Version Control: Git + GitHub

👨‍💻 Development

This project is developed as an AI-powered financial management solution combining web development, database management, and generative AI technologies.

Contributions, suggestions, and improvements are welcome.

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
