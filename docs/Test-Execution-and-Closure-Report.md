# TravelBookingPanel – Test Execution & Closure Report

## 1. Project Information

| Item | Details |
|---|---|
| Application | TravelBookingPanel |
| Testing Type | Manual Testing + Automation Testing |
| Automation Tool | Playwright |
| Language | TypeScript |
| Test Management | Jira |
| Version Control | Git / GitHub |
| CI | GitHub Actions |
| Automated Browser | Chromium |

## 2. Test Scope

Testing covered the following major areas:

- Customer registration
- Login and authentication
- Customer dashboard
- Profile management
- Booking management
- Flight search
- Flight booking
- Payment-related scenarios

## 3. Test Execution Summary

| Metric | Result |
|---|---:|
| Total Test Cases | 28 |
| Automated Test Cases | 21 |
| Passed | 17 |
| Skipped | 4 |
| Failed | 0 |
| Flight-dependent Cases Blocked | 8 |

### Execution Notes

The automated suite was executed using Playwright with Chromium.

Local execution completed with:

- 17 passed
- 4 skipped
- 0 failed

GitHub Actions execution also completed successfully.

## 4. Skipped / Blocked Test Cases

### TC-006 – Search Flight with Required Travel Information

The flight search was submitted successfully, but the application displayed **"No Flights Found."**

The test was therefore skipped rather than marking it as passed without a flight result.

### TC-016 – Change the User Password

This test changes persistent account data on the external demo application.

The test was executed successfully during controlled local testing, but it was skipped from the regular automated suite because repeated execution against the same external account can change the password state and affect subsequent runs.

### TC-018 – View Flight Search Results

Flight search results were unavailable, so the test could not be executed.

### TC-019 – Filter Flight Search Results

This test depends on available flight results and was skipped because the application returned **"No Flights Found."**

### TC-020 to TC-026

These flight booking and payment scenarios depend on successful flight search results.

They were kept blocked/in progress rather than being marked as passed without execution evidence.

## 5. Flight Search Blocker

During testing, the flight search repeatedly displayed:

**"No Flights Found."**

The search was retried using available search criteria.

Browser DevTools → Network → Fetch/XHR traffic was also monitored while performing the search.

No usable flight-data response was identified. The visible `rum` request returned HTTP 204 and appeared to be monitoring/telemetry traffic rather than flight-data.

Backend/API access and server-side logs were not available, so the exact root cause could not be determined.

Detailed evidence is documented in:

`docs/Flight-Search-Blocker.md`

## 6. Automation Execution

The automated test suite was implemented using Playwright and TypeScript.

The Playwright configuration uses:

- Chromium execution for CI
- One worker to avoid parallel interaction with the external demo application
- HTML reporting
- Screenshot capture on failure
- Video capture on failure/retained failure
- Trace retention on failure

## 7. CI Execution

GitHub Actions was configured to execute the Playwright automation suite.

The CI workflow completed successfully using Chromium.

## 8. Test Management

Jira was used during the project for:

- Test case management
- Test execution tracking
- Requirement/module organization
- Test status updates
- Blocked test case tracking

The GitHub repository contains a summary of the 28 test cases, while Jira contains the detailed test management information.

## 9. Limitations

- The project uses a public/demo application.
- Flight inventory/results were unavailable during the final execution period.
- Backend/API access was not available.
- Some test cases depend on persistent external account data.
- Flight-dependent scenarios could not be fully executed without available flight results.

## 10. Test Closure

The planned testing scope was completed to the extent supported by the available application functionality.

Core customer-account, dashboard, booking-management, and other available workflows were automated and executed successfully.

Flight-dependent scenarios were not falsely marked as passed when the application did not provide flight results. The blocker was investigated and documented with the available browser-side evidence.

The automation suite completed with **0 failed tests**, with applicable scenarios skipped or blocked due to documented external application conditions.

## 11. Final Status

**Project Status: Completed**

The project includes:

- Requirements
- Test scenarios
- 28 documented test cases
- Jira test management
- Manual testing activities
- Playwright automation
- Git/GitHub version control
- GitHub Actions CI
- Test execution summary
- Test closure documentation
- Flight-search blocker investigation and evidence