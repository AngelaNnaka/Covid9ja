/*FETCH LINK*/
fetch("https://covidnigeria.herokuapp.com/api")
  .then(function (response) {
    return response.json();
  })
  .then(function (api) {
    appendData(api.data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });



/*TOTAL DATA*/
  function appendData(data){
    let sample1 = parseInt(data.totalSamplesTested, 10).toLocaleString("en");
    let sample2 = document.getElementById("totalSamplesTested");
    sample2.innerHTML = sample1;

    let confirmed1 = data.totalConfirmedCases.toLocaleString("en");
    let confirmed2 = document.getElementById("totalConfirmedCases");
    confirmed2.innerHTML = confirmed1;

    let active1 = data.totalActiveCases.toLocaleString("en");
    let active2 = document.getElementById("totalActiveCases");
    active2.innerHTML = active1;

    let discharged1 = data.discharged.toLocaleString("en");
    let discharged2 = document.getElementById("discharged");
    discharged2.innerHTML = discharged1;

    let death1 = data.death.toLocaleString("en");
    let death2 = document.getElementById("death");
    death2.innerHTML = death1;

 
/*EACH STATE DATA*/

  stateData = data.states;


  for (let i = 0; i < stateData.length; i++) {
  let state = stateData[i].state;
  let confirmedCases = stateData[i].confirmedCases.toLocaleString("en");
  let activeCases = stateData[i].casesOnAdmission.toLocaleString("en");
  let discharged = stateData[i].discharged.toLocaleString("en");
  let death = stateData[i].death.toLocaleString("en");
 

    let listData = document.getElementById("cell");

    let div = document.createElement("tr");

    let one = document.createElement("td");
    one.innerHTML = `${i + 1}`;
    one.scope = "row"
    
    
    let two = document.createElement("td");
    two.innerHTML = state;

    let three = document.createElement("td");
    three.innerHTML = confirmedCases;

    let four = document.createElement("td");
    four.innerHTML = activeCases;

    let five = document.createElement("td");
    five.innerHTML = discharged;

    let six = document.createElement("td");
    six.innerHTML = death;

   
   
   div.appendChild(one);
   div.appendChild(two);
   div.appendChild(three);
   div.appendChild(four);
   div.appendChild(five);
   div.appendChild(six);
   listData.appendChild(div);


  }

 }
