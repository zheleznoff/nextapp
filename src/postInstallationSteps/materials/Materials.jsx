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

import { setMaterials } from '../../../store/slices/materials/materialsSlice'


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


const Materials = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {materials} = useSelector((state) => state);
    const classes = useStyles();
    const [materialsState, setMaterialsState] = React.useState({
        video: false,
        audio: false,
        text: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setMaterialsState({ ...materialsState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setMaterialsState(materials)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setMaterials(materialsState));
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={materialsState.video}
                            onChange={handleChange}
                            name="video"
                            color="primary"
                        />
                        }
                        label="Видео"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={materialsState.audio}
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
                            checked={materialsState.text}
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
    Materials
}
