# restaurent-ordering-system-with-vue
Prerequisites
Make sure you have Node.js and npm installed. Install Vue CLI globally.
npm install -g @vue/cli
Setting Up the Project
Create a new Vue project:
vue create restaurant-ordering-system
Navigate to the project directory:
cd restaurant-ordering-system
Create a new Node.js project for the backend:
mkdir backend
cd backend
npm init -y
Install the necessary packages
npm install express mongoose cors body-parser
Run the backend server:
node index.js
Frontend (Vue.js)
Install Axios for making HTTP requests:
npm install axios
Running the Application
Run the backend server:
cd backend
node index.js
Run the Vue development server:
npm run serve
Visit http://localhost:8080 to see the restaurant ordering system in action.

This setup provides a basic restaurant ordering system where users can view a menu, add items to their order, and place an order.
