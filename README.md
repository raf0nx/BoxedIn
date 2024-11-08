# 📦 BoxedIn

**BoxedIn** is a smart, AI-powered app that optimally distributes cargo within defined loading spaces. Using the **GPT-4o API**, it analyzes both the space and cargo dimensions to place items in the most efficient arrangement, making it ideal for logistics, warehousing, and transport planning.

## 🚀 Technologies Used

- **React** + **TypeScript** for a responsive and type-safe user interface
- **Vite** for fast, efficient building and development
- **Vitest** as the test runner for comprehensive test coverage
- **GPT-4o API** for intelligent load distribution
- **Three.js** for 3D visualization of optimally arranged cargo

## ✨ Features

- **Define Loading Space Dimensions**: Set the width, height, and depth of your space.
- **Define Cargo Dimensions**: Set length, height, and width for each cargo item.
- **Add Cargo**: Add individual cargo items with unique specifications.
- **Increase/Decrease Cargo Count**: Adjust the quantity of specific cargo items.
- **Delete Cargo**: Remove unwanted cargo items from the list.
- **Rename Cargo**: Customize cargo names for easy identification.
- **Optimize Load Distribution**: Automatically perform optimal cargo arrangement in the given space using the GPT-4o API.

## 🛠️ Getting Started

To run **BoxedIn** locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/BoxedIn.git
   cd BoxedIn
   ```

2. **Install Dependencies**:
   Use either npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   Open the local server URL provided in the terminal to view the app.

4. **Build for Production**:

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

5. **Preview the Production Build**:

   ```bash
   npm run preview
   ```

   or

   ```bash
   yarn preview
   ```

6. **Run Tests**:

   ```bash
   npm run test
   ```

   or

   ```bash
   yarn test
   ```

> **🔑 Note:**  
> To use the GPT-4o API, add an `.env` file in the root directory with your OpenAI API key:
>
> ```
> VITE_OPENAI_API_KEY=your_openai_api_key
> ```

## 🎥 Demo

![BoxedIn_demo](https://github.com/user-attachments/assets/dc03e26f-6193-4450-96d6-9cd92e1cdc0e)
