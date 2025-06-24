
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  } else if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  
  const modal = document.getElementById('confirmation-modal');
  const closeModalBtn = document.getElementById('close-modal');

  recForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = recInput.value.trim();
    if (text === "") return;

    const newRec = document.createElement('div');
    newRec.classList.add('recommendation');
    newRec.innerHTML = `<span>&#8220;</span>${text}<span>&#8221;</span>`;
    recList.appendChild(newRec);

    recInput.value = '';
    modal.style.display = 'block'; // show modal
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // hide modal
  });

});

  const recForm = document.getElementById('recommendation-form');
  const recInput = document.getElementById('recommendation-input');
  const recList = document.getElementById('all_recommendations');

  
  
  const modal = document.getElementById('confirmation-modal');
  const closeModalBtn = document.getElementById('close-modal');

  recForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = recInput.value.trim();
    if (text === "") return;

    const newRec = document.createElement('div');
    newRec.classList.add('recommendation');
    newRec.innerHTML = `<span>&#8220;</span>${text}<span>&#8221;</span>`;
    recList.appendChild(newRec);

    recInput.value = '';
    modal.style.display = 'block'; // show modal
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // hide modal
  });

});

  const modal = document.getElementById('confirmation-modal');
  const closeModalBtn = document.getElementById('close-modal');

  recForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = recInput.value.trim();
    if (text === "") return;

    const newRec = document.createElement('div');
    newRec.classList.add('recommendation');
    newRec.innerHTML = `<span>&#8220;</span>${text}<span>&#8221;</span>`;
    recList.appendChild(newRec);

    recInput.value = '';
    modal.style.display = 'block'; // show modal
  });

  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // hide modal
  });


function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
