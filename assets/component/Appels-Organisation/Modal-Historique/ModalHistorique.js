import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
function ModalHistorique(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="uk-button uk-button-default"
        style={{ display: "block", marginTop: "1rem" }}
        onClick={handleShow}
      >
        Historique
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        className="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h6>Historique</h6>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {props?.foreList?.fore && props?.foreList?.fore.length > 0 && (
              <>
                {props?.foreList?.fore?.map((e) => (
                  <div className="row" style={{ fontSize: "0.8rem" }}>
                    <div className="col-sm-4">
                      <p>{e?.user}</p>
                    </div>

                    <div className="col-sm-6">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: e?.content,
                        }}
                      ></div>
                    </div>

                    <div className="col-sm-2">
                      <p>{new Date(e?.date).toISOString().substring(0, 10)}</p>
                    </div>

                    {/* <td>@mdo</td> */}
                  </div>
                ))}
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalHistorique;
