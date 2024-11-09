import React from "react";
import loginIcon from "../assets/signin.gif";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import SmallCircularSpinner from "../components/progress/SmallCircularSpinner";

const userLoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email.")
    .required("An email address is required."),
  password: Yup.string()
    .min(1, "Password is too short - must contain at least 1 character.")
    .required("Password is required."),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = "/";
  const { loadingUserInfo, errorLogingIn, userInfo } = useSelector(
    (state) => state.user
  );

  const [showPassword, setShowPassword] = React.useState(false);

  const initialValues = {
    email: "",
    password: "",
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
            {errorLogingIn && (
              <p className="text-red-500 font-semibold">{errorLogingIn}</p>
            )}
          </div>
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcon} alt="login icons" />
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={userLoginValidationSchema}
            onSubmit={(values) => {
              dispatch(loginUser(values));
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
                  <label>Email : </label>
                  <div className="bg-slate-100 p-2 ">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      className="w-full h-full outline-none bg-transparent"
                    />
                  </div>
                  <div>
                    {touched.email && errors.email && (
                      <p className="text-red-500 ">{`*${errors.email}`}</p>
                    )}
                  </div>
                </div>
                <div className="my-2">
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
                <div>
                  <div>
                    <Link
                      to={"/forgot-password"}
                      className="block w-fit ml-auto hover:underline hover:text-blue-600"
                    >
                      Forgot password ?
                    </Link>
                  </div>
                </div>
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-[90%]  rounded-full hover:scale-110 transition-all mx-auto block mt-6"
                  type="submit"
                >
                  {loadingUserInfo ? (
                    <div className="flex flex-row gap-1 items-center justify-center ">
                      <SmallCircularSpinner /> Please Wait...
                    </div>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
            )}
          </Formik>
          <p className="my-5">
            Don't have account ?{" "}
            <Link
              to={"/sign-up"}
              className=" text-blue-600 hover:text-blue-700 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
