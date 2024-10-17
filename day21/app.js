const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Sample Data (Let's assume we have some users)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
];

// PATCH request to update user partially
app.patch('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updateData = req.body;

    // Find user by ID
    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user with the data provided in the request body
    Object.assign(user, updateData);

    res.json({ message: 'User updated successfully', user });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
