import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    listText: {
        textAlign: 'center'
    }
  }))

const OrganizationSteps = () => {
    const classes = useStyles()

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Grid
            item
            xs={12} sm={12} md={12}
        >
            <Paper className={fixedHeightPaper}>
                <List component="nav" aria-label="main mailbox folders">
                    <Link href={'/organization/tech-support'}>
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Техническое обеспечение" />
                        </ListItem>
                    </Link>
                    <Link href={'/organization/workspace'}>
                        <ListItem
                            button
                            className={classes.listText}
                        >
                            <ListItemText primary="Программное обеспечние" />
                        </ListItem>
                    </Link>
                </List>
            </Paper>
        </Grid>
    )
}

export { OrganizationSteps }
