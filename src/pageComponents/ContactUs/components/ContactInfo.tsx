import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

//css
import "../../../styles/globals.css";

const ContactInfo = () => {
  return (
    <div>
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-8 grid-cols-1">
          <div className="lg:col-span-3 ">
            <div className="sticky top-[140px]">
              <ContactDetail />
            </div>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
