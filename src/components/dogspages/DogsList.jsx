import * as React from 'react';
import pic from './pictures/sophia-kunkel-w2U50zkDuqo-unsplash.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import * as React from 'react'


function DogsList(props) {
    return (
        <div>
            {console.log(props.data)}
            <div className="dog-card">
                {props.data.map((item) => (

                    <Card
                    // sx={{ maxWidth: 300 }}
                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="200"
                            image={pic}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                <span>Size: {item.size} </span> <br />
                                <span>Age: {item.age} </span> <br />
                                <span>Gender: {item.type}</span>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color='success' style={{ fontWeight: 700 }} >See more</Button>
                        </CardActions>
                    </Card>

                    // <div>
                    //     <h3>{item.name}</h3>
                    //     <p>{item.size}</p>
                    //     <p>{item.age}</p>
                    //     <p>{item.type}</p>
                    // </div>
                ))}

            </div>


            {/* <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p>{item.size}</p>
                        <p>{item.age}</p>
                        <p>{item.type}</p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions>
            </Card> */}


        </div>
    )
}
export default DogsList;
