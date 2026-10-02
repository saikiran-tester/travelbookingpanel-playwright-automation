\# Flight Search Blocker Investigation



\## Issue



The Flight Search Results page displayed \*\*"No Flights Found"\*\* when attempting to execute the flight-related test cases.



\## Investigation Performed



\* Retried the flight search with available search criteria.

\* Confirmed that the Flight Search Results page continued to display \*\*"No Flights Found."\*\*

\* Opened Chrome DevTools and checked the \*\*Network\*\* tab.

\* Selected \*\*Fetch/XHR\*\* to monitor requests generated during the flight search.

\* Re-ran the flight search while monitoring the network activity.

\* No usable flight-search data response was observed.

\* The visible `rum` request returned HTTP \*\*204\*\* and appeared to be a monitoring request rather than a flight-data response.



\## Impact



Because flight results were unavailable, the following dependent test cases could not be executed:



\* TC-019 – Filter Flight Search Results

\* TC-020 – Flight Booking Information

\* TC-021 – Select Flight Payment Methods

\* TC-022 – Verify Flight Price Summary

\* TC-023 – View Flight Booking Invoice

\* TC-024 – Payment Through Stripe Payment Gateway

\* TC-025 – Stripe Card and Link Payment

\* TC-026 – Stripe Payment Amount and Processing



\## Evidence



Screenshot:



`docs/evidence/flight-search-blocker.png`



The screenshot shows the \*\*"No Flights Found"\*\* message and the Network → Fetch/XHR investigation.



\## QA Decision



The affected test cases were kept in \*\*In Progress\*\* because their required flight data and downstream pages were unavailable.



The test cases were not marked as Passed because the required functionality could not be verified.



\## Limitation



The investigation was limited to the browser/application side. Backend flight inventory, API configuration, and server-side logs were not accessible.



Therefore, the exact root cause could not be confirmed from the available evidence.



