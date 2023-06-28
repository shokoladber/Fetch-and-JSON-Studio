window.addEventListener("load", function(){
    const fetchPromise = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchPromise.then(function(response){
        const jsonPromise = response.json();
        jsonPromise.then(function(json){
            const astronauts = json;
            console.log(astronauts);


            for (let i=0; i<astronauts.length; i++){
                const container = document.getElementById("container");
                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronauts[i].firstName} ${astronauts[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${astronauts[i].hoursInSpace}</li>
                                <li id="${astronauts[i].id}">Active: ${astronauts[i].active}</li>
                                <li>Skills: ${astronauts[i].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src=${astronauts[i].picture}>
                    </div>
                    `;
                
                if (astronauts[i].active){
                    document.getElementById(`${astronauts[i].id}`).style.color = 'green';
                };
            };

            const count = document.getElementById("count");
            count.innerHTML = `<div class="bio">${astronauts.length}</div>`
        });        
    });
});
