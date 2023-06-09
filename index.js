const express = require("express");
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(cors())

const reader = require('xlsx')
const file = reader.readFile('data.xlsx')
  
let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});


app.use('/',(req,res)=>{
  res.send(data);
})
