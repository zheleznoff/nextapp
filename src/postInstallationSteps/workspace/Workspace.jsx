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

import { setWorkspace } from '../../../store/slices/workspace/workspaceSlice'


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


const Workspace = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {workspace} = useSelector((state) => state);
    const classes = useStyles();
    const [workspaceState, setWorkspaceState] = React.useState({
        premiere: false,
        effects: false
    });
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setWorkspaceState({ ...workspaceState, [event.target.name]: event.target.checked });
    };
    useEffect(() => {
        setWorkspaceState(workspace)
    }, [useSelector])

    return (
        <>
            <Container
                maxWidth="sm"
                component="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setWorkspace(workspaceState));
                    router.push('/post-installation/materials')
                    handleClick()
                }}
                className={classes.root}
            >
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={workspaceState.premiere}
                            onChange={handleChange}
                            name="premiere"
                            color="primary"
                        />
                        }
                        label="Adobe Premiere pro"
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={workspaceState.effects}
                            onChange={handleChange}
                            name="effects"
                            color="primary"
                        />
                        }
                        label="Adobe After Effects"
                    />
                </FormControl>
                <FormControl>
                <Button
                    className={classes.submitBtn}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Save
                </Button>
                <Button
                    className={classes.submitBtn}
                    onClick={() => router.back()}
                    variant="contained"
                    type="button"
                >
                    Back
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
    Workspace
}
