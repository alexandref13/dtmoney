import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1, 
          title: "PC novo",
          type: 'withdraw',
          category: 'Tecnologia',
          amount: 7000, 
          createdAt: new Date('2021-12-25 00:00:00'),
        }, 
        {
          id: 2, 
          title: "Freelancer",
          type: 'deposit',
          category: 'dev',
          amount: 2000, 
          createdAt: new Date('2021-12-30 00:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'
    
    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=>{
      const data= JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


