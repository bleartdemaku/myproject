import Accordion from "react-bootstrap/Accordion";

function AccordionBootstrap({ item: { id, title, body } }) {
  return (
    <Accordion defaultActiveKey="0" className="mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{id} : {title}</Accordion.Header>
        <Accordion.Body>
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionBootstrap;
