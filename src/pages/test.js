import styles from "../../../styles/Forms.module.scss";
import Image from "next/image";
import MainTitle from "../../MainTitle";
import { useRouter } from "next/router";
import { env } from "../../../next.config";
import {
  formSubmission as RS_formSubmission,
  formStarted as RS_formStarted,
} from "../../../helpers/rudderstack_calls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const UniversityForm = ({ data }) => {
  const router = {asPath: "/partner/universities"}
  const validationSquema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .required("This field is required")
      .email("Email is invalid"),
    job: Yup.string().required('this field is required'),
    department: Yup.string().when([], {
      is: () => router.asPath === "/partner/universities",
      then: Yup.string().required('this field is required'),
      otherwise: Yup.string().notRequired()
    }),
  });

  console.log(validationSquema)

  const formOptions = {
    resolver: yupResolver(validationSquema),
    mode: "onChange",
  };

  // RudderStack Tracking Start
  const RS_formName =
    "University Form - " + router.asPath.replace("/partner/", "");
  const RS_formWrapper = (e) => {
    RS_formStarted(RS_formName, e.target.name);
  };
  // RudderStack Tracking End

  const {
    register,
    handleSubmit,
    formState,
    reset,
    getFieldState,
    formState: { errors, isValid },
  } = useForm(formOptions);

  console.log(formState)

  const onSubmit = async (formData) => {
    const data = {
      name: formData.name,
      email: formData.email,
      "abe930f83c02799b16a24041978c2079b3d456a8": formData.department,
      "fa6223f87f9be848dee7125520c27acad3442a70": formData.job,
      add_time: Date(Date.now()).toString(),
    };

    RS_formSubmission(formData, RS_formName);

    //const emailUrl = `https://staging-cms.argovisa.com/api/prospects/email`;
    const pipedriveUrl = `https://bdvsolutions.pipedrive.com/api/v1/persons?api_token=${env.API_TOKEN}`;

    const response = await fetch(pipedriveUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataResponse = await response.json();
    reset();
  };

  getFieldState("name", formState);
  getFieldState("email", formState);
  getFieldState("department", formState);
  getFieldState("job", formState);

  return (
    <div className={`like-shadow bg-white relative pb-2`}>
      <section
        className={`text-center md:pt-14 md:pb-12 forms-section lg:abs-center`}
      >
        <div className="container">
          {data && (
            <div
              className={` -mt-2 pt-8 md:mt-0 mb-6 text-left md:pl-0 md:text-center md:w-[454px] lg:w-[503px] md:pt-0 md:pb-4 lg:pb-0 lg:mb-4 text-2xl md:text-[32px]`}
            >
              <MainTitle title={data.contact.title} />
            </div>
          )}

          {data && (
            <p className={`text-center text-sm md:text-2xl mb-8`}>
              {data.contact.paragraphOne}
            </p>
          )}

          <div className="md:grid md:grid-cols-2 content-center items-center md:abs-center md:gap-8 mt-8">
            <div className="flex-initial">
              <div className="text-start">
                <form spellCheck="false" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid">
                    <div className="relative flex flex-wrap -mx-3 lg:mb-10 mb-6 ">
                      <div className={`${styles.inputMaterial} h-12`}>
                        <input
                          {...register("name", { value: "" })}
                          className={`${
                            errors.name ? "text-semibold text-[#d40000]" : ""
                          }`}
                          type="text"
                          name="name"
                          autoComplete="off"
                          placeholder="e.g. John Doe"
                          onFocus={RS_formWrapper}
                        />
                        <label
                          htmlFor="name"
                          className={`${
                            errors.name
                              ? "after:border-b-2 after:border-[#d40000]"
                              : !getFieldState("name").isDirty && !"dirty"
                              ? "after:border-b-2 after:border-[#5d5d5d]"
                              : getFieldState("name").isDirty && "dirty"
                              ? "after:border-b-2 after:border-[#3a71d1]"
                              : ""
                          }`}
                        >
                          <span
                            className={`text-[12px] ${
                              errors.name
                                ? "text-semibold text-[#d40000]"
                                : !getFieldState("name").isDirty && !"dirty"
                                ? "text-semibold text-[#5d5d5d]"
                                : getFieldState("name").isDirty && "dirty"
                                ? "text-semibold text-[#3a71d1]"
                                : ""
                            }`}
                          >
                            Name
                          </span>
                        </label>
                      </div>
                      <div className="text-[10px] absolute -bottom-[16px] left-[10px] text-[#d40000]">
                        {errors.name?.message}
                      </div>
                    </div>
                    <div className="relative flex flex-wrap -mx-3 lg:mb-10 mb-6">
                      <div className={`${styles.inputMaterial} h-12`}>
                        <input
                          {...register("email", { value: "" })}
                          className={`${
                            errors.name ? "text-semibold text-[#d40000]" : ""
                          }`}
                          type="text"
                          name="email"
                          autoComplete="off"
                          placeholder="e.g. John.doe@argo.com"
                          onFocus={RS_formWrapper}
                        />
                        <label
                          htmlFor="email"
                          className={`${
                            errors.email
                              ? "after:border-b-2 after:border-[#d40000]"
                              : !getFieldState("email").isDirty && !"dirty"
                              ? "after:border-b-2 after:border-[#5d5d5d]"
                              : getFieldState("email").isDirty && "dirty"
                              ? "after:border-b-2 after:border-[#3a71d1]"
                              : ""
                          }`}
                        >
                          <span
                            className={` text-[12px] ${
                              errors.email
                                ? "text-semibold text-[#d40000]"
                                : !getFieldState("email").isDirty && !"dirty"
                                ? "text-semibold text-[#5d5d5d]"
                                : getFieldState("email").isDirty && "dirty"
                                ? "text-semibold text-[#3a71d1]"
                                : ""
                            }`}
                          >
                            Work Email Address
                          </span>
                        </label>
                      </div>
                      <div className="text-[10px] absolute -bottom-[16px] left-[10px] text-[#d40000]">
                        {errors.email?.message}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:gap-8">
                    <div className="relative flex flex-wrap -mx-3 lg:mb-10 mb-6">
                      <div className={`${styles.inputMaterial} h-12`}>
                        <input
                          {...register("job", { value: "" })}
                          className={`${
                            errors.name ? "text-semibold text-[#d40000]" : ""
                          }`}
                          type="text"
                          name="job"
                          autoComplete="off"
                          placeholder="e.g. Engineer"
                          onFocus={RS_formWrapper}
                        />
                        <label
                          htmlFor="email"
                          className={`${
                            errors.job
                              ? "after:border-b-2 after:border-[#d40000]"
                              : !getFieldState("job").isDirty && !"dirty"
                              ? "after:border-b-2 after:border-[#5d5d5d]"
                              : getFieldState("job").isDirty && "dirty"
                              ? "after:border-b-2 after:border-[#3a71d1]"
                              : ""
                          }`}
                        >
                          <span
                            className={` text-[12px] ${
                              errors.job
                                ? "text-semibold text-[#d40000]"
                                : !getFieldState("job").isDirty && !"dirty"
                                ? "text-semibold text-[#5d5d5d]"
                                : getFieldState("job").isDirty && "dirty"
                                ? "text-semibold text-[#3a71d1]"
                                : ""
                            }`}
                          >
                            Title
                          </span>
                        </label>
                      </div>
                      <div className="text-[10px] absolute -bottom-[16px] left-[10px] text-[#d40000]">
                        {errors.job?.message}
                      </div>
                    </div>
                  </div>
                  
                  {router.asPath === "/partner/universities" && (
                    <div className="relative flex flex-wrap -mx-3 lg:mb-10 mb-6">
                    <div className={`${styles.inputMaterial} h-12`}>
                      <input
                        {...register("department", { value: "" })}
                        className={`${errors.name ? "text-semibold text-[#d40000]" : ""
                          }`}
                          type="text"
                        name="department"
                        autoComplete="off"
                        placeholder="e.g. University of Arizona"
                        onFocus={RS_formWrapper}
                      />
                      <label
                        htmlFor="department"
                        className={`${errors.department
                          ? "after:border-b-2 after:border-[#d40000]"
                          : !getFieldState("department").isDirty &&
                            !"dirty"
                            ? "after:border-b-2 after:border-[#5d5d5d]"
                            : getFieldState("department").isDirty && "dirty"
                              ? "after:border-b-2 after:border-[#3a71d1]"
                              : ""
                          }`}
                      >
                        <span
                          className={` text-[12px] ${errors.department
                            ? "text-semibold text-[#d40000]"
                            : !getFieldState("department").isDirty &&
                              !"dirty"
                              ? "text-semibold text-[#5d5d5d]"
                              : getFieldState("department").isDirty &&
                                "dirty"
                                ? "text-semibold text-[#3a71d1]"
                                : ""
                            }`}
                        >
                          Department / School
                        </span>
                      </label>
                    </div>
                    <div className="text-[10px] absolute -bottom-[16px] left-[10px] text-[#d40000]">
                      {errors.department?.message}
                    </div>
                  </div>
                  )}
                  
                  <button
                    disabled={!isValid}
                    type="submit"
                    className={`${
                      !isValid
                        ? "btn-disabled border-2 border-[#a3a3a3] text-[#a3a3a3] lg:text-base py-2 lg:py-2 lg:px-8 mt-4 w-full"
                        : "btn-disabled border-2 border-[#ffa801] text-[#ffa801] lg:text-base py-2 lg:py-2 lg:px-8 mt-4 w-full hover:border-[#FFCB67] hover:text-[#FFCB67] active:border-[#A36E0A] active:text-[#A36E0A]"
                    }`}
                  >
                    {data.contact.btnFirst}
                  </button>
                </form>
              </div>
            </div>
            {data && (
              <div className="mt-8 block  col-span-1 md:mt-0">
                <Image
                  src={data.contact.image.url}
                  width={350}
                  height={250}
                  alt="hearth image"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityForm;
