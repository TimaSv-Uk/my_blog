TODO:
    - make shelf look interesting
    - make books look interesting



## BRAINSHTORM: look and feel of shelfs
  - make shelfs organic or tree like
  - make shelfs wood like
  - make shelfs look diffirent depending on time  
  - make shelfs cosmic like
  - make shelfs stone/coal like
  - make shelfs style tell story of my mood/life at the time
    - change shelf backgroud depending on shelf style
  - make shelfs futuristic/hacker/compuret sience style
  - make shelfs with shadow that falls on books
  - make shelfs 2.5D or 3D or add shaders
    

## FIXES: 
   - fit more books on shelf no assesive empty space
   - add author name to title
   - TODO: handle EXEPTION large title on small books  is overflowing
     TODO: handle EXEPTION in books with large size and long titles often text stats from bottom not middle of a book

  ![Book title](/src/assets/dev/EXEPTION_large_book_long_title.png)
  ![Book title](/src/assets/dev/title_text2.png)


## EXPEREMENT:

  May be usefull in the future **transform-style: preserve-3d;**
  ```
  .book {
    transform-style: preserve-3d;
    box-shadow:
      10px 10px 0 #636363,
      10px 10px 0 #636363,
  }
  ```
  ![experement3D](/src/assets/dev/experement3D.png)

Make shelf out of junji ito spirals(it kinda reminded me of wood pattern), high contrast thick blurred border and white background
Maybe add grainy texture
  ![wooden_shelf](/src/assets/dev/wooden_shelf.jpeg)
  ![junji_ito_spiral_clouds](/src/assets/dev/junji_ito_spiral_clouds.jpeg)

  
added link to book page from Shelf when click on book spine; some refactoring  
  




  
# big refactor to Organizes book elements into rows based on the available shelf width.
#### but it freaking broke the shelf i had before, and fliped all the books ,damn
```
<script define:vars={{ jsonBooks, bookSizeMinMax }}>
  const bookCount = jsonBooks.length;

  function chunkArray(arr, numOfChunks) {
    const result = [];
    let chunkSize = Math.floor(arr.length / numOfChunks);
    // console.log(chunkSize)
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  /**
   * Organizes book elements into rows based on the available shelf width.
   * * @param {HTMLElement[]} bookElemets - An array of DOM elements representing books.
   * @param {number} shelfWidth - The total horizontal pixels available per row.
   * @returns {Object.<string, HTMLElement[]>} An object where keys are row IDs (e.g., 'row_0')
   * and values are arrays of book elements in 그 row.
   * rowID:[books...]
   */
  function putBooksOnShelfs(bookElemets, shelfWidth) {
    let shelf = {};
    let countSelfedBooks = 0;
    let currentShelfRow = 0;
    let avaliableShelfRowSpace = shelfWidth;
    while (countSelfedBooks < bookElemets.length) {
      let selectedBook = bookElemets[countSelfedBooks];

      if (avaliableShelfRowSpace < selectedBook.clientWidth) {
        currentShelfRow++;
        avaliableShelfRowSpace = shelfWidth;
      }
      avaliableShelfRowSpace -= selectedBook.clientWidth;
      countSelfedBooks++;

      if (!shelf[`row_${currentShelfRow}`]) {
        shelf[`row_${currentShelfRow}`] = [selectedBook];
        continue;
      }
      shelf[`row_${currentShelfRow}`].push(selectedBook);
    }

    return shelf;
  }
  function setUpShelf(shelfID = "shelf", bookSpine = ".bookSpine") {
    const shelf = document.getElementById(shelfID);
    const bookSpines = shelf.querySelectorAll(".bookSpine");
    let bookRows = putBooksOnShelfs(bookSpines, shelf.clientWidth);
    console.log(bookRows);
    for (let bookRow in bookRows) {
      let booksInRow = bookRows[bookRow];
      let shelfRow = document.getElementById(`${bookRow}`);
      if (shelfRow == null) {
        shelfRow = document.createElement("div");
        shelfRow.id = `${bookRow}`;
        shelfRow.className = `shelfRow`;
      }
      console.log(shelfRow);
      const rowOfBooks = document.createElement("div");

      rowOfBooks.className = `rowOfBooks`;
      const topShelfBar = document.createElement("div");
      const bottomShelfBar = document.createElement("div");
      topShelfBar.style = `
          background-color: #DD3E65;
          width: 100%;
          height: 20px;
        `;
      bottomShelfBar.style = `
          background-color: #DD3E65;
          width: 100%;
          height: 20px;
        `;
      shelfRow.appendChild(topShelfBar);
      booksInRow.forEach(book => {
            rowOfBooks.appendChild(book); // This moves the book into the row
        });
      shelfRow.appendChild(rowOfBooks);
      shelfRow.appendChild(bottomShelfBar);

      shelf.appendChild(shelfRow);
    }
  }

  /** remove all elements from shelf exept books */
  function removeEmptyRows(shelfID = "shelf", bookSpine = ".bookSpine") {
    const shelf = document.getElementById(shelfID);

    const bookSpines = shelf.querySelectorAll(bookSpine);
    shelf.replaceChildren(...bookSpines);
  }

  window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
      setUpShelf();
    });
  });
  window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
      removeEmptyRows();
      setUpShelf();
    });
  });

  // const bookSpines = document.querySelectorAll(`.bookSpine`);
  // bookSpines.forEach((book) => {
  //   book.addEventListener("click", () => {
  //     console.log(book);
  //   });
  // });
</script>
<style>
  #shelf{
          display: flex;
          flex-wrap: wrap;
          gap: 0.1rem;     
          width: 85%;
          align-items:flex-end;
  }
  .shelfRow {
    border: 10px solid #d4d9e4;
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: auto, auto;
  }

  .rowOfBooks {
    display: flex;
    gap: 0.1rem;
    width: 90%;
    align-items: flex-end;
    margin: auto, auto;
    padding-top: 0.5rem;
  }
</style
```
