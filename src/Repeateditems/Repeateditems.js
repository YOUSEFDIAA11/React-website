
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import card_1 from '../assets/card_1.jpg';

function Repeateditems(props) {
  return (
    <Card sx={{ maxWidth: 345, width: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={card_1}
        title="Green Iguana"
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          Lizards are a widespread group of reptiles,
          with over 6,000 species, ranging across all
          continents except Antarctica.
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Repeateditems;
