var casual = require('casual')
var dateFormat = require('dateformat')
var jsonfile = require('jsonfile')
var jsonDb = jsonfile.readFileSync('./db.json')

// Create an object for config file
var db = { leads: { data:[] } }

// Create an object for lead fields. Use casual to create random fields
function createFields(){
  var fields = [
     {
       name: 'sexo',
       values: [casual.random_element(['hombre', 'mujer'])]
     },
     {
       name: 'first_name',
       values: [casual.first_name]
     },
     {
       name: 'last_name',
       values: [casual.last_name]
     },
     {
       name: 'apellido_2',
       values: [casual.last_name]
     },
     {
       name: 'zip_code',
       values: [casual.zip(digits = (5))]
     },
     {
       name: 'phone_number',
       values: [casual.phone]
     },
     {
       name: 'email',
       values: [""]
     },
     {
  		 name: 'modelo',
  		 values: [casual.random_element(['Carens', 'Carnival', 'cee´d', 'Niro', 'Picanto', 'Sorento', 'pro_cee´d', 'pro_cee´d GT'])]
			},
     {
       name: 'deseo_recibir_el_boletín_kia',
       values: ['sí']
     }
   ]

  return fields
}

var numLeads = 1 //casual.integer(from = 1, to = 5)

for( var i = 0; i < numLeads; i++ ) {
    var lead = {}
    var fields = createFields();
    var now = new Date()
    now.setSeconds(now.getSeconds() + ( 10 * i ));

    lead.created_time = dateFormat(now, "isoDateTime")
    lead.id = "" + casual.integer(from = 100000, to = 100000000000)

    // set email
    fields = fields.map((field) => {
      if (field.name == "email") {
        field.values = [casual.email]
      }
      return field
    });

    lead.field_data = fields

    db.leads.data = jsonDb.leads.data
    db.leads.data.push(lead)
}

db.leads.paging = {
  cursors: {
      before: "MTkxNzAwMjQwMTg5MDQ1NwZDZD",
      after: "MTkxNjk4NjgzODU1ODY4MAZDZD"
  }
}

jsonfile.writeFile('./db.json', db, function (err) {
  if (err)
    console.error(err)
})
