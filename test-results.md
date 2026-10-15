# QA Training App - Test Results

## TC-LOGIN-001: Login with empty fields
- Preconditions: QA Training App is open in Chrome.
- Steps:
  1. Leave Email empty.
  2. Leave Password empty.
  3. Click Login.
- Expected: The message "Please enter email and password." is displayed.
- Actual: The message "Please enter email and password." was displayed.
- Status: PASS

## TC-LOGIN-002: Login with entered credentials
- Preconditions: QA Training App is open in Chrome.
- Steps:
  1. Enter qa@example.com in Email.
  2. Enter Test123 in Password.
  3. Click Login.
- Expected: A demo message explains that login is not connected to a server.
- Actual: The message "Demo only: login is not connected to a server." was displayed.
- Status: PASS

## TC-SUBMIT-001: Submit button does not respond
- Preconditions: QA Training App is open in Chrome.
- Steps:
  1. Enter Xuan in Full name.
  2. Click Submit.
- Expected: The form provides appropriate feedback according to the confirmed requirements.
- Actual: No feedback appeared after clicking Submit.
- Status: FAIL
- Note: This is an intentionally seeded bug in the local demo, not a verified defect in a real application.
