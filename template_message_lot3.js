const axios = require("axios").default;
const productToken = "541fea0e-3ab9-404d-8d9a-07a6bf09a185"
const djingo_whatsapp_number = "2250769313109"
const users_number = require("./usernumber/user_number")

// TEMPLATE DATA
const template_name = "orange_money_pass"
const namespace = "0a72eb69_2478_4109_a8b6_577bf0ec778a"
const test = false


async function push_djingo_whastapp(_user_number) {


var data ={
    "messages": {
        "authentication": {
            "producttoken": productToken
        },
        "msg": [{
            "from": djingo_whatsapp_number,
            "to": [{
                    "number":  _user_number
                }
            ],
            "body": {
                "type": "auto",
                "content": "Reviens sur Orange et moi, achète ton pass, et remporte 100% de bonus. Rendez-vous sur https://bit.ly/3HxDfMG"
            },
            "allowedChannels": ["WhatsApp"],
            "richContent": {
                "conversation":
                [{
                    "template": {
                        "whatsapp": {
                            "namespace": namespace,
                            "element_name": template_name,
                            "language": {
                                "policy": "deterministic",
                                "code": "fr"
                            },
                            "components": [{
                                "type": "body",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": "https://bit.ly/3zyzp5E"
                                    },
                                ]
                            }]
                        }
                    }
                }]
            }
        }]
    }
}




  var config = {
    method: 'post',
    url: 'https://gw.cmtelecom.com/v1.0/message',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    data: data
  };

  try {
    const push_return = await axios(config);
    console.log(push_return.data)
  } catch (error) {
      console.log('error API');
      console.log(error);
  }

}



async function send_to_number() {
    // console.log(users_number.lot3);
    console.log(users_number.lot3[0]);

    if(test == true){
        await push_djingo_whastapp("2250708175631")
    }else {
        try {
            for (let i = 0; i < users_number.lot3.length; i++) {
                await push_djingo_whastapp( users_number.lot3[i])
                console.log(`done - ${i}`);
            }
        } catch (error) {
            console.log(e)
        }
    }
    console.log("done ---- final");
}
  
  
  
  
  send_to_number()
