import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    titles: {
        marginTop: '0 auto'
    }
  }))

const Result = () => {
    const classes = useStyles()
    const { hasCamera,hasPC } = useSelector(state => state.techSupport)
    const { premiere,effects } = useSelector(state => state.workspace)
    const { video,audio,text } = useSelector(state => state.materials)
    const { bonding,soundMixing,subtitleSync } = useSelector(state => state.postEdit)
    const { cutting } = useSelector(state => state.scenarioWork)
    const scenarioAudio = useSelector(state => state.scenarioWork.audio)
    const scenarioText = useSelector(state => state.scenarioWork.text)
    const { create, upgrade } = useSelector(state => state.threeDWork)
    const { colorCorrections, totalCorrections,rendering } = useSelector(state => state.totalWork)
    return (
        <>
            <Grid
                container
                style={{
                    marginTop: '10%'
                }}
            >
                {
                    hasCamera && hasPC &&
                    premiere && effects &&
                    video && audio && text &&
                    bonding && bonding && soundMixing && subtitleSync &&
                    cutting && scenarioAudio && scenarioText && scenarioText &&
                    create && upgrade && colorCorrections && totalCorrections &&
                    rendering ?
                    <>
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
                                Готово
                            </Typography>
                            <Typography variant="h6">
                                Вы выполнили все этапы и ваш проект готов!
                            </Typography>
                        </Grid>
                    </Grid>
                    </>
                    :
                    <Grid
                        item
                        xs={10} md={10} lg={10}
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
                                Ошибка
                            </Typography>
                            <Typography variant="h6">
                                Какой-то из этапов не выполнен и вам стоит вернутся к предыдущим этапам
                            </Typography>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </>
    )
}

export { Result }