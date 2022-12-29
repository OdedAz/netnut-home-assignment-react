import React from "react";
import axios from 'axios';
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
    const api_path = "http://localhost:3001/translatingPhrase.php"
    axios.post(api_path,this.state)
      .then(result => {
        console.log({result})
        alert("translation sent")
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className="main-container">
        <form action="../src/hooks/translatingPhrase.php">
          <Box>
            <h1>NetNut Home Assignment</h1>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <TextField
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
                  id="outlined-error"
                  label="choose language of translation"
                  value={this.state.toLanguage}
                  onChange={(e) =>
                    this.setState({ toLanguage: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="outlined-error"
                  label="Phrase to translate"
                  value={this.state.phrase}
                  onChange={(e) =>
                    this.setState({ phrase: e.target.value })
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
