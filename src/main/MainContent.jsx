import React from 'react';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    titles: {
        marginTop: '0 auto'
    }
  }))

const MainContent = () => {
    const classes = useStyles()
    return (
        <>
            <Grid
                container
                style={{
                    marginTop: '10%'
                }}
            >
                <Grid
                    item
                    xs={10} md={6} lg={6}
                    style={{
                        height:'50vh'
                    }}
                >
                    <Grid
                        className={classes.titles}
                        style={{
                            // marginTop: '25%',
                            // marginLeft: '10%',
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            paddingLeft: '14px'

                        }}
                    >
                        <Typography variant="h4">
                            Master class on virtual and augmented reality
                        </Typography>
                        <Typography variant="h6">
                            Creation of a virtual tour
                        </Typography>
                        <Link href={'/organization'}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: '20px'
                                }}
                            >
                                Begin
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={10} md={6} lg={6}
                    style={{
                        height:'370px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src={require('../images/mainContent.gif')}
                        alt="loading..."
                        style={{
                            borderRadius: '50%'
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export { MainContent }


{/* <img src={require('../images/mainContent.gif')} alt="loading..." /> */}