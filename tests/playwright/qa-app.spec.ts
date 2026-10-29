import { test, expect } from '@playwright/test';

// Test cases mirror test-results.md. Expected results are traced to that file;
// where it does not pin exact wording, the assertion says so.

test.beforeEach(async ({ page }) => {
  await page.goto('/index.html');
});

test('TC-LOGIN-001: Login with empty fields', async ({ page }) => {
  await expect(page.getByLabel('Email')).toBeEmpty();
  await expect(page.getByLabel('Password')).toBeEmpty();

  await page.getByRole('button', { name: 'Login', exact: true }).click();

  await expect(page.getByRole('status')).toHaveText('Please enter email and password.');
});

test('TC-LOGIN-002: Login with entered credentials', async ({ page }) => {
  await page.getByLabel('Email').fill('qa@example.com');
  await page.getByLabel('Password').fill('Test123');

  await page.getByRole('button', { name: 'Login', exact: true }).click();

  // Full message taken from the Actual column in test-results.md. This is the
  // current demo behaviour, not an approved requirement.
  await expect(page.getByRole('status')).toHaveText('Demo only: login is not connected to a server.');
});

test('TC-SUBMIT-001: Submit with a full name gives visible feedback', async ({ page }) => {
  // Known seeded bug: the Submit click handler in index.html is intentionally empty,
  // so no feedback appears. Marked as an expected failure; if Submit starts giving
  // feedback, Playwright reports this test as "passed unexpectedly" and the mark
  // should be removed. This is a demo bug, not a confirmed product defect.
  test.fail();

  const status = page.getByRole('status');
  await expect(status).toBeEmpty();

  await page.getByLabel('Full name').fill('Xuan');
  await page.getByRole('button', { name: 'Submit', exact: true }).click();

  // NEEDS BA/DEV CONFIRMATION: the success behavior and message are not specified.
  // This only checks that *some* feedback appears in the page's status region.
  await expect(status).not.toBeEmpty();
});
