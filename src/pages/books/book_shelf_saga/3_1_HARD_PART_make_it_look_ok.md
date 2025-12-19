TODO:
    - make shelf look bearable to see
    - make books look bearable to see


# damn, i have no idea how to make it all(books,shelf) look good


## Ok, back to the basics: What is a book? What is a bookspine? 
# What am i tying to achive, concreatly

![Book spines](/src/assets/dev/book_backs.jpg)


### hmmm, so far i gather that i can use  
    - spines **flat** or **curved**
    - spines have diffirent **colors**
    - spines have diffirent **font**
    - spines have diffirent **texture**


## IDEA_SH: 
    - i can make shelf with flex like with  topBar| BookComponent bootomBat|


16/12/2025 10:58AM

    - i can make shelf with flex like with  topBar| BookComponent bootomBat|
## IDEA_SH: is implemented successfully
![Book spines](/src/assets/dev/IDEA_SH.png)



## Progress so far, looks better  if you ask me 
now need to fix title size problem for books with large width
            ```
            let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
            let bookTitle = jsonBook.data.doc_title ?? "Title";
            let filterdBookTitle = jsonBook.data.doc_title
              ? jsonBook.data.doc_title.split(" ").slice(0, 6).join(" ")
              : "TITLE";
            let bookTitleFontSize =
              bookTitle.split(" ").length > 3
                ? `${book_width / 5}px`
                : `${book_width / 4}px`;
            console.log(bookTitle, bookTitleFontSize);
            ```

### styleBookFirstAttempt
![styleBookFirstAttempt1](/src/assets/dev/styleBookFirstAttempt1.png)
![styleBookFirstAttempt2](/src/assets/dev/styleBookFirstAttempt2.png)

styleBookFirstAttempt2


NOTE:
    make text into line
        //white-space: nowrap;
        // display: inline-block;
    asro syntax to insert html from text
        set:html={filterdBookTitle}


strange behavior,```transform: rotate(-90deg);``` stopet to rotating text after i removed 
            ``` 
            set:html={filterdBookTitle}
            ```
and then i put it in div as simpe text 

            ``` {filterdBookTitle}

            ```

            ```
                <div
                  style=`
                  text-wrap: balance;
                  transform: rotate(-90deg);
                  font-size: ${bookTitleFontSize}; 
                  align-items:center;
                  `
                />
                {filterdBookTitle}
              </div>
            ```

### ok, now book titles look decent but thas sure is some hacky code 
### i change font-size based on number of letters in remaining title
### and then limit to 6 words in title, then as breaks with ```if (charCount >= 15 && charCount - previosCharCount > 3)```

![Book title](/src/assets/dev/title_text1.png)


# TODO: handle EXEPTION large title on small books  is overflowing
# TODO: handle EXEPTION in books with large size and long titles often text stats from bottom not middle of a book
![Book title](/src/assets/dev/EXEPTION_large_book_long_title.jpg)


![Book title](/src/assets/dev/title_text2.png)
### NOTE: css/html 

              ``` <div style=` background: #252932;
                height: 80%;
                display:flex;
                align-items:center;
                justify-content:center;
                overflow: hidden;
              `
              >
                <div
                  style=`
                  text-wrap: balance;
                  transform: rotate(-90deg);
                  font-size: ${bookTitleFontSize}; 
                  align-items:center;
                  `
                  set:html={filterdBookTitle}
                />
              </div>
              ```

### NOTE:  js
            ```
                let bookTitle = jsonBook.data.doc_title ?? "Title";
                let filterdBookTitle = jsonBook.data.doc_title
                  ? jsonBook.data.doc_title.split(" ").slice(0, 6).join(" ").trimEnd()
                  : "TITLE";

                let fontReferenceWidth =
                  (bookSizeMinMax.min_width + bookSizeMinMax.min_width) / 2;

                let bookTitleFontSize = `${fontReferenceWidth}px`;
                switch (true) {
                  case bookTitle.length > 60:
                    bookTitleFontSize = `${fontReferenceWidth / 6}px`;
                    break;
                  case bookTitle.length > 50:
                    bookTitleFontSize = `${fontReferenceWidth / 5}px`;
                    break;
                  case bookTitle.length > 25:
                    bookTitleFontSize = `${fontReferenceWidth / 4.5}px`;
                    break;
                  case bookTitle.length > 15:
                    bookTitleFontSize = `${fontReferenceWidth / 4}px`;
                    break;
                  case bookTitle.length > 10:
                    bookTitleFontSize = `${fontReferenceWidth / 3.5}px`;
                    break;
                  default:
                    bookTitleFontSize = `${fontReferenceWidth / 3}px`;
                }

                function wrapBookTitle(title) {
                  if (!title) {
                    return "TITLE";
                  }
                  title = title.trimEnd();
                  title = title.split(" ");
                  let charCount = 0;
                  for (let i = 0; i < title.length; i += 1) {
                    let previosCharCount = charCount;
                    charCount += title[i].length;

                    if (charCount >= 15 && charCount - previosCharCount > 3) {
                      title[i] += "<br>";
                    }
                  }
                  return title.join(" ");
                }
                filterdBookTitle = wrapBookTitle(filterdBookTitle);
            ```




