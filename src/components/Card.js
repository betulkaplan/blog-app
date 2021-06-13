import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { editHandler } from '../firebase/auth';
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ post }) {
  const { currentUser } = useContext(AuthContext);
  const [faved, setFaved] = useState(false);
  const history = useHistory();
  const showContent = () => {
    history.push({
      pathname: '/full-content',
      post: post,
    });
  };
  const classes = useStyles();

  const favHandler = () => {
    if (currentUser) {
      setFaved(!faved);
      if (post.faves === undefined) post.faves = ['default'];
      post.faves = [...post.faves];
      if (!post?.faves?.includes(currentUser.email)) {
        post.faves.push(currentUser.email);
      } else {
        const index = post.faves.indexOf(currentUser.email);
        post.faves.splice(index, 1);
      }

      editHandler(post);
    } else {
      alert('you have to sign in to add fav');
    }
  };

  return (
    <Card className={classes.root} style={{ margin: 'auto' }}>
      <CardActionArea onClick={showContent}>
        <CardMedia
          className={classes.media}
          image={post.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={favHandler}>
          {post?.faves?.includes(currentUser?.email) ? (
            <FavoriteIcon />
          ) : (
            <FavoriteBorderIcon />
          )}
          {/* {!faved ? <FavoriteBorderIcon /> : <FavoriteIcon />}{' '} */}
          {post?.faves?.length - 1 > 0 ? post?.faves?.length - 1 : null}
        </Button>
        <Button size="small" color="primary">
          <ChatBubbleOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
