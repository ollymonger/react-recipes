# react-recipes

## Usage

```bash
$ npm install
$ npm run dev

Project is running at http://localhost:8090/
```

## Requirements

1. `/` should return three random recipe cards
   1. the cards should show:
      - recipe name
      - preparation time
      - cooking time
      - tags
   2. clicking a card should take you to `/recipe/__id__`
2. `/recipe/__id__` should show you detail about the recipe
    - recipe name
    - preparation time
    - cooking time
    - tags

## Constraints

1. Use react-router for routing
2. Use `React.FunctionComponent` for all components, with `React.useEffect` and `React.useState`
3. Use Material UI - **no custom CSS**
4. Use the repositories context for all data: `const { recipeRepository } = React.useContext(RepositoriesContext);`
