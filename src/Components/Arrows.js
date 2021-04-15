import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '../utils'

export default function Arrows({resource}) {

    const [upVotes, setUpVotes] = useState(0)
    const [downVotes, setDownVotes] = useState(0)

    useEffect(()=>{
        getUpVotes()
        getDownVotes()
    }, [])

    const clickHandler = (vote) => {
        postVote(vote, resource);
    }

    const postVote = async (vote, resource) => {
        const resp = await axios.post(`${BASE_URL}/votes`, {
            vote_type: vote,
            resource_id: resource,
            user_id: parseInt(localStorage.getItem('id'))
        })
        resp.status === 201 && vote === 'downvote' ? setDownVotes(downVotes + 1) : setUpVotes(upVotes + 1)
        return resp;
    }

    const getUpVotes = async () => {
        const resp = await axios.get(`${BASE_URL}/upvotes/${resource}`)
        setUpVotes(resp.data)
    }

    const getDownVotes = async () => {
        const resp = await axios.get(`${BASE_URL}/downvotes/${resource}`)
        setDownVotes(resp.data)
    }
    

    return (
        <section>
            <button onClick={() => clickHandler('upvote')}><FontAwesomeIcon icon={faArrowUp} /></button>
            { upVotes }
            <button onClick={() => clickHandler('downvote')}><FontAwesomeIcon icon={faArrowDown} /></button>
            { downVotes } 
        </section>
    )
}
