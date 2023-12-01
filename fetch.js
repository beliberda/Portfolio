fetch("https://jsonplaceholder.typicodecom/posts")
    .then(function (response) {
        console.log("Сработал первый then");
        return response.json();
    })
    .then((data) => {
        console.log("Сработал второй then");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }
    )
    .finally(() => { console.log("Финалка"); }
    )
