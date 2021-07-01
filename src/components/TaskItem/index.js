import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import styles from './styles';

class TaskItem extends Component {
  renderBackIcon = task => {
    const { classes, onChangeStatusDown } = this.props;
    const { status } = task;
    if (status !== 0) {
      return (
        <Fab
          color="primary"
          aria-label="Edit"
          className={classes.fab}
          size="small"
          onClick={onChangeStatusDown}
        >
          <ArrowBackIosIcon />
        </Fab>
      );
    }
    return '';
  };

  renderForwardIcon = task => {
    const { classes, onChangeStatusUp } = this.props;
    const { status } = task;
    if (status !== 2) {
      return (
        <Fab
          color="primary"
          aria-label="Edit"
          className={classes.fab}
          size="small"
          onClick={onChangeStatusUp}
        >
          <ArrowForwardIosIcon />
        </Fab>
      );
    }
    return '';
  };

  render() {
    const { classes, task, status, onClickEdit, onClickDelete } = this.props;
    const { id, title } = task;
    return (
      <Card key={id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {this.renderBackIcon(task)}
          <Fab
            color="primary"
            aria-label="Edit"
            className={classes.fab}
            size="small"
            onClick={onClickEdit}
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            color="primary"
            aria-label="Delete"
            className={classes.fab}
            size="small"
            onClick={onClickDelete}
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
          {this.renderForwardIcon(task)}
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.object,
  onClickEdit: PropTypes.func,
  onChangeStatusUp: PropTypes.func,
  onChangeStatusDown: PropTypes.func,
  onClickDelete: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
