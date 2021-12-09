import { useState } from "react"
import { toast } from "react-toastify"

import history from "../../../../../../core/utils/history"
import { makePrivateRequest } from "../../../../../../core/utils/requests"

import './styles.scss'

type Props = {
  movieId: string;
}

const SaveReview = ({ movieId }: Props) => {
  const [review, setReview] = useState('')

  const saveReview = () => {
    const payload = {
      movieId,
      text: review
    }

    makePrivateRequest({
      url: '/reviews',
      method: 'POST',
      data: payload
    }).then(() => {
      history.push(`/movies`)
      toast.success('Salvo com sucesso 😄', { delay: 500 })
    }).catch(() => {
      toast.error('Erro ao salvar, tente novamente. 😕')
    })
  }

  const handleChangeReviewText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(event.target.value)
  }

  return (
    <div className="post-new-review-container">
      <textarea
        value={ review }
        placeholder="Digite aqui a sua avaliação"
        className="new-review-text"
        onChange={ handleChangeReviewText }
      />

      <button
        className="new-review-button"
        onClick={ saveReview }
      >
        <span className="new-review-button-text">Salvar Avaliação</span>
      </button>
    </div>
  )
}

export default SaveReview