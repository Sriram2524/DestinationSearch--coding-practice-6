// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li className="list">
      <div className="con">
        <img alt={name} className="img" src={imgUrl} />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
