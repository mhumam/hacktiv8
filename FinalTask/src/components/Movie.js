import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MovieCard = ({ title, year, image }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" image={image} alt={title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MovieCard
