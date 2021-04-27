function myFunction() {
    var links = document.getElementById("nav-links");
    if (links.style.display === "block" ) {
        links.style.display = "none";
    } else {
        links.style.display = "block";x
    }
}

function featuresTabList(event, featureTab) {
    let i, featuresTabSlider, featuresTabTitle;
    featuresTabSlider = document.getElementsByClassName("features-tab-slider--1");
    for (i = 0; i < featuresTabSlider.length; i++) {
        featuresTabSlider[i].style.display = "none";
    }

    featuresTabTitle = document.getElementsByClassName("features-tab-title");
    for (i = 0; i < featuresTabTitle.length; i++) {
        featuresTabTitle[i].className = featuresTabTitle[i].className.replace(" active", "");
    }

    var x = window.matchMedia("(max-width: 767px)")
    
    if (x.matches) {
        document.getElementById(featureTab).style.display = "block";
        event.currentTarget.className += " active";
    } else {
        document.getElementById(featureTab).style.display = "flex";
        event.currentTarget.className += " active";
    }
    

}

const faq = (event, answers) => {
    var i, userQuestion, userAnswer;
    userQuestion = document.getElementsByClassName("questions");
    for (i = 0; i < userQuestion.length; i++) {
        userQuestion[i].style.display = "none";
    }

    userAnswer = document.getElementsByClassName("answer");
    for (i = 0; i < userAnswer.length; i++) {
        userAnswer[i].className = userAnswer[i].className.replace(" active", "");
    }

    document.getElementById(answers).style.display = "block";
    event.currentTarget.className += " active";
}