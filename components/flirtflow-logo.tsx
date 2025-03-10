import type React from "react"

interface FlirtFlowLogoProps {
  className?: string
}

const FlirtFlowLogo: React.FC<FlirtFlowLogoProps> = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.87852 24.4715L0 26L1.52855 19.1214C0.553072 17.2973 0 15.2132 0 13C0 5.82029 5.82029 0 13 0C20.1796 0 26 5.82029 26 13C26 20.1796 20.1796 26 13 26C10.7867 26 8.70272 25.447 6.87852 24.4715ZM7.25497 21.7243L8.10456 22.1786C9.59722 22.9768 11.2651 23.4 13 23.4C18.7438 23.4 23.4 18.7438 23.4 13C23.4 7.25624 18.7438 2.6 13 2.6C7.25624 2.6 2.6 7.25624 2.6 13C2.6 14.7348 3.02314 16.4027 3.82134 17.8954L4.27565 18.745L3.42441 22.5755L7.25497 21.7243Z"
        fill="currentColor"
      />
      <path
        d="M7 11.2729C7 9.46532 8.47746 8 10.3 8C11.4161 8 12.4028 8.54952 13 9.39063C13.5972 8.54952 14.5839 8 15.7 8C17.5226 8 19 9.46532 19 11.2729C19 15.7359 12.9999 19 12.9999 19C12.9999 19 7 15.7359 7 11.2729Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default FlirtFlowLogo

