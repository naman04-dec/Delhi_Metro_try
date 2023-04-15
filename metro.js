function mycal(){

    let payment = document.getElementById("payment").value;
    let station1 = document.getElementById("startstation").value;
    let station2 = document.getElementById("endstation").value;
    let fare = 0

    if(station1 != 0 && station2 != 0){
        let res = Math.abs(station1 - station2)+1;

        if(res < 5){
            fare = 10
        }
        else if (res <= 8){
            fare = 20
        }
        else if(res <= 12){
            fare = 30
        }
        else if(res <= 16){
            fare = 40
        }
        else if(res <= 20){
            fare = 50
        }
        else if(res >= 24){
            fare = 60
        }
        

        if(payment === "Card" && fare >= 20){
            fare = fare - (fare * 0.10)
        }

        document.getElementById("result").value=fare;
    }
    else{
        alert("Enter a valid station")
    }

        
}

