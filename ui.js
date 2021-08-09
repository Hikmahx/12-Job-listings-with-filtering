class Data{
  async getData(){

    const response = await fetch('./data.json');

    const data = await response.json();

    return data;
  } 
}

class UI{
  
  // display list of jobs in UI
  showList(jobs){
    let jobList = document.querySelector('.jobs');

    // CODE FOR JOB LI
    jobs.forEach(job => {
      
      let output = '';
      output += `
      <li class="job${job.featured  ===true? ' cyan-border': ''}">
      <img src="./${job.logo}" alt="banner">
      <div class="company">
      <h4>${job.company}</h4>
      <span class=${job.new === true? 'cyan': ''}>${job.new === true? 'New!': ''}</span>
      <span class=${job.featured === true? 'black': ''}>${job.featured === true? 'Featured': ''}</span>
      </div>
      <h2>${job.position}</h2>
      <div class="details">
        <span>${job.postedAt}</span>
        <span>${job.contract}</span>
        <span>${job.location}</span>
      </div>
      <div class="filter">
      <button data-role= "${job.role}">${job.role}</button>
      <button data-level= "${job.level}">${job.level}</button>
      ${job.languages.map(itemFxn).join('')}
      ${job.tools.map(itemFxn).join('')}
      </div>
      `;
  
      function itemFxn(item) {
        return `<button data-tools= ${item}>${item}</button>`;
      }
      
      jobList.innerHTML += output;
    });
  }


  filterSelection(){

    // CODE FOR ALL BUTTON VALUES
    let buttons = document.querySelectorAll('.filter button');

    // ARRAY for ALL BUTTON VALUES PRESENT IN FILTER DIV
    let btnValues = []; 

    buttons.forEach(btn=> {
      let btnValue = btn.innerText; 
      btnValues.push(btnValue); 
    })

    // let filteredBtn = btnValues.filter(btnValue=>btnValue ==='Frontend');
    // console.log(filteredBtn)

    buttons.forEach(clickBtn=>{
      clickBtn.addEventListener('click', (e)=>{
        // let filteredBtn = btnValues.filter(btnValue=>btnValue ===clickBtn.innerText);
        // console.log(filteredBtn.length);
        let clickBtn = e;

        // each li card of clicked btn
        let li = e.target.parentNode.parentNode;

        // all cards
        let cards = document.querySelectorAll('.job');
        
        // CLICKED BTN DISPLAY IN FITLERED DIV
        let filterContainer = document.querySelector('.filter-container');
        let selectedBtnDiv = document.querySelector('.selected-btn');
        let btnOutput = '';
        filterContainer.style.display = 'block';

        btnOutput += `
        <button>
          ${e.target.innerText}
          <span><img src="./images/icon-remove.svg" alt=""></span>
        </button>
        `;

        selectedBtnDiv.innerHTML += btnOutput;

        cards.forEach(card => {

        // BTNS ARRAY OF EACH CARD
          let btnArray = card.lastElementChild.innerText.split('\n');

          // let containsClkBtn = btnArray.includes();

          // CHECKING THRU EACH CARD IF IT CONTAIN THE CLICKED BTN
          if(btnArray.includes(e.target.innerText)){
            // card.classList.add('active');
            
            card.style.display = 'block'
            console.log(e.target.innerText);
          }else{
            card.style.display = 'none'
            // card.classList.add('non-active');
            // if(card.classList.contains('active')){
            //   card.classList.remove('non-active');
            // }
          }

        });
      })
    })
  }
}