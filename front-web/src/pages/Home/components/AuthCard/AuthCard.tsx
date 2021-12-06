import './styles.scss'

type Props = {
  title: string
  children: React.ReactNode
}

const AuthCard = ({ title, children }: Props) => {
  return (
    <div className="auth-card-container">
      <h1 className="auth-card-title">
        { title }
      </h1>
      { children }
    </div>
  )
}

<<<<<<< HEAD
export default AuthCard;
=======
export default AuthCard
>>>>>>> 8cbbad5da4c2648a904f11d713e1c3a936e6b25c
