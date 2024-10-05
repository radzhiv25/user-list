# UserList Application

A simple user management application built using **ReactJS** and **TailwindCSS**. The application allows users to view, add, edit, delete, and search for user records. It’s designed to be responsive and user-friendly, with a clean interface.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Features

- **View Users**: View a list of users with details like name, username, age, employment status, and marital status.
- **Add User**: Add a new user by filling in the form fields such as first name, last name, and username.
- **Edit User**: Edit an existing user's details.
- **Delete User**: Remove a user from the list.
- **Search Users**: Search for users by first name, last name, or username using the search bar.
- **Responsive Design**: The application works seamlessly across desktop and mobile devices.

## Demo
Check out the live demo: [UserList](https://user-list-pearl.vercel.app/)

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Installed automatically with Node.js

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/user-list.git
    cd user-list
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

## Usage

1. **Start the development server:**

    ```sh
    npm run dev
    ```

2. **Open your browser and navigate to `http://localhost:5173`**

3. **Use the application**

## Usage

1. **View Users**: Users are listed in a grid format with basic information such as first name, last name, username, age, and other details.
2. **Add a User**: Click the "Add User" button, fill in the form fields, and click "Add User" to save the new user.
3. **Edit a User**: Click the "Edit" button on an existing user to pre-populate the form. After editing, click "Update User" to save changes.
4. **Delete a User**: Click the "Delete" button on a user to remove them from the list.
5. **Search for Users**: Type in the search bar to filter users by their first name, last name, or username.
6. **Cancel Add/Edit**: If you wish to cancel adding or editing a user, click the "Cancel" button to hide the form and reset the inputs.

## Project Structure

```plaintext
.
├── src
│   ├── components
│   │   ├── Footer.jsx 
│   │   ├── Users.jsx  
│   │   ├── Navbar.jsx     
│   ├── App.jsx             
│   ├── index.css          
│   ├── main.jsx           
│   └── ...
├── tailwind.config.js    
├── package.json            
└── ...
```

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for designing responsive user interfaces.
- **Axios**: A promise-based HTTP client for making API requests (used to fetch initial user data).
- **React Icons**: A library for incorporating popular icons into the React components.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
