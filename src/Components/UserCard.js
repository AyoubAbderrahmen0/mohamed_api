import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function UserCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.el.url} />
      <Card.Body>
        <Card.Title>{props.el.title}</Card.Title>
      </Card.Body>
      <Button>more</Button>
    </Card>
  );
}

export default UserCard;