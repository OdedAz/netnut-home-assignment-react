import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromLanguage: "",
      toLanguage: "",
      phrase: "",
    };
  }
  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="main-container">
        {/* <form onSubmit={handleSubmit}> */}
        <form action="../hooks/translatingPhrase.php">
          <Box>
            <h1>NetNut Home Assignment</h1>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <TextField
                  error
                  id="outlined-error"
                  label="From Language"
                  value={this.state.fromLanguage}
                  onChange={(e) =>
                    this.setState({ fromLanguage: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  error
                  id="outlined-error"
                  label="choose language"
                  value={this.state.toLanguage}
                  onChange={(e) =>
                    this.setState({ fromLanguage: e.target.toLanguage })
                  }
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  error
                  id="outlined-error"
                  label="Phrase to translate"
                  value={this.state.phrase}
                  onChange={(e) =>
                    this.setState({ fromLanguage: e.target.phrase })
                  }
                />
              </Grid>
              <input
                type="submit"
                onClick={(e) => this.handleFormSubmit(e)}
                value="Submit"
              />
            </Grid>
          </Box>
        </form>
      </div>
    );
  }
}

export default Home;
