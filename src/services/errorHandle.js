import PNotify from "pnotify/dist/es/PNotify";
import PNotifyButtons from "pnotify/dist/es/PNotifyButtons";
import PNotifyConfirm from "pnotify/dist/es/PNotifyConfirm";

export const getErrorMessage = (err, customMessage = "") => {
  try {
    if (err && Object.keys(err).length > 0) {
      return err.error;
    } else if (customMessage !== "") {
      return customMessage;
    } else {
      return "Something went wrong !!";
    }
  } catch (e) {
    return "Server Error !!";
  }
};

export const successMessage = (data) => {
  PNotify.success({
    title: "Success",
    text: data,
    addClass: " alert-success",
    closerHover: true,
    closer: true,
    modules: {
      closerHover: true,
      closer: true,
      PNotifyButtons,
      PNotifyConfirm,
    },
  });
};

export const errorMessage = (data) => {
  PNotify.error({
    title: "Error",
    text: data,
    addClass: "alert-warning alert-danger",
    modules: {
      closer: true,
      PNotifyButtons,
      PNotifyConfirm,
    },
  });
};
