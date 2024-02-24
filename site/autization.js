let enterBtn = document.getElementById("enter");
let regBtn = document.getElementById("reg");
let nameField = document.getElementById("nameField");

enterBtn.onclick = function(){
	enterBtn.classList.add("disable")
	regBtn.classList.remove("disable")
    nameField.style.display = "none";
}

regBtn.onclick = function(){
	regBtn.classList.add("disable")
	enterBtn.classList.remove("disable")
    nameField.style.display = "block";
}

const callback = () => 
    {
        event.preventDefault();
        if (nameField.style.display == "none")
        {
                var url = "https://hackaton.donorsearch.org/api/auth/login/" ;
                data =
                {
                    "username": document.getElementById("username").value,
                    "password": document.getElementById("password").value
                }

            const options = 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };



                fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log('Данные пользователя успешно отправлены:');
                if('id' in data)  {window.location.href = 'mainMenu/index.html';}
            })
            .catch(error => {
                console.error('Произошла ошибка при отправке данных:', error);
            });

        }
        else
        {
            url = "https://hackaton.donorsearch.org/api/auth/registration/"
            email = document.getElementById("username").value
            data ={
            "email": email,
            "password": document.getElementById("password").value,
            "first_name": document.getElementById("namef").value,
            "tag": "string"
            }
            // Зачем нужен tag ?
            const options = 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    console.log('Данные пользователя успешно отправлены:');
                    if('user_id' in data) {window.location.href = 'podwerjdenia.html?id=' + data['user_id'] +"&email="+email;}
                })
                .catch(error => {
                    console.error('Произошла ошибка при отправке данных:', error);
                });
        }
    };



const button = document.querySelector('#aut');
button.addEventListener('click', callback);
