my goal is to get relatively normal(like in printed books about 1800 words per page)
page count for my books

test book is `All the sinners bleed`

on koreader app that is desired outcom
page count -- font size
    339    --    30

page count -- font size
    746    --    60  
    216    --    30 
    224    --    31
    216    --    30
    201    --    29

i have  746 -- 60 and new font 30 or any other 
and 216 i got from app after changing font size


so far i know:

    console.log(746/60) 
    console.log(224/31) 
    console.log(216/30) 
    console.log(201/29) 
    === 
    12.433333333333334
    7.225806451612903
    7.2
    6.931034482758621
 
    const test = dataDocSizeData.pagesCount / (60/30)
    console.log(test)
    ===
    373.5


## NICE
that result will do now i only need to make it reprodusable for any starting font 
    ```
    ## dataDocSizeData.pagesCount / (CURRERNT_FONT_Size/NEW_FONT_Size)
    const test = dataDocSizeData.pagesCount / (60/30)
    373.5
    ```
for Stephen King -- IT my formula gave me 1722.5 in koreader it is 1339 
need to tune 




that is intrestind allmost my font size fot IT but quite random otherwise
    ```
    ratio = font_size_reflowable/dataDocSizeData.pagesCount
    const test = (dataDocSizeData.pagesCount/ratio) / (dataDocSizeData.pagesCount)
    // IT - 57.41666666666667
    // All the sinners bleed - 12.45
    ```
i think i got it i need to make a proportion 
    take
    test book is `All the sinners bleed`
   Book -- Expected page count -- Wrong page count
  `All the sinners bleed`  --  339    --    746
  `IT`  --  1348    --    3445


so far im scuck here but i think i move in right direction

    ```
        dataDocSizeDatao:  {ratio: 0.5759577278731837, configHash: 1872426508, page: 436, pagesCount: 758, offsetX: 0, …}
        my_readEra:83 60.00000000000001
        my_readEra:94 (2) [339, 216]
        my_readEra:97 dataDocSizeDatao:  482.9734513274336
        my_readEra:37 dataDocSizeDatao:  {ratio: 0, configHash: 1872426508, page: 0, pagesCount: 747, offsetX: 0, …}
        my_readEra:38 60
        my_readEra:49 (2) [339, 216]
        my_readEra:52 dataDocSizeDatao:  475.9646017699115
    ```

this will have to do so far

    ```
    // only works for IT King 
    // const real_page_count = 1348 
    // const readera_font_dended_page_count = 3445 
    // only works for all the sinner bleed
    const real_page_count = 339 
    const real_page_count = 339 
    let readera_font_dended_page_count = 746 
    //readera_font_dended_page_count =  216
      
    const page_ratio = readera_font_dended_page_count/real_page_count

    const correct_font_size =  Math.round(dataDocSizeData.pagesCount / page_ratio)
    console.log("dataDocSizeDatao: ",correct_font_size)
    ```


main ratio here not tested  
    ```
    const real_page_count = 339 
    let readera_font_dended_page_count = 746 
    const page_ratio = readera_font_dended_page_count/real_page_count

    ```

   Book -- Expected page count -- Calculated
  `All the sinners bleed`  --  339    --    339
  `IT`  --  1348    --     1565
  `Hobbit`  --  327    --     344
  `Shards of honor`  --  253    --     308


## here the final code, i donloaded back up with font 30(in previos tests backup was for 60 font-size) and found 
## out that ReadEra only saves pagesCount once you open book 
## that meand all data is inconsistent cause i changed fonts couple of times

# i dirch this method and will try to get additional data for a books from `https://openlibrary.org`

    ```
        const prefsReadEraPath = path.resolve('./src/readEra_font30/prefs.xml');
        const prefsReadEraXMLText = await fs.readFile(prefsReadEraPath, 'utf-8');
        ---

        <div
          id={json_book.uri}
          class="book"
          style={bookStyle}
        >
          {json_book.data.doc_title} -- {json_book.data.doc_have_read_time}
        </div>

        <script define:vars={{json_book,prefsReadEraXMLText}}>

          const parser = new DOMParser();
          const doc = parser.parseFromString(prefsReadEraXMLText, "text/xml");

          const font_size_reflowable = 
          [...doc.getElementsByTagName("String")].find(
            (el) => el.getAttribute("name") === "pref_reflowable_font_size").textContent
          
        // .pref_reflowable_font_size
          const book = document.getElementById(`${json_book.uri}`);
          const dataDocSizeData = JSON.parse(json_book.data.doc_position)
          book.addEventListener('click', () => {
            // console.log(book.id,json_book.data.doc_title, dataDocSizeData.pagesCount)
            // console.log(dataDocSizeData.pagesCount);

            const ratio = font_size_reflowable/dataDocSizeData.pagesCount;
            const font_size = ratio * dataDocSizeData.pagesCount  
            console.log("dataDocSizeDatao: ",dataDocSizeData)
            console.log(font_size)
            
            // only works for IT King 
            // const real_page_count = 1348 
            // const readera_font_dended_page_count = 3445 
            // only works for all the sinner bleed
            const real_page_count = 339 
            let readera_font_dended_page_count = 746 
            readera_font_dended_page_count =  216
              
            const page_ratio = readera_font_dended_page_count/real_page_count

            const correct_font_size =  Math.round(dataDocSizeData.pagesCount / page_ratio)
            console.log("dataDocSizeDatao: ",correct_font_size)
            });
        </script>

    ```
