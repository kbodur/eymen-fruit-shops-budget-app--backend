# Eymen's Fruit Shop Backend

This project serves as the backend for Eymen's Fruit Shop, providing APIs to manage transactions.

## Features

- **GET `/transactions`**: Retrieve all transactions.
- **GET `/transactions/:arrayIndex`**: Retrieve a specific transaction by index.
- **POST `/transactions`**: Add a new transaction.
- **DELETE `/transactions/:indexArray`**: Delete a transaction by index.
- **PUT `/transactions/:arrayIndex`**: Update a transaction by index.

## Technologies Used

- Node.js
- Express.js
- nanoid (for generating unique IDs)
- dotenv (for environment variables)
- cors (for enabling CORS)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/kbodur/eymen-fruit-shops-budget-app--backend.git>
   cd eymen-fruit-shops-budget-app--backend
npm install

PORT=4001

## API Documentation

### GET `/transactions`

Returns an array of all transactions.

### GET `/transactions/:arrayIndex`

Returns the transaction at the specified `arrayIndex`.

### POST `/transactions`

Adds a new transaction to the array. Requires a JSON body with `item_name`, `amount`, `date`, `from`, and `category`.

### DELETE `/transactions/:indexArray`

Deletes the transaction at `indexArray`.

### PUT `/transactions/:arrayIndex`

Updates the transaction at `arrayIndex` with new data. Requires a JSON body with `item_name`, `amount`, `date`, `from`, and `category`.


## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback is much appreciated!


renderLiveUrl[https://eymen-fruit-shops-budget-app-backend2.onrender.com/]