

async function login(loginUrl = `/api/login`, data = {}) {
  let    localhost='blogstore.herokuapp.com'

  if(process.env.NODE_ENV==='production'){
    console.log("ji")
    localhost='blogstore.herokuapp.com'
  }    
    const response = await fetch( `http://${localhost}:3001${loginUrl}` , {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
   
      headers: {
        'Content-Type': 'application/json'
        
      },
      
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

export default  login