import React from 'react'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'
import './ReviewForm.css';

function ReviewForm({data, updateFielHandler}) {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input type="radio" value="unsatisfied" name='review' checked={data.review === "unsatisfied"} onChange={(e) => updateFielHandler("review", e.target.value)} required/>
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input type="radio" value="neutro" name='review' checked={data.review === "neutro"} onChange={(e) => updateFielHandler("review", e.target.value)} required/>
          <BsFillEmojiNeutralFill/>
          <p>Neutro</p>
        </label>
        <label className='radio-container'>
          <input type="radio" value="satisfied" name='review' checked={data.review === "satisfied"} onChange={(e) => updateFielHandler("review", e.target.value)} required/>
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label className='radio-container'>
          <input type="radio" value="very_satisfied" name='review' checked={data.review === "very_satisfied"} onChange={(e) => updateFielHandler("review", e.target.value)} required/>
          <BsFillEmojiHeartEyesFill/>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
          <label htmlFor="comment">Comentário:</label>
          <textarea name="comment" id="comment" placeholder='Conte um pouco mais da sua experiencia' value={data.comment || ""} onChange={(e) => updateFielHandler("comment", e.target.value)}>
          </textarea>
        </div>
    </div>
  )
}

export default ReviewForm