import { useFormik } from "formik";
import schema from "./schema";
import InputField from "./InputField";
import { inputs } from "./constants";

const App = () => {
  // useFormik  özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // state'i tutulacak olan verilerin ilk değerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // validasyon şeması
    validationSchema: schema,

    onSubmit: async (values, actions) => {
      await new Promise((resolve) => setTimeout(() => resolve(), 3000));

      alert("form gönderildi");
    },
  });

  return (
    <div className="vh-100 vw-100 bg-dark text-white">
      <div className="container py-5 ">
        <h2 className="text-center">Coinmania</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((props) => (
            <InputField formik={formik} {...props} />
          ))}

          <button disabled={formik.isSubmitting} className="my-5">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
