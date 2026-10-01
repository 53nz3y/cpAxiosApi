import axios from "axios";
import { useState, useEffect } from 'react';



export function Userlist(){
const [listOfUser, setListOfUser] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");  

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        setListOfUser(response.data);

        setLoading(false);

      })

      .catch(() => {
        setError("Impossible de charger la liste des utilisateurs.");
        setLoading(false);

      });

  }, []);

  return(

    <div className="divation">
      {loading && (<div>Chargement des users </div>)}
      {error && (<div>{error}</div>)}
      {listOfUser.map((user) =>(
        <div key={user.id}>
          <h1>{user.username} {user.name}</h1>
          <p>{user.address.city}</p>
          <p>{user.phone} {user.website}</p>
          <p>{user.company.name}</p>
        </div>
      ))}
    </div>
  )
};

