declare module "react-mailchimp-subscribe" {
    interface SubscribeProps {
      EMAIL: string;
      [key: string]: any;
    }
  
    interface MailchimpRenderProps {
      subscribe: (data: SubscribeProps) => void;
      status: "sending" | "error" | "success" | null;
      message: string | null;
    }
  
    interface MailchimpSubscribeProps {
      url: string;
      render: (props: MailchimpRenderProps) => JSX.Element;
    }
  
    const MailchimpSubscribe: React.FC<MailchimpSubscribeProps>;
    export default MailchimpSubscribe;
  }
  