import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
});

export default function ImageAvatars(props) {
    const classes = useStyles();

    const {style} = props;

    return (
        <Grid style={style} container justify="center" alignItems="center">
            {/*<Avatar alt="Remy Sharp" src="https://res.cloudinary.com/uecare/image/upload/v1524201071/test/大學二年級.jpg" className={classes.avatar} />*/}
            <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/uecare/image/upload/v1524201071/test/大學二年級.jpg" className={classes.bigAvatar} />
        </Grid>
    );
}
