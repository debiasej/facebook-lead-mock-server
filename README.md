# Facebook Lead Mock Server

Node server that generates mocks of [Facebook leads](https://www.facebook.com/business/a/lead-ads). It's an implementation of [JSON Server](https://github.com/typicode/json-server) to test a real application.
Facebook Leads are dinamically generated when server starts using [Casual](https://github.com/boo1ean/casual) (a fake data generator).

## Getting Started

Checkout the repository and install dependencies:

```
git clone https://github.com/debiasej/facebook-lead-mock-server.git
cd facebook-lead-mock-server
npm install
```
### Create a mock

```
npm run create-mock
```

This create content in db.json file:
```
{  
   "leads":{  
      "data":[  
         {  
            "created_time":"2017-06-15T11:23:56+0200",
            "id":"43404885399",
            "field_data":[  
               {  
                  "name":"sexo",
                  "values":[  
                     "mujer"
                  ]
               },
               {  
                  "name":"first_name",
                  "values":[  
                     "Opal"
                  ]
               },
               {  
                  "name":"last_name",
                  "values":[  
                     "Marquardt"
                  ]
               },
               {  
                  "name":"email",
                  "values":[  
                     "Cory.Jenkins@Dewayne.io"
                  ]
               }
            ]
         }
      ],
      "paging":{  
         "cursors":{  
            "before":"MTkxNzAwMjQwMTg5MDQ1NwZDZD",
            "after":"MTkxNjk4NjgzODU1ODY4MAZDZD"
         }
      }
   }
}
```

### Start server

```
npm start
```

Now go to http://localhost:3000/leads and check if it works.
