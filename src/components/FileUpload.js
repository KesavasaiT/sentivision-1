import React from 'react';
import './FileUpload.css';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const FileUpload = (props) => {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('http://localhost:5000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('File uploaded:', response.data.file_path);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="VideoInput" style={{border:'none', padding: 'px'}}>
      {!source && (
        <div>
          <Form.Group controlId="formFile" style={{
            borderTopLeftRadius: '26px',
            borderBottomLeftRadius: '26px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
            width: '600px',
            marginTop: '-0px'
          }}
          className="mb-3" ref={inputRef}
          type="file"
          onChange={handleFileChange}
          accept=".mov,.mp4">
            <Form.Control type="file" />
          </Form.Group>
          <br/>
          <br/>
          <br/>
          <h4 style={{textAlign:'center'}}>Please choose a file to continue.</h4>
          <br/>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {source && (
        <video style={{borderRadius: '15px' , borderBlockColor: 'black', overflow: 'static', position: 'static' }}
          className="VideoInput_video bg-dark"
          width={width + 285}
          height={height + 20}
          controls
          src={source}
        />
      )}
    </div>
  );
};

export default FileUpload;
