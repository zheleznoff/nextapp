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

import { setTotalWork } from '../../../store/slices/totalWork/totalWorkSlice'


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


const TotalWork = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {totalWork} = useSelector((state) => state);
    const classes = useStyles();
    const [totalWorkState, setTotalWorkState] = React.useState({
        colorCorrections: false,
        totalCorrections: false,
        rendering: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setTotalWorkState({ ...totalWorkState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setTotalWorkState(totalWork)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setTotalWork(totalWorkState));
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={totalWorkState.colorCorrections}
                            onChange={handleChange}
                            name="colorCorrections"
                            color="primary"
                        />
                        }
                        label="Цветокоррекция"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={totalWorkState.totalCorrections}
                            onChange={handleChange}
                            name="totalCorrections"
                            color="primary"
                        />
                        }
                        label="Итоговые правки"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={totalWorkState.rendering}
                            onChange={handleChange}
                            name="rendering"
                            color="primary"
                        />
                        }
                        label="Рендеринг"
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
    TotalWork
}
