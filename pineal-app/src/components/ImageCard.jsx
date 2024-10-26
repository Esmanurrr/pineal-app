
function ImageCard({photo}) {
  return (
    <div className="card">
        <img src={photo.urls.small} alt={photo.alt_description} />
    </div>
  )
}

export default ImageCard