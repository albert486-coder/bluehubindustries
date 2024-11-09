import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { registerUser } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import SmallCircularSpinner from "../components/progress/SmallCircularSpinner";

const userRegistrationValidationSchema = Yup.object({
  name: Yup.string().required("A user name is required."),
  email: Yup.string()
    .email("Invalid email.")
    .required("An email address is required."),
  password: Yup.string()
    .min(4, "Password is too short - must contain at least 4 characters.")
    .required("Password is required."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match")
    .required("Password is required."),
});

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = "/";
  const { loadingUserRegistration, errorRegistration, userInfo } = useSelector(
    (state) => state.user
  );
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  React.useEffect(() => {
    if (userInfo) {
      if (location.state?.from) {
        navigate(location.state.from);
      } else {
        navigate(redirect);
      }
    }
  }, [userInfo, navigate, redirect, location.state]);

  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="flex justify-center py-2">
            {errorRegistration && (
              <p className="text-red-500 font-semibold">{errorRegistration}</p>
            )}
          </div>
          {/* <div className="w-20 h-20 mx-auto"></div> */}
          <Formik
            initialValues={initialValues}
            validationSchema={userRegistrationValidationSchema}
            onSubmit={(values) => {
              dispatch(registerUser(values));
              //console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form
                className="pt-6 flex flex-col gap-2 "
                onSubmit={handleSubmit}
              >
                <div>
                  <label>User name : </label>
                  <div className="bg-slate-100 p-2 ">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      className="w-full h-full outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    {touched.name && errors.name && (
                      <p className="text-red-500 ">{`*${errors.name}`}</p>
                    )}
                  </div>
                </div>
                <div className="my-1">
                  <label>Email : </label>
                  <div className="bg-slate-100 p-2 ">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      className="w-full h-full outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    {touched.email && errors.email && (
                      <p className="text-red-500 ">{`*${errors.email}`}</p>
                    )}
                  </div>
                </div>
                <div className="my-1">
                  <label>Password : </label>
                  <div className="bg-slate-100 p-2 flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={values.password}
                      name="password"
                      onChange={handleChange}
                      className="w-full h-full outline-none bg-transparent"
                    />
                    <div
                      className="cursor-pointer text-xl"
                      onClick={() => setShowPassword((preve) => !preve)}
                    >
                      <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>
                  </div>
                  <div>
                    {touched.password && errors.password && (
                      <p className="text-red-500 ">{`*${errors.password}`}</p>
                    )}
                  </div>
                </div>
                <div className="my-1">
                  <label>Confirm Password : </label>
                  <div className="bg-slate-100 p-2 flex">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      name="confirmPassword"
                      onChange={handleChange}
                      className="w-full h-full outline-none bg-transparent"
                    />
                    <div
                      className="cursor-pointer text-xl"
                      onClick={() => setShowConfirmPassword((preve) => !preve)}
                    >
                      <span>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <div>
                    {touched.confirmPassword && errors.confirmPassword && (
                      <p className="text-red-500 ">{`*${errors.confirmPassword}`}</p>
                    )}
                  </div>
                </div>
                <div></div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-[90%]  rounded-full hover:scale-110 transition-all mx-auto block mt-6"
                  type="submit"
                >
                  {loadingUserRegistration ? (
                    <div className="flex flex-row gap-1 items-center justify-center ">
                      <SmallCircularSpinner /> Please Wait...
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </form>
            )}
          </Formik>
          <p className="my-5">
            Already have an account ?{" "}
            <Link
              to={"/login"}
              className=" text-blue-600 hover:text-blue-700 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
