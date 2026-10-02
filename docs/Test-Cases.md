# TravelBookingPanel – Test Cases

## Project Overview

| Item | Details |
|---|---|
| Application | TravelBookingPanel |
| Automation Tool | Playwright |
| Language | TypeScript |
| Test Management | Jira |
| Version Control | Git / GitHub |
| CI | GitHub Actions |
| Automated Browser | Chromium |

## Test Case Summary

| ID | Test Case | Module | Jira | Status |
|---|---|---|---|---|
| TC-001 | Registration with Valid Information | Customer Account | KAN-5 | Passed |
| TC-002 | Registration Validation | Customer Account | KAN-5 | Passed |
| TC-003 | Login with Valid Credentials | Customer Account | KAN-5 | Passed |
| TC-004 | Login with Invalid Credentials | Customer Account | KAN-5 | Passed |
| TC-005 | Navigate to Flight Service | Flight Booking | KAN-10 | Passed |
| TC-006 | Search Flight with Required Travel Information | Flight Booking | KAN-10 | Skipped – No Flights Found |
| TC-007 | View My Bookings Summary | Customer Account | KAN-5 | Passed |
| TC-008 | View Booking Details | Booking Management | — | Passed |
| TC-009 | Verify Booking Information | Booking Management | — | Passed |
| TC-010 | Filter Search Records with Required Information | Booking Management | — | Passed |
| TC-011 | View Customer Dashboard Booking Summary | Customer Dashboard | — | Passed |
| TC-012 | Access Customer Profile | Customer Account | — | Passed |
| TC-013 | View All Bookings and Access Edit Profile | Customer Account | — | Passed |
| TC-014 | Edit Customer Profile Information | Customer Account | — | Passed |
| TC-015 | Logout from Customer Account | Customer Account | — | Passed |
| TC-016 | Change the User Password | Customer Account | — | Skipped – State-dependent external data |
| TC-017 | Verify Flight Search Form | Flight Booking | KAN-10 | Passed |
| TC-018 | View Flight Search Results | Flight Booking | KAN-10 | Skipped – No Flights Found |
| TC-019 | Filter Flight Search Results | Flight Booking | KAN-10 | Skipped – No Flights Found |
| TC-020 | Enter Flight Booking Information | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-021 | Select Flight Payment Method | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-022 | Verify Flight Price Summary | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-023 | View Flight Booking Invoice | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-024 | Payment Through Stripe Payment Gateway | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-025 | Stripe Card and Link Payment | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-026 | Stripe Payment Amount and Processing | Flight Booking | KAN-10 | Blocked – No Flights Found |
| TC-027 | Verify Booking Details and Invoice | Booking Management | — | Passed |
| TC-028 | Verify Existing Booking Information | Booking Management | — | Passed |

## Execution Summary

- **Total Test Cases:** 28
- **Automated:** 21
- **Passed:** 17
- **Skipped:** 4
- **Blocked:** Flight-dependent cases affected by unavailable flight results
- **Failed:** 0

## Flight Search Blocker

During execution, the flight search repeatedly displayed **"No Flights Found."**

The search was retried with available criteria and the browser Network → Fetch/XHR traffic was inspected. No usable flight-data response was identified. The visible `rum` request returned HTTP 204 and appeared to be monitoring/telemetry traffic rather than flight data.

Because backend/API access was not available, the exact root cause could not be determined.

Affected flight-dependent test cases were not marked as Passed without execution evidence.

See:

`docs/Flight-Search-Blocker.md`

## Automation

The automated tests are implemented using Playwright with TypeScript.

GitHub Actions runs the automated suite using Chromium.

The detailed test cases, steps, expected results, and execution evidence are maintained in Jira.