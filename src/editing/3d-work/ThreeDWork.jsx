import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Snack } from '../../layout/Snack';

import { useRouter } from 'next/router'

import { setThreeDWork } from '../../../store/slices/3dWork/threeDWorkSlice'


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
    hint: {
        margin: 0,
        paddingLeft: '50px'
    },
    submitBtn: {
      marginTop: theme.spacing(3)
    }
  }));


const ThreeDWork = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {threeDWork} = useSelector((state) => state);
    const classes = useStyles();
    const [threeDWorkState, setThreeDWorkState] = React.useState({
        create: false,
        upgrade: false,
        done: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setThreeDWorkState({ ...threeDWorkState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setThreeDWorkState(threeDWork)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setThreeDWork(threeDWorkState));
                    router.push('/editing/total-work')
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={threeDWorkState.create}
                            onChange={handleChange}
                            name="create"
                            color="primary"
                        />
                        }
                        label="Создание"
                    />
                    <FormHelperText className={classes.hint}>Моделирование объектов</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={threeDWorkState.upgrade}
                            onChange={handleChange}
                            name="upgrade"
                            color="primary"
                        />
                        }
                        label="Доработка"
                    />
                    <FormHelperText className={classes.hint}>Добавление объектов в продукт</FormHelperText>
                </FormControl>
                {/* <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={threeDWorkState.done}
                            onChange={handleChange}
                            name="done"
                            color="primary"
                        />
                        }
                        label="Готово"
                    />
                </FormControl> */}
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
    ThreeDWork
}
