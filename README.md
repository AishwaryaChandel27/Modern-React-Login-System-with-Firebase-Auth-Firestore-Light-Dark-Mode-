# 🔐 Modern React Login System with Firebase Auth & Firestore | Light & Dark Mode 🌙☀️

This project is a modern **React-based login system** built using **Firebase Authentication** and **Firestore**. It features a responsive design with **Material UI** components, including Light and Dark Mode support.

---

## 🚀 Features

- **User Authentication**
  - Login, Sign-Up, and Logout functionalities.
  - Firebase Authentication for secure user management.
- **Firestore Integration**
  - Store and retrieve user details.
- **Responsive Design**
  - Styled with Material UI for a modern and clean UI.
- **Light & Dark Mode**
  - Toggle between light and dark themes seamlessly.
- **Form Validation**
  - Prevent invalid submissions with robust input validation.

---

## 🛠️ Technologies Used

- **React.js**
- **Firebase**
  - Firebase Authentication
  - Firebase Firestore
- **Material UI (MUI)**
- **React Router DOM**
- **Environment Variables** (to secure sensitive information)

---

## 📂 Project Structure

```
firebase-login-system/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.js          # Login Form
│   │   ├── Register.js       # Registration Form
│   │   ├── Dashboard.js      # User Dashboard
│   │   ├── ThemeToggle.js    # Light & Dark Mode Toggle
│   ├── firebase.js           # Firebase Configuration
│   ├── App.js                # Main App Component
│   ├── index.js              # React DOM Rendering
│   ├── theme.js              # MUI Theme Configuration
├── .env                      # Environment Variables
├── package.json              # Project Dependencies
└── README.md                 # Project Documentation
```

---

## 🔑 Firebase Setup

To configure Firebase for this project, follow these steps:

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project and register your app.
3. Enable **Authentication** > Sign-in method > Email/Password.
4. Set up **Firestore Database** in test mode.
5. Add your Firebase configuration to a `.env` file in the root directory:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

## 🛠️ Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AishwaryaChandel27/Modern-React-Login-System-with-Firebase-Auth-Firestore-Light-Dark-Mode-
   cd firebase-login-system
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Project**
   ```bash
   npm start
   ```

4. **Access the App**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## 🌙 Light & Dark Mode

The theme toggle functionality allows users to switch between **Light** and **Dark** modes.

- Utilizes **MUI's ThemeProvider** to dynamically switch themes.
- Saves user preferences for a better user experience.

---

## 🖥️ Screenshots

### 1. Login Page
![Login Page](https://github.com/AishwaryaChandel27/Modern-React-Login-System-with-Firebase-Auth-Firestore-Light-Dark-Mode-/blob/main/project_screenshots/Screenshot%202024-12-17%20194604.png)

### 2. Register Page
![Register Page](https://github.com/AishwaryaChandel27/Modern-React-Login-System-with-Firebase-Auth-Firestore-Light-Dark-Mode-/blob/main/project_screenshots/Screenshot%202024-12-17%20194830.png)

### 3. Dashboard with Dark Mode
![Dashboard Dark Mode](https://github.com/AishwaryaChandel27/Modern-React-Login-System-with-Firebase-Auth-Firestore-Light-Dark-Mode-/blob/main/project_screenshots/Screenshot%202024-12-17%20194754.png)

### 4. Dashboard with DARK Mode
![Dashboard Light Mode](https://github.com/AishwaryaChandel27/Modern-React-Login-System-with-Firebase-Auth-Firestore-Light-Dark-Mode-/blob/main/project_screenshots/Screenshot%202024-12-17%20194909.png)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

- **Your Name**
- GitHub: [@AishwaryaChandel27](https://github.com/AishwaryaChandel27)
- LinkedIn: [Aishwarya Chandel](https://www.linkedin.com/in/aishwaryachandel/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and create a pull request.

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

---

## ⭐ Acknowledgments

Special thanks to the following tools and libraries:

- **Firebase** for backend services.
- **Material UI** for styling components.
- **React.js** for building the frontend.

If you find this project helpful, don't forget to ⭐ the repository!

