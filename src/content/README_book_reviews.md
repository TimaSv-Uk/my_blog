# this directory is dedicated to **my book reviews**

file title is a book uri from my readEra backup .json

NOTE: all uri's have this format and i remove **sha-1:** from my revievs file name
        ```
        sha-1:82cdba93f03adaff6d9d77f9770645af93c85d7f
        ``` 




Rating: 9.6/10
Rating: 9.6
It will be float but rationd out of 10


## Now, i need to put uri param in reviewe for it to be recognized:
        ``` 
        const thisBookReviws = await getCollection("book_reviews", ({ data }) => {
          return data.uri === jsonBook.uri;
        });
        ``` 
