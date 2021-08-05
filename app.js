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
  <button data-role= "${data.role}">${data.role}</button>
  <button data-level= "${data.level}">${data.level}</button>
  ${data.languages.map(itemFxn).join('')}
  ${data.tools.map(itemFxn).join('')}
  </div>
  `;

  function itemFxn(item) {
    return `<button data-tools= ${item}>${item}</button>`;
  }


  // console.log(Object.keys(data)[12])
  // console.log(Object.prototype.hasOwnProperty())
  
  // Object.keys(data).forEach(key=>{
    // })
    
    // for data-...
    // ${itemFxn(data.languages, item).map(itemFxn).join('')}
  keyFxn(data.languages)

  function keyFxn(key) {
    // return Object.keys(data)[Object.values(data).indexOf(key)];
    // console.log(Object.keys(data)[Object.values(data).indexOf(key)]);
  }
  // console.log(buttons)
  
  jobList.innerHTML += output;
});})

