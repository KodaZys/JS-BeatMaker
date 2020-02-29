window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60c2d3"
    ]

    console.log(sounds[0]);

    // Lets get going with the sound here!
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            // By setting .currentTime to 0, we can enable other sounds to play over eachother
            sounds[index].currentTime = 0;
            sounds[index].play();
        })
    })
});


