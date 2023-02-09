import * as route from '@helpers/route';
import * as element from '@helpers/elements';
import * as asserts from '@helpers/asserts';
import {
    ROUTES
} from '@tests/consts/routes';
import * as auth from '@tests/data/customer-login.data';
import * as customerLogin from '@tests/pages/customer-login.page';

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
        asserts.visible(customerLogin.dollarCurrency);
        asserts.shouldContainText(customerLogin.dollarCurrency, 'Dollar');
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
        asserts.visible(customerLogin.poundCurrency);
        asserts.shouldContainText(customerLogin.poundCurrency, 'Pound');
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
        asserts.visible(customerLogin.rupeeCurrency);
        asserts.shouldContainText(customerLogin.rupeeCurrency, 'Rupee');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });
});