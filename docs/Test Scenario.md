# TravelBookingPanel – Test Scenarios

| Scenario ID | Requirement ID | Module| TestScenario  |

                                                            
| TS-001      | REQ-001        | Registration | Verify that the user can register with valid First Name, Last Name, Email Address, Password, and Confirm Password.                                                                                                                                                |
| TS-002      | REQ-001        | Registration                         | Verify that registration validation is applied when required or invalid registration details are provided.                                                                                                                                                        |
| TS-003      | REQ-002        | Login                                | Verify that a registered user can log in with valid Email Address and Password.                                                                                                                                                                                   
| TS-004      | REQ-003        | Login                                | Verify that the user cannot log in with invalid credentials and that an appropriate error message is displayed.                                                                                                                                                   
| TS-005      | REQ-004        | Service Navigation                   | Verify that the user can access and navigate to the selected service, including Flight, Tour, Stay, Umrah, or Visa.                                                                                                                                               
| TS-006      | REQ-005        | Flight Search                        | Verify that the user can search for a flight by selecting the trip type and providing the required travel information.                                                                                                                                            |
| TS-007      | REQ-006        | My Bookings Summary                  | Verify that the user can view the total number of bookings and available booking and payment status
counts.                                                                                                                                                       |
| TS-008      | REQ-007        | Booking Records and Filters          | Verify that the user can view booking records and filter bookings by available service modules.                                                                                                                                                                   |
| TS-009      | REQ-008        | Booking Details                      | Verify booking record details are displayed in the My Bookings table.                                                                                                                                                                                            
| TS-010      | REQ-008        | Booking Filtering                    | Verify that the user can filter booking records using the available filtering criteria.                                                                                                                                                                           
| TS-011      | REQ-009        | Customer Dashboard                   | Verify that the user can view the booking summary counts on the Customer Dashboard.                                                                                                                                                                               
| TS-012      | REQ-009        | Customer Dashboard                   | Verify that the user can view recent booking records with the required booking information.                                                                                                                                                                       
| TS-013      | REQ-009        | Customer Dashboard                   | Verify that the user can view all bookings and access the Edit Profile option.                                                                                                                                                                                    
| TS-014      | REQ-010        | Update Personal Information          | Verify that the user can view and update personal information including Title, First Name, Last Name, Phone Number, Country, State, PO Box, and Address.   
                                                                                                       
| TS-015      | REQ-010        | Email Address Modification           | Verify that the user cannot modify the Email Address and that the email field is not editable.                                                                                                                                                                    
| TS-016      | REQ-010        | Change Password                      | Verify that the user can change the password by providing the Current Password, New Password, and Confirm Password.    
                                                                                                                                        
| TS-017      | REQ-011        | User Logout                          | Verify that the logged-in user can log out of the customer panel by selecting the Logout option and that the current user session is ended. 
                                                                                                                      
| TS-018      | REQ-012        | View Flight Search Results           | Verify that the user can view available flight results including Airline, Route, Travel Date, Total Fare, Departure Time, Arrival Time, Duration, Number of Stops, and Book option. 
                                                                              
| TS-019      | REQ-012        | Filter Flight Search Results         | Verify that the user can filter flight results by number of stops, price range, and preferred airline.   
                                                                                                                                                         
| TS-020      | REQ-013        | Flight Booking Information           | Verify that the user can provide traveller information including Title, Name, Date of Birth, Passport Number, Nationality, Passport Issuance Date, and Passport Expiry Date to proceed with flight booking.    
                                                   
| TS-021      | REQ-014        | Verify that the user can select an available payment method, including Stripe, After_pay, or PayPal, and proceed with payment using the Pay Now option.          
                                                                                                            
| TS-022      | REQ-014        | Flight Price Summary                 | Verify that the user can view the price summary including Flight Charges, Taxes & Fees, and Total Amount before payment.  
                                                                                                                                        
| TS-023      | REQ-015        | Flight Booking Invoice               | Verify that the user can view the generated booking invoice containing the Invoice Number, Booking Reference, Booking Status, Payment Status, Flight PNR Number, Departure Date, Passenger Information, Flight Details, Traveller Information, and Price Summary. |

| TS-024      | REQ-016        | Stripe Payment                       | Verify that the user can make payment through the Stripe payment gateway by selecting a supported currency and an available payment method.                                                                                                                       |
| TS-025      | REQ-016        | Stripe Card and Link Payment         | Verify that the user can pay using a card without Link or use Link with a saved payment method or a new payment method.                                                                                                                                           |
| TS-026      | REQ-016        | Stripe Payment Amount and Processing | Verify that the payment amount is displayed in the selected currency and that the user can proceed with payment using the available payment option.                                                                                                               |
| TS-027      | REQ-017        | Booking and Payment Status           | Verify that the flight Booking Status is updated to Confirmed and the Payment Status is updated to Completed after successful payment.                                                                                                                            |
| TS-028      | REQ-017        | Booking Confirmation Details         | Verify that the booking invoice displays the Booking Reference, Flight PNR Number, Flight Details, Traveller Information, and Price Summary.                                                                                                                      |
| TS-029      | REQ-018        | View Flight Booking Records          | Verify that the user can view completed flight booking records in My Bookings, including Booking Reference, Booking Status, Payment Status, Price, PNR, and Booking Date.                                                                                         |
| TS-030      | REQ-019        | View Flight Booking Details          | Verify that the user can open a flight booking record and view detailed information including Invoice, Module, Booking Status, Payment Status, Price, PNR, Booking Date, Flight Details, Traveller Information, and available Actions.                            |

## Traceability Summary

| Requirement ID | Test Scenarios         |
| -------------- | ---------------------- |
| REQ-001        | TS-001, TS-002         |
| REQ-002        | TS-003                 |
| REQ-003        | TS-004                 |
| REQ-004        | TS-005                 |
| REQ-005        | TS-006                 |
| REQ-006        | TS-007                 |
| REQ-007        | TS-008                 |
| REQ-008        | TS-009, TS-010         |
| REQ-009        | TS-011, TS-012, TS-013 |
| REQ-010        | TS-014, TS-015, TS-016 |
| REQ-011        | TS-017                 |
| REQ-012        | TS-018, TS-019         |
| REQ-013        | TS-020                 |
| REQ-014        | TS-021, TS-022         |
| REQ-015        | TS-023                 |
| REQ-016        | TS-024, TS-025, TS-026 |
| REQ-017        | TS-027, TS-028         |
| REQ-018        | TS-029                 |
| REQ-019        | TS-030                 |

**Total Requirements:** 19

**Total Test Scenarios:** 30
