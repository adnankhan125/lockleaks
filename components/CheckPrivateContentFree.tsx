"use client";
import React, { useState, useEffect } from "react";
import "../styles/CheckPrivateContent.css";
import "../styles/Newheader.css";
import Image from "next/image";
import proimg from "../public/images/pro.png";

type PlatformKey =
  | "OnlyFans"
  | "Fansly"
  | "Fanvue"
  | "My.Club"
  | "Patreon"
  | "Manyvids"
  | "Just For Fans"
  | "Fancentro"
  | "iFans"
  | "LoyalFans"
  | "Chaturbate"
  | "MFC"
  | "Stripchat"
  | "Streamate"
  | "LiveJasmin"
  | "BongaCams"
  | "CAM4"
  | "CamSoda"
  | "Jerkmate"
  | "Twitter(X)"
  | "TikTok"
  | "Instagram"
  | "Reddit"
  | "Facebook"
  | "Custom";

const subscriptionPlatforms: PlatformKey[] = [
  "OnlyFans",
  "Fansly",
  "Fanvue",
  "My.Club",
  "Patreon",
  "Manyvids",
  "Just For Fans",
  "Fancentro",
  "iFans",
  "LoyalFans",
];

const streamingPlatforms: PlatformKey[] = [
  "Chaturbate",
  "MFC",
  "Stripchat",
  "Streamate",
  "LiveJasmin",
  "BongaCams",
  "CAM4",
  "CamSoda",
  "Jerkmate",
];

const socialPlatforms: PlatformKey[] = [
  "Twitter(X)",
  "TikTok",
  "Instagram",
  "Reddit",
  "Facebook",
];

const TOTAL_STEPS = 5;

// 🖼️ Platform logos mapping
const platformLogos: Record<PlatformKey, string> = {
  OnlyFans: "/images/Group 35.svg",
  Fansly: "/images/Group 36.svg",
  Fanvue: "/images/Group 6.svg",
  "My.Club": "/images/Group 7.svg",
  Patreon: "/images/Group 8.svg",
  Manyvids: "/images/Group 9.svg",
  "Just For Fans": "/images/Group 13.svg",
  Fancentro: "/images/Group 14.svg",
  iFans: "/images/Group 15.svg",
  LoyalFans: "/images/Group 16.svg",

  // Streaming
  Chaturbate: "/images/chaturbate.svg",
  MFC: "/images/mfc.svg",
  Stripchat: "/images/stripchat.svg",
  Streamate: "/images/streamate.svg",
  LiveJasmin: "/images/Livejasmin.svg",
  BongaCams: "/images/bongacoms.svg",
  CAM4: "/images/cam4.svg",
  CamSoda: "/images/camsoda.svg",
  Jerkmate: "/images/jerkmate.svg",

  // Social
  "Twitter(X)": "/images/Group 26.svg",
  TikTok: "/images/Group 28.svg",
  Instagram: "/images/Group 29.svg",
  Reddit: "/images/Group 30.svg",
  Facebook: "/images/Group 39.svg",

  // Other
  Custom: "/images/1232Vector.svg",
};

const CheckPrivateContent: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  // Step 1 selections
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<PlatformKey>>(new Set());

  // Step 2 URLs
  const [accountUrls, setAccountUrls] = useState<string[]>([""]);

  // Step 3 Verification
  const [verificationMethod, setVerificationMethod] = useState<string>("email");

  const togglePlatform = (p: PlatformKey) => {
    setSelectedPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  };

  const addUrlField = () => setAccountUrls((u) => [...u, ""]);
  const removeUrlField = (idx: number) =>
    setAccountUrls((u) => u.filter((_, i) => i !== idx));
  const updateUrl = (idx: number, val: string) =>
    setAccountUrls((u) => u.map((v, i) => (i === idx ? val : v)));

  const resetWizard = () => {
    setStep(1);
    setSelectedPlatforms(new Set());
    setAccountUrls([""]);
  };

  const nextStep = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleFinish = () => {
    const el = document.getElementById("closePlatformModalBtn");
    el?.click();
  };

  const StepFooter = () => (
    <div className="d-flex justify-content-end align-items-center mt-4">
      <div className="d-flex gap-2">
        {step < TOTAL_STEPS ? (
          <button type="button" className="btn btn-pink px-4" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-pink px-4"
            onClick={handleFinish}
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );

  // ✅ Step1 Platforms
  const Step1Platforms = () => (
    <>
      <h6 className="platform-heading">Subscription Platforms</h6>
      <div className="platform-grid">
        {subscriptionPlatforms.map((platform, idx) => (
          <button
            key={idx}
            type="button"
            className={`platform-btn ${selectedPlatforms.has(platform) ? "active" : ""}`}
            onClick={() => togglePlatform(platform)}
          >
            <Image src={platformLogos[platform]} alt={platform} width={90} height={40} />
          </button>
        ))}
      </div>

      <h6 className="platform-heading mt-4">Streaming Platforms</h6>
      <div className="platform-grid">
        {streamingPlatforms.map((platform, idx) => (
          <button
            key={idx}
            type="button"
            className={`platform-btn ${selectedPlatforms.has(platform) ? "active" : ""}`}
            onClick={() => togglePlatform(platform)}
          >
            <Image src={platformLogos[platform]} alt={platform} width={90} height={40} />
          </button>
        ))}
      </div>

      <h6 className="platform-heading mt-4">Social Media Platforms</h6>
      <div className="platform-grid">
        {socialPlatforms.map((platform, idx) => (
          <button
            key={idx}
            type="button"
            className={`platform-btn ${selectedPlatforms.has(platform) ? "active" : ""}`}
            onClick={() => togglePlatform(platform)}
          >
            <Image src={platformLogos[platform]} alt={platform} width={90} height={40} />
          </button>
        ))}
      </div>

      <h6 className="platform-heading mt-4">Other Platforms</h6>
      <div className="platform-grid">
        <button
          type="button"
          className={`platform-btn ${selectedPlatforms.has("Custom") ? "active" : ""}`}
          onClick={() => togglePlatform("Custom")}
        >
          <Image
            src={platformLogos["Custom"]}
            alt="Custom"
            width={20}
            height={40}
            style={{ marginRight: "10px" }}
          />
          <span className="platform-text">Add Custom Platform</span>
        </button>
      </div>
    </>
  );

  // ✅ Step2 URLs
  const Step2Urls = () => (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "45vh", gap: "10px" }}
    >
      <p className="txt-frm-h mb-2">Just enter your username</p>

      <div className="custom-input-group">
        <input
          type="url"
          className="form-control custom-input"
          placeholder="https://onlyfans.com/@username"
          value={accountUrls[0]}
          onChange={(e) => updateUrl(0, e.target.value)}
        />
        <button
          type="button"
          className="btn custom-save-btn"
          onClick={() => console.log("Save clicked")}
        >
          Save
        </button>
      </div>

      <div className="mt-3 text-center">
        <button
          type="button"
          className="btn btn-link text-pink-btn p-0"
          onClick={addUrlField}
        >
          Add Account from Another Platform
        </button>
      </div>
    </div>
  );

  // ✅ Step3 Contact Info (with checkboxes)
   const Step3Verify = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [whatsapp, setWhatsapp] = useState("");
     const [phone, setPhone] = useState("");
     const [livechat, setLivechat] = useState("");
     const [altEmail, setAltEmail] = useState("");
 
     const [enabledFields, setEnabledFields] = useState({
       whatsapp: false,
       phone: false,
       livechat: false,
       altEmail: false,
     });
 
     const [errors, setErrors] = useState({ email: "", password: "" });
 
     const validate = () => {
       const newErrors = { email: "", password: "" };
       if (!email.includes("@")) newErrors.email = "Please enter a valid email address";
       if (password.length < 6) newErrors.password = "Don't forget to set your password!";
       setErrors(newErrors);
       return !newErrors.email && !newErrors.password;
     };
 
     const handleNextStep = () => {
       if (validate()) nextStep();
     };
 
     const toggleField = (field: keyof typeof enabledFields) => {
       setEnabledFields((prev) => ({ ...prev, [field]: !prev[field] }));
     };
 
     return (
       <div className="step3-container">
         <p className="text-muted text-center mb-4">
           Enter your email and set a password for your free scan account.
         </p>
 
         {/* Email + Password */}
         <div className="d-flex gap-3 mb-2">
           <div className="flex-fill">
             <label>Email Address</label>
             <input
               type="email"
               className={`form-control ${errors.email ? "is-invalid" : ""}`}
               placeholder="your@email.com"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
             />
             {errors.email && <small className="text-danger">{errors.email}</small>}
           </div>
 
           <div className="flex-fill">
             <label>Password</label>
             <input
               type="password"
               className={`form-control ${errors.password ? "is-invalid" : ""}`}
               placeholder="Enter password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
             {errors.password && <small className="text-danger">{errors.password}</small>}
           </div>
         </div>
 
         <p className="text-center text-muted mb-3">
           Note: (Required for scan updates and account creation.)
         </p>
 
         <h6 className="text-center mb-2">Enter Your Preferred Contact Details</h6>
         <div className="list-group mb-3">
           {/* WhatsApp */}
           <div className="list-group-item d-flex align-items-center gap-2">
             <label className="checkbox-label d-flex align-items-center">
               <input
                 type="checkbox"
                 checked={enabledFields.whatsapp}
                 onChange={() => toggleField("whatsapp")}
               />
               <span className="custom-check"></span>
             </label>
             <input
               type="text"
               className="form-control"
               placeholder="Enter WhatsApp Number"
               value={whatsapp}
               onChange={(e) => setWhatsapp(e.target.value)}
               disabled={!enabledFields.whatsapp}
             />
           </div>
 
           {/* Phone */}
           <div className="list-group-item d-flex align-items-center gap-2">
             <label className="checkbox-label d-flex align-items-center">
               <input
                 type="checkbox"
                 checked={enabledFields.phone}
                 onChange={() => toggleField("phone")}
               />
               <span className="custom-check"></span>
             </label>
             <input
               type="text"
               className="form-control"
               placeholder="Enter Phone Number"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               disabled={!enabledFields.phone}
             />
           </div>
 
           {/* Live Chat */}
           <div className="list-group-item d-flex align-items-center gap-2">
             <label className="checkbox-label d-flex align-items-center">
               <input
                 type="checkbox"
                 checked={enabledFields.livechat}
                 onChange={() => toggleField("livechat")}
               />
               <span className="custom-check"></span>
             </label>
             <input
               type="text"
               className="form-control"
               placeholder="Enter Live Chat ID"
               value={livechat}
               onChange={(e) => setLivechat(e.target.value)}
               disabled={!enabledFields.livechat}
             />
           </div>
 
           {/* Alternate Email */}
           <div className="list-group-item d-flex align-items-center gap-2">
             <label className="checkbox-label d-flex align-items-center">
               <input
                 type="checkbox"
                 checked={enabledFields.altEmail}
                 onChange={() => toggleField("altEmail")}
               />
               <span className="custom-check"></span>
             </label>
             <input
               type="email"
               className="form-control"
               placeholder="Enter Alternate Email"
               value={altEmail}
               onChange={(e) => setAltEmail(e.target.value)}
               disabled={!enabledFields.altEmail}
             />
           </div>
         </div>
       </div>
     );
   };

  // --------------------- STEP 4 ----------------------
  const Step4Protect = () => {
    const handleCopy = () => {
      navigator.clipboard.writeText("Content protected and enforced by lockleaks.com.");
      alert("Copied to clipboard!");
    };

    return (
      <div className="step text-center">
        {/* <h3 className="popup-heading">Protect Your Content</h3> */}
        <p className="popup-description">
          To ensure your content is protected and enforced, add the following line to your profile description:
        </p>
        <p className="popup-instruction">
          Just copy the text above and paste it into your profile description on OnlyFans or any other platform.
        </p>
        <input
          type="text"
          className="input-field gradient-text"
          readOnly
          value="Content protected and enforced by lockleaks.com."
        />
        <div className="text-start mb-4">
          <button className="btn text-white" style={{ backgroundColor: "#CF3CA6" }} onClick={handleCopy}>
            Copy to Clipboard
          </button>
        </div>
        <h5 className="profile-preview-heading">How It Should Look on Your Profile:</h5>
        <Image src={proimg} alt="Example Preview" className="popup-image mb-3 d-block mx-auto" />
      </div>
    );
  };

  // --------------------- STEP 5 ----------------------
  const Step5Scanning = () => {
    const [progress, setProgress] = useState(0);
    const [iconIndex, setIconIndex] = useState(0);
    const icons = ["/icons/folder.svg", "/icons/1download.svg", "/icons/11search.svg"];

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          let newVal = prev + (Math.random() * 10 - 5);
          if (newVal < 0) newVal = 0;
          if (newVal > 100) newVal = 100;
          return parseFloat(newVal.toFixed(2));
        });
      }, 800);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const iconTimer = setInterval(() => {
        setIconIndex((prev) => (prev + 1) % icons.length);
      }, 1500);
      return () => clearInterval(iconTimer);
    }, []);

    return (
      <div className="step5-scanning text-center">
        <h3 className="popup-heading mb-3">Scanning in Progress</h3>
        <p className="popup-description">
          Please note: The full scan and review may take between 12 to 24 hours. You will be contacted as soon as the results are ready.
        </p>
        <p className="popup-instruction mb-4">Stay tuned! We’ll send you updates as soon as your scan is ready.</p>

        <div className="scanning-box">
          <div className="scanning-text gradient-loading">Scanning...</div>
          <div className="scan-progress">{progress.toFixed(2)}%</div>
          <div className="scan-icons">
            <Image src={icons[iconIndex]} width={50} height={50} alt="icon" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="dailogs-login-slider-section d-flex flex-md-row flex-column">
        {/* Left Column */}
        <div className="col-md-6 platform-login-box text-center">
          <div className="check-header">Check if your private content has been leaked</div>
          <div className="check-sub">Free & Secure</div>
          <div className="check-heading">Submit your Offical Links</div>
          <p className="check-instruction">
            Please provide the URLs of your primary accounts across all platforms you use, even if they are <strong>no longer active</strong>. This helps ensure comprehensive protection.
          </p>

          <div className="add-account-box" data-bs-toggle="modal" data-bs-target="#platformModal" onClick={resetWizard}>
            <span>Add Your Accounts</span>
            <Image src="/icons/accountfinger.svg" width={24} height={24} alt="account" />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 dailogs-info-box p-0">{/* carousel remains unchanged */}</div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="platformModal" tabIndex={-1} aria-labelledby="platformModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
          <div className="modal-content custom-popup text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100 text-center" id="platformModalLabel">
                {step === 1 && "Select your platform"}
                {step === 2 && "Add your OnlyFans account"}
                {step === 3 && "Add your contact information"}
                {step === 4 && "Protect Your Content"}
                {step === 5 && "Scanning in Progress"}
              </h5>
              <button id="closePlatformModalBtn" type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              {step === 1 && <Step1Platforms />}
              {step === 2 && <Step2Urls />}
              {step === 3 && <Step3Verify />}
              {step === 4 && <Step4Protect />}
              {step === 5 && <Step5Scanning />}
              <StepFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckPrivateContent;
