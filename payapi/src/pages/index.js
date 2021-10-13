import * as React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import SingleForm from "../components/SingleForm";
import Typography from "../components/Typography";
import Navbar from "../components/Navbar";

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      Home Page
      <Button skin="primary" disabled={true}>
        primary
      </Button>
      <Button skin="secondary-light">
        secondary-light
      </Button>
      <Button skin="secondary-dark">
        secondary-dark
      </Button>
      <Typography tag="h1" type="h1-big">something</Typography>
      <Typography type="body-bold" color="primary">something</Typography>
      <Input placeholder="name"/>
      <Input placeholder="name" error={true}/>
      <Input placeholder="name" type="textarea"/>
      <Input placeholder="name" error={true} type="textarea"/>
      <Checkbox label={"checkbox"}>
        <Typography tag="span" type="body">something</Typography>
      </Checkbox>
      <SingleForm placeholder="single form" cta="sign up"/>
    </div>
  )
}

export default IndexPage

