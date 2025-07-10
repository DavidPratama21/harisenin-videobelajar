import Header from "../components/organisems/Header";
import Logo from "../components/atoms/Logo";

const Login_layout = ({children}) => {
  return (
    <div>
      <Header>
        <Logo />
        <></>
      </Header>
      {children}
    </div>
  );
};

export default Login_layout;
