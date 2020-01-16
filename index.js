const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send(
        {
            nodes: [
                {
                  id: "deadsec",
                  name: "Deadsec",
                  geolocation: "london",
                  image: "https://cdn.hipwallpaper.com/i/20/42/GXcJLY.gif",
                  blocks:[
                    {
                      "id": "1",
                      "nodeId": "deadsec",
                      "hash": "wd3494icwjkkw3mjf4i",
                      "transactions": [ "43 QNX, 8 QNX"] 
                      },
                    {
                      "id": "2",
                      "nodeId": "deadsec",
                      "hash": "kbaciubiwe2eh3327hduyqb23g3qri",
                      "transactions":[ "7 QNX, 8 QNX, 23 QNX, 1 QNX" ] 
                    }
                  ]
                },
                {
                  id: "samurai",
                  name: "Samurai",
                  geolocation:"Korea",
                  image: "https://images8.alphacoders.com/102/1025527.png",
                  blocks:[
                    {
                      "id": "3",
                      "nodeId": "samurai",
                      "hash": "wd3494icwjkkw3mjf4i",
                      "transactions": [ "43 QNX, 8 QNX"] 
                      },
                    {
                      "id": "4",
                      "nodeId": "samurai",
                      "hash": "kbaciubiwe2eh3327hduyqb23g3qri",
                      "transactions":[ "7 QNX, 8 QNX, 23 QNX, 1 QNX" ] 
                    },
                    {
                      "id": "9",
                      "nodeId": "samurai",
                      "hash": "qkjbdiuebwdiuh283hd8794h78d",
                      "transactions":[ "21 QNX, 83 QNX, 23 QNX, 12 QNX, 54QNX "] 
                    }
                  ]
                },
                {
                  id: "intz",
                  name: "Intz",
                  geolocation:"Brazil",
                  image: "https://images6.alphacoders.com/742/742777.jpg",
                  blocks:[
                    {
                      "id": "1",
                      "nodeId": "samurai",
                      "hash": "wd3494icwjkkw3mjf4i",
                      "transactions": [ "7 QNX","8 QNX", "23 QNX", "1 QNX"] 
                      }
                  ]
                },
                {
                  id: "virtus.pro",
                  name: "Virtus.pro",
                  geolocation:"Argentina",
                  image: "https://images6.alphacoders.com/814/814699.jpg",
                  blocks:[
                    {
                      "id": "2",
                      "nodeId": "Virtus.pro",
                      "hash": "wd3494icwjkkw3mjf4i",
                      "transactions": [ "3 QNX","12 QNX", "6 QNX","3 QNX","12 QNX", "6 QNX","3 QNX","12 QNX", "6 QNX"] 
                      },
                    {
                      "id": "5",
                      "nodeId": "Virtus.pro",
                      "hash": "kenceewnwewd32e42",
                      "transactions":[ "7 QNX, 8 QNX" ] 
                    }
                  ]
                },
                {
                  id: "fuel",
                  name: "Fuel",
                  geolocation:"Usa",
                  image: "https://images.alphacoders.com/899/899803.png",
                  blocks:[
                    {
                      "id": "8",
                      "nodeId": "fuel",
                      "hash": "389du8743f784fhdb382",
                      "transactions": [ "123 QNX, 832 QNX, 561 QNX, 701 QNX, 320 QNX "] 
                      },
                    {
                      "id": "10",
                      "nodeId": "fuel",
                      "hash": "1jwbdiu3892hd792h39u9r8cw",
                      "transactions":[ "172 QNX, 801 QNX, 230 QNX" ] 
                    },
                    {
                      "id": "11",
                      "nodeId": "fuel",
                      "hash": "1239id09q2d093dj89",
                      "transactions":[ "172 QNX, 801 QNX, 230 QNX" ] 
                    },
                    {
                      "id": "12",
                      "nodeId": "fuel",
                      "hash": "wKJB1I2UHG47824FG8W93H98H3",
                      "transactions":[ "212 QNX" ] 
                    }
                  ]
                },
            ]
            }
        )
});

const port =  process.env.PORT || 4002;

app.listen(port,() => {
    console.log(`Server on port ${port}`);
});

