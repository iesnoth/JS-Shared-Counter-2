async function main() {
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');

    const response = await fetch('http://localhost:9001/counter')

    const result = await response.json();

    let countValue = result.value;

    function doTheThing() {
        fetch('http://localhost:9001/counter', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                'value': countValue
            })
        })
    }

    function increment() {
        countValue++;
        countContainer.textContent = countValue;
        doTheThing()
    }

    function decrement() {
        countValue--;
        countContainer.textContent = countValue;
        doTheThing()
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()

