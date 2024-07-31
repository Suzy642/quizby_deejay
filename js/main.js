function showLoading() {
    document.getElementById("loading").style.display = "block";
    
    // Simulate a delay before redirecting to another page
    setTimeout(function() {
        window.location.href = "choose-subject.html";
    }, 2000); // 3 seconds delay
}
