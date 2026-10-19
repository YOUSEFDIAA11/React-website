
import './Customcard.css';
import Repeateditems from '../../Repeateditems/Repeateditems';
import { Typography } from '@mui/material';

function Customcard() {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        className="services-title"
      >
        Our Services
      </Typography>

      <div className="cards-container">
        <Repeateditems title="Hello" />
        <Repeateditems title="Lizard" />
        <Repeateditems title="Green Iguana" />
      </div>
    </>
  );
}

export default Customcard;
