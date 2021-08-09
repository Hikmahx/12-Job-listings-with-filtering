// init Data
const dataJson = new Data;

// init ui
const ui = new UI;

dataJson.getData()
.then(data=>{
    ui.showList(data);
    ui.filterSelection();
})