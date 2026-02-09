const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I'm SORRY";
  gif.src = "images/sorry.png";
  gif.style.height = "300px"; 
  gif.style.width = "400px"; 
  noBtn.innerHTML = "No";
  yesBtn.innerHTML = "Accha thik hai";

  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Hehehe!! I knew It";
    gif.src = "images/love.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  })

  noBtn.addEventListener("click", () => {
    question.innerHTML = "Soch lo acche se!";
    gif.src = "images/download.gif";
    yesBtn.innerHTML = "Accha thik hai";
    noBtn.innerHTML = "Nahi Sochna";

    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Hehehe, I knew it!";
      gif.src = "images/love.gif";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    })

    noBtn.addEventListener("click", () => {
      question.innerHTML = "Ak baar ar soch lo";
      gif.src = "images/sadlife.gif";
      yesBtn.innerHTML = "Chalo maan gai";
      noBtn.innerHTML = "Final no";

      yesBtn.addEventListener("click", () => {
        question.innerHTML = "Hehehe, I knew it!";
        gif.src = "images/love.gif";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      });

      noBtn.addEventListener("click", () => {
        question.innerHTML = "Manja nah! kitna bhav khayegi";
        gif.src = "images/run.gif";
        yesBtn.innerHTML = "No";
        noBtn.innerHTML = "Yes";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "Hehehe, I knew it!";
          gif.src = "images/love.gif";
          yesBtn.style.display = "none";
          noBtn.style.display = "none";
        })
        yesBtn.addEventListener("mouseover", () => {
          const yesBtnRect = yesBtn.getBoundingClientRect();
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          const margin = 50;
        
          const maxX = screenWidth - yesBtnRect.width - margin * 2;
          const maxY = screenHeight - yesBtnRect.height - margin * 2;
        
          const randomX = Math.max(margin, Math.floor(Math.random() * maxX)) + margin;
          const randomY = Math.max(margin, Math.floor(Math.random() * maxY)) + margin;
        
          yesBtn.style.left = randomX + "px";
          yesBtn.style.top = randomY + "px";
        });
      });
    });
  });
});