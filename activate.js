const electron = require ('electron');
const {ipcRenderer} = electron;
let message = "damn"
ipcRenderer.send('screenshot',message);

document.getElementById('test').addEventListener("click",()=>{
  console.log('test');
  let message = 'damn'
  ipcRenderer.send('screenshot',message);
})
