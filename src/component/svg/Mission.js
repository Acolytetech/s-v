import React from 'react';
import './Mission.css'; // Import the CSS file

const Mission = (props) => {
  return (
    <div className="icon-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || "24"}
        height={props.height || "24"}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <circle cx="12" cy="12" r="12" fill="white" />
        <g clipPath="url(#clip0_706_13621)">
          <path
            d="M8.0026 12.2512C8.29809 12.19 8.60683 12.056 8.89808 11.8457C9.73552 11.2399 10.1072 10.2453 9.7274 9.62293C9.31444 8.94599 8.18482 8.9915 7.31676 9.76191C6.48667 10.4786 6.30957 11.2275 6.30957 12.0146C6.30957 12.5707 6.48744 13.5637 7.57403 14.4261C8.08707 14.0297 8.69869 13.7036 9.39296 13.4678L9.40216 13.4644C8.8687 13.2421 8.17334 12.8033 8.0026 12.2512ZM7.86864 10.3371C7.86864 10.1045 8.05391 9.91754 8.28242 9.91754C8.51073 9.91754 8.6962 10.1054 8.6962 10.3379C8.6962 10.5705 8.51073 10.7575 8.28242 10.7575C8.05396 10.7575 7.86864 10.5696 7.86864 10.3371Z"
            fill="#2AA7FF"
          />
          <path
            d="M17.7051 12.0155C17.7026 11.2276 17.5263 10.4787 16.6955 9.76199C15.8281 8.99236 14.6977 8.94519 14.2847 9.62301C13.9057 10.2453 14.2765 11.2401 15.1139 11.8458C15.4052 12.056 15.714 12.1901 16.0094 12.2513C15.9067 12.5831 15.5948 12.9208 15.119 13.2055C14.4647 13.596 14.1112 13.6443 9.92509 15.0344C8.37595 15.5607 7.4541 16.6067 7.4541 17.8324C7.4541 18.7054 7.9001 19.3791 8.51989 19.8723C8.90973 19.4709 9.39638 19.1226 9.96492 18.8436C9.31032 18.5127 9.10834 18.2619 9.10834 17.8324C9.10834 17.1234 10.5253 16.7181 11.179 16.5025V18.2967L12.8341 17.5584V16.5033C13.4888 16.7201 14.9022 17.1249 14.9022 17.8324C14.9022 19.0093 11.5321 19.7034 10.0982 20.6924C9.40223 21.1749 9.02802 21.7881 9.02802 22.5089C9.02802 22.9227 9.07612 23.4358 9.80266 23.9455C10.0087 24.1101 10.2949 23.8697 10.1611 23.6385C9.68101 22.6777 10.1908 22.1977 11.1806 21.7822V23.1709C11.1806 23.6277 11.5513 23.9985 12.0082 23.9985C12.465 23.9985 12.8357 23.6277 12.8357 23.1709V21.7831C13.7865 22.182 14.385 22.7455 13.8528 23.6385C13.7209 23.8653 14.0018 24.1121 14.2103 23.9455C14.9137 23.4125 14.9692 22.9557 14.9692 22.5197C14.9692 21.8486 14.6018 21.1973 13.9049 20.6982C15.3135 20.1892 16.5597 19.3327 16.5597 17.834C16.5597 16.7987 15.9019 15.8917 14.7648 15.3174C15.296 15.1262 15.5633 14.998 15.9183 14.7862C17.4734 13.8568 17.7051 12.6511 17.7051 12.0155ZM15.7306 10.7575C15.5021 10.7575 15.3168 10.5697 15.3168 10.3371C15.3168 10.1046 15.5021 9.91674 15.7306 9.91674C15.9589 9.91674 16.1444 10.1046 16.1444 10.3371C16.1444 10.5697 15.9589 10.7575 15.7306 10.7575Z"
            fill="#2AA7FF"
          />
          <path
            d="M23.5857 1.65672H17.9181C16.8063 1.65672 15.972 2.14819 15.2542 2.86599C14.4745 3.64576 14.069 5.37914 12.8274 5.37914V3.08069C13.3201 2.794 13.655 2.26627 13.655 1.65512C13.655 0.741028 12.914 0 11.9998 0C11.0857 0 10.3447 0.741028 10.3447 1.65512C10.3447 2.26622 10.6796 2.79394 11.1723 3.08069V12.9434C11.683 12.7805 12.2436 12.6009 12.8274 12.4134V8.26815C13.1865 8.088 13.4762 7.79675 13.6538 7.43629C13.9417 7.92828 14.4889 8.2772 15.0988 8.2772C15.7175 8.2772 16.2505 7.93371 16.5345 7.43102C17.5039 8.40056 19.306 8.41923 20.2754 7.44974L18.8691 6.04341L19.5142 6.31066C20.781 6.83538 22.2333 6.2338 22.7581 4.96701L20.7602 4.13945C22.6957 4.1394 23.5857 2.92491 23.5857 1.65672Z"
            fill="#2AA7FF"
          />
          <path
            d="M8.74552 2.86552C8.02776 2.14772 6.82321 1.65625 5.71144 1.65625H0.114307C0.114307 2.9244 1.00425 4.1389 2.93972 4.1389L0.941803 4.96646C1.4666 6.23326 2.91884 6.83484 4.18562 6.31012L4.83074 6.04287L3.42441 7.44919C4.39391 8.41863 6.19597 8.39996 7.16541 7.43041C7.44941 7.93311 7.98245 8.27661 8.60117 8.27661C9.21108 8.27661 9.75827 7.92764 10.0462 7.43565C10.2237 7.79606 10.5134 8.08731 10.8726 8.26752V12.4007C11.4564 12.5882 12.017 12.7681 12.5278 12.9312V3.0801C13.0205 2.7934 13.3554 2.26567 13.3554 1.65452C13.3554 0.740429 12.6144 0 11.7003 0C10.7861 0 10.0451 0.740429 10.0451 1.65452C10.0451 2.26518 10.3799 2.7929 10.8726 3.07966V5.37914C9.63115 5.37914 9.2255 3.64576 8.44587 2.86552Z"
            fill="#2AA7FF"
          />
        </g>
        <defs>
          <clipPath id="clip0_706_13621">
            <rect
              width="23.4691"
              height="24"
              fill="white"
              transform="translate(0.114258)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Mission;