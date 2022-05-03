import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";


const USER_LISTS = gql`
query {
    users {
        email 
    last_name
    first_name
    gender
    infos {
      message
    }
    }
}
`
const UserList = () => {
    const { loading, error, data } = useQuery(USER_LISTS);
    if (loading) {
        return <span>Loading ...</span>
    }
    console.log(data);
    return (<section className='card-container'>
        {data.users.map((user: any) => (

            <div className="card">
               
                <a href="https://www.damienflandrin.fr/blog/post/#">

                    <div className="card-image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MkmE6NUThcB31btysFBh1MZmWjg_rksdlyxH3mURQwRuLSGieeBuF4h_Vwi1oWuYmFU&usqp=CAU" alt="Orange" /></div>


                    <div className="card-body">


                        <div className="card-date">
                            <time>{user.first_name}  {user.last_name}</time>
                        </div>


                        <div className="card-title">
                            <h3>{user.gender}</h3>
                        </div>

                        <div className="card-excerpt">
                            <p> {user.email}</p>
                        </div>

                    </div>

                </a>
                <span><a>  X</a></span>
            </div>
        ))}

    </section>)
}

export default UserList;