function ImageShow({ image }) {
  return(
    <div className="image-show">
      <img alt={image.alt_description} src={image.urls.small} />
    </div>
  );
}

export default ImageShow;