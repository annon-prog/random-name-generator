let firstName = ['Fidelis','Cecilia','Lemashon',
'Mark','Joseph','Simon','Susan','Anne','Rita',
'Rebecca','Luke','Brian','Bill','Ted','Shantel',
'Judy'];

let secondName = ['Omondi','Wambui','Wangui',
'Muthoni','Wambua','Wangari','Kipkoech','Chebet','Kipkirui',
'Otieno','Onyancha','Pkemoi','Odwour','Sumpet'];

function getName(){
      let randomName= firstName[Math.floor(Math.random()* firstName.length )]
       + " "+secondName[Math.floor(Math.random() * secondName.length)];
       return randomName;
}
function nameQty(){
      let userQty = document.querySelector('.qty').value;
      document.querySelector('.nameList').innerHTML = '';
      if (userQty > 10){
            document.querySelector('.nameList').innerHTML = "ONLY 10 NAMES CAN BE GENERATED";
      }else{
            for(let i=0; i<userQty; i++){
                  document.querySelector('.nameList').innerHTML += getName() + '<br>';
            }
      }
}