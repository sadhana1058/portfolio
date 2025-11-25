// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Newsletter } from "./Newsletter";

// type FormData = { EMAIL: string };

// export const MailchimpForm = () => {
//   const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${
//     import.meta.env.VITE_MAILCHIMP_U
//   }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

//   return (
//     <MailchimpSubscribe
//       url={postUrl}
//       render={({ subscribe, status, message }) => (
//         <Newsletter
//           status={status as "sending" | "success" | "error" | null}
//           message={message as string | null}
//           onValidated={(formData: FormData) => subscribe(formData)}
//         />
//       )}
//     />
//   );
// }; 
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

type FormData = { EMAIL: string };

export const MailchimpForm = () => {
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${
    import.meta.env.VITE_MAILCHIMP_U
  }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status as "sending" | "success" | "error" | null}
          message={message as string | null}
          onValidated={(formData: FormData) => subscribe(formData)}
        />
      )}
    />
  );
};
