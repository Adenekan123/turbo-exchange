import React from "react";
import "../components/Grid/index.css";
import { Form } from "../components/Form";
import { Input, Dropdown } from "../components/FormInput";

const Profile = () => (
  <section className="container">
    <Form>
      <div className="formSection">
        <h2 className="heading3 text-left">Personal Data</h2>
        <div className="chain">
          <div className="ring-12 ring-9-md">
            <div className="chain">
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">First name</label>
                <Input
                  type="text"
                  color={"white"}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Last name</label>
                <Input
                  type="text"
                  color={"white"}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Gender</label>
                <Dropdown color={"white"} options={["male", "female"]} />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Nationality</label>
                <Dropdown color={"white"} options={["male", "female"]} />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">State of Origin</label>
                <Dropdown color={"white"} options={["male", "female"]} />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">L.G.A</label>
                <Input type="text" color={"white"} placeholder="Enter L.G.A" />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Phone</label>
                <Input type="text" color={"white"} placeholder="Enter Phone" />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Email</label>
                <Input type="email" color={"white"} placeholder="Enter Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formSection">
        <h2 className="heading3 text-left">Next of Kin Data</h2>
        <div className="chain">
          <div className="ring-12 ring-9-md">
            <div className="chain">
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">First name</label>
                <Input
                  type="text"
                  color={"white"}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Last name</label>
                <Input
                  type="text"
                  color={"white"}
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Gender</label>
                <Dropdown color={"white"} options={["male", "female"]} />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Phone</label>
                <Input type="text" color={"white"} placeholder="Enter Phone" />
              </div>
              <div className="ring-12 ring-4-md">
                <label htmlFor="firstname">Email</label>
                <Input type="email" color={"white"} placeholder="Enter Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </section>
);

export default Profile;
