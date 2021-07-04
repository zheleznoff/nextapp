import React from 'react';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    paper: {
    },
    listText: {
        textAlign: 'center'
    }
  }))

const Editing = () => {
    const classes = useStyles()
    return (
        <Grid
            item
            xs={12} sm={12} md={12}
        >
            <Paper className={classes.paper}>
                <List component="nav" aria-label="main mailbox folders">
                    <Link
                        href={'/editing/scenario-work'}
                        passHref
                    >
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Working with a script" />
                        </ListItem>
                    </Link>
                    <Link href={'/editing/3d-work'} passHref>
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Working with 3D visualization" />
                        </ListItem>
                    </Link>
                    <Link href={'/editing/total-work'} passHref>
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Final assembly" />
                        </ListItem>
                    </Link>
                </List>
            </Paper>
        </Grid>
    )
}

export { Editing }
