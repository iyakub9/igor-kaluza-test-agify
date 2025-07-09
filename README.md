# QA API Test – agify.io

This project is a technical test for Kaluza. It tests the public [agify.io](https://agify.io) API. The solution is built using **Cucumber**, **Playwright**, and **TypeScript**.

---

## 🚀 How to Run the Tests

### 1. Install dependencies
```bash
  npm install
```

### 2. Run the tests
```bash
  npm test
```

### 3. Generate HTML test report
```bash
  npm run report
```

---

## 🧪 Technologies Used

- [Cucumber.js](https://github.com/cucumber/cucumber-js) – for BDD-style testing
- [Playwright](https://playwright.dev/) – to send HTTP requests (API testing)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/) – version 18+
- [cucumber-html-reporter](https://www.npmjs.com/package/cucumber-html-reporter) – to generate a test report

---

## 📁 Project Structure

```
features/         # Gherkin test scenarios
src/
  steps/          # Step definitions (BDD glue code)
  api/            # API client using Playwright
report/           # HTML test report output
```

---

## ✅ Test Scenarios Covered

1. **Age by valid first name**
2. **Age by full name**
3. **Empty name returns null**
4. **Special characters return null**
5. **Mixed valid and special characters return null**

---

## 📊 Test Report

After running `npm test`, generate an HTML report using:

```bash
  npm run report
```

This will create a file at:

```
report/cucumber_report.html
```

You can open this file in any browser to review test results.

---

## 📦 Node.js Version

This project uses:

```
Node.js v18
```

You can ensure version consistency by using `nvm`:

```bash 
   nvm use
```

> A `.nvmrc` file is included for version management.

---

## 👤 Author

**Igor Yakub**