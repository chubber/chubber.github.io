import React from 'react';
import './ImageUpload.css';

export class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imageUrl: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(image) {

    let reader = new FileReader();
    let file = image.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imageUrl} = this.state;
    let image = null;
    if (imageUrl) {
      image = (<img src={imageUrl} />);
    } else {
      image = (<div className="imageText">Ladda upp en bild</div>);
    }

    return (
      <div className="imageContainer">
        <div>
          {image}
        </div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this.handleImageChange(e)} />
        </form>
      </div>
    )
  }
}
