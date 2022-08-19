import Accordion from "react-bootstrap/Accordion";

function AccordionBootstrap({ item: { id, title, body } }) {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title} : {id}</Accordion.Header>
        <Accordion.Body>
          {body}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionBootstrap;
