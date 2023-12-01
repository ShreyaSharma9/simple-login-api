
const express = require('express');


const app = express();
        const PORT = process.env.PORT || 3000;


app.use(express.json());



        app.use(express.urlencoded({ extended: true }));


const users = [
  {
    username: 'shreya',
    password: '449944',
    id: 1,
  },

//   {  
//     username: 'developer',
//     password: '449944'
//   }
];


app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    console.log('Received username:', username);
          console.log('Received password:', password);
  
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (!user) {
      console.log('Login failed: invalid credentials');
      return res.status(401).json({ message: 'Login failed: invalid credentials' });
    }
  
    console.log('Login successful');
                res.json({ message: 'Login successful', user });
  });
  







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
