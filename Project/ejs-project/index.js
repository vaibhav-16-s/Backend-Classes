const express = require('express');
const app = express();
const users = require('sample_400_entries.json');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.send("Hello World!");
})

// app.get('/api/users', (req, res) => {
//     return res.json(users);
// })

app.get('/data', (req, res) => {
    const html=`<ul>${users.map(user=>`<li>${user.name}</li>`).join(` `)}</ul>`
    res.send(html);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    return res.json(users.find(user =>user.id === id));
})

app.post('/users', (req, res) => {

    const newData = {
        id: 401,
        name: "Naman Vidyarthi",
        email: "jyncgl.crycfjoy1@example.com",
        contact: {
            phone: "+919778994167",
            alternatePhone: "+913195710358"
        },
        address: {
            street: "761 Lppinkrpqd Street",
            city: "Mappkjg",
            state: "Tdvfdg",
            postalCode: "424527",
            country: "India"
        }
    };

    fs.readFile('sample_400_entries.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        const users = JSON.parse(data);

        users.push(newData);

        fs.writeFile('sample_400_entries.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }

            res.send("User added successfully!");
        });
    });
});

    // fs.appendFile('./400_users_data.json',newData,(err) => {
    //     if (err) {
    //         console.error(err);
    //     }
    // });
    // res.send("File Updated!");

app.post('/api/users', (req, res) => {
    const data = req.body;
    console.log(data);
    return res.send("Done!!");
})

app.patch('/api/users/:id',(req,res)=>{
    //Will do this with MONGODB or Postman
})
app.delete('/api/users/:id',(req,res)=>{
    //Will do this with MONGODB or Postman
})






// const errorHandler = require('./Middleware/errorHandler');
// app.get('/', (req,res)=>{
//     res.send('Welcome');
// })
// app.use((req,res,next)=>{
//     const err = new Error('Something went wrong');
//     err.statusCode = 404;
//     err.status = "Fail";
//     next(err);
// })
// app.use(errorHandler);
// app.listen(8080,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Listening on http://localhost:8080");
//     }
// })



                                   // LEARNING GET IN API

// app.get('/',(req,res)=>{
//     res.send("Welcome to our website");
// })

// app.get('/api/users',(req,res)=>
// {
//     return res.json(users);
// })

// app.get('/user',(req,res)=>{
//     const html=`
//     <ul>
//     ${users.map(user=>`<li>${user.name}</li>`).join(' ')}
//     </ul>
//     `
//     res.send(html);
// })

// app.get('/api/users/:id',(req,res)=>
// {
//     const id=Number(req.params.id);
//     console.log(id);
//     const user=users.find((user)=>user.id===id);
//     return res.json(user)
// })

// app.post('/users',(req,res)=>{
//     //will do this with mongodb or postman
//     const newData={
//         "id": 401,
//         "name": "Ykpduf Ibnthcu",
//         "email": "ykpduf.ibnthcu@example.com",
//         "address": "534, Nehru Nagar, Bangalore, India",
//         "contact": {
//             "phone": "+91-0301233815",
//             "alternate_phone": "+91-3962417915"
//         }
//     }
//     fs.appendFile('sample_400_entries.json',JSON.stringify(newData),(err)=>{
//         console.log(err);
        
//     });
//     res.send("file updated");
// })

// app.patch('/api/users/:id',(req,res)=>{
//     //will do this with mongodb or postman
// })

// app.delete('/api/users/:id',(req,res)=>{
//     //will do this with mongodb or postman
// })






// app.set("view engine", "ejs");

// app.use((req,res,next)=>{
//     console.log("hello from middleware 1.....");
//     req.name="sonu";
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("hello from middleware 2.....",req.name);
//     next();
// });


// app.get("/", (req, res) => {
//     const student={
//     name:'Vaibhav',
//     age:21,
//     marks:54,
//     email:'vs876@gmail.com',
//     hobbies:['reading','playing volleyball','watching anime'],
// }
//     res.render("home",{stu:student});
// });

 app.listen(8060, () => {
    
 });