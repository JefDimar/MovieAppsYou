import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalTrailer(props) {
  // https://www.youtube.com/watch?v=${key} (link youtube)
  // console.log(
  //   "https://api.themoviedb.org/3/movie/" +
  //     props.movie.id +
  //     "/videos?api_key=c2dcee8f08e877d5fb3559af163b7e36&language=en-US"
  // );
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
