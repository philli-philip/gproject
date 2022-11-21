import React from "react";
import useAxios from 'axios-hooks'
import Image from "next/image";

type post = {
        id: number;
        avatar: string;
        first_name: string;
}

export default function About(){
    const [{ data, loading, error }, refetch] = useAxios(
        'https://reqres.in/api/users?delay=1'
      )

        if (loading) return <p>Loading</p>
        if (error) return <p>Error!</p>
    
    return (
        <div>
        <button onClick={event => refetch}>refetch</button>
        {data.data.map((post:post) => 
            <li key={post.id}>
                <Image src={post.avatar} height={72} width={72} alt=""/>
                <p>{post.first_name}</p></li>
            )}
        </div>
    )
} 
