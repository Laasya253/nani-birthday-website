function startStory(){

    document.querySelector(".hero").style.display = "none";

    document.getElementById("story")
        .classList.remove("hidden");

    window.scrollTo(0,0);
}


function showContract(){

    document.getElementById("contract-popup")
        .classList.remove("hidden");
}


function acceptContract(){

    document.getElementById("contract-popup")
        .classList.add("hidden");

    document.getElementById("final-screen")
        .classList.remove("hidden");

    document.getElementById("final-screen")
        .scrollIntoView({
            behavior:"smooth"
        });
}


function showFinal(){

    showContract();
}