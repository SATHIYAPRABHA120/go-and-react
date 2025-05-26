# TODAY-TASK Manager using Go and React

This is a full-stack task management app built using Go for the backend and React with TypeScript for the frontend.

---

## Features

- Perform CRUD operations on tasks  
- Mark tasks as completed  
- Responsive, accessible UI built with React and Chakra UI  
- Environment-aware API configuration for flexible deployment  
- Robust error handling and data fetching using React Query  

---

## Tools Used

- **Go** — High-performance backend API server  
- **React + TypeScript** — Type-safe and scalable frontend UI development  
- **MongoDB** — NoSQL database for flexible and scalable data storage  
- **Chakra UI** — Accessible and modular component library for styling  
- **React Query (TanStack Query)** — Efficient server state management, caching, and data synchronization  
- **Fetch API** — Native HTTP client for API requests   

---

## How to Run Locally

### Prerequisites

- Go (v1.18 or higher)  
- Node.js (v16 or higher)  
- Git  

### Setup Instructions

1. Clone the repository:
   - git clone https://github.com/SATHIYAPRABHA120/go-and-react.git
   - cd go-and-react

2.Start the backend API server (ensure MongoDB is running):
  - cd client 
  - go run main.go

3.Start the frontend development server:
  - cd client
  - npm install
  - npm run dev

4.Access the application in your browser at: http://localhost:5173

### Environment Configuration
1. Create a .env file for the following contents (say for example) :
    - PORT=5000
    - MONGODB_URI = mongodb+srv://username:password@cluster0.6sdqxgs.mongodb.net/database_name?retryWrites=true&w=majority&appName=Cluster0
    - ENV = development

### Video Demonstration : (Demo)[https://drive.google.com/file/d/1SbqLjRBduqNKe-1cQg9OiXs6QI4ebzIN/view?usp=sharing]

   
