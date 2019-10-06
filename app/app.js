function addTodo() {
    var input = document.getElementById('input');
    console.log(input.value);

    var data = JSON.stringify({
        todo: input.value,
        time: Date.now()
    });

    /*    var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:5000/add-todo",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*!/!*",
            },
            "processData": false,
            "data": data
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });*/


    const url = 'http://localhost:5000/add-todo';
    fetch(url, {
        method: "post",
        body: data,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }).then((data) => {
        data.json().then((foundData, error) => {
            console.log(foundData);
        });
    }).catch((err) => {
        console.log(err);
    });


}


function getTodo() {

    const url = 'http://localhost:5000/get-todo';
    fetch(url).then((data) => {
        data.json().then((foundData, error) => {
            console.log(foundData);
        });
    }).catch((err) => {
        console.log(err);
    });



}