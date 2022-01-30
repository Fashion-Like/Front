// import { useState } from "react"
import SignUpForm from "../components/SignUpForm"
import backgroundForm from "../assets/images/img-form.png";
import { FormContainer, ImgForm } from "../assets/styledForm";


const SignUpPage = () => {

  return (
    <>
      <FormContainer>
        <ImgForm src={backgroundForm} alt="background-form" />
        <SignUpForm />
      </FormContainer>
    </>
  )
}

export default SignUpPage

