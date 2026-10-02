# TravelBookingPanel – Playwright Automation

## Project Overview

TravelBookingPanel is a web application automation testing project created using Playwright with TypeScript.

### Tools & Technologies

- Playwright
- TypeScript
- Jira
- Git & GitHub
- GitHub Actions
- HTML Test Report

## Testing Scope

The project covers:

- Customer registration
- Login and authentication
- Customer dashboard
- Profile management
- Booking management
- Flight search
- Flight booking and payment scenarios

## Test Cases

The project contains **28 test cases**.

The test case overview is available here:

[View Test Cases](docs/Test-Cases.md)

Detailed test steps, expected results, execution status, and test management activities are maintained in Jira.

## Jira Test Management

Jira is used for:

- Detailed test case management
- Test execution tracking
- Requirement and module tracking
- Blocked test case tracking
- Flight search blocker documentation

**Jira Project:** TravelBookingPanel QA

The GitHub `docs/Test-Cases.md` file provides a summary of the 28 test cases, while Jira contains the detailed testing information.

## Automation Execution

Playwright tests are executed using Chromium.

### Local Execution

```bash
npx playwright test --project=chromium