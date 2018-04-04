const express = require('express');
const app = express();
const PORT = 8090;

const transactionList = [
  {id: 1, amount: 100, bankId: 1}, {id: 2, amount: 200, bankId: 2}, {id: 3, amount: 300, bankId: 3}
];

app
  .post('/get/banks', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(
      [{id: 1, name: 'First Bank'}, {id: 2, name: 'Second Bank'}, {id: 3, name: 'Third Bank'}]
    )
  })
  
  .post('/get/transactions', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.json(
      transactionList
    )
  })

  .get('/add/transaction', (req, res) => {
    const id = (transactionList.length > 0) ? transactionList[transactionList.length - 1].id + 1 : 1;
    transactionList.push(
      {
        id: id,
        amount: +req.query.amount,
        bankId: +req.query.bankId
      }
    );
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send('');
  })

  .get('/del/transaction', (req, res) => {
    transactionList.forEach((item, i, arr) => {
      if (item.id === +req.query.id) {
        arr.splice(i, 1);
      }
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send('');
  })
  
  .listen(PORT, () => {
    console.log('server has been started http://localhost:' + PORT)
  });