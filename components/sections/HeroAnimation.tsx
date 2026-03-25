"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin);

// ─── SVG Icon Components ───────────────────────────────────────────────────

function IconTelegram({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 187" fill="none">
      <path fill="#fff" d="M199.972 13.79a16.16 16.16 0 0 0-4.167-10.925 21.33 21.33 0 0 0-16.691-2 297 297 0 0 0-30.109 8.333c-5.083 1.5-10.091 3.259-15.016 5.175-7.334 2.75-14.517 5.925-21.767 9.092A408 408 0 0 0 73.18 43.073a221.7 221.7 0 0 0-35.7 25.025L8.872 93.707 2.28 100.29c-.809.854-1.509 1.806-2.083 2.833a3.34 3.34 0 0 0 0 2.259 5.67 5.67 0 0 0 3.333 4.166 31 31 0 0 0 10.009 1.667c3.666 0 10.175 0 15.766.833 2.834-.083 5.65.317 8.334 1.167l1.591 18.608c.5 5.334.75 9.509.75 13.434 0 6.25-.833 17.1-.833 25.608a2.83 2.83 0 0 0 1.75 2.618 2.84 2.84 0 0 0 3.087-.615 2.83 2.83 0 0 0 .83-2.003c0-8.342 1.083-19.358 1.166-25.608 0-4.084 0-8.342-.583-13.934-.583-5.583-.583-12.591-1.25-16.683s-.75-6.333-11.167-8.333c-6.175-.759-14.683-1.175-19.275-1.425l-4.583-.667 4.833-4.75L42.73 74.432a206.7 206.7 0 0 1 34.534-24.267 417 417 0 0 1 38.291-18.192c7.084-3 14.267-5.916 21.434-8.333a266.6 266.6 0 0 1 47.05-12.683c7.5 3.25 6.416 6.083 6.25 8.333a60 60 0 0 1-2.25 12.433l-10.75 36.375c-2.175 7.25-4.509 14.009-6.934 20.6-5.916 15.934-12.425 30.867-18.433 48.134a93 93 0 0 1-5 11.425c-3.083 5.833-6.592 11.425-9.85 16.683a34 34 0 0 1-3.167 4.833l-.833 1-.5-.75-8.342-13.091a208 208 0 0 0-13.183-16.267 175 175 0 0 0-14.925-14.85c-3.583-3-13.683-11.333-16.683-5.333-.834 1.083-1.75 3.166-2.25 3.75l-9.775 14.183-9.834 17.433c-3.508 6.084-7.683 11.842-11.433 17.934-1.583 2.666-3.167 5.416-4.5 8.341a2.5 2.5 0 0 0 1.167 3.334s2.333 1.916 5.75-.667 4.416-3.25 6.333-4.75c1.925-1.5 6.35-4.583 9.433-6.758 3.084-2.167 5.584-3.75 8.342-5.667l12.675-8.85c6.675-4.75 13.1-9.667 19.358-14.925l1.417 1.583a225 225 0 0 1 12.425 15.934l7.508 12.841a36 36 0 0 0 2.584 4.084 4.578 4.578 0 0 0 3.75 1.416 10.74 10.74 0 0 0 5.35-2.5 36.5 36.5 0 0 0 6.083-7.75c3.417-5.258 7.175-11.016 10.425-16.683a86 86 0 0 0 5.758-12.433c6.167-17.184 13.017-31.95 19.017-47.709a287 287 0 0 0 7.342-21.191l10.841-36.7a66.7 66.7 0 0 0 2.75-20.942M75.847 153.765a99 99 0 0 0-8.333 6c-2.842 2.25-5.509 4.583-8.35 7.092l-6.25 6.416c3.25-4.916 6.666-9.666 9.666-14.666l10.35-16.692 9.592-13.758c.417-.5 1.667-2.584 2.167-3.417s1.666 1.083 2.583 1.75 3.758 3.417 4.842 4.333c2.833 2.584 5.666 5.5 8.341 8.334-7.916 5.266-16.516 9.516-24.608 14.608"/>
      <path fill="#0c6fff" d="M114.056 73.682c-4.417 4.833-8.342 9.925-12.684 15.183a242 242 0 0 0-13.591 18.35c-.917 1.333-1.75 2.75-2.584 4.083-2.166 6.6.917 5.592 6.667.667l.75-1.167c4.667-5.916 9.925-11.5 14.85-16.675 7.917-9.091 16.683-17.433 25.025-25.691l18.508-17.442a1126 1126 0 0 0 27.109-25.942c13.525-23.683-23.259 9.675-43.109 27.775-7.25 6.917-14.258 13.509-20.933 20.85m-3.342-25.516a567 567 0 0 0-33.95 25.025L50.406 94.623c-1.667 1.5-3.584 3.084-5.5 4.667-4 5-3.417 6.842 5.666 2.833 1.334-.916 2.667-1.833 3.75-2.75L81.856 79.69l68.566-47.292c6.75-4.591 13.267-9.183 20.025-13.6 1.584-5.583-10.266-1.666-20.025 4.084l-4.416 2.666c-11.85 7.434-23.775 14.684-35.284 22.609"/>
    </svg>
  );
}

function IconDashboard({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 54 54" fill="none">
      <path fill="#e3ffd9" fillRule="evenodd" d="M11.644 35.084c0 1.913.157 3.218.225 3.645a.606.606 0 0 0 .72.518.63.63 0 0 0 .517-.72c-.292-1.913-.112-23.376-.202-32.058V3.25c.495-.112 1.485-.18 2.25-.292a98 98 0 0 1 14.647-.45c3.202.011 6.393.374 9.516 1.08q.593.144 1.124.45.105.062.203.135c.9 3.24-.968 17.84-1.372 27.357-.161 2.37-.109 4.75.157 7.11a.7.7 0 0 0 .81.585.675.675 0 0 0 .585-.81c-.81-5.422 1.935-23.107 2.25-31.14a14.2 14.2 0 0 0-.315-3.802c-.248-.833-1.395-1.73-3.42-2.248A58.5 58.5 0 0 0 26.784.034a68 68 0 0 0-14.175 1.035 4.05 4.05 0 0 0-1.642.742 1.4 1.4 0 0 0-.448 1.35c.292 1.373.742 23.105 1.125 31.923" clipRule="evenodd"/>
      <path fill="#fff" fillRule="evenodd" d="M51.757 22.666a28 28 0 0 0-.923-5.782 4.95 4.95 0 0 0-1.485-2.61 2.25 2.25 0 0 0-1.44-.338c-.742 0-1.912.225-3.96.383a.63.63 0 0 0-.63.63.653.653 0 0 0 .653.607h3.487c.765 0 .72 0 .9.135s.428.855.585 1.688c.284 1.793.434 3.607.45 5.422 0 2.25.158 4.928.18 7.47v11.385l-19.617.36c-2.993 0-5.963.293-9 .383a58 58 0 0 1-5.85 0l-8.188-.293a14 14 0 0 1-1.508-.18 1.08 1.08 0 0 1-.675-.337 2 2 0 0 1-.225-1.058c0-.967.135-2.025 0-2.722l.113-12.218c0-1.71-.135-4.027-.113-6.255a22.6 22.6 0 0 1 .293-4.027 1.42 1.42 0 0 1 1.035-1.103 4.7 4.7 0 0 1 1.98 0 .652.652 0 0 0 .877-.675.63.63 0 0 0-.472-.742 5.63 5.63 0 0 0-3.195.18 2.61 2.61 0 0 0-1.485 1.89 24 24 0 0 0-.495 4.275c-.113 2.25 0 4.5-.113 6.277l-.675 12.285c0 .855-.247 2.25-.157 3.33.04.655.234 1.296.562 1.866.315.463.752.828 1.26 1.057a8 8 0 0 0 2.835.518c.833 0 1.665.135 2.498.18 1.89 0 3.757 0 5.647.112h4.5l3.105-.225c-.157.315-.315.608-.45.923-.72 1.575-1.372 3.172-2.092 4.747 0 .203-.765 1.418-.923 1.958a1.5 1.5 0 0 0 0 .967 1.3 1.3 0 0 0 .765.698q.423.101.855.157.617.035 1.238 0c.585 0 1.147 0 1.71-.157a52 52 0 0 1 6.165-.743c4.768-.247 5.577.9 4.497-3.892a14 14 0 0 0-.45-1.575 11 11 0 0 0-.63-1.485 25 25 0 0 0-1.282-2.25l17.595-.833a8.7 8.7 0 0 0 1.44-1.44c.293-2.587.878-7.965.968-13.23-.046-1.98-.16-3.937-.16-5.713m-20.56 24.748c.247.788.562 1.553.854 2.25l.743 1.733a36 36 0 0 0-4.118-.315c-1.777 0-3.555 0-5.355.247h-1.687c.18-.292.337-.54.36-.607.517-1.643.922-3.33 1.462-4.973q.25-.765.54-1.552c1.958-.158 3.915-.315 5.895-.428h.36c.225 1.373.495 2.543.878 3.735z" clipRule="evenodd"/>
    </svg>
  );
}

function IconTransactions({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 42" fill="none">
      <path fill="#e3ffd9" d="M36.602 36.562a14.02 14.02 0 0 1-3.917-7.541 89 89 0 0 1-.5-14.896.645.645 0 0 0-1.27 0 96 96 0 0 0 0 15.25 22 22 0 0 0 1.187 4.312 18 18 0 0 0 2.375 3.521c-3.75 2.084-15.896 1.167-19.688.98-3.333-.167-4.396.478-4.979-2.084a90.2 90.2 0 0 1-.708-18.146c.356-2.287.461-4.606.312-6.916-.146-1.105-1.229-.584-1.146.25A100 100 0 0 0 7.06 25.124c-.05 4.069.208 8.135.77 12.167a3.92 3.92 0 0 0 3.188 3.083c1.179.183 2.37.273 3.563.27a91 91 0 0 0 15.27.146c3.126-.374 8.5-1.708 6.75-4.229"/>
      <path fill="#fff" d="M11.706 11.02c3.562 0 18.333.626 21.458 0 .375-.078.721-.258 1-.52a7.69 7.69 0 0 0 1.459-6.812C34.498-.022 31.018 0 27.08 0c-3.938 0-7.959.333-10.73.208-2.77-.125-6.708 0-6.874 0C6.414-.125 2.914 2 1.539 7.73a127 127 0 0 0-1.5 14.584c-.117 5.094.029 10.191.438 15.27a.729.729 0 0 0 1.396-.375 126 126 0 0 1 .895-20.437c.584-4.167.48-10.146 3.292-13.125a3.687 3.687 0 0 1 6.25.479 4.75 4.75 0 0 1-1.354 5.104c-.292.188-.75 1.771.75 1.792"/>
    </svg>
  );
}

function IconObligations({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
      <path fill="#e3ffd9" fillRule="evenodd" d="M19.257 22.032c-1.768.23-3.433.354-4.866.48-.688-2.082-.771-2.663-1.646-3.518a6.04 6.04 0 0 0-4.43-1.662c0-.167-.333-2.415-.458-3.204 4.16.666 6.494-3.14 4.973-6.863-.146-.562-.896.313 18.72-2.683 0 3.806 3.16 6.24 6.78 4.492a.626.626 0 0 0-.333-1.207 5.08 5.08 0 0 1-4.908-3.514l5.241-.813a74 74 0 0 1 2.08 8.321 5 5 0 0 0-2.705.271 3.67 3.67 0 0 0-1.54 3.265.708.708 0 0 0 1.417 0c.227-.834 2.453-1.85 3.12-2.205 0 .417.166.855.25 1.248a.625.625 0 0 0 1.202.198.63.63 0 0 0 .022-.385C40.743 4.165 40.41 1.878 39.245 1.46 37.35.774 10.335 5.892 7.88 6.244a.711.711 0 0 0 .125 1.417c4.45-.292 3.244-.667 3.41 0a5.42 5.42 0 0 1-1.497 4.159 4.17 4.17 0 0 1-2.288 1.247c-.166-1.02 0-.166-.812-3.993a7 7 0 0 0-.146-1.31.646.646 0 0 0-.873-.46c-.667.293-.417 1.188-.354 1.834.583 5.863.437 14.038 1.958 15.473 1.204 1.144 5.01 0 11.98-1.166a.71.71 0 0 0-.126-1.413" clipRule="evenodd"/>
      <path fill="#fff" fillRule="evenodd" d="M48.022 43.788a3.96 3.96 0 0 0-1.81-.333q.52-2.423.791-4.888a48 48 0 0 0-.25-7.198 2.5 2.5 0 0 0 1.767-.893c.604-.875 0-1.748-.667-2.517-10.75-9.235-13.331-11.313-17.427-9.069-4.16 2.83-8.115 5.95-11.833 9.34-1.646 1.393-1.313 1.683-.209 1.87.167 0 3.659-3.035 3.825-3.18 2.207-1.686 4.536-3.411 6.865-4.888 4.158-2.6 4.533-2.267 7.154-.459 2.621 1.809 5.7 4.453 9.423 7.613-5.096.833-6.781.563-15.1.75-3 .277-6.014.387-9.027.333-.896-.937-2.287 1.142 0 1.455q-.134.858-.167 1.727a27 27 0 0 0-.25 3.993c.015 2.267.225 4.527.625 6.759-2.08 0-4.035 0-4.43.458a19 19 0 0 0 .228 3.181c.48 1.438 2.246 1.396 3.66 1.354 10.92-.229 25.417 2.244 27.33-.5.583-.854.96-4.014-.498-4.908" clipRule="evenodd"/>
    </svg>
  );
}

function IconStatements({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 164 180" fill="none">
      <path fill="#fff" fillRule="evenodd" d="M162.128 49.275a443 443 0 0 0-4.711-42.75q-.157-.69-.675-1.2c-.51-.502 0 0 0-.45a3 3 0 0 0-4.109-.592c-2.535 1.8-6.571 5.61-10.538 8.52-3.96 2.917-1.943 4.26-14.948-8.07a37.5 37.5 0 0 0-3.659-3.368 4.88 4.88 0 0 0-4.486-.6 16.2 16.2 0 0 0-6.052 4.268c-3 3.06-5.835 7.47-8.078 9.637a82.5 82.5 0 0 0-9.337-10.537A13.35 13.35 0 0 0 84.248.098a13.73 13.73 0 0 0-6.803 3.885 108 108 0 0 0-8.377 11.062 11.94 11.94 0 0 1-3.66 3.818c-.975-1.125-1.943-2.7-2.168-2.925L47.767 2.648a2.55 2.55 0 0 0-3.51.075c-.96.96 0 .45 0 .6a2.7 2.7 0 0 0-1.5 2.317c0 17.265 0 34.53.526 51.795V91.59c0 7.103 0 14.13-.976 21.3a2.627 2.627 0 0 0 2.1 2.925 2.698 2.698 0 0 0 2.91-2.175c3-14.287 4.696-28.822 5.086-43.425 0-8.67 0-17.415-.825-26.085.15-10.987-1.343-21.6-2.46-32.887l9.412 9.57a55 55 0 0 0 3.968 4.485 4.27 4.27 0 0 0 3.435 1.05 13 13 0 0 0 6.652-3.45 72.6 72.6 0 0 0 7.478-8.588c1.942-2.175 3.66-4.41 5.827-4.71.6 0 1.125.375 1.65.75q1.74 1.2 3.21 2.76c4.335 4.41 8.445 10.388 11.062 12.488a5.85 5.85 0 0 0 6.953-.825l2.985-3.443c2.175-2.385 4.86-6.87 7.478-10.087a7.5 7.5 0 0 1 1.049-1.2q.33.563.818.975c1.275 1.05 5.902 6.877 9.345 9.72a9.37 9.37 0 0 0 5.602 2.467 16.3 16.3 0 0 0 7.846-3.667c2.85-2.243 5.685-5.003 8.227-7.47a495 495 0 0 1 2.243 37.372c0 14.048-.001 28.103-.975 42.45-.451 10.838-.901 21.9-2.243 32.745a114.7 114.7 0 0 1-4.41 20.7 32.7 32.7 0 0 1-13.755 16.89 17.178 17.178 0 0 1-19.65.6 21.3 21.3 0 0 1-6.66-8.295 54.7 54.7 0 0 1-4.335-17.04 3.003 3.003 0 0 0-3.21-2.625 2.78 2.78 0 0 0-1.725.9 53 53 0 0 1 3.818-3.585 2.92 2.92 0 0 0 .024-5.125 2.92 2.92 0 0 0-2.421-.18 2.9 2.9 0 0 0-1.046.67c-2.91 1.95-7.47 6.428-11.58 9.27l-1.95 1.35a22.5 22.5 0 0 0-3.21-2.625 150 150 0 0 0-12.33-12.255 11.25 11.25 0 0 0-7.028-2.542 12.45 12.45 0 0 0-6.427 3.367 75.6 75.6 0 0 0-8.295 10.538c-1.8-1.95-3.893-5.085-6.135-7.478a14.26 14.26 0 0 0-5.677-3.735 4.87 4.87 0 0 0-4.11.6 30 30 0 0 0-3.293 3.06L19.29 138l-1.35-.75-13.897-10.087a2.4 2.4 0 0 0-3.068.45H.6a2.47 2.47 0 0 0-.6 1.425l.825 20.55a31.35 31.35 0 0 0 14.955 24.45 45.53 45.53 0 0 0 27.652 5.67c4.11-.375 11.888-.525 21-.825 9.12-.293 21.9-1.043 32.146-1.71a293 293 0 0 0 35.729-5.16 42 42 0 0 0 24.068-23.475 111 111 0 0 0 5.228-22.425 298 298 0 0 0 2.099-33.63c.15-14.723-.524-28.935-1.574-43.208" clipRule="evenodd"/>
      <path fill="#0c6fff" fillRule="evenodd" d="M80.738 38.745q-3.9-.84-7.853-1.275h-3.442a18 18 0 0 0-3.51 0 39.8 39.8 0 0 0-7.478 3.142 2.618 2.618 0 0 0 .75 5.003c2.618 0 4.935.825 7.478 1.05h3.135l3.217-.375 7.47-1.725a2.85 2.85 0 0 0 2.993-2.835 3 3 0 0 0-2.768-2.985m-7.47 16.44a25.5 25.5 0 0 0-4.185 0q-5.025 1.215-9.87 2.992a2.55 2.55 0 1 0 .375 5.078c3.285.525 6.278 1.275 9.645 1.65q1.98.112 3.96 0a23.6 23.6 0 0 0 4.035 0c3.285-.45 6.353-1.125 9.57-1.725a2.917 2.917 0 1 0 0-5.752c-3.217-.675-6.352-1.35-9.645-1.725a38 38 0 0 0-3.885-.518" clipRule="evenodd"/>
      <path stroke="#0c6fff" strokeLinecap="round" strokeWidth="6" d="M115.464 106.178c-.001-.029-.003-.059-.144-7.724s-.423-22.965-.496-31.4c-.082-9.544.466-11.534 1.069-13.167.591-1.602 1.846-2.566 3.137-3.288 1.541-.862 3.624-.876 5.572-.74.909.063 1.614.58 2.21 1.245 1.247 1.392 1.609 4.874 1.552 8.996-.075 5.364-4.194 7.789-6.833 9.728-3.639 1.954-13.51 3.999-20.516 5.39M101.586 89.216l41.76-6.853"/>
    </svg>
  );
}

function IconOPiU({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 196" fill="none">
      <path fill="#0c6fff" d="M199.853 20.378a2.84 2.84 0 0 0-2.57-1.85 2.8 2.8 0 0 0-1.097.184 7.5 7.5 0 0 0-2.583 1.583c-1.167 1-2.417 2.5-3.167 3.167l-13.501 12.417c-5 5.008-10.092 10.092-14.675 15.517-4.584 5.417-8.834 11.167-13.168 16.668-3.008 4.25-6.008 8.833-9.508 13a55 55 0 0 1-7.167 7.426 2.53 2.53 0 0 0-1.011 1.63 2.5 2.5 0 0 0 3.927 2.453 65.7 65.7 0 0 0 8.917-7.167c4.084-3.834 7.834-8.334 11.501-12s5.667-6.25 8.334-9.5c2.666-3.26 7.592-9.01 11.342-13.518l7.75-8.917 11.509-13.5 3.333-3.834a3 3 0 0 0 1.676-1.504c.342-.7.399-1.514.158-2.255"/>
      <path fill="#fff" d="M22.697 76.653c2-2.25 4.083-4.5 6-6.833 3.333-3.917 6.508-8.342 10.009-12.093a61.4 61.4 0 0 1 7.166-6.75 30 30 0 0 1 3.917-2.75 29 29 0 0 1 4.417-2.083 21.75 21.75 0 0 1 22.935 4.166c10.5 8.334 18.25 23.918 25.592 34.01l11.251 15.168 13.425 16.675a110 110 0 0 0 31.852 28.268 21.92 21.92 0 0 0 28.418-6.334 2.916 2.916 0 0 0-4.417-3.75 16.08 16.08 0 0 1-21.085 4.001 101.7 101.7 0 0 1-28.351-27.518l-12.5-16.668-10.834-15.425c-7.759-10.75-16.092-26.843-27.435-35.852a29.67 29.67 0 0 0-31.926-4.667 30 30 0 0 0-5.584 2.917 43 43 0 0 0-5 3.667 65 65 0 0 0-7.758 8.334c-3.334 4.166-6.334 8.341-9.5 12.758l-.834 1c-12.592 13.251-3.417 13.918.25 9.75"/>
      <path fill="#fff" d="M195.686 185.359c-9.333-.417-19.667-.917-29.926-1.25h-20.009c-20.509 0-40.935-1.417-61.361-1.75-8.834 0-17.75 0-26.676.75l-38.268 2.083H9.862c-1.167 0 2.333-17.584 1.833-45.01 0 0-2.833-61.278-2.75-64.361 0-8.334.5-16.676.5-25.01V34.137c-.75-7.5-2.167-15-2.417-22.343a39.2 39.2 0 0 1 .417-8.834A2.5 2.5 0 0 0 5.362.043a2.5 2.5 0 0 0-2.917 2 58.3 58.3 0 0 0-.75 9.917c0 7.333 1.25 14.917 1.416 22v16.685c0 8.333-.916 16.667-1.416 25-1.417 21.852.916 43.528.75 65.362 0 26.768-2.75 44.185-2.417 46.027a9.17 9.17 0 0 0 1.917 4.167 11.23 11.23 0 0 0 6.667 3.5c3.792.467 7.625.467 11.417 0l38.518-2.583c8.334-.834 17.25-1.167 25.843-1.251 20.509 0 40.935.751 61.528 0h19.75c10.176 0 20.518.417 29.768.584a2.915 2.915 0 0 0 2.426-2.875 2.919 2.919 0 0 0-2.426-2.875z"/>
    </svg>
  );
}

// ─── Node config ───────────────────────────────────────────────────────────

interface Node {
  id: string;
  label: string;
  color: string;
  angle: number;   // degrees, 0 = top
  radius: number;  // fraction of min(W,H)/2
  icon: React.ReactNode;
}

const NODES: Node[] = [
  { id: "telegram",     label: "Telegram-бот",     color: "#0c6fff", angle: 200, radius: 0.38, icon: <IconTelegram size={32} /> },
  { id: "transactions", label: "Транзакции",        color: "#2dd4ab", angle: 260, radius: 0.38, icon: <IconTransactions size={28} /> },
  { id: "statements",   label: "Выписки",           color: "#0c6fff", angle: 310, radius: 0.38, icon: <IconStatements size={24} /> },
  { id: "obligations",  label: "Обязательства",     color: "#f59e0b", angle: 140, radius: 0.38, icon: <IconObligations size={28} /> },
  { id: "opiu",         label: "ОПиУ",              color: "#0c6fff", angle:  90, radius: 0.34, icon: <IconOPiU size={28} /> },
];

const DASHBOARD_VALUES = [
  { label: "Выручка",   value: "4 894 125 ₽", color: "#16a34a" },
  { label: "Расходы",   value: "−2 047 178 ₽", color: "#dc2626" },
  { label: "Маржа",     value: "58.2%",          color: "#0c6fff" },
  { label: "Прибыль",   value: "2 307 676 ₽",   color: "#16a34a" },
];

// ─── Main component ────────────────────────────────────────────────────────

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const tlRef        = useRef<gsap.core.Timeline | null>(null);

  // ── Canvas particle system ──────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx    = canvas.getContext("2d")!;
    let raf: number;

    type Particle = {
      x: number; y: number;
      tx: number; ty: number;
      sx: number; sy: number;
      progress: number;
      speed: number;
      color: string;
      size: number;
      trail: { x: number; y: number }[];
      done: boolean;
    };

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;
    const cx = () => W() / 2;
    const cy = () => H() / 2;

    function nodePos(n: Node) {
      const r   = Math.min(W(), H()) * n.radius;
      const rad = ((n.angle - 90) * Math.PI) / 180;
      return { x: cx() + r * Math.cos(rad), y: cy() + r * Math.sin(rad) };
    }

    function hexToRgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function spawnBurst(node: Node, count = 10) {
      const p = nodePos(node);
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          particles.push({
            x: p.x, y: p.y,
            sx: p.x, sy: p.y,
            tx: cx(), ty: cy(),
            progress: 0,
            speed: 0.013 + Math.random() * 0.007,
            color: node.color,
            size: 2.5 + Math.random() * 2,
            trail: [],
            done: false,
          });
        }, i * 80);
      }
    }

    // Expose to GSAP timeline via window
    (window as any).__heroSpawnBurst = spawnBurst;
    (window as any).__heroNodes      = NODES;
    (window as any).__heroNodePos    = nodePos;

    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

    function draw() {
      ctx.clearRect(0, 0, W(), H());

      // faint connector lines
      NODES.forEach(n => {
        const p = nodePos(n);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(cx(), cy());
        ctx.strokeStyle = "rgba(12,111,255,0.06)";
        ctx.lineWidth   = 1;
        ctx.stroke();
      });

      // particles
      particles = particles.filter(p => !p.done);
      particles.forEach(p => {
        p.progress = Math.min(1, p.progress + p.speed);
        const t    = p.progress;
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 14) p.trail.shift();

        p.x = lerp(p.sx, p.tx, ease);
        p.y = lerp(p.sy, p.ty, ease);

        if (p.progress >= 1) { p.done = true; return; }

        p.trail.forEach((pt, i) => {
          const a = (i / p.trail.length) * 0.3 * (1 - t);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size * (i / p.trail.length) * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = hexToRgba(p.color, a);
          ctx.fill();
        });

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(p.color, 0.85 - t * 0.3);
        ctx.shadowColor = p.color;
        ctx.shadowBlur  = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      delete (window as any).__heroSpawnBurst;
    };
  }, []);

  // ── GSAP Timeline ──────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current!;

    const nodeEls   = NODES.map(n => container.querySelector(`#node-${n.id}`)!);
    const dashEl    = container.querySelector("#dashboard")!;
    const opiuEl    = container.querySelector("#opiu-card")!;
    const valueEls  = container.querySelectorAll(".dash-value");
    const telegramEl = container.querySelector("#telegram-plane")!;

    // Set initial states
    gsap.set(nodeEls, { opacity: 0, scale: 0.6 });
    gsap.set(dashEl,  { opacity: 0, scale: 0.85 });
    gsap.set(opiuEl,  { opacity: 0, x: 60 });
    gsap.set(valueEls, { opacity: 0, y: 8 });
    gsap.set(telegramEl, { opacity: 0 });

    const buildTimeline = () => {
      if (tlRef.current) tlRef.current.kill();

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
      tlRef.current = tl;

      // 1. Nodes appear with stagger
      tl.to(nodeEls, {
        opacity: 1, scale: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
        stagger: 0.18,
      });

      // 2. Telegram plane flies in (arc path via motionPath)
      tl.to(telegramEl, { opacity: 1, duration: 0.2 }, "-=0.3");
      tl.to(telegramEl, {
        duration: 1.2,
        ease: "power2.inOut",
        motionPath: {
          path: [
            { x: 0,    y: 0 },
            { x: 60,   y: -50 },
            { x: 100,  y: -20 },
            { x: 140,  y: 30 },
          ],
          type: "cubic",
        },
      }, "-=0.1");
      tl.to(telegramEl, { opacity: 0, scale: 0.5, duration: 0.25, ease: "power2.in" }, "+=0.0");

      // 3. Burst particles from each node
      NODES.forEach((node, i) => {
        tl.add(() => {
          const spawn = (window as any).__heroSpawnBurst;
          if (spawn) spawn(node, 10);

          // Pulse the node icon
          const el = container.querySelector(`#node-${node.id}`);
          if (el) {
            gsap.to(el, { scale: 1.15, duration: 0.15, yoyo: true, repeat: 1, ease: "power2.inOut" });
          }
        }, i * 0.35);
      });

      // 4. Dashboard appears
      const dashDelay = NODES.length * 0.35 + 0.6;
      tl.to(dashEl, {
        opacity: 1, scale: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
      }, dashDelay);

      // 5. Dashboard values count up one by one
      valueEls.forEach((el, i) => {
        tl.to(el, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, dashDelay + 0.4 + i * 0.25);
      });

      // 6. Dashboard pulse ring
      tl.add(() => {
        const ring = container.querySelector("#dash-ring");
        if (ring) {
          gsap.fromTo(ring,
            { scale: 0.8, opacity: 0.7 },
            { scale: 1.3, opacity: 0, duration: 0.9, ease: "power2.out" }
          );
        }
      }, dashDelay + 0.2);

      // 7. OPiU card slides out
      tl.to(opiuEl, {
        opacity: 1, x: 0,
        duration: 0.55,
        ease: "power3.out",
      }, dashDelay + 1.4);

      // 8. Fade everything out before loop
      tl.to([...nodeEls, dashEl, opiuEl, telegramEl], {
        opacity: 0, y: -10,
        duration: 0.7,
        stagger: 0.06,
        ease: "power2.in",
      }, "+=2");

      tl.set([...nodeEls, dashEl, opiuEl], {
        y: 0, scale: 1,
        opacity: 0,
      });
      tl.set(valueEls, { opacity: 0, y: 8 });

      return tl;
    };

    const timer = setTimeout(buildTimeline, 300);
    return () => {
      clearTimeout(timer);
      tlRef.current?.kill();
    };
  }, []);

  // ── Layout helpers ─────────────────────────────────────────────────────
  function nodeStyle(n: Node): React.CSSProperties {
    const rad = ((n.angle - 90) * Math.PI) / 180;
    // Use % to be responsive
    const r   = 38;
    const lx  = 50 + r * Math.cos(rad);
    const ly  = 50 + r * Math.sin(rad);
    return {
      position:  "absolute",
      left:      `${lx}%`,
      top:       `${ly}%`,
      transform: "translate(-50%, -50%)",
    };
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: 480, background: "#f8fafc" }}
    >
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Satellite nodes */}
      {NODES.map(n => (
        <div
          key={n.id}
          id={`node-${n.id}`}
          style={nodeStyle(n)}
          className="flex flex-col items-center gap-1.5"
        >
          <div
            className="flex items-center justify-center rounded-2xl p-2.5 bg-white"
            style={{
              border: `1.5px solid ${n.color}22`,
              boxShadow: `0 2px 12px ${n.color}18`,
              width: 56,
              height: 56,
            }}
          >
            {n.icon}
          </div>
          <span className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
            {n.label}
          </span>
        </div>
      ))}

      {/* Telegram plane (floats near telegram node) */}
      <div
        id="telegram-plane"
        style={{
          position: "absolute",
          left: "18%",
          top:  "58%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      >
        <div className="bg-[#0c6fff] rounded-xl p-2 shadow-lg shadow-blue-200">
          <IconTelegram size={22} />
        </div>
      </div>

      {/* Dashboard — center */}
      <div
        id="dashboard"
        style={{
          position: "absolute",
          left: "50%",
          top:  "50%",
          transform: "translate(-50%, -50%)",
          width: 200,
        }}
      >
        {/* Pulse ring */}
        <div
          id="dash-ring"
          style={{
            position: "absolute",
            inset: -16,
            borderRadius: 24,
            border: "1.5px solid #0c6fff33",
            pointerEvents: "none",
          }}
        />

        <div
          className="bg-white rounded-2xl p-4"
          style={{
            border: "1.5px solid #e2e8f0",
            boxShadow: "0 4px 32px rgba(12,111,255,0.10)",
          }}
        >
          {/* Dashboard header */}
          <div className="flex items-center gap-2 mb-3">
            <IconDashboard size={20} />
            <span className="text-[11px] font-semibold text-slate-700 tracking-wide">
              ДАШБОРД
            </span>
            <span className="ml-auto text-[10px] text-slate-400">МАР 2026</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-slate-100 mb-3" />

          {/* Values */}
          {DASHBOARD_VALUES.map((v, i) => (
            <div
              key={v.label}
              className="dash-value flex justify-between items-center py-1"
              style={{ borderBottom: i < DASHBOARD_VALUES.length - 1 ? "1px solid #f1f5f9" : "none" }}
            >
              <span className="text-[11px] text-slate-500">{v.label}</span>
              <span className="text-[11px] font-semibold" style={{ color: v.color }}>
                {v.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* OPiU card — exits right from dashboard */}
      <div
        id="opiu-card"
        style={{
          position: "absolute",
          right: "5%",
          top:   "50%",
          transform: "translateY(-50%)",
          width: 148,
        }}
      >
        <div
          className="bg-white rounded-2xl p-3.5"
          style={{
            border: "1.5px solid #0c6fff22",
            boxShadow: "0 4px 24px rgba(12,111,255,0.12)",
          }}
        >
          <div className="flex items-center gap-1.5 mb-2">
            <IconOPiU size={18} />
            <span className="text-[10px] font-semibold text-blue-600 tracking-wide">ОПиУ</span>
          </div>
          <div className="text-[13px] font-bold text-slate-800">2 307 676 ₽</div>
          <div className="text-[10px] text-slate-400 mt-0.5">чистая прибыль</div>
          <div
            className="mt-2 text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block"
            style={{ background: "#dcfce7", color: "#16a34a" }}
          >
            47.2%
          </div>
        </div>
      </div>
    </div>
  );
}
