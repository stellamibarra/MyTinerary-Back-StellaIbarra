

const getClient = (req, res) => {
const {data} = req.query
    const {id} = req.params
    if(data){
          res.json(
      {
            name: "Juan",
            lastname: "rodriguez",
            age: "25",
            paramId : id,
            queryData : data

        }


    )
    }else{
        res.json(
            {
                  name: "Juan",
                  lastname: "rodriguez",
                  age: "25",
                  paramId : id
              }
      
      
          )
    }
  
}

const getClients = (req, res) => {
    res.json(
        {
        clients:[

             {
            name: "Juan",
            lastname: "rodriguez",
            age: "25"
        },
        {
            name: "Pedro",
            lastname: "rodriguez",
            age: "2"
        }
        ]
        
    }

    )
}
module.exports = { getClients ,getClient}