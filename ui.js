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
}