import React from 'react';
import SingleComment from "./SingleComment";
import { useState,  useEffect } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'
import { commentCreate, commentsLoad } from "../redux/actions";

const Comments = (props) => {
  const [textComment, setTextComment] = useState('')
  const comments = useSelector(state => {
    const {commentsReducer} = state
    return commentsReducer.comments
  })

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = uniqid()
    dispatch(commentCreate(textComment, id))
  }

  const handleInput = (e) => {
    setTextComment(e.target.value)
  }

  useEffect(() =>{
    dispatch(commentsLoad())
  },[])

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput}/>
        <input type="submit" hidden/>
      </form>
      {!!comments.length && comments.map( res => {
        return <SingleComment key={res.id} data={res}/>
      })}
    </div>
  );
};

export default Comments;