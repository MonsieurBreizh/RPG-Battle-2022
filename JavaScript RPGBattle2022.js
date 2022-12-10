var compteur=1;
var conditionattaque=false

attaque=document.getElementById("attaque");
pvennemies1=document.getElementById("pvennemies1");
pvennemies2=document.getElementById("pvennemies2");
pvennemies3=document.getElementById("pvennemies3");
dragon=document.getElementById("dragon");
professeur_koro=document.getElementById("professeur_koro");
mage_noir=document.getElementById("mage_noir");
pvperso1=document.getElementById("pvperso1");
pvperso2=document.getElementById("pvperso2");
pvperso3=document.getElementById("pvperso3");
pvperso4=document.getElementById("pvperso4");

function attaquemonstre(){
    if (compteur==5){
        for (i = 0; i < 3; i++) { 
            var cible_attaque = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            if(cible_attaque==1){
                pvperso1.innerHTML = pvperso1.innerHTML -10;
            }
            if(cible_attaque==2){
                pvperso2.innerHTML = pvperso2.innerHTML -10;
            }
            if(cible_attaque==3){
                pvperso3.innerHTML = pvperso3.innerHTML -10;
            }
            if(cible_attaque==4){
                pvperso4.innerHTML = pvperso4.innerHTML -10;
            }
        }
        compteur=1;
    }

}

attaque.onclick = function(){
    if(conditionattaque==false){
        conditionattaque=true
        
    }
   
}

dragon.onclick = function(){
    if(conditionattaque==true){
        pvennemies1.innerHTML = pvennemies1.innerHTML -30;
        conditionattaque=false
        compteur=compteur+1;
        attaquemonstre();
        
    }
    
}

professeur_koro.onclick = function(){
    if(conditionattaque==true){
        pvennemies2.innerHTML = pvennemies2.innerHTML -30;
        conditionattaque=false
        compteur=compteur+1;
        attaquemonstre();
        
    }
    
}

mage_noir.onclick = function(){
    if(conditionattaque==true){
        pvennemies3.innerHTML = pvennemies3.innerHTML -30;
        conditionattaque=false
        compteur=compteur+1;
        attaquemonstre();
      
    }
    
}

function defensemonstre(){
    if (compteur==5){
        for (i = 0; i < 3; i++) { 
            var cible_defense = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            if(cible_defense==1){
                pvperso1.innerHTML = pvperso1.innerHTML +10;
            }
            if(cible_defense==2){
                pvperso2.innerHTML = pvperso2.innerHTML +10;
            }
            if(cible_defense==3){
                pvperso3.innerHTML = pvperso3.innerHTML +10;
            }
            if(cible_defense==4){
                pvperso4.innerHTML = pvperso4.innerHTML +10;
            }
        }
        compteur=1;
    }

}

    