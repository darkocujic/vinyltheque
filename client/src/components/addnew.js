import React, {Component} from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

class AddNew extends Component {

    addNewSubmit() {
        let artist = document.getElementById('artist').value;
        let album = document.getElementById('album').value;
        let year = document.getElementById('year').value;
        let img = document.getElementById('img').value;
        let tags = document.getElementById('tags').value;

        let record = {
            artist: artist,
            album: album,
            year: year,
            tags: tags,
            img: img
        };

        axios.post('http://localhost:3000/records', record)
            .then(() => {
                console.log('done');
                document.getElementById('addNewForm').reset();
            });
    }

    render() {
      return (
            <div className="grid__add-new">
                <h3>Add new record</h3>
                <Form id="addNewForm">
                    <Form.Group >
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Artist"
                            id="artist"
                            onChange={() => document.getElementById('img').value = document.getElementById('artist').value.replace(' ', '').toLowerCase() + '-' + document.getElementById('album').value.replace(' ', '').toLowerCase() + '.jpg'}
                        />
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Album"
                            id="album"
                            onChange={() => document.getElementById('img').value = document.getElementById('artist').value.replace(' ', '').toLowerCase() + '-' + document.getElementById('album').value.replace(' ', '').toLowerCase() + '.jpg'}
                        />
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Year"
                            id="year"
                        />
                        <Form.Control
                            className="mt-2"
                            type="text"
                            placeholder="Tags (comma separated)"
                            id="tags"
                        />
                        <Form.Control
                            type="hidden"
                            id="img"
                        />
                        <Button
                            className="mt-4 grid__add-new-btn"
                            href="#"
                            size="lg"
                            variant="success"
                            onClick={this.addNewSubmit}
                        >
                            +
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
      }
  }
  
  export default AddNew;
  