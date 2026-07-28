# Media Search Application

A full-featured media search engine built with React, Redux Toolkit, and Vite. Search for photos, videos, and GIFs, and save your favorites to a personal collection!

## Features

- **Multi-Media Search**: Quickly search for photos, videos, and GIFs using tabs.
- **Personal Collection**: Save your favorite media items to your local collection.
- **Persistent Storage**: Your collection is saved to `localStorage`, so it stays even when you refresh.
- **Beautiful UI**: Designed with Tailwind CSS v4 featuring a cohesive dark mode color palette.
- **Interactive Notifications**: Toast notifications let you know when you've successfully added or removed items from your collection.
- **Smooth Loading**: Uses `react-spinners` for a great user experience while fetching data.

## Tech Stack

- **Framework**: React 19 + Vite
- **State Management**: Redux Toolkit (`searchSlice` & `collectionSlice`)
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Notifications**: React Toastify
- **Data Fetching**: Axios integrating with Unsplash, Pexels, and Giphy APIs.

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: `--legacy-peer-deps` is recommended due to React 19 peer dependencies in some packages).*

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_UNSPLASH_KEY=your_unsplash_api_key
   VITE_PEXELS_KEY=your_pexels_api_key
   VITE_GIPHY_KEY=your_giphy_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the application in your browser (usually `http://localhost:5173/`).
2. Type a query in the search bar and hit **Search**.
3. Toggle between **Photos**, **Video**, and **GIF** tabs to view different media types.
4. Click the **Save** icon on any media card to add it to your personal collection.
5. Click **View Collection** in the top right to see all your saved media. From there, you can remove individual items or clear the entire collection.
