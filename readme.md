# Hotel Oasis Full Stack Web Application

### Technologies Used
Built using JavaScript, React, Redux, Supabase. Deployed using Netlify and Vercel.

CHECK IT OUT HERE --> https://hotel-oasis.netlify.app/login

Guest Username and Password:
tester@example.com
tester


Details About the application:

- User of the App are Hotel Employees. They need to be logged into the application to perform tasks.
- New users can only be signed up inside the application, in order to guarantee that only actual hotel employees can get into accounts
- User are able to upload an avatar, change their password, and name.
- App has a dark mode.

- App has a table view with all the cabins, showing the cabin photo, name, capacity, price, and current discount.
- Users should be able to update or delete a cabin, and create new cabins (and upload a photo)
- App has a table with all the bookings, showing arrival time, departure dates, status, and paid amount, as well as cabin and guest data
- The booking status can be “unconfirmed” (booked but not check in yet), “checked-in”, or “checked-out”. The table is filterable by this status.
- Other booking data include: number of guests, number of nights, guest observations, whether they booked breakfast, and breakfast price
- Users are able to delete, checkin, or checkout a bookings the guest arrives
- Bookings may not have been paid yet on guest arrival, therefore on check in, users are able to accept payment (outside the app) and confirm that the payment has been received (inside the app)
- On check in the guest have the ability to add breakfast for the entire stay, if they haven’t already
- Guest data contains: Full name, email, nationalID, nationality, and country flag
- The initial app screen has a dashboard to display important information for the last 7, 30, or 90 days.
  - A list of guests checking in and out on the current day.
  - Statistics on recent bookings, sales, check-ins, and occupancy rate
  - A chart showing all daily hotel sales, showing both “total” sales and “extra” sales (only breakfast at the moment)
  - A chart showing statistics on stay durations, as this is an important metric for the hotel
- Users are able to define a few application wide settings: breakfast price, min and max nights/booking, max guests/booking.
