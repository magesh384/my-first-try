

function submit(){
    let recommendation=document.getElementById("recommend");
    if (recommendation.value.trim() != ""){

    
    let element=document.createElement("div");
    element.className="recommendation";
    element.innerHTML="<p>"+recommendation.value+"</p>";
    document.getElementById("allrecommendation").appendChild(element);
    recommendation.value=""
    }
    
}

