# ACONEWS

ACONEWS is a responsive news application built with React. It fetches and displays news articles from the GNews API. The application features a search bar, a category dropdown, and pagination for navigating through news articles.

## Features

- Fetches news articles from the GNews API.
- Responsive design for mobile, tablet, and desktop.
- Search functionality to find news articles.
- Dropdown menu for selecting news categories.
- Pagination for navigating through news results.

## Getting Started

### Prerequisites

- Node.js and Yarn installed on your machine.
- Firebase account and CLI.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chhedadhruv/aconews.git
   ```
   cd aconews
   
2. Install dependencies:
   ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```bash
    REACT_APP_GNEWS_API_KEY=your_api_key_here

### Running the Application Locally

1. Start the development server:
   ```bash
   yarn start
   ```
    The application will be running at `http://localhost:3000`.

### Building the Application

1. Build the application:
   ```bash
   yarn build
   ```
    The build files will be generated in the `build` directory.

### Deploying the Application

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
    firebase login
    ```

3. Initialize Firebase project:
    ```bash
     firebase init
    ```
     Select `Hosting` and choose the Firebase project.

4. Deploy the application:
    ```bash
    firebase deploy
    ```
    The application will be deployed to Firebase Hosting.

### Acknowledgements

- [GNews API](https://gnews.io/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)