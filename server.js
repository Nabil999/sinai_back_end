const express = require('express');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

// const itemsArray = [
// Item = {
// 	id:null,
// 	item_code:'',
// 	map_id: '',
//     store_room: '',
// 	uom: '',
//     ref: '',
//     opening_balance: null,
//     unit_value: null,
//     item_description: '',
//     category: ''
// }
// ];



const db = knex({
	client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'jana',
    database : 'sample'
  }
});

/* app.get('/', (req, res)=> {
	db.select('No','Reference', 'Description' 'SinaiCode', 'UOM', 'Storeroom', 'MainCategory','SubCategory', 'mapid').from('export').then(data => {
		// console.log(data[3000].item_description);
		res.json(data);
		// console.log(data)
	});
})
*/

db.select('Description').from('export').then(data => {
		// console.log(data[3000].item_description);
		d=data.length-1;
		console.log(data[d], d);
		// console.log(data)
	});

const app = express();
app.use(bodyParser.json());
app.use(cors());

// db.select('*').from('sample').then(data => console.log(data));
app.get('/', (req, res)=> {
	db.select('*').from('export').then(data => {
		// console.log(data[3000].item_description);
		res.json(data);
		// console.log(data)
	});
})

app.listen(1982, () => {
	console.log('App is running on port 1982');
})
