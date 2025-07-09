import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AgifyClient } from '../api/agifyClient';


let response: any;
let responseBody: any;

When('I send a GET request to agify API with name {string}', async function (inputName: string) {
    const agifyClient = new AgifyClient();
    await agifyClient.init();
    response = await agifyClient.getAge(inputName);
    try {
        responseBody = await response.json();
    } catch (e) {
        responseBody = null;
    }
});

Then('Verify that response status should be {int}', function (expectedStatus: number) {
    expect(response.status()).toBe(expectedStatus);
});

Then('Verify that response should include name {string}', function (expectedName: string) {
    expect(responseBody.name).toBe(expectedName);
});

Then('Verify that response should include age as a number', function () {
    expect(typeof responseBody.age).toBe('number');
});

Then('Verify that response should include count as a number', function () {
    expect(typeof responseBody.count).toBe('number');
});

Then('Verify that API should return an error', function () {
    expect(response.status()).toBeGreaterThanOrEqual(400);
});

Then('Verify that response should include age as null', function () {
    expect(responseBody.age).toBeNull();
});