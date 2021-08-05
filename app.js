fetch('./data.json')
.then(response=>{return response.json()})
.then(datas=>{datas.forEach(data => {

  let jobList = document.querySelector('.jobs');
    

  // CODE FOR JOB LI

  output = '';
  output += `
  <li class="job${data.featured  ===true? ' cyan-border': ''}">
  <img src="./${data.logo}" alt="banner">
  <div class="company">
  <h4>${data.company}</h4>
  <span class=${data.new === true? 'cyan': ''}>${data.new === true? 'New!': ''}</span>
  <span class=${data.featured === true? 'black': ''}>${data.featured === true? 'Featured': ''}</span>
  </div>
  <h2>${data.position}</h2>
  <div class="details">
    <span>${data.postedAt}</span>
    <span>${data.contract}</span>
    <span>${data.location}</span>
  </div>
  <div class="filter">
  <button>${data.role}</button>
  <button>${data.level}</button>
  ${data.languages.map(itemFxn).join('')}
  ${data.tools.map(itemFxn).join('')}
  </div>
  `;

  function itemFxn(item) {
    return `<button>${item}</button>`
  }

  jobList.innerHTML += output;
});})

