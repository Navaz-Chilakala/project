const express=require('express');
const Router=express.Router();
const homeSchema=require('../models/homeSchema');
const bcrypt=require('bcryptjs');
const path=require('path');
var nodemailer=require('nodemailer');
var resetEmail="";
Router.get('/',(err,res)=>{
    res.render('register',{b2b:'hello1'});
})
Router.get('/homepage',(req,res)=>{
    res.render('register');
})
Router.get('/forgot',(req,res)=>{
    res.render('forgot');
})
Router.get('/home',(req,res)=>{
    res.render('register');
})
Router.get('/reset',(req,res)=>{
    res.render('reset',{userEmail:resetEmail});
})

Router.post('/register',async(req,res)=>{
    try{
        var password=req.body.pswd;
        const user=req.body.userName;
        const email=req.body.email; 
        console.log(password);
        bcrypt.hash(password,8,(err,hashedPassword)=>{
            if(err){
                return err;
            }
            password=hashedPassword;
            const userData=new homeSchema({
                userName:user,
                email:email,
                pswd:password          
            });
            userData.save(err=>{
                if(err){
                    res.send("username or email already exists");
                }else{
                    res.render('land',{link:"register.ejs"});
                }
            });
        })

        
    }catch(error){
        res.send("cannot connect");
    }

})


//log in

Router.post('/login',(req,res)=>
{
    const email=req.body.email;
    const password=req.body.pswd;
    console.log(password);
    homeSchema.findOne({email:email}).then(function(user){
        if(!user){
            throw new err('no use with that email');
        }
        bcrypt.compare(password,user.pswd).then(validPass=>{
            if(validPass)
            {
                res.render('dashboard',{name:user.userName});
            }
            else{
                res.send('enter correct password');
            }
        }).catch(err=>res.send('error'+err));
    }).catch(function(err){
        res.send("enter correct email");
    })
})
//forgot password
Router.post('/forgot',(req,res)=>{
    const email=req.body.email;
    homeSchema.findOne({email:email}).then(function(user){
        if(!user){
            throw new err('no user with that email');
        }
        resetEmail=email;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'rguktcse62@gmail.com',
              pass: 'irairbmjqodhnrox'
            }
          });
          
          var mailOptions = {
            from: 'rguktcse62@gmail.com',
            to:email,
            subject: 'Sending Email using Node.js',
            text: "<a href='http://localhost:8080/reset'>click here</a>"
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              res.send('check your mail');
              console.log('Email sent: ' + info.response);
            }
          });
    }).catch(function(err){
        res.send("This email has not been registered");
    })
})

Router.post('/reset', (req,res)=>{
    const pass=req.body.password;
    homeSchema.findOne({email:resetEmail},function(err,data){
		console.log(data);
		if(!data){
			res.send({"Success":"This Email Is not regestered!"});
		}else{
                bcrypt.hash(pass,8,(err,hashedPassword)=>{
                    if(err){
                        return err;
                    }
			        data.pswd=hashedPassword;
			        data.save(function(err, Person){
				        if(err)
					        console.log(err);
				        else{
					        console.log('Success');
                            res.render('resetSuccess',{link:"register.ejs"});
                        }
			        });
                })
		}
	}).clone().catch(function(err){
        res.send(err);
    })
})

module.exports=Router;