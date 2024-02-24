const url = "https://hackaton.donorsearch.org/api/blood_stations/";
var data ;
var currentIndex = 0;
fetch(url)
    .then(response => response.json())
    .then(data => {
        this.data = data;
        showData();
    })
    .catch(error => console.error('Error:', error));

function showData() {
    const result = data.results[currentIndex];
    if (!result.closed) {
        document.getElementById("text").innerHTML = result.title ;//+ '\n' + result.city.title + ',' + result.address + '\n' ;
        document.getElementById("location").innerHTML = result.city.title + ',' + result.address;
        setBloodStatus("o_p", result.o_plus);
        setBloodStatus("o_m", result.o_minus);
        setBloodStatus("a_p", result.a_plus);
        setBloodStatus("a_m", result.a_minus);
        setBloodStatus("b_p", result.b_plus);
        setBloodStatus("b_m", result.b_minus);
        setBloodStatus("ab_p", result.ab_plus);
        setBloodStatus("ab_m", result.ab_minus);

    }
}

function setBloodStatus(bloodType, status) {
  const element = document.getElementById(bloodType);
  if (status === "unknown") {
    element.className = "red";
  } else {
    element.className = "grenn";
  }
}

document.getElementById("prev").addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = data.results.length - 1;
    }
    showData();
});

document.getElementById("next").addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= data.results.length) {
        currentIndex = 0;
    }
    showData();
});