const express = require('express');
const app = express();

let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Vinsinzo', email: 'vono@china.com' }
];

app.put('/users/:id', (req, res) => {
    let data = ''; 

    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        try {
            const updateData = JSON.parse(data);
            const userId = parseInt(req.params.id);

            const user = users.find(u => u.id === userId);
            if (!user) {
                return res.status(404).send('User not found');
            }

            user.name = updateData.name || user.name;
            user.email = updateData.email || user.email;

            res.status(200).json({ message: 'User updated successfully', user });
        } catch (error) {
            res.status(400).send('Invalid JSON data');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
