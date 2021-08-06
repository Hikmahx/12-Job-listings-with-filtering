// init Data
const dataJson = new Data;

// init ui
const ui = new UI;

dataJson.getData()
.then(data=>{
    ui.showList(data);
    
  let buttons = document.querySelectorAll('.filter button');
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
      console.log(button)
      // console.log(data)
      
    })
  });
})