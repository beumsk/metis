import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
function ModalHistorique(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props?.foreList?.fore);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Historique
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Historique</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {props?.foreList?.fore && props?.foreList?.fore.length > 0 && (
              <>
                {props?.foreList?.fore?.map((e) => (
                  <div className="row">
                    {/* <td>1</td> */}
                    <div
                      className="col-sm-8"
                      dangerouslySetInnerHTML={{
                        __html: e?.content,
                      }}
                    ></div>
                    <div className="col-sm-4">
                      {new Date(e?.date).toISOString("short")}
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
