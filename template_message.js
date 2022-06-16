const axios = require("axios").default;
const productToken = "541fea0e-3ab9-404d-8d9a-07a6bf09a185"
const djingo_whatsapp_number = "2250769313109"
const users_number = require("./usernumber/user_number")

// TEMPLATE DATA
const template_name = "mercredi_gagnant"
const namespace = "0a72eb69_2478_4109_a8b6_577bf0ec778a"
const test = true;


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
                "content": ""
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
                                        "text": "https://bit.ly/3NUoxmN"
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
    // console.log(users_number.lot1);
    /// 13091- 26614

    if(test == true){
        var Yan = "+41786719845"
        var Pierre = "22558989649"
        const SALIOU = "+2250778169986"
        const Mylene = "+2250789870690"
        const Souleymane = "2250708175631"
        await push_djingo_whastapp(Mylene)
    }else {
        try {
            for (let i = 26613; i < users_number.lot1.length; i++) {
                await push_djingo_whastapp( users_number.lot1[i])
                console.log(`done - ${i}`);
            }
        } catch (error) {
            console.log(e)
        }
    }
    console.log("done ---- final");
}
  
  
  
  
  send_to_number()
