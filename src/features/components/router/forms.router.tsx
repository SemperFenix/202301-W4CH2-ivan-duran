import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { FormOptions } from "../forms/forms";

const FormOne = lazy(() => import("../form1/page/form1.page"));

const FormTwo = lazy(
  () => import("../../../features/components/form2/page/form2.page")
);
const FormThree = lazy(
  () => import("../../../features/components/form3/page/form3.page")
);

const Error = lazy(() => import("../../../core/components/error/error"));

type FormRouterProps = {
  formOptions: FormOptions[];
};

export function FormsRouter({ formOptions }: FormRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<FormOne></FormOne>}></Route>
        <Route path={formOptions[0].path} element={<FormOne></FormOne>}></Route>

        <Route path={formOptions[1].path} element={<FormTwo></FormTwo>}></Route>
        <Route
          path={formOptions[2].path}
          element={<FormThree></FormThree>}
        ></Route>
        <Route path="/error" element={<Error></Error>}></Route>
        <Route
          path={"*"}
          element={<Navigate to={"/error"} replace={true}></Navigate>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
