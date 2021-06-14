import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Snack } from '../../layout/Snack';

import { useRouter } from 'next/router'

import { setScenarioWork } from '../../../store/slices/scenario-work/scenarioWorkSlice'


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


const ScenarioWork = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {scenarioWork} = useSelector((state) => state);
    const classes = useStyles();
    const [scenarioWorkState, setScenarioWorkState] = React.useState({
        cutting: false,
        audio: false,
        text: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setScenarioWorkState({ ...scenarioWorkState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setScenarioWorkState(scenarioWork)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setScenarioWork(scenarioWorkState));
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={scenarioWorkState.cutting}
                            onChange={handleChange}
                            name="cutting"
                            color="primary"
                        />
                        }
                        label="Склейка"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={scenarioWorkState.audio}
                            onChange={handleChange}
                            name="audio"
                            color="primary"
                        />
                        }
                        label="Аудио"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={scenarioWorkState.text}
                            onChange={handleChange}
                            name="text"
                            color="primary"
                        />
                        }
                        label="Текст"
                    />
                </FormControl>
                <FormControl>
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
    ScenarioWork
}
