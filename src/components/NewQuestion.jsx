import {
  FormControl,
  Typography,
  Button,
  Box,
  Divider,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewQuestion = () => {
  let navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    console.log(`optionOne: ${optionOne}`);
    console.log(`optionTwo: ${optionTwo}`);
    setOptionOne("");
    setOptionTwo("");
    //navigate("/home");
  };
  return (
    <Box display="flex" flexDirection="column" width="50%">
      <h1>Create a new Question</h1>
      <Divider />
      <Typography
        paddingY="24px"
        fontWeight="bold"
        alignSelf="center"
        variant="subtitle1"
      >
        Would you rather...
      </Typography>
      <FormControl>
        <TextField
          label="Enter Option One Text here"
          value={optionOne}
          onChange={(e) => setOptionOne(e.target.value)}
        />
        <Typography
          paddingY="24px"
          fontWeight="bold"
          alignSelf="center"
          variant="subtitle1"
        >
          ...OR...
        </Typography>
        <TextField
          label="Enter Option Two Text here"
          value={optionTwo}
          onChange={(e) => setOptionTwo(e.target.value)}
        />
        <Box sx={{ py: "24px" }}>
          <Button
            disabled={optionOne === "" || optionTwo === ""}
            fullWidth
            variant="contained"
            onClick={onSubmitQuestion}
          >
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
