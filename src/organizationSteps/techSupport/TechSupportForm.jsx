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

import { setTechSupport } from '../../../store/slices/techSupport/techSupportSlice'


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


const TechSupportForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {techSupport} = useSelector((state) => state);
    const classes = useStyles();
    const [techSupportState, setTechSupportState] = React.useState({
        hasCamera: false,
        hasPC: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setTechSupportState({ ...techSupportState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setTechSupportState(techSupport)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setTechSupport(techSupportState));
                    router.push('/organization/workspace')
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={techSupportState.hasCamera}
                            onChange={handleChange}
                            name="hasCamera"
                            color="primary"
                        />
                        }
                        label="????????????"
                    />
                    <FormHelperText className={classes.hint}>???????????? 360 ?? ?????????????????????? ???????????? Full HD</FormHelperText>
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={techSupportState.hasPC}
                            onChange={handleChange}
                            name="hasPC"
                            color="primary"
                        />
                        }
                        label="???????????????????????? ??????????????????"
                    />
                    <FormHelperText className={classes.hint}>??????????????????, ?????????????????? ?????? ??????????????</FormHelperText>
                </FormControl>
                <FormControl>
                    <Button
                        className={classes.submitBtn}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        ??????????????????
                    </Button>
                    <Button
                        className={classes.submitBtn}
                        onClick={() => router.back()}
                        variant="contained"
                        type="button"
                    >
                        ??????????
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
    TechSupportForm
}
