import * as route from '@helpers/route';
import * as element from '@helpers/elements';
import * as asserts from '@helpers/asserts';
import {
    ROUTES
} from '@tests/consts/routes';
import * as auth from '@tests/data/customerLogin.data';
import * as customerLogin from '@tests/pages/customerLogin.page';

describe('Customer Login', () => {
    // create a test case to login as a customer
    beforeEach(() => {
        // navigate to the customer login page
        route.visit(ROUTES.home);
    });

    it('Verify success login as a registered customer with selected currency Dollar', () => {
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customerLogin);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.customerAccount);
        element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
        asserts.visible(customerLogin.accountNumber);
        asserts.shouldContainText(customerLogin.accountNumber, 1004);
        asserts.visible(customerLogin.selectedCurrency);
        asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    it('Verify success login as a registered customer with selected currency Pound', () => {
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customerLogin);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.customerAccount);
        element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
        asserts.visible(customerLogin.accountNumber);
        asserts.shouldContainText(customerLogin.accountNumber, 1005);
        asserts.visible(customerLogin.selectedCurrency);
        asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    it('Verify success login as a registered customer with selected currency rupee', () => {
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customerLogin);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.customerAccount);
        element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
        asserts.visible(customerLogin.accountNumber);
        asserts.shouldContainText(customerLogin.accountNumber, 1006);
        asserts.visible(customerLogin.selectedCurrency);
        asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    afterEach(() => {
        element.click(customerLogin.logoutButton);
    });

});

describe('Customer Deposit', () => {
    // create a test case to login as a customer
    beforeEach(() => {
        // navigate to the customer login page
        route.visit(ROUTES.home);
        // login as a customer
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customerLogin);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.customerAccount);
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    describe('Positive Cases', () => {
        it('Verify success deposit with currency dollar as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, auth.CUSTOMER.amount);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
        });

        it('Verify success deposit with currency pound as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, auth.CUSTOMER.amount);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
        });

        it('Verify success deposit with currency rupee as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, auth.CUSTOMER.amount);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
        });

        // afterEach(() => {
        //     element.click(customerLogin.logoutButton);
        // });

    });

    describe('Negative Cases', () => {
        it('Verify error message when depositing with empty amount on Dollar Currency', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            element.click(customerLogin.depositButton);
            element.click(customerLogin.depositButton2);
            cy.wait(500)
            // check validate message is displayed when amount is empty
            // asserts.shouldContainText('[ng-model="amount"]:invalid', auth.CUSTOMER.emptyAmountMessage);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });

        it('Verify error message when depositing with empty amount on Pound Currency', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            element.click(customerLogin.depositButton);
            element.click(customerLogin.depositButton2);
            cy.wait(500)
            // check validate message is displayed when amount is empty
            // asserts.shouldContainText('[ng-model="amount"]:invalid', auth.CUSTOMER.emptyAmountMessage);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });

        it('Verify error message when depositing with empty amount on Rupee Currency', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            element.click(customerLogin.depositButton);
            element.click(customerLogin.depositButton2);
            cy.wait(500)
            // check validate message is displayed when amount is empty
            // asserts.shouldContainText('[ng-model="amount"]:invalid', auth.CUSTOMER.emptyAmountMessage);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });
    });

});

describe('Customer Transaction', () => {
    // create a test case to login as a customer
    beforeEach(() => {
        // navigate to the customer login page
        route.visit(ROUTES.home);
        // login as a customer
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customer);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.account);
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    describe('Positive Cases', () => {
        it('Verify transaction if no transaction created in dollar currency as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
        });
        it('Verify transaction if no transaction created in pound currency as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
        });
        it('Verify transaction if no transaction created in rupee currency as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
        });
        it('Verify transaction if transaction created in dollar currency as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
            cy.wait(500)
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
        });
        it('Verify transaction if transaction created in pound currency as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
            cy.wait(500)
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
        });
        it('Verify transaction if transaction created in rupee currency as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
            cy.wait(500)
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.visible(customerLogin.dateTransaction);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.visible(customerLogin.amountTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.visible(customerLogin.typeTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
            asserts.visible("#anchor0 > td:nth-child(1)")
            asserts.shouldContainText("#anchor0 > td:nth-child(1)", "Feb 9, 2023");
            asserts.visible("#anchor0 > td:nth-child(2)")
            asserts.shouldContainText("#anchor0 > td:nth-child(2)", auth.CUSTOMER.amount);
            asserts.visible("#anchor0 > td:nth-child(3)")
            asserts.shouldContainText("#anchor0 > td:nth-child(3)", "Credit");
        });
    });

});

describe("Customer Withdrawal", () => {
    describe("Positive Case", () => {
        beforeEach(() => {
            route.visit(ROUTES.home);
            // login as a customer
            element.click(customerLogin.pageLogin);
            asserts.urlShouldBe(ROUTES.customer);
            element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
            element.click(customerLogin.loginButton);
            asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
            asserts.urlShouldBe(ROUTES.account);
            asserts.visible(customerLogin.logoutButton);
            asserts.visible(customerLogin.transactionsButton);
            asserts.visible(customerLogin.depositButton);
            asserts.visible(customerLogin.withdrawlButton);
        });
        it('Verify withdrawal if withdrawal created in dollar currency as a registered customer ', () => {
            // Select Dollar
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            // Deposit 100
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
            cy.wait(500)
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.withdrawlButton2);
            asserts.shouldContainText(customerLogin.withdrawlMessage, auth.CUSTOMER.withdrawlMessage);
            asserts.shouldContainText(customerLogin.depositAmount, 0);
            // CheckTransaction
            cy.wait(500)
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.visible(customerLogin.dateTransaction);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.visible(customerLogin.amountTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.visible(customerLogin.typeTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
            asserts.visible("#anchor1 > td:nth-child(1)")
            asserts.shouldContainText("#anchor1 > td:nth-child(1)", "Feb 9, 2023");
            asserts.visible("#anchor1 > td:nth-child(2)")
            asserts.shouldContainText("#anchor1 > td:nth-child(2)", auth.CUSTOMER.amount);
            asserts.visible("#anchor1 > td:nth-child(3)")
            asserts.shouldContainText("#anchor1 > td:nth-child(3)", "Debit");
        });

        it('Verify withdrawal if withdrawal created in pound currency as a registered customer ', () => {
            // Select Pound
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            // Deposit 100
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
            cy.wait(500)
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.withdrawlButton2);
            asserts.shouldContainText(customerLogin.withdrawlMessage, auth.CUSTOMER.withdrawlMessage);
            asserts.shouldContainText(customerLogin.depositAmount, 0);
            // CheckTransaction
            cy.wait(500)
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.visible(customerLogin.dateTransaction);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.visible(customerLogin.amountTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.visible(customerLogin.typeTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
            asserts.visible("#anchor1 > td:nth-child(1)")
            asserts.shouldContainText("#anchor1 > td:nth-child(1)", "Feb 9, 2023");
            asserts.visible("#anchor1 > td:nth-child(2)")
            asserts.shouldContainText("#anchor1 > td:nth-child(2)", auth.CUSTOMER.amount);
            asserts.visible("#anchor1 > td:nth-child(3)")
            asserts.shouldContainText("#anchor1 > td:nth-child(3)", "Debit");

        });

        it('Verify withdrawal if withdrawal created in rupee currency as a registered customer ', () => {
            // Select Rupee
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            // Deposit 100
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
            cy.wait(500)
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.withdrawlButton2);
            asserts.shouldContainText(customerLogin.withdrawlMessage, auth.CUSTOMER.withdrawlMessage);
            asserts.shouldContainText(customerLogin.depositAmount, 0);
            // CheckTransaction
            cy.wait(500)
            element.click(customerLogin.transactionsButton);
            cy.wait(500)
            asserts.visible(customerLogin.backButton);
            asserts.shouldContainText(customerLogin.backButton, auth.CUSTOMER.back);
            asserts.visible(customerLogin.dateTransaction);
            asserts.shouldContainText(customerLogin.dateTransaction, auth.CUSTOMER.dateTransaction);
            asserts.visible(customerLogin.amountTransaction);
            asserts.shouldContainText(customerLogin.amountTransaction, auth.CUSTOMER.amountTransaction);
            asserts.visible(customerLogin.typeTransaction);
            asserts.shouldContainText(customerLogin.typeTransaction, auth.CUSTOMER.typeTransaction);
            asserts.visible("#anchor1 > td:nth-child(1)")
            asserts.shouldContainText("#anchor1 > td:nth-child(1)", "Feb 9, 2023");
            asserts.visible("#anchor1 > td:nth-child(2)")
            asserts.shouldContainText("#anchor1 > td:nth-child(2)", auth.CUSTOMER.amount);
            asserts.visible("#anchor1 > td:nth-child(3)")
            asserts.shouldContainText("#anchor1 > td:nth-child(3)", "Debit");
        });
    });
    describe("Negative Case", () => {
        beforeEach(() => {
            route.visit(ROUTES.home);
            // login as a customer
            element.click(customerLogin.pageLogin);
            asserts.urlShouldBe(ROUTES.customer);
            element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
            element.click(customerLogin.loginButton);
            asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
            asserts.urlShouldBe(ROUTES.account);
            asserts.visible(customerLogin.logoutButton);
            asserts.visible(customerLogin.transactionsButton);
            asserts.visible(customerLogin.depositButton);
            asserts.visible(customerLogin.withdrawlButton);
        });
        it('Verify withdrawal with amount higherthan balance  in dollar currency as a registered customer ', () => {
            // Select Dollar
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.withdrawlButton2);
            asserts.shouldContainText(customerLogin.withdrawlMessage, auth.CUSTOMER.withdrawlMessageError);
            asserts.shouldContainText(customerLogin.depositAmount, 0);
        });

        it('Verify withdrawal with amount higherthan balance  in pound currency as a registered customer ', () => {
            // Select Pound
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.withdrawlButton2);
            asserts.shouldContainText(customerLogin.withdrawlMessage, auth.CUSTOMER.withdrawlMessageError);
            asserts.shouldContainText(customerLogin.depositAmount, 0);
        });

        it('Verify withdrawal with amount higherthan balance  in rupee currency as a registered customer ', () => {
            // Select Rupee
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.fillField(customerLogin.amountInput, 100);
            element.click(customerLogin.withdrawlButton2);
            asserts.shouldContainText(customerLogin.withdrawlMessage, auth.CUSTOMER.withdrawlMessageError);
            asserts.shouldContainText(customerLogin.depositAmount, 0);
        });

        it('Verify error message when withdrawl with empty amount on Dollar Currency', () => {
            // Select Dollar
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.click(customerLogin.withdrawlButton2);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });

        it('Verify error message when withdrawl with empty amount on Pound Currency', () => {
            // Select Pound
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.click(customerLogin.withdrawlButton2);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });

        it('Verify error message when withdrawl with empty amount on Rupee Currency', () => {
            // Select Rupee
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            // Withdraw 100
            element.click(customerLogin.withdrawlButton);
            asserts.visible(customerLogin.amountInput);
            cy.wait(500)
            element.click(customerLogin.withdrawlButton2);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });
    });
});