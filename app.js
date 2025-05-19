const video = document.getElementById('pv1');

const  videolist = [video];

videolist.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
    })
    video.addEventListener('mouseout', function(){
        video.pause()
    })
})


function scrollWithDelay() {
    const target = document.getElementById("#info-sec");

    // Optional: Add a quick bounce class or animation state here if needed

    setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
    }, 500); // Delay (in milliseconds) before scrolling
}

function scrollToContact() {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function stc() {
  const contactSection = document.getElementById("info-sec");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function a() {
  const contactSection = document.getElementById("info-sec");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function s() {
  const contactSection = document.getElementById("skills");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}

function p() {
  const contactSection = document.getElementById("myproject");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
}


