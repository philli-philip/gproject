import React, { useState } from "react"
import Layout from "../components/Layout";

const NewQuestion = () => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("")

    const submitData = async (e:React.SyntheticEvent) => {
        e.preventDefault()
        try{
            const body = {title, category}
            await fetch ('/api/question/', {
                method: 'POST',
                headers : { 'Content-Type' : 'application/json'},
                body: JSON.stringify(body)
            })
            console.log(JSON.stringify(body))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Layout>
        <form onSubmit={submitData}>
            <h1>New Question</h1>
            <input placeholder="Quuestion" onChange={e => setTitle(e.target.value)} type="text" value={title}></input>
            <select placeholder="Category" onChange={e => setCategory(e.target.value)} value={category}><option>--</option><option>--</option><option>--</option></select>
            <input disabled={!title || !category } type="submit" value="Create"></input>
        </form>
        </Layout>
    )
}

export default NewQuestion