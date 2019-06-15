import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, withTheme } from '@material-ui/core/styles';

import backgroundImage from './../../images/banner.jpg';
import VideoCard from './../VideoCard/VideoCard';
import YtSearchService from '../../services/YtSearch.service';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    //backgroundColor: theme.palette.background.paper,
    backgroundImage: 'url(' + backgroundImage + ')',
    backgroundSize: 'cover',
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3, 4];

class Album extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      youtubeData: null,
      isLoading: true
    }


  }

  setStateAsync(state) {
    return new Promise(resolve => {
      this.setState(state, resolve);
    });
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    })

    let videos = await YtSearchService("W9UcImEiF9o,2mgUPt2KI08,KdYaHZHMGDM,kW5WyJ1QNpM")
    console.log(videos);

    await this.setStateAsync({youtubeData: videos});

    this.setState({
      isLoading: false
    })
  }

  render() {
    const classes = this.props;
    if(this.state.isLoading) return null
    return (
      <React.Fragment>
        <CssBaseLine />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" gutterBottom>
                Jesus Loves You!
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                He died for you so that you may live. Accept him as your personal savior and He&quot;ll take charge of your life. Give all your worries to Him, for He cares for you!
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      View Videos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      View Photos
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classes.content}>
            <div className={classNames(classes.layout, classes.cardGrid)}>
              {/* End hero unit */}
              <Typography component="h2" variant="h3" align="center" gutterBottom>
                Our Popular Videos
            </Typography>

               <Grid container spacing={40}>
                {this.state.youtubeData.map(video => (
                  <Grid item key={video.id} xs={12} sm={4} md={3} lg={3}>
                    <VideoCard info={video}></VideoCard>
                  </Grid>
                ))}
              </Grid> 
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
