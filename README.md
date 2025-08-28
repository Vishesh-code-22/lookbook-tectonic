# Fashion Lookbook – Machine Coding Round (Tectonic)

Thanks for taking the time to check out this project! This was built as part of a **Machine Coding Interview** for Tectonic, where the goal was to create a working fashion lookbook experience from scratch.

---

## About the Challenge

The idea is inspired by how fashion e-commerce platforms encourage customers and celebrities to share their style. Think of it as an Instagram-like experience where each “look” is a mix of images or videos showcasing people wearing one or more products from a brand.

A **lookbook** brings these looks together in a smooth, interactive way, where users can:

-   **Preview images and videos**
    – Images automatically advance every 5 seconds with a progress bar.
    – Videos play to completion (with mute/unmute support).

-   **Navigate easily**
    – Tap left/right to go back or forward.
    – Swipe up/down to explore different looks.

-   **Shop the look**
    – Each image can have annotations (little dots) pointing to products.
    – Clicking a product opens its details page.

The focus was on **mobile web first**, with some responsiveness added for desktop if time allowed.

---

## How I Approached It

I broke the task down into a few clear steps:

1. **Set up the project** – Used React + Vite for a fast dev environment.
2. **Designed the core lookbook flow** – Swipe, tap, and progress bar for images/videos.
3. **Added product annotations** – Clickable dots to highlight items in the look.
4. **Made it smooth and clean** – Focused on a simple, responsive design.

I also aimed to keep the code modular and easy to extend — so new features or product types can be added without a complete rewrite.

---

## How to Run the Project

1. Clone this repository:

    ```bash
    git clone <repo-link>
    cd <project-folder>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open the app in your browser (typically at `http://localhost:5173`).

---

## Deployment

If you want to try it out live, I’ve hosted it here:
**[Demo Link (if available)](https://your-demo-link.com)**

---

## Notes & Limitations

-   Edge cases are handled where possible. If something can’t be processed, it fails gracefully rather than breaking the whole experience.
-   The data uses placeholder images/videos from the internet.
-   Product detail page is a simple mockup — can easily be connected to a backend or e-commerce API.

---

## Submission Details

As per Tectonic’s instructions:

-   This repository is public and contains everything needed to review the code.
-   It's hosted on vercel
