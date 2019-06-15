import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';


const styles = theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
})

class VideoCard extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    render() {
        const { classes, info } = this.props;
        const imgUrl = info.snippet.thumbnails.high.url
        const desciption = info.snippet.description;
        const title = info.snippet.title

        return (
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={imgUrl}
                    title={desciption}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        )

    }
}

VideoCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoCard);
