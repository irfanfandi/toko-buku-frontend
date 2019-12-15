import React, {useState} from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

  
  const Login = props => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    
    const handleLogin = e => {
      props.onLogin(name, password)
      setName('')
      setPassword('')
    }
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-primary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" className="Login">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email"         
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit" onClick={() => handleLogin()}>
                    Sign in
                  </Button>
                </div>
              </Form>
              <Row className="text-right">
            </Row>
            </CardBody>
            <Col className="text-center" >
              <NavLink
                to={'/auth/register'}
                tag={'Register'}
                activeClassName="active"
              >
                <i className={'ni ni-circle-08 mt-10'}/>
                {'Create new account'}
            </NavLink>
            </Col>
          </Card>
        </Col>
      </>
    );
}

export default Login;
