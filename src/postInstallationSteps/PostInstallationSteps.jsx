import React from 'react';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
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

const PostInstallationSteps = () => {
    const classes = useStyles()
    return (
        <Grid
            item
            xs={12} sm={12} md={12}
        >
            <Paper className={classes.paper}>
                <List component="nav" aria-label="main mailbox folders">
                    <Link
                        href={'/post-installation/workspace'}
                        passHref
                    >
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Рабочая среда" />
                        </ListItem>
                    </Link>
                    <Link href={'/post-installation/materials'} passHref>
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Сбор материалов" />
                        </ListItem>
                    </Link>
                    <Link href={'/post-installation/post-edit'} passHref>
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Пост-монтаж" />
                        </ListItem>
                    </Link>
                </List>
            </Paper>
        </Grid>
    )
}

export { PostInstallationSteps }
