const inputField = document.getElementById('input-field');
const searchBtn = document.getElementById('search-btn');
const warningDiv = document.getElementById('warning-div')
const resultsFound = document.getElementById('results-found');
const spinner = document.getElementById('spinner');

// getting data
searchBtn.addEventListener('click', function () {
    const inputValue = inputField.value;

    // clear input field
    inputField.value = '';

    // clear warning div
    warningDiv.textContent = '';

    // error handling
    if (inputValue === '') {
        warningDiv.innerText = 'Please write something'
        return;
    } else {
        const url = `https://openlibrary.org/search.json?q=${inputValue}`;
        spinner.classList.remove('d-none')
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data.docs.slice(0, 20)))
            .finally(() => {
                spinner.classList.add('d-none')
            })

    }
})

// display data to the DOM
const displayData = books => {
    resultsFound.innerHTML = `Results Found : ${books.length}`

    const singleBookDiv = document.getElementById('single-book-div');

    // clear search results
    singleBookDiv.textContent = '';

    if (books.length === 0) {
        warningDiv.innerText = 'No results found'
        resultsFound.textContent = '';
        return;
    } else {
        books.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100 card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="Book Cover Photo">
                <div class="card-body">
                    <h5 class="card-title">${book.text[1]}</h5>
                    <h6 class="card-title">Author : ${book.author_name}</h6>
                    <h6 class="card-title">First Published : ${book.first_publish_year}</h6>
                    <h6 class="card-title">Publisher : ${book.publisher}</h6>
                </div>
            </div>
            `
            singleBookDiv.appendChild(div);
        })
    }
}