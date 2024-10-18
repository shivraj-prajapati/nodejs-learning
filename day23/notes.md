
# Express.js `app.all()` Example Notes

## Overview
- `app.all()` method ko Express.js mein use kiya jata hai taaki kisi bhi HTTP method (GET, POST, PUT, DELETE, etc.) ke liye ek hi route ko handle kiya ja sake.

## Key Features
- **Single Handler**: Yeh ek hi handler ko sabhi HTTP methods ke liye apply karta hai.
- **Request Method Retrieval**: `req.method` ke through incoming request ka method pata kar sakte hain.
- **Response**: Aap response ko customize kar sakte hain based on the request method.

## Use Cases
- **Common Responses**: Jab aapko kisi route par sabhi methods ke liye ek hi response dena ho.
- **Logging**: Sabhi incoming requests ko log karne ke liye.
- **Maintenance Messages**: Jab server temporarily down ho aur sabhi requests ko ek hi message dena ho.

## Advantages
- **Simplicity**: Simple routes ke liye yeh method easy to implement hai.
- **Reduced Code Duplication**: Alag-alag methods ke liye alag handlers likhne ki zarurat nahi hoti.

## Disadvantages
- **Lack of Specificity**: Agar aapko specific behavior har method ke liye chahiye ho, toh yeh method suitable nahi hai.
- **Code Clarity**: Yeh code ko complex bana sakta hai, kyunki sabhi methods ka logic ek hi jagah hota hai.
