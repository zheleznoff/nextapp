import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { setScenarioPoints } from '../../../store/slices/scenario/scenarioSlice';
import { Snack } from '../../layout/Snack'

import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 350,
      border: "solid 1px #aaa",
      borderRadius: 8,
      padding: theme.spacing(2),
      flexDirection: "column",
      "& > *": {
        margin: theme.spacing(2)
      }
    },
    submitBtn: {
      marginTop: theme.spacing(3)
    }
  }));


const ScenarioForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {scenario} = useSelector((state) => state);
    const classes = useStyles();
    const [scenarioState, setScenarioState] = React.useState({
        writing: false,
        subtitles: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setScenarioState({ ...scenarioState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setScenarioState(scenario)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setScenarioPoints(scenarioState));
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={scenarioState.writing}
                            onChange={handleChange}
                            name="writing"
                            color="primary"
                        />
                        }
                        label="Написание сценария"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={scenarioState.subtitles}
                            onChange={handleChange}
                            name="subtitles"
                            color="primary"
                        />
                        }
                        label="Субтитры"
                    />
                <Button
                    className={classes.submitBtn}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Сохранить
                </Button>
                <Button
                    className={classes.submitBtn}
                    onClick={() => router.back()}
                    variant="contained"
                    type="button"
                >
                    Назад
                </Button>
                </FormControl>
            </Container>
            <Snack
                isOpen={open}
                setOpen={setOpen}
            />
        </>
    )
}

export {
    ScenarioForm
}
