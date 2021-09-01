const inputField = document.getElementById('input-field');
const searchBtn = document.getElementById('search-btn');

// getting data
searchBtn.addEventListener('click', function () {
    const inputValue = inputField.value;

    const url = 'https://openlibrary.org/search.json?q=python';
    fetch(url)
        .then(res => res.json())
        .then(data => loadData(data.docs));
})

// load data
const loadData = books => {
    // console.log(books);
    books.forEach(book => {
        console.log(book);
        const singleBookDiv = document.getElementById('single-book-div');
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.text[1]}</h5>
                <h6 class="card-title">Author : ${book.author_name[0]}</h6>
                <h6 class="card-title">First Published : ${book.first_publish_year}</h6>
                <h6 class="card-title">First Publisher : ${book.publisher[0]}</h6>
                <p class="card-text">This is a longer card with supporting text below as</p>
            </div>
        </div>
        `
        singleBookDiv.appendChild(div)
    })
}




/* // display data to the DOM
const displayData = book => {
    // console.log(book.text[1]);
    const singleBookDiv = document.getElementById('single-book-div');
    singleBookDiv.innerHTML = `
    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${book.text[1]}</h5>
                            <p class="card-text">This is a wider card with supporting te</p>
                        </div>
                    </div>
                </div>
    `;
} */