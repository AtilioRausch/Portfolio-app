import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function WorkCard({ work }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" component="h2">
          {work.titulo}
        </Typography>
        <Typography variant="h6" component="p">
          {work.titulo_corto}
        </Typography>
        <Typography variant="body2" component="p">
          {work.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default WorkCard;
