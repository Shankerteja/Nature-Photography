import './index.css'

const ThumbnailItem = props => {
  const {details, onChangeTheImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const updateImage = () => {
    onChangeTheImage(id)
  }
  const changeValue = isActive ? 'additional' : null

  return (
    <li>
      <button
        className={`button ${changeValue}`}
        type="button"
        onClick={updateImage}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
