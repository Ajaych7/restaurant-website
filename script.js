// // Function to handle form submission for login
// function handleLogin(event) {
//     event.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;
//     // Add your logic to handle login here
//     console.log('Login:', username, password);
//   }
  
//   // Function to handle form submission for signup
//   function handleSignup(event) {
//     event.preventDefault();
//     const fullName = document.getElementById('signupFullName').value;
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
//     // Add your logic to handle signup here
//     console.log('Signup:', fullName, email, password);
//   }
  
//   // Add event listeners to login and signup forms
//   document.getElementById('loginForm').addEventListener('submit', handleLogin);
//   document.getElementById('signupForm').addEventListener('submit', handleSignup);
// // Function to handle form submission for login
// function handleLogin(event) {
//     event.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;
//     // Add your logic to handle login here
//     console.log('Login:', username, password);
//   }
  
//   // Function to handle form submission for signup
//   function handleSignup(event) {
//     event.preventDefault();
//     const fullName = document.getElementById('signupFullName').value;
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
//     // Add your logic to handle signup here
//     console.log('Signup:', fullName, email, password);
//   }
  
//   // Add event listeners to login and signup forms
//   document.getElementById('loginForm').addEventListener('submit', handleLogin);
//   document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
// Function to get the menu
function getMenu() {
  fetch('menu.json')
    .then(response => response.json())
    .then(data => {
      const menuItems = document.getElementById('menuItems');
      data.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const image = document.createElement('img');
        image.src = item.imgSrc;
        image.alt = item.name;
        menuItem.appendChild(image);

        const name = document.createElement('h3');
        name.textContent = item.name;
        menuItem.appendChild(name);

        const price = document.createElement('p');
        price.textContent = '$' + item.price.toFixed(2);
        menuItem.appendChild(price);

        menuItems.appendChild(menuItem);
      });
    })
    .catch(error => {
      console.error('Error fetching menu:', error);
    });
}

// Function to take the order
function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
      const order = {
        burgers: [
          burgers[Math.floor(Math.random() * burgers.length)],
          burgers[Math.floor(Math.random() * burgers.length)],
          burgers[Math.floor(Math.random() * burgers.length)]
        ]
      };
      resolve(order);
    }, 2500);
  });
}

// Function for order preparation
function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Function for payment
function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

// Function to display "Thank you" message
function thankYouFunc() {
  alert('Thank you for eating with us today!');
}

// Function to handle the restaurant tasks
async function handleRestaurantTasks() {
  getMenu();
  const order = await takeOrder();
  console.log('Order:', order);
  const prepStatus = await orderPrep();
  console.log('Preparation Status:', prepStatus);
  const paymentStatus = await payOrder();
  console.log('Payment Status:', paymentStatus);
  thankYouFunc();
}

// Run the function to start the process
handleRestaurantTasks();
