# Car Rental Search Results Page

A fully responsive **Car Rental Search Results Page** built with **Next.js (App Router)** and **Tailwind CSS**, replicating a Figma-based UI.  
The app supports **real-time client-side filtering**, **skeleton loading**, and a **mobile-friendly filter drawer**.

**Live Demo:** https://car-rental-search-azure.vercel.app/  
**GitHub Repo:** https://github.com/Divyanshi2408/Car-Rental-Search

---
## Screenshot

<img width="1366" height="1372" alt="Image" src="https://github.com/user-attachments/assets/3220721d-1879-4427-86a8-b2009352ca2f" />

---

## Features

- Figma-accurate UI layout
- Real-time filtering (no page reload)
- Skeleton loaders for better UX
- Fully responsive (Desktop / Tablet / Mobile)
- Mobile filter drawer 
- Clean component-based architecture
- Deployed on Vercel

---

## Tech Stack

- **Framework:** Next.js 
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **State Management:** React `useState`, `useEffect`
- **Data Source:** Local mock JSON
- **Deployment:** Vercel
- **Version Control:** GitHub

---

## Project Structure

```
car-rental-search/
├── app/
│ ├── layout.js
│ └── page.js
│
├── components/
│ ├── Header.jsx
│ ├── SearchBar.jsx
│ ├── FiltersSidebar.jsx
│ ├── ResultsGrid.jsx
│ ├── CarCard.jsx
│ ├── CarIcons.js
│ ├── SkeletonCard.jsx
│ ├── SearchBarSkeleton.jsx
│ └── FiltersSidebarSkeleton.jsx
│
├── data/
│ └── cars.json
│
├── public/
│ └── images
│
├── README.md

```
## Filters Implemented (Real-Time)

All filters work **client-side** and update results **instantly** without any page reload.

- **Car Type** (multi-select)
- **Passengers** (filters cars with seats ≥ selected value)
- **Transmission** (Automatic / Manual)
- **Deposit Range**
- **Cards Accepted at Pickup**
- **Rental Company**
- **Clear Filters** (resets all filters and restores full results)

UI state always reflects active filters  
Filtering happens in real-time (no reload)

---

## Loading & UX

- Skeleton loaders shown during initial data load
- Smooth slide-in / slide-out transitions for the mobile filter drawer
- Clean **empty state** displayed when no cars match the selected filters
- Readable and well-spaced car card layout for better user experience

---

## Getting Started Locally

Follow these steps to run the project on your local machine:

```bash
# Clone the repository
git clone https://github.com/Divyanshi2408/Car-Rental-Search.git

# Navigate into the project directory
cd car-rental-search

# Install dependencies
npm install

# Run the development server
npm run dev
```
Open **http://localhost:3000** in your browser to view the app.

---

## Filter Logic (Short Explanation)

- All filters are stored in a single `filters` state object
- Cars are filtered using JavaScript `Array.filter()`
- Each filter condition returns `false` when a car does not match
- Results update instantly when the filter state changes
- **Clear Filters** resets the filter state to its default values

This approach keeps the logic **simple, readable, and performant**.

---

## Contact
- [divyanshipal2808@gmail.com]
- https://www.linkedin.com/in/divyanshi-pal/
