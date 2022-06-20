import React from "react";
import "../components/Grid/index.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";

// import { BiTransfer, BiDevices, BiWallet, BiShield } from "react-icons/bi";

import { Form } from "../components/Form";
import { Input } from "../components/FormInput";
import Button from "../components/Button";
import Card from "../components/Card";
// import Card from "../components/Card";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="chain justify-center items-center">
          <div className="ring-12 ring-6-md ring-4-lg">
            <Card>
              <Form>
                <div className="header">
                  <img src={logo} alt="" height="80rem" />
                  <h2 className="">Login</h2>
                </div>
                <div className="body">
                  <div className="formSection">
                    <label htmlFor="username" className="text-white">
                      Username
                    </label>
                    <Input type="text" color placeholder="Enter Username" />
                  </div>
                  <div className="formSection">
                    <label htmlFor="username" className="text-white">
                      Password
                    </label>
                    <Input type="password" color placeholder="Enter Password" />
                  </div>
                  <div className="formSection text-center">
                    <Button style={{ marginTop: "2rem" }} bg="secondary">
                      signup
                    </Button>
                  </div>
                  <div className="text-center text-secondary">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to="/signup">
                      Don't have an account ?{" "}
                      <span style={{ color: "white" }}> Sign Up</span>
                    </Link>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
