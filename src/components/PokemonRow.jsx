import React from "react";
import Button from "@mui/material/Button";
import PokemonType from "../PokemonType";
import PropTypes from "prop-types";

const PokemonRow = ( { pokemon, onSelect } ) => (
	<tr> 
		<td>{pokemon.name.english}</td>
		<td>{pokemon.type.join(",  ")}</td>
		<td>
			<Button variant="outlined" onClick={() => onSelect(pokemon)}
			>More Informaiton </Button>
		</td>
	</tr>
);

PokemonRow.propTypes = {
	pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;