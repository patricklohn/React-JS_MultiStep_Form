import React from 'react'
import {BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiFrownFill} from 'react-icons/bs'
import "./Thanks.css"


const emojiData ={
  unsatisfied:<BsFillEmojiFrownFill/>, 
  neutro:<BsFillEmojiNeutralFill/>, 
  satisfied:<BsFillEmojiSmileFill/>, 
  very_satisfied:<BsFillEmojiHeartEyesFill/>,
}

function Thanks({data}) {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>A sua opnião foi muito importante. Agradecemos pelo seu Fedback</p>
        <p>Para concluir clique no botão abaixo</p>
        <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
        <p className='review-data'>
          <span>Satisfação do serviço</span>
          {emojiData[data.review]}
        </p>
        <p className='review-data'>
          <span>Cometarios:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks