import {
  FormGroup,
  FormControl,
  Button,
  Input,
  InputLabel,
  FormHelperText,
  Link
} from "@mui/material";

const Register = () => {
  return (
    <div className="register m-4 p-4 row ">
      <div className="loginImg d-flex justify-content-center col-sm" >
        <img src={"https://picsum.photos/900/450"} alt="" />
      </div>
      <div className="registerForm col-sm m-4">
      <h1 className="text-6xl text-center" >Register</h1>
      <FormGroup className="flex flex-col gap-4">
      <FormControl>
          <InputLabel htmlFor="first-name">First Name</InputLabel>
          <Input
            id="first-name"
            type="text"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
            
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <Input
            id="last-name"
            type="text"
            aria-describedby="my-helper-text"
          />
          <FormHelperText id="my-helper-text">
           
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email address</InputLabel>
          <Input id="email" aria-describedby="my-helper-text" />
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

export default Register;