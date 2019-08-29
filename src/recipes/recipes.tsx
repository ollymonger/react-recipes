import * as React from "react";
import { Component, useContext, useEffect, useState } from "react";
import { RecipeModel } from "../data/recipe-model";
import { Card, CardActionArea, CardContent, Typography, Theme, makeStyles, createStyles, Grid, Paper } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RepositoriesContext } from "../context";

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

export const AllRecipes: React.FunctionComponent = props => {
    const classes = useStyles(1);
    const { recipeRepository } = React.useContext(RepositoriesContext);
    const [recipes, setRecipes] = useState<RecipeModel[]>(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            setRecipes(recipeRepository.getThreeRandomRecipes());
        };
        fetchRecipes();
    }, []);

    if (recipes == null) {
        return <p>Recipes are loading!</p>;
    }

    return (
        <div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        {recipes.map((recipe, id: number) => (
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
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
