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

import { setPostEdit } from '../../../store/slices/postEdit/postEditSlice'


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


const PostEdit = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {postEdit} = useSelector((state) => state);
    const classes = useStyles();
    const [postEditState, setPostEditState] = React.useState({
        bonding: false,
        soundMixing: false,
        subtitleSync: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setPostEditState({ ...postEditState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setPostEditState(postEdit)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setPostEdit(postEditState));
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={postEditState.bonding}
                            onChange={handleChange}
                            name="bonding"
                            color="primary"
                        />
                        }
                        label="Склейка материала"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={postEditState.soundMixing}
                            onChange={handleChange}
                            name="soundMixing"
                            color="primary"
                        />
                        }
                        label="Сведение звука"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={postEditState.subtitleSync}
                            onChange={handleChange}
                            name="subtitleSync"
                            color="primary"
                        />
                        }
                        label="Синхронизация субтитров"
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
    PostEdit
}
