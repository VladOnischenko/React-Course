import React from 'react';
import SingleComment from "./SingleComment";
import { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch, useSelector } from 'react-redux'
import { commentCreate } from "../redux/actions";

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

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type="text" value={textComment} onChange={handleInput}/>
        <input type="submit" hidden/>
      </form>
      <SingleComment />
    </div>
  );
};

export default Comments;