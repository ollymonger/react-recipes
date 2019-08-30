
import * as React from "react";
import { RecipeModel } from "../data/recipe-model";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, CardActionArea, CardContent, Typography, Theme, makeStyles, createStyles, Grid, Button } from "@material-ui/core";

export interface RecipeProps {
    recipe: RecipeModel;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        card: {
            width: 400,
            padding: theme.spacing(2)
        }
    }));

export const RecipeFormat: React.FunctionComponent<RecipeProps> = ({ recipe }) => {
    const classes = useStyles(1);
    return (
        <>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid key={recipe.id} item>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <Typography gutterBottom variant="h5" component="h2">{recipe.name}</Typography>
                                    </Link>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Preparation Time: {recipe.prepTime}mins | Cooking time: {recipe.cookTime}mins
                                        </Typography>
                                    <p>{recipe.tags}</p>
                                </CardActionArea>

                                <Link to="/"><Button>Back</Button></Link>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
