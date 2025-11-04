
//https://github.com/mgulrajani/itm_nodedemos.git

import http from 'http';
import fs from 'fs';
import { parse } from 'path'
const server =  http.createServer((req,res)=>{
    const url = req.url
    const method= req.method

    if(url==='/'){
        res.write('<html>')
        res.write('<head><title>My first node app</title></head>')
        res.write('<body><form action="/message" method="POST" ><input name="message"/><button type="submit">Submit</button></form></body>')
        res.write('</html')
        return res.end()

    }
    if(url==='/message' && method==="POST"){
      const body=[]
      req.on('data',(chunk)=>{body.push(chunk)})

      req.on('end',()=>{
        const parsedBody =  Buffer.concat(body).toString()
        const msg =  parsedBody.split('=')[1]
        fs.writeFile('message.txt',msg, err=>{console.log(err);
            res.statusCode=302  //http 2XX - 200 ok 201 -created post request was successful ,
            //http 3XX  301 --redirection  ,client side 
            //http statuscode -  401  404 415  --404  page not found , 415 -method not allowed 
            //http status code -5XX  - server side  
            res.setHeader('location','/')
            return res.end();
        })
      
      })

       
    }
    res.setHeader('Content-Type','text/html')
    res.write('<html>')
    res.write('<head><title>My first node app</title></head>')
    res.write('<body><h1>Welcome to Express!!</h1></body>')
    res.write('</html')
    return res.end()


})

server.listen(3000,()=>{
    console.log('Server is listening on port 3000')
}); 