# Fish Shop Billing

A simple billing web app for a fish shop (Samarth Fish, Bigwan). It runs fully in the browser: no server, no internet and no installation needed.

## Features

- **Login** page (default username `admin`, password `admin123`; change it in Settings)
- **Billing**: tap a fish button, enter the weight in Kg on the calculator keypad, enter or confirm the rate, and the amount is calculated. Add as many fish as needed, then print the bill. The bill has the date and time, but no customer name, no mobile number and no discount.
- **Dashboard**: today's sale, bills today, Kg sold, this month's sale, top fish, a 7-day chart and recent bills
- **Fish Management**: add, rename, delete fish and set default rates
- **Sale Analysis**: pick a date range to see totals, fish-wise, day-wise and bill-wise sales. Reprint any old bill and download the data as an Excel (CSV) file.
- **Settings**: shop details printed on the bill, change login, backup and restore, and password-protected clear of all sales data
- **Languages**: English and Marathi, switch from the top-right of every page
- **Responsive**: works on laptop, tablet and smartphone

## Billing flow

1. Log in.
2. Tap a fish button.
3. Type the weight (Kg) on the keypad. Tap the Rate box (or press Tab) to change the rate. The amount is weight x rate.
4. Press **Add to Bill**. Repeat for every fish the customer buys.
5. Check the total, then press **Print Bill**. The sale is saved and the next bill number is used.

## How to run

1. Unzip the folder and keep all files together.
2. Double-click `index.html` to open it in Chrome (or Edge or Firefox).
3. Always use the same browser on the same computer, and open it from the same folder each time.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure (login, menu, pages, keypad, bill) |
| `style.css` | All colours and layout, including the responsive rules and the print style |
| `app.js` | All the logic: login, billing, storage, analysis, backup, language text |
| `logo.png` | Logo printed at the top of every bill. Replace it with another picture to change the logo |
| `readme.md` | This file |

## Where the data is stored

Data is stored in the browser's local storage on the device you use (not on a server). Each device and each browser has its own separate data.

It can be lost if you clear the browser's site data, use a private window, or switch to another browser or computer.

**Take a backup every day:** Settings > Backup & Restore > Download Backup. Keep the file on a pen drive or in Google Drive. Use the same page to restore it.

## Customising

- **Shop name, address, mobile:** Settings > Shop details
- **Fish names and rates:** Fish Management
- **Logo:** replace `logo.png` (keep the same file name)
- **Tagline and the top line of the bill:** search for `Fresh Fish - Best Quality` and `ॐ नमः शिवाय` in `app.js`
- **Colours:** the variables at the top of `style.css`, and the 10 fish button colours under `.fish button:nth-child(...)`
- **Marathi or English text:** the `L` object at the top of `app.js`

## Notes

- Login is a simple lock for the shop and does not give strong security.
- Clearing all sales data cannot be undone. Download a backup first.
- Bill printing uses the browser's print dialog and is sized for a 76 mm receipt printer.
