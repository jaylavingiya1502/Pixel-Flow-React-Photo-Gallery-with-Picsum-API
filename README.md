# ✨ Pixel Flow

### React Photo Gallery using Picsum API

Pixel Flow is a responsive photo gallery built with **React.js** and the **Picsum Photos API**. It allows users to browse photos through a clean card-based interface with **custom pagination, dynamic API fetching, loading states, and responsive design**.

---

## 🚀 Features

* 📸 Browse photos from the Picsum API
* 🔄 Fetch new images dynamically when the page changes
* 📄 Navigate through **125 pages**
* ⚡ Display **8 images per page**
* 🧩 Reusable React components
* ⏳ Loading state while fetching data
* 📱 Responsive photo grid
* 🔗 Open individual photos in a new browser tab
* 🎨 Dark-themed UI with a clean visual style
* 🧠 Smart pagination with ellipsis (`...`) for easier navigation

---

# 🛠️ Tech Stack

| Technology                | Purpose                       |
| ------------------------- | ----------------------------- |
| ⚛️ **React.js**           | Building the user interface   |
| 🟨 **JavaScript (ES6+)**  | Application logic             |
| 🌐 **Axios**              | Making HTTP requests          |
| 🎨 **CSS3**               | Styling and responsive layout |
| 🖼️ **Picsum Photos API** | Providing photo data          |
| 📦 **Vite**               | Development/build tooling     |

---

## 🔄 Project Workflow

The application follows a simple data flow:

```text
User opens the application
          ↓
Current page is initialized
          ↓
React requests photos from Picsum API
          ↓
Loading state is displayed
          ↓
API returns photo data
          ↓
Photos are rendered as reusable Cards
          ↓
User selects another page
          ↓
Page state is updated
          ↓
New API request is triggered
          ↓
New photos are displayed
```

The current page is managed using React state:

```jsx
const [index, setIndex] = useState(1)
```

Whenever the page changes, `useEffect` triggers the API request:

```jsx
useEffect(() => {
  getData()
}, [index])
```

This creates a reactive flow where changing the pagination automatically loads the corresponding set of photos.

---

## 📄 Pagination

Pixel Flow uses a custom pagination algorithm designed to keep the interface compact even though the gallery contains **125 pages**.

Depending on the current page, the pagination dynamically displays relevant page numbers and ellipses:

```text
1  2  3  4  5  ...  125

1  ...  62  63  64  ...  125

1  ...  121  122  123  124  125
```

This keeps navigation clean while still allowing users to quickly move through the gallery.

---

## 🧩 Project Structure

```text
src/
│
├── components/
│   ├── Card.jsx
│   ├── Card.css
│   └── Pagination.jsx
│
├── App.jsx
├── App.css
└── ...
```

### Components

**`App.jsx`**
Handles application state, API requests, pagination logic, loading state, and overall layout.

**`Card.jsx`**
Reusable component responsible for displaying an individual photo and its author.

**`Pagination.jsx`**
Reusable page button component responsible for pagination interaction.

---

## 🌐 API

Pixel Flow uses the **Picsum Photos API** with pagination parameters:

```text
https://picsum.photos/v2/list?page={page}&limit=8
```

The application requests **8 photos per page**, reducing unnecessary data loading and keeping the gallery focused.

---

## 🎨 Responsive Design

The gallery uses CSS Grid with an adaptive column layout:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

This allows the gallery to automatically adapt to different screen sizes without requiring separate layouts for desktop and mobile.

---

## ⚡ Getting Started

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/pixel-flow-react-gallery.git
cd pixel-flow-react-gallery
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## 🎯 What This Project Demonstrates

Pixel Flow showcases practical frontend development concepts including:

**React State Management · API Integration · Asynchronous Data Fetching · Custom Pagination · Reusable Components · Conditional Rendering · Responsive CSS · User Interaction**

---

### Built with React ⚛️

If you like the project, consider giving the repository a ⭐
