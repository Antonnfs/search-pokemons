/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      pokemon: [],
      selectedItem: null,
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/search-pokemons/pokemon.json")
    .then(resp => resp.json())
    .then(data => 
      this.setState({
        ...this.state,
        pokemon: data,
      })
    );
  }

  render() {
    return (
      <Container>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <Input
              value={this.state.filter}
              onChange={(evt) => this.state.setState({
                ...this.state,
                filter: evt.target.value})}
            />
            <table width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemon.filter((pokemon) => 
                  pokemon.name.english.toLowerCase().includes(this.state.filter.toLowerCase())).slice(0, 20).map(pokemon => ( 
                    <PokemonRow 
                      pokemon={pokemon} 
                      key={pokemon.id} 
                      onSelect={(pokemon) => this.setState({
                        ...this.state,
                        selectedItem: pokemon,
                      })}
                    />
                  )
                )}
              </tbody>
            </table>
          </div>
          {this.state.selectedItem && ( <PokemonInfo {...this.state.selectedItem}/>)}
        </TwoColumnLayout>
      </Container>
    );
  }
}
*/
