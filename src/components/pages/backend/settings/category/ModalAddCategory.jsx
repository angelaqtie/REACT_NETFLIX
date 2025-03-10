import React from "react";
import ModalWrapper from "../../partials/modals/ModalWrapper";
import { setIsAdd } from "@/components/store/storeAction";
import { StoreContext } from "@/components/store/storeContext";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import { Archive, X } from "lucide-react";
import { InputText } from "@/components/helpers/FormInputs,";
import { Form, Formik } from "formik";
import * as Yup from "Yup";

const ModalAddCategory = () => {
  const { dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };
  const initVal = {
    movie_category: "",
  };

  const yupSchema = Yup.object({
    movie_category: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalWrapper>
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">
                  <div className="modal-header flex gap-2 p-2 items-center border-b border-line mb-2">
                    <span className="text-Body">Add Category</span>
                    <button className="ml-auto" onClick={handleClose}>
                      <X />{" "}
                    </button>
                  </div>
                  <div className="modal-body p-2 py-4">
                   
                      <div className="input-wrap">
                        <InputText label="Category" name="movie_category" />
                      </div>
                    

                    <div className="flex justify-end gap-3 mt-5">
                      <button className="btn btn-info" type="submit">
                        <SpinnerButton /> Save
                      </button>
                      <button className="btn btn-cancel" onClick={handleClose} type="reset">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalWrapper>
    </>
  );
};

export default ModalAddCategory;
