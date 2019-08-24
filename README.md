# Bookstore-Api

runs on localhost: 3000

git clone https://github.com/AnoopFranc/Bookstore-Api.git

npm install 

npm run dev

END POINTS:

USER
1 POST /users/register req:({name,email,password})
1 POST users/login req:({name , email})

BOOK
1 POST /books/book req: ({title , author , description , price})
2 GET /books/book rgets all the books 

PURCHASE
1 POST /orders/purchase/:id (id of book as parameter) 
2 GET /orders/purchases get the orders of purchased books by a user