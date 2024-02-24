const url = 'https://hackaton.donorsearch.org/api/users_top/';
const topDiv = document.getElementById('top');
var i = 0;
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Произошла ошибка при выполнении запроса');
        }
        return response.json();
    })
    .then(data => {
        console.log('Полученные данные:', data); // Вывод данных в консоль для дальнейшего анализа
        if (data && Array.isArray(data.items) ) 
        {
            data.items.forEach(item => {
            i++;
            
            let cityTitle = item.city ? item.city.title : 'Город не указан'; 
            let Rang = item.donor_status ? item.donor_status.name : 'Начинаюший';
            let name;
            if (item.first_name == '') name = "Аноним";
            else name = item.first_name +" "+ item.last_name +" " + Rang + " " + item.donation_agg['blood'] + " " + item.donation_agg['plasma'] + " " + item.donation_agg['platelets'] ;
            const text = i + " " + name  + " " + cityTitle;

            const firstNameElement = document.createElement('div');
            firstNameElement.textContent = text;
            firstNameElement.className = 'custom-class';
            topDiv.appendChild(firstNameElement);
            
        });
    
        } else {
            throw new Error('Данные не соответствуют ожидаемому формату');
        }
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });

window.scrollTo(0,0)


