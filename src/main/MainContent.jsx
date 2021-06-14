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
                    xs={12} md={6} lg={6}
                    style={{
                        height:'50vh'
                    }}
                >
                    <Grid
                        className={classes.titles}
                        style={{
                            marginTop: '25%',
                            marginLeft: '10%'
                        }}
                    >
                        <Typography variant="h4">
                            Мастер класс по виртуальной и дополненой реальности
                        </Typography>
                        <Typography variant="h6">
                            Создание виртуалього тура
                        </Typography>
                        <Link href={'/organization'}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    marginTop: '20px'
                                }}
                            >
                                Начать
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12} md={6} lg={6}
                    direction={'row'}
                    alignItems={'center'}
                    style={{
                        height:'370px',
                        paddingLeft: '5%'
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