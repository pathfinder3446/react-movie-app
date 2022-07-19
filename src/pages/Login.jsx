import {
  FormGroup,
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Link
} from "@mui/material";

const Login = () => {
  return (
    <div className="login m-4 p-4 row ">
      <div className="loginImg d-flex justify-content-center col-sm " >
        <img className="border rounded" src={"https://picsum.photos/900/450"} alt="" />
      </div>
      <div className="loginForm col-sm m-4">
      <h1 className="text-6xl text-center" >Login</h1>
      <FormGroup className="flex flex-col gap-4">
        <FormControl>
          <InputLabel htmlFor="mail">Email address</InputLabel>
          <Input id="mail" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            We'll never share password.
          </FormHelperText>
        </FormControl>
        <Link href="#" underline="always">
          {'Forgot password?'}
        </Link>
        <Button variant="contained">Login</Button>
        <Button className="bg-red-800" variant="contained">
          Continue with Google
        </Button>
      </FormGroup>
      </div>
      
    </div>
  );
};

export default Login;