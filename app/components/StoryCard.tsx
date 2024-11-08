// /components/StoryCard.tsx

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface StoryCardProps {
  image: string;
  title: string;
  description: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ image, title, description }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 300, borderRadius: '12px', backgroundColor: 'white',
        transition: 'transform 0.3s ease-in-out', // Smooth transition
        '&:hover': {
          transform: 'scale(1.05)', // Grows the card slightly on hover
        },cursor:"pointer"
     }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        style={{
            width: '90%',
            height: '220px',
            objectFit: 'cover',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto', // Centers the CardMedia horizontally
            marginTop:"5%"
          }}
      />
      <CardContent sx={{ overflowY: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', whiteSpace: 'normal' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
